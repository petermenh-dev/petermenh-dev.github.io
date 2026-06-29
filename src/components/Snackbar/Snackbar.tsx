import React from 'react';
import Alert from '@mui/material/Alert';
import { StyledSnackbar } from './Snackbar.styles';
import { SnackbarProps } from './Snackbar.types';

export default function Snackbar({
  message,
  severity = 'info',
  onClose,
  autoHideDuration = 4000,
  anchorOrigin = { vertical: 'bottom', horizontal: 'center' },
  ...props
}: SnackbarProps) {
  const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    onClose?.();
  };

  return (
    <StyledSnackbar
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
      onClose={handleClose}
      {...props}
    >
      <Alert onClose={handleClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </StyledSnackbar>
  );
}
