/**
 * Theme barrel — re-exports everything needed by the rest of the app.
 * The static `theme` constant is replaced by the runtime buildTheme() builder;
 * see ThemeCustomizationProvider for how it is wired.
 */

export type { ThemeSettings } from './customization';
export {
  AVAILABLE_FONTS,
  DEFAULT_SETTINGS,
  DARK_MODE_DEFAULTS,
  LIGHT_MODE_DEFAULTS,
} from './customization';
export { buildTheme } from './buildTheme';
export {
  ThemeCustomizationProvider,
  useThemeCustomization,
} from './ThemeCustomizationProvider';

// ---------------------------------------------------------------------------
// Legacy module augmentation kept here so component style files that import
// from '../../theme' still see the CustomTheme typings at compile time.
// ---------------------------------------------------------------------------
import { createTheme } from '@mui/material/styles';

// Extend the Theme interface to include your custom properties
declare module '@mui/material/styles' {
  interface Theme {
    customBorderRadius: {
      none: string;
      slightlyRound: string;
      semiRound: string;
      rounded: string;
      veryRound: string;
    };
  }
  
  interface ThemeOptions {
    customBorderRadius?: {
      none?: string;
      slightlyRound?: string;
      semiRound?: string;
      rounded?: string;
      veryRound?: string;
    };
  }
}

const customBorderRadius = {
  none: '0px',
  slightlyRound: '4px',
  semiRound: '8px',
  rounded: '16px',
  veryRound: '40px',
};

const accentGreen = '#3fc443';
const accentGreenDark = '#2e8e31';
const surfaceLight = '#ffffff';
const surfaceDark = '#101311';
const outlineDark = '#111111';
const outlineLight = '#f5f7f4';

export const theme = createTheme({
  palette: {
    primary: {
      main: accentGreen,
      dark: accentGreenDark,
      contrastText: '#091109',
    },
    secondary: {
      main: surfaceDark,
      contrastText: surfaceLight,
    },
    text: {
      primary: '#101311',
      secondary: '#36503a',
    },
    background: {
      default: '#f4fff2',
      paper: surfaceLight,
    },
    divider: outlineDark,
  },
  typography: {
    fontFamily: '"Arial", Helvetica, sans-serif',
    fontSize: 16,
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  spacing: 8, // Base unit (8px)
  shape: {
    borderRadius: 8, // Default border radius
  },
  customBorderRadius,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f4fff2;
          color: #101311;
          line-height: 1.6;
          min-width: 320px;
          min-height: 100vh;
          overflow-y: scroll;
        }
        a {
          color: #1f6b35;
          text-decoration: none;
        }
        a:hover {
          color: #2d9449;
        }
        img {
          max-width: 100%;
          display: block;
        }
        h1, h2, h3, h4, h5, h6 {
          font-weight: 600;
          line-height: 1.2;
        }
        h1 {
          font-size: 3.2em;
          line-height: 1.1;
        }
        .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }
      `,
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: surfaceDark,
          color: surfaceLight,
          borderBottom: `2px solid ${outlineLight}`,
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: surfaceLight,
          border: `2px solid ${outlineDark}`,
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: surfaceLight,
          border: `2px solid ${outlineDark}`,
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderWidth: 2,
          borderStyle: 'solid',
          borderRadius: 8,
          padding: '0.6em 1.2em',
          fontSize: '1em',
          fontWeight: 500,
          fontFamily: 'inherit',
          cursor: 'pointer',
          transition: 'background-color 0.25s, border-color 0.25s, color 0.25s',
          boxShadow: 'none',
          textTransform: 'none',
          '&:focus, &:focus-visible': {
            outline: '3px solid #7dff81',
            outlineOffset: 2,
          },
          '&:hover': {
            boxShadow: 'none',
            borderColor: '#3fa85a',
          },
        },
        containedPrimary: {
          backgroundColor: accentGreen,
          borderColor: outlineDark,
          color: '#091109',
          '&:hover': {
            backgroundColor: '#6af06f',
          },
        },
        containedSecondary: {
          backgroundColor: surfaceDark,
          borderColor: surfaceLight,
          color: surfaceLight,
          '&:hover': {
            backgroundColor: '#1a1f1b',
          },
        },
        outlinedPrimary: {
          backgroundColor: surfaceLight,
          borderColor: outlineDark,
          color: outlineDark,
          '&:hover': {
            backgroundColor: '#efffe9',
            borderColor: outlineDark,
          },
        },
        outlinedSecondary: {
          backgroundColor: surfaceDark,
          borderColor: surfaceLight,
          color: surfaceLight,
          '&:hover': {
            backgroundColor: '#1a1f1b',
            borderColor: surfaceLight,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          border: `1px solid ${outlineDark}`,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: surfaceLight,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: outlineDark,
            borderWidth: 2,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: accentGreenDark,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: accentGreen,
          },
        },
      },
    },
  },
});