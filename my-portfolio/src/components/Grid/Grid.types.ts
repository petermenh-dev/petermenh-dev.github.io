import { BoxProps as MuiBoxProps } from '@mui/material/Box';

export interface GridProps extends MuiBoxProps {
  /** Number of columns at md+ breakpoint (auto-reduces on smaller screens) */
  columnPreset?: 1 | 2 | 3 | 4;
  /** Gap between grid items mapped to theme.spacing */
  gapPreset?: 'none' | 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}
