import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

export interface TooltipProps extends MuiTooltipProps {
  variant?: 'default' | 'rich';
}
