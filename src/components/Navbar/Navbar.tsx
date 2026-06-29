// src/components/Navbar/Navbar.tsx
import { StyledNavbar } from './Navbar.styles';
import type { NavbarProps } from './Navbar.types';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

export const Navbar = ({ children, ...props }: NavbarProps) => {
  return (
    <StyledNavbar {...props}>
      <Toolbar>
        {/* You can add your logo, nav links, or buttons here */}
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          {children}
        </Box>
      </Toolbar>
    </StyledNavbar>
  );
};
export default Navbar;