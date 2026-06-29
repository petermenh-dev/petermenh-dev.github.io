import { StyledCard } from './Card.styles';
import { CardProps } from './Card.types';

export default function Card({
  elevationVariant = 'medium',
  rounded = false,
  hoverable = false,
  children,
  ...props
}: CardProps) {
  return (
    <StyledCard
      elevationVariant={elevationVariant}
      rounded={rounded}
      hoverable={hoverable}
      {...props}
    >
      {children}
    </StyledCard>
  );
}

// TODO: Personalize Card component
// - Add switches/props to show/hide top and bottom icons
// - Customize layout and content to your liking
// - Integrate with Icon and Image components when ready