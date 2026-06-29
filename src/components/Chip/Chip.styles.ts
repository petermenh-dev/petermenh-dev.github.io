import { styled } from '@mui/material/styles';
import MuiChip from '@mui/material/Chip';
import { ChipProps } from './Chip.types';

const colorMap = {
  primary: (theme: any) => theme.palette.primary.main,
  secondary: (theme: any) => theme.palette.secondary.main,
  muted: (theme: any) => theme.palette.text.secondary,
};

export const StyledChip = styled(MuiChip, {
  shouldForwardProp: (prop) => !['colorVariant', 'sizeVariant'].includes(prop as string),
})<ChipProps>(({ theme, colorVariant = 'primary' }) => ({
  color: colorMap[colorVariant]?.(theme) ?? theme.palette.text.primary,
}));