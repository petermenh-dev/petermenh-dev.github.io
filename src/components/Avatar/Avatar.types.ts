import type { ComponentProps } from 'react';
import MuiAvatar from '@mui/material/Avatar';

type MuiAvatarProps = ComponentProps<typeof MuiAvatar>;

export interface AvatarProps extends MuiAvatarProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  bordered?: boolean;
  src?: string;
  alt?: string;
}
