import { StyledBox } from './Box.styles';
import { BoxProps } from './Box.types';

export default function Box({
  maxWidthPreset = 'full',
  paddingPreset = 'none',
  children,
  ...props
}: BoxProps) {
  return (
    <StyledBox maxWidthPreset={maxWidthPreset} paddingPreset={paddingPreset} {...props}>
      {children}
    </StyledBox>
  );
}