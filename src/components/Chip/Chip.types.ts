import { ChipProps as MuiChipProps } from '@mui/material/Chip';

export interface ChipProps extends MuiChipProps {
  colorVariant?: 'primary' | 'secondary' | 'muted';
  sizeVariant?: 'small' | 'medium';
  // Add more custom props as needed
}