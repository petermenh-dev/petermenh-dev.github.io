import { styled } from '@mui/material/styles';
import MuiIconButton from '@mui/material/IconButton';
import { IconButtonProps } from './IconButton.types';

const colorMap = {
  primary: (theme: any) => theme.palette.primary.main,
  secondary: (theme: any) => theme.palette.secondary.main,
  muted: (theme: any) => theme.palette.text.secondary,
};

export const StyledIconButton = styled(MuiIconButton, {
  shouldForwardProp: (prop) => !['colorVariant', 'sizeVariant'].includes(prop as string),
})<IconButtonProps>(({ theme, colorVariant = 'primary' }) => ({
  color: colorMap[colorVariant]?.(theme) ?? theme.palette.text.primary,
}));