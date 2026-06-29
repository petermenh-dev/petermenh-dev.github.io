import { styled } from '@mui/material/styles';
import MuiSnackbar from '@mui/material/Snackbar';

export const StyledSnackbar = styled(MuiSnackbar)(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    borderRadius: theme.customBorderRadius?.slightlyRound ?? theme.shape.borderRadius,
  },
}));
