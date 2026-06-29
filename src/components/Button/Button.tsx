import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export default function Button({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  disabled = false,
  children,
  variant = 'contained',
  color,
  onClick,
  ...props
}: ButtonProps) {
  // When `primary` is set and no explicit `color` override is provided,
  // map it to MUI's "primary" color token.
  const resolvedColor = color ?? (primary ? 'primary' : undefined);

  return (
    <StyledButton
      size={size}
      style={backgroundColor ? { backgroundColor } : undefined}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      color={resolvedColor}
      {...props}
    >
      {children ?? label}
    </StyledButton>
  );
}