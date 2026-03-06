import { StyledTypography } from './Typography.styles';
import { TypographyProps } from './Typography.types';

export default function Typography({
  colorVariant = 'primary',
  fontWeight = 'regular',
  children,
  ...props
}: TypographyProps) {
  return (
    <StyledTypography colorVariant={colorVariant} fontWeight={fontWeight} {...props}>
      {children}
    </StyledTypography>
  );
}