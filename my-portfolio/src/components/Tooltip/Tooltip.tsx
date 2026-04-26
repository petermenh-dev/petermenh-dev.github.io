import { StyledTooltip } from './Tooltip.styles';
import { TooltipProps } from './Tooltip.types';

export default function Tooltip({ variant = 'default', placement = 'top', ...props }: TooltipProps) {
  return <StyledTooltip variant={variant} placement={placement} {...props} />;
}
