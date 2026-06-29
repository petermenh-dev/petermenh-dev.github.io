import { styled } from '@mui/material/styles';
import MuiTypography from '@mui/material/Typography';
import { TypographyProps } from './Typography.types';

const colorMap = {
  primary: (theme: any) => theme.palette.primary.main,
  secondary: (theme: any) => theme.palette.secondary.main,
  muted: (theme: any) => theme.palette.text.secondary,
};

const fontWeightMap = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const StyledTypography = styled(MuiTypography, {
  shouldForwardProp: (prop) => !['colorVariant', 'fontWeight'].includes(prop as string),
})<TypographyProps>(({ theme, colorVariant = 'primary', fontWeight = 'regular' }) => ({
  color: colorMap[colorVariant]?.(theme) ?? theme.palette.text.primary,
  fontWeight: fontWeightMap[fontWeight] ?? theme.typography.fontWeightRegular,
}));