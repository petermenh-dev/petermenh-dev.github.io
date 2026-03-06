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

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#222222',
    },
    background: {
      default: '#ffffff',
      paper: '#f7f7f7',
    },
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
});