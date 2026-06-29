import { StyledDivider } from './Divider.styles';
import { DividerProps } from './Divider.types';

export default function Divider({ spacing = 'none', ...props }: DividerProps) {
  return <StyledDivider spacing={spacing} {...props} />;
}
