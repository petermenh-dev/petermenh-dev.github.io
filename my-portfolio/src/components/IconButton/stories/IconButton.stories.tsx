
import IconButton from '../IconButton';
import type { IconButtonProps } from '../IconButton.types';
import { Stack } from '@mui/material';
// If @mui/icons-material is not installed, replace with a placeholder
let MenuIcon = () => <span style={{fontWeight:'bold'}}>≡</span>;
let FavoriteIcon = () => <span style={{color:'red'}}>♥</span>;
// Uncomment below if @mui/icons-material is installed
// import MenuIcon from '@mui/icons-material/Menu';
// import FavoriteIcon from '@mui/icons-material/Favorite';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    colorVariant: { control: 'text' },
    sizeVariant: { control: 'text' },
  },
};

const Template = (args: IconButtonProps) => (
  <Stack direction="row" spacing={2} alignItems="center" bgcolor="#f5f5f5" p={2}>
    <IconButton {...args} aria-label="menu">
      <MenuIcon />
    </IconButton>
    <IconButton {...args} aria-label="favorite">
      <FavoriteIcon />
    </IconButton>
  </Stack>
);

export const Default = () => <Template colorVariant="primary" sizeVariant="medium" />;
export const Small = () => <Template colorVariant="secondary" sizeVariant="small" />;
export const Large = () => <Template colorVariant="muted" sizeVariant="large" />;
