import { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';

export interface IconButtonProps extends MuiIconButtonProps {
  colorVariant?: 'primary' | 'secondary' | 'muted';
  sizeVariant?: 'small' | 'medium' | 'large';
  // Add more custom props as needed
}