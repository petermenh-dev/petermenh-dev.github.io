// src/theme/types.ts
import { Theme } from '@mui/material/styles';

export interface CustomTheme extends Theme {
  customBorderRadius: {
    none: string;
    slightlyRound: string;
    semiRound: string;
    rounded: string;
    veryRound: string;
  };
}

// Type guard to check if theme has custom properties
export const isCustomTheme = (theme: Theme): theme is CustomTheme => {
  return 'customBorderRadius' in theme;
};