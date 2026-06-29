import { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';

export interface SkeletonProps extends MuiSkeletonProps {
  lines?: number;
  avatarSize?: number;
}
