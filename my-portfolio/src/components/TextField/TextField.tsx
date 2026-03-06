import { StyledTextField } from './TextField.styles';
import { TextFieldProps } from './TextField.types';

export default function TextField({ rounded = false, fullWidth = false, ...props }: TextFieldProps) {
  return (
    <StyledTextField rounded={rounded} fullWidth={fullWidth} {...props} />
  );
}