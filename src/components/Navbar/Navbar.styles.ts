// src/components/Navbar/Navbar.styles.ts
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { NavbarProps } from './Navbar.types';

export const StyledNavbar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'rounded',
})<NavbarProps>(({ theme, rounded }) => ({
  borderRadius: rounded
    ? theme.customBorderRadius?.rounded ?? theme.shape.borderRadius
    : 0,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));
