import { StyledAvatar } from './Avatar.styles';
import { AvatarProps } from './Avatar.types';

export default function Avatar({ size = 'medium', bordered = false, ...props }: AvatarProps) {
  return <StyledAvatar size={size} bordered={bordered} {...props} />;
}
