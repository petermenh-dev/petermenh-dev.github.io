import { StyledChip } from './Chip.styles';
import { ChipProps } from './Chip.types';

export default function Chip({ colorVariant = 'primary', sizeVariant = 'medium', ...props }: ChipProps) {
  return (
    <StyledChip colorVariant={colorVariant} size={sizeVariant} {...props} />
  );
}