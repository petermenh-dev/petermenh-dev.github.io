import { styled } from '@mui/material/styles';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';

export const StyledDialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.customBorderRadius?.semiRound ?? theme.shape.borderRadius * 2,
    padding: theme.spacing(1),
  },
}));

export const StyledDialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  paddingBottom: theme.spacing(1),
}));

export const StyledDialogContent = styled(MuiDialogContent)(({ theme }) => ({
  paddingTop: theme.spacing(1),
}));

export const StyledDialogActions = styled(MuiDialogActions)(({ theme }) => ({
  padding: theme.spacing(2),
  gap: theme.spacing(1),
}));
