import { LinkProps as MuiLinkProps } from '@mui/material/Link';

export interface LinkProps extends MuiLinkProps {
  underlineVariant?: 'always' | 'hover' | 'none';
  colorVariant?: 'primary' | 'secondary' | 'muted';
  // Add more custom props as needed
}