import { styled } from '@mui/material/styles';
import MuiLink from '@mui/material/Link';
import { LinkProps } from './Link.types';

const colorMap = {
  primary: (theme: any) => theme.palette.primary.main,
  secondary: (theme: any) => theme.palette.secondary.main,
  muted: (theme: any) => theme.palette.text.secondary,
};

export const StyledLink = styled(MuiLink, {
  shouldForwardProp: (prop) => !['underlineVariant', 'colorVariant'].includes(prop as string),
})<LinkProps>(({ theme, colorVariant = 'primary', underlineVariant = 'hover' }) => ({
  color: colorMap[colorVariant]?.(theme) ?? theme.palette.primary.main,
  textDecoration: underlineVariant === 'always' ? 'underline' : underlineVariant === 'hover' ? 'underline dotted' : 'none',
  cursor: 'pointer',
  transition: 'color 0.2s',
  '&:hover': {
    color: theme.palette.secondary.main,
    textDecoration: underlineVariant === 'hover' ? 'underline' : undefined,
  },
}));