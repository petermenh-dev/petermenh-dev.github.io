import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

export interface TypographyProps extends MuiTypographyProps {
  colorVariant?: 'primary' | 'secondary' | 'muted';
  fontWeight?: 'regular' | 'medium' | 'bold';
  children?: React.ReactNode;
}