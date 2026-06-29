import { styled } from '@mui/material/styles';
import MuiSkeleton from '@mui/material/Skeleton';

export const StyledSkeleton = styled(MuiSkeleton)(({ theme }) => ({
  borderRadius: theme.customBorderRadius?.slightlyRound ?? theme.shape.borderRadius,
}));
