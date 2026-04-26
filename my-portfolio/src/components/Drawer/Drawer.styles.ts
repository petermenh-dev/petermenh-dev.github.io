import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { DrawerProps } from './Drawer.types';

export const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'width',
})<DrawerProps>(({ width = 280 }) => ({
  '& .MuiDrawer-paper': {
    width,
    boxSizing: 'border-box',
  },
}));
