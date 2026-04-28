import { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';

export interface DrawerProps extends MuiDrawerProps {
  /** Width of the drawer panel in px */
  width?: number;
}
