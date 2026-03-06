// src/components/Navbar/Navbar.styles.ts
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { NavbarProps } from './Navbar.types';
import { theme } from '../../theme';

export const StyledNavbar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'rounded',
})<NavbarProps>(({ theme: muiTheme, rounded }) => ({
  // Use imported theme for custom values, muiTheme for MUI values
  borderRadius: rounded 
    ? theme.customBorderRadius.rounded 
    : theme.customBorderRadius.semiRound,
  paddingLeft: muiTheme.spacing(2),
  paddingRight: muiTheme.spacing(2),
  // You also have access to all your theme colors:
  // backgroundColor: muiTheme.palette.primary.main,
}));
