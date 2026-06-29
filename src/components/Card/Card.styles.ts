import { styled } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';
import { CardProps } from './Card.types';

const elevationMap = {
  none: 0,
  low: 2,
  medium: 8,
  high: 16,
};

export const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => !['elevationVariant', 'rounded', 'hoverable'].includes(prop as string),
})<CardProps>(({ theme, elevationVariant = 'medium', rounded = false, hoverable = false }) => ({
  borderRadius: rounded ? theme.customBorderRadius?.rounded ?? theme.shape.borderRadius : theme.shape.borderRadius,
  boxShadow: theme.shadows[elevationMap[elevationVariant]],
  transition: 'box-shadow 0.2s, transform 0.2s',
  ...(hoverable && {
    cursor: 'pointer',
    '&:hover': {
      boxShadow: theme.shadows[24],
      transform: 'translateY(-2px) scale(1.02)',
    },
  }),
}));