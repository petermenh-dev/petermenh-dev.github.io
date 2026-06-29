import { DialogProps as MuiDialogProps } from '@mui/material/Dialog';

export interface DialogProps extends MuiDialogProps {
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  sizeVariant?: 'small' | 'medium' | 'large' | 'fullscreen';
}
