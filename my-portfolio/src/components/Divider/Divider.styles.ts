import { styled } from '@mui/material/styles';
import MuiDivider from '@mui/material/Divider';
import { DividerProps } from './Divider.types';

const spacingMap = {
  none: 0,
  small: 1,
  medium: 3,
  large: 6,
};

export const StyledDivider = styled(MuiDivider, {
  shouldForwardProp: (prop) => prop !== 'spacing',
})<DividerProps>(({ theme, spacing = 'none' }) => ({
  marginTop: theme.spacing(spacingMap[spacing]),
  marginBottom: theme.spacing(spacingMap[spacing]),
}));
