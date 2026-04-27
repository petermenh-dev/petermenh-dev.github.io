import React from 'react';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';
import {
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogActions,
} from './Dialog.styles';
import { DialogProps } from './Dialog.types';

const maxWidthMap = {
  small: 'xs',
  medium: 'sm',
  large: 'md',
  fullscreen: false,
} as const;

export default function Dialog({
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  sizeVariant = 'medium',
  children,
  onClose,
  ...props
}: DialogProps) {
  const maxWidth = sizeVariant === 'fullscreen' ? false : maxWidthMap[sizeVariant];
  const fullScreen = sizeVariant === 'fullscreen';

  const handleClose = (event: object, reason: 'backdropClick' | 'escapeKeyDown') => {
    onClose?.(event, reason);
    onCancel?.();
  };

  return (
    <StyledDialog
      maxWidth={maxWidth as any}
      fullWidth={sizeVariant !== 'fullscreen'}
      fullScreen={fullScreen}
      onClose={handleClose}
      {...props}
    >
      {title && <StyledDialogTitle>{title}</StyledDialogTitle>}
      <StyledDialogContent>
        {description && <DialogContentText>{description}</DialogContentText>}
        {children}
      </StyledDialogContent>
      {(onConfirm || onCancel) && (
        <StyledDialogActions>
          {onCancel && (
            <Button onClick={onCancel} variant="outlined">
              {cancelLabel}
            </Button>
          )}
          {onConfirm && (
            <Button onClick={onConfirm} variant="contained" color="primary">
              {confirmLabel}
            </Button>
          )}
        </StyledDialogActions>
      )}
    </StyledDialog>
  );
}
