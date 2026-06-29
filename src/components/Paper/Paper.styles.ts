import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import { PaperProps } from './Paper.types';

export const StyledPaper = styled(MuiPaper, {
  shouldForwardProp: (prop) => !['rounded', 'noPadding'].includes(prop as string),
})<PaperProps>(({ theme, rounded = false, noPadding = false }) => ({
  padding: noPadding ? 0 : theme.spacing(3),
  borderRadius: rounded
    ? (theme as any).customBorderRadius?.rounded ?? theme.shape.borderRadius * 3
    : theme.shape.borderRadius,
}));
