// src/components/Navbar/Navbar.types.ts
import { AppBarProps } from '../Appbar/Appbar.types';

export interface NavbarProps extends AppBarProps {
  position?: 'static' | 'fixed' | 'absolute' | 'sticky';
  color?: 'primary' | 'secondary' | 'default';
  rounded?: boolean; // optional extra customization
}
