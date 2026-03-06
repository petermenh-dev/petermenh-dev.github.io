import { BoxProps as MuiBoxProps } from '@mui/material/Box';

export interface BoxProps extends MuiBoxProps {
  maxWidthPreset?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  paddingPreset?: 'none' | 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}