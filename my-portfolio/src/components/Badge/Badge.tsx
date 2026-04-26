import { StyledBadge } from './Badge.styles';
import { BadgeProps } from './Badge.types';

export default function Badge({ pulse = false, ...props }: BadgeProps) {
  return <StyledBadge pulse={pulse} {...props} />;
}
