import type { ComponentProps, ReactNode } from 'react';
import MuiTypography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';

type MuiTypographyProps = ComponentProps<typeof MuiTypography>;

export interface TypographyProps extends MuiTypographyProps {
  colorVariant?: 'primary' | 'secondary' | 'muted';
  fontWeight?: 'regular' | 'medium' | 'bold';
  children?: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'inherit';
  gutterBottom?: boolean;
  sx?: SxProps<Theme>;
}