import { StyledLink } from './Link.styles';
import { LinkProps } from './Link.types';

export default function Link({ underlineVariant = 'hover', colorVariant = 'primary', children, ...props }: LinkProps) {
  return (
    <StyledLink underlineVariant={underlineVariant} colorVariant={colorVariant} {...props}>
      {children}
    </StyledLink>
  );
}