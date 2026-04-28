import { styled } from '@mui/material/styles';
import MuiAvatar from '@mui/material/Avatar';
import { AvatarProps } from './Avatar.types';

const sizeMap = {
  small: 32,
  medium: 40,
  large: 64,
  xlarge: 96,
};

export const StyledAvatar = styled(MuiAvatar, {
  shouldForwardProp: (prop) => !['size', 'bordered'].includes(prop as string),
})<AvatarProps>(({ theme, size = 'medium', bordered = false }) => {
  const px = sizeMap[size];
  return {
    width: px,
    height: px,
    fontSize: px * 0.4,
    ...(bordered && {
      border: `3px solid ${theme.palette.primary.main}`,
      boxSizing: 'content-box',
    }),
  };
});
