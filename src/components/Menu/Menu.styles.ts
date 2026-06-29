import { styled } from '@mui/material/styles';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';

export const StyledMenu = styled(MuiMenu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.customBorderRadius?.slightlyRound ?? theme.shape.borderRadius * 2,
    minWidth: 180,
    boxShadow: theme.shadows[4],
  },
}));

export const StyledMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  gap: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));
