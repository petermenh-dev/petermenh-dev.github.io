import { TabsProps as MuiTabsProps } from '@mui/material/Tabs';

export interface TabsProps extends MuiTabsProps {
  /** Color of the active indicator and selected tab label */
  colorVariant?: 'primary' | 'secondary';
}
