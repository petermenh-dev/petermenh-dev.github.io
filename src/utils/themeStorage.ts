/**
 * Handles persisting theme customization settings in localStorage.
 * Settings expire automatically after 24 hours.
 */

import type { ThemeSettings } from '../theme/customization';

const STORAGE_KEY = 'portfolioThemeSettings';
const TTL_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

interface StoredPayload {
  settings: ThemeSettings;
  expiresAt: number;
}

/** Saves theme settings to localStorage with a 24-hour expiry timestamp. */
export function saveThemeSettings(settings: ThemeSettings): void {
  const payload: StoredPayload = {
    settings,
    expiresAt: Date.now() + TTL_MS,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // localStorage may be unavailable (e.g. private browsing with storage blocked)
  }
}

/**
 * Reads saved theme settings from localStorage.
 * Returns null if nothing is saved, data is corrupt, or the 24-hour TTL has expired.
 */
export function loadThemeSettings(): ThemeSettings | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const payload: StoredPayload = JSON.parse(raw);

    if (Date.now() > payload.expiresAt) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return payload.settings;
  } catch {
    return null;
  }
}

/** Removes saved theme settings from localStorage immediately. */
export function clearThemeSettings(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // localStorage may be unavailable
  }
}
