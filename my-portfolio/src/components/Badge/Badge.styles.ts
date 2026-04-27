import { styled, keyframes } from '@mui/material/styles';
import MuiBadge from '@mui/material/Badge';
import { BadgeProps } from './Badge.types';

const pulseAnimation = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(125, 255, 129, 0.45); }
  70%  { box-shadow: 0 0 0 6px rgba(125, 255, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(125, 255, 129, 0); }
`;

export const StyledBadge = styled(MuiBadge, {
  shouldForwardProp: (prop) => prop !== 'pulse',
})<BadgeProps>(({ pulse = false }) => ({
  '& .MuiBadge-badge': {
    ...(pulse && {
      animation: `${pulseAnimation} 1.4s ease-in-out infinite`,
    }),
  },
}));
