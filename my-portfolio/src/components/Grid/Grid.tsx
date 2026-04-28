import { StyledGrid } from './Grid.styles';
import { GridProps } from './Grid.types';

export default function Grid({
  columnPreset = 3,
  gapPreset = 'medium',
  children,
  ...props
}: GridProps) {
  return (
    <StyledGrid columnPreset={columnPreset} gapPreset={gapPreset} {...props}>
      {children}
    </StyledGrid>
  );
}
