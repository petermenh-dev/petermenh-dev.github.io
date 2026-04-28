import { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';

export interface AvatarProps extends MuiAvatarProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  bordered?: boolean;
}
