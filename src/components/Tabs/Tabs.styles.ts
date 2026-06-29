import { styled } from '@mui/material/styles';
import MuiTabs from '@mui/material/Tabs';
import { TabsProps } from './Tabs.types';

export const StyledTabs = styled(MuiTabs, {
  shouldForwardProp: (prop) => prop !== 'colorVariant',
})<TabsProps>(({ theme, colorVariant = 'primary' }) => {
  const color =
    colorVariant === 'secondary'
      ? theme.palette.secondary.main
      : theme.palette.primary.main;

  return {
    '& .MuiTabs-indicator': {
      backgroundColor: color,
    },
    '& .MuiTab-root.Mui-selected': {
      color,
    },
  };
});
