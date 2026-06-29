import { DividerProps as MuiDividerProps } from '@mui/material/Divider';

export interface DividerProps extends MuiDividerProps {
  spacing?: 'none' | 'small' | 'medium' | 'large';
}
