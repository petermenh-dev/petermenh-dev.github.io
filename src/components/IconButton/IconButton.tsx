import { StyledIconButton } from './IconButton.styles';
import { IconButtonProps } from './IconButton.types';

export default function IconButton({ colorVariant = 'primary', sizeVariant = 'medium', children, ...props }: IconButtonProps) {
  return (
    <StyledIconButton colorVariant={colorVariant} size={sizeVariant} {...props}>
      {children}
    </StyledIconButton>
  );
}