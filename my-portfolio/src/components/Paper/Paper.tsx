import { StyledPaper } from './Paper.styles';
import { PaperProps } from './Paper.types';

export default function Paper({ rounded = false, noPadding = false, elevation = 1, ...props }: PaperProps) {
  return <StyledPaper rounded={rounded} noPadding={noPadding} elevation={elevation} {...props} />;
}
