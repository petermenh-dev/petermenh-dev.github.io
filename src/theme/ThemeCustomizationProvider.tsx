/**
 * Provides live theme customization state to the entire app.
 * Wraps MUI's ThemeProvider so the whole app re-renders when settings change.
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import type { ThemeSettings } from './customization';
import {
  DEFAULT_SETTINGS,
  DARK_MODE_DEFAULTS,
  LIGHT_MODE_DEFAULTS,
} from './customization';
import { buildTheme } from './buildTheme';
import {
  clearThemeSettings,
  loadThemeSettings,
  saveThemeSettings,
} from '../utils/themeStorage';

// ─── Context ────────────────────────────────────────────────────────────────

export interface ThemeCustomizationContextValue {
  settings: ThemeSettings;
  /** Update a single setting by key. Switching mode also resets background/text colors. */
  updateSetting: <K extends keyof ThemeSettings>(key: K, value: ThemeSettings[K]) => void;
  /** Restore all settings to defaults and clear persisted storage. */
  resetSettings: () => void;
}

const ThemeCustomizationContext =
  createContext<ThemeCustomizationContextValue | null>(null);

// ─── Hook ────────────────────────────────────────────────────────────────────

/** Access theme customization state and actions from any component in the tree. */
export function useThemeCustomization(): ThemeCustomizationContextValue {
  const ctx = useContext(ThemeCustomizationContext);
  if (!ctx) {
    throw new Error(
      'useThemeCustomization must be used inside ThemeCustomizationProvider',
    );
  }
  return ctx;
}

// ─── Provider ────────────────────────────────────────────────────────────────

interface ThemeCustomizationProviderProps {
  children: React.ReactNode;
}

/**
 * Manages runtime theme settings, builds the MUI theme from them, and
 * passes it to ThemeProvider so the whole app updates instantly on change.
 *
 * Place this at the app root in place of the original static ThemeProvider.
 */
export function ThemeCustomizationProvider({
  children,
}: ThemeCustomizationProviderProps) {
  // Hydrate from localStorage on first render; fall back to defaults.
  const [settings, setSettings] = useState<ThemeSettings>(
    () => loadThemeSettings() ?? DEFAULT_SETTINGS,
  );

  // Persist on every settings change.
  useEffect(() => {
    saveThemeSettings(settings);
  }, [settings]);

  /**
   * Update one setting at a time.
   * When the palette mode changes, background and text colors are reset to
   * sensible defaults for the new mode so the user starts from a clean slate.
   */
  const updateSetting = useCallback(
    <K extends keyof ThemeSettings>(key: K, value: ThemeSettings[K]) => {
      setSettings(prev => {
        const updated = { ...prev, [key]: value };
        if (key === 'mode') {
          const modeDefaults =
            value === 'dark' ? DARK_MODE_DEFAULTS : LIGHT_MODE_DEFAULTS;
          return { ...updated, ...modeDefaults };
        }
        return updated;
      });
    },
    [],
  );

  /** Reset to defaults and wipe storage so the next load starts fresh. */
  const resetSettings = useCallback(() => {
    clearThemeSettings();
    setSettings(DEFAULT_SETTINGS);
  }, []);

  // Rebuild the MUI theme only when settings actually change.
  const theme = useMemo(() => buildTheme(settings), [settings]);

  const contextValue = useMemo(
    () => ({ settings, updateSetting, resetSettings }),
    [settings, updateSetting, resetSettings],
  );

  return (
    <ThemeCustomizationContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeCustomizationContext.Provider>
  );
}
