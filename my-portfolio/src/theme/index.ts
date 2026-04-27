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
      styleOverrides: {
        body: {
          backgroundColor: '#f4fff2',
          color: '#101311',
        },
      },
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
          boxShadow: 'none',
          textTransform: 'none',
          '&:hover': {
            boxShadow: 'none',
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