import { styled } from '@mui/material/styles';
import { Tooltip as MuiTooltip, tooltipClasses } from '@mui/material';
import { TooltipProps } from './Tooltip.types';

export const StyledTooltip = styled(MuiTooltip, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<TooltipProps>(({ theme, variant = 'default' }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    ...(variant === 'rich' && {
      maxWidth: 300,
      padding: theme.spacing(1.5, 2),
      fontSize: theme.typography.body2.fontSize,
      lineHeight: 1.6,
    }),
  },
}));
