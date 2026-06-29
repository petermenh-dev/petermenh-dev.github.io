/**
 * Builds a complete MUI theme from runtime customization settings.
 * Called whenever settings change; the result is passed to ThemeProvider.
 */

import { createTheme } from '@mui/material/styles';
import type { ThemeSettings } from './customization';

// Extend MUI theme types to include our custom border radius tokens.
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

/**
 * Derives a full MUI theme object from user-controlled settings.
 * All color, radius, typography, and spacing tokens come from settings.
 */
export function buildTheme(settings: ThemeSettings) {
  const {
    mode,
    primaryColor,
    backgroundColor,
    textColor,
    borderRadiusScale,
    fontFamily,
    baseFontSize,
    spacingScale,
    invertColors,
    buttonTextColor,
  } = settings;

  const isDark = mode === 'dark';

  // Surface and outline colors derived from palette mode
  const surfaceColor = isDark ? '#1a1f1b' : '#ffffff';
  const outlineColor = isDark ? '#f5f7f4' : '#111111';
  const secondaryMain = isDark ? '#f4fff2' : '#101311';
  const secondaryContrast = isDark ? '#101311' : '#f4fff2';

  // Border radius values scaled by the user's factor
  const baseRadius = Math.round(borderRadiusScale * 8);
  const customBorderRadius = {
    none: '0px',
    slightlyRound: `${Math.round(borderRadiusScale * 4)}px`,
    semiRound: `${Math.round(borderRadiusScale * 8)}px`,
    rounded: `${Math.round(borderRadiusScale * 16)}px`,
    veryRound: `${Math.round(borderRadiusScale * 40)}px`,
  };

  // The CSS filter for the invert-colors feature; hue-rotate keeps skin tones bearable
  const bodyFilter = invertColors ? 'invert(1) hue-rotate(180deg)' : 'none';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: primaryColor,
        contrastText: isDark ? '#ffffff' : '#091109',
      },
      secondary: {
        main: secondaryMain,
        contrastText: secondaryContrast,
      },
      text: {
        primary: textColor,
        secondary: isDark ? '#a0c4a8' : '#36503a',
      },
      background: {
        default: backgroundColor,
        paper: surfaceColor,
      },
      divider: outlineColor,
    },
    typography: {
      fontFamily: `"${fontFamily}", Helvetica, sans-serif`,
      fontSize: baseFontSize,
      h1: { fontWeight: 600 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 },
    },
    spacing: spacingScale,
    shape: {
      borderRadius: baseRadius,
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
            font-family: "${fontFamily}", Helvetica, sans-serif;
            background-color: ${backgroundColor};
            color: ${textColor};
            line-height: 1.6;
            min-width: 320px;
            min-height: 100vh;
            overflow-y: scroll;
            filter: ${bodyFilter};
          }
          a {
            color: ${primaryColor};
            text-decoration: none;
          }
          a:hover {
            opacity: 0.8;
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
            backgroundColor: isDark ? '#1a1f1b' : '#101311',
            color: isDark ? textColor : '#f4fff2',
            borderBottom: `2px solid ${outlineColor}`,
            boxShadow: 'none',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: surfaceColor,
            border: `2px solid ${outlineColor}`,
            boxShadow: 'none',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: surfaceColor,
            border: `2px solid ${outlineColor}`,
            boxShadow: 'none',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderWidth: 2,
            borderStyle: 'solid',
            borderRadius: baseRadius,
            padding: '0.6em 1.2em',
            fontSize: '1em',
            fontWeight: 500,
            fontFamily: 'inherit',
            cursor: 'pointer',
            transition: 'background-color 0.25s, border-color 0.25s, color 0.25s',
            boxShadow: 'none',
            textTransform: 'none' as const,
            '&:focus, &:focus-visible': {
              outline: `3px solid ${primaryColor}`,
              outlineOffset: 2,
            },
            '&:hover': {
              boxShadow: 'none',
            },
          },
          containedPrimary: {
            backgroundColor: primaryColor,
            borderColor: outlineColor,
            color: buttonTextColor,
          },
          containedSecondary: {
            backgroundColor: secondaryMain,
            borderColor: isDark ? outlineColor : surfaceColor,
            color: buttonTextColor,
          },
          outlinedPrimary: {
            backgroundColor: surfaceColor,
            borderColor: outlineColor,
            color: buttonTextColor,
          },
          outlinedSecondary: {
            backgroundColor: secondaryMain,
            borderColor: isDark ? outlineColor : surfaceColor,
            color: buttonTextColor,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            border: `1px solid ${outlineColor}`,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: surfaceColor,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: outlineColor,
              borderWidth: 2,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: primaryColor,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: primaryColor,
            },
          },
        },
      },
    },
  });
}
