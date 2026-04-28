import { MenuProps as MuiMenuProps } from '@mui/material/Menu';
import { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';

export interface MenuItemOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  divider?: boolean;
}

export interface MenuProps extends Omit<MuiMenuProps, 'open'> {
  open: boolean;
  items?: MenuItemOption[];
  onSelect?: (value: string) => void;
}

export interface MenuItemProps extends MuiMenuItemProps {
  icon?: React.ReactNode;
}
