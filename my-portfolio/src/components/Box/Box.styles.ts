import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import { BoxProps } from './Box.types';

const maxWidthMap = {
  xs: 360,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  full: '100%',
};

const paddingMap = {
  none: 0,
  small: 1,
  medium: 2,
  large: 4,
};

export const StyledBox = styled(MuiBox, {
  shouldForwardProp: (prop) => !['maxWidthPreset', 'paddingPreset'].includes(prop as string),
})<BoxProps>(({ theme, maxWidthPreset = 'full', paddingPreset = 'none' }) => ({
  maxWidth: maxWidthMap[maxWidthPreset],
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: theme.spacing(paddingMap[paddingPreset]),
}));