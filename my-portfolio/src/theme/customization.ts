/**
 * Runtime theme customization settings: types, defaults, and named option lists.
 * All live theme changes flow through ThemeSettings.
 */

/** All editable theme settings available in the Theme Customizer sidebar. */
export interface ThemeSettings {
  /** MUI palette mode — determines light or dark baseline surfaces */
  mode: 'light' | 'dark';
  /** Primary accent color (hex) */
  primaryColor: string;
  /** Page background color (hex) */
  backgroundColor: string;
  /** Primary text color (hex) */
  textColor: string;
  /**
   * Border radius scale factor.
   * 0 = no rounding, 1 = default, 2 = rounder, 3 = very round.
   */
  borderRadiusScale: number;
  /** Font family name (from AVAILABLE_FONTS) */
  fontFamily: string;
  /** Base font size in px (12–20) */
  baseFontSize: number;
  /** MUI spacing base unit in px — affects all margin/padding/gap tokens */
  spacingScale: number;
  /** Applies a CSS color-inversion filter on top of the current palette */
  invertColors: boolean;
  /** Text color used on all buttons */
  buttonTextColor: string;
}

/** Default settings matching the current portfolio light-mode theme. */
export const DEFAULT_SETTINGS: ThemeSettings = {
  mode: 'light',
  primaryColor: '#3fc443',
  backgroundColor: '#f4fff2',
  textColor: '#101311',
  borderRadiusScale: 1,
  fontFamily: 'Arial',
  baseFontSize: 16,
  spacingScale: 8,
  invertColors: false,
  buttonTextColor: '#091109',
};

/**
 * Background and text defaults applied automatically when switching to dark mode.
 * Resets any manual color overrides so the user starts from a sensible dark baseline.
 */
export const DARK_MODE_DEFAULTS: Pick<ThemeSettings, 'backgroundColor' | 'textColor' | 'buttonTextColor'> = {
  backgroundColor: '#101311',
  textColor: '#f4fff2',
  buttonTextColor: '#f4fff2',
};

/**
 * Background and text defaults applied automatically when switching back to light mode.
 */
export const LIGHT_MODE_DEFAULTS: Pick<ThemeSettings, 'backgroundColor' | 'textColor' | 'buttonTextColor'> = {
  backgroundColor: '#f4fff2',
  textColor: '#101311',
  buttonTextColor: '#091109',
};

/** Curated list of font families available in the Theme Customizer. */
export const AVAILABLE_FONTS: string[] = [
  'Arial',
  'Georgia',
  'Verdana',
  'Trebuchet MS',
  'Courier New',
];
