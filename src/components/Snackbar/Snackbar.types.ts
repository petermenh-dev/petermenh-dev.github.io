import { SnackbarProps as MuiSnackbarProps } from '@mui/material/Snackbar';

export type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

export interface SnackbarProps extends Omit<MuiSnackbarProps, 'children'> {
  message: string;
  severity?: SnackbarSeverity;
  onClose?: () => void;
}
