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
  onClick,
  ...props
}: ButtonProps) {

  return (
    <>
      <StyledButton 
      size={size} 
      style={backgroundColor ? { backgroundColor } : undefined} 
      onClick={onClick} disabled={disabled}
      variant={variant}
      {...props}
      >
        {children}{label}
      </StyledButton>
    </>
  );
}