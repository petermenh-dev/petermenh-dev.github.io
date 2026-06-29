import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import { GridProps } from './Grid.types';

const gapMap = { none: 0, small: 1, medium: 3, large: 6 } as const;

export const StyledGrid = styled(MuiBox, {
  shouldForwardProp: (prop) => !['columnPreset', 'gapPreset'].includes(prop as string),
})<GridProps>(({ theme, columnPreset = 3, gapPreset = 'medium' }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: theme.spacing(gapMap[gapPreset ?? 'medium']),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: `repeat(${Math.min(columnPreset as number, 2)}, 1fr)`,
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: `repeat(${columnPreset}, 1fr)`,
  },
}));
