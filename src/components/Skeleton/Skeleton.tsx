import React from 'react';
import Box from '@mui/material/Box';
import { StyledSkeleton } from './Skeleton.styles';
import { SkeletonProps } from './Skeleton.types';

export default function Skeleton({
  variant = 'rectangular',
  lines,
  avatarSize = 40,
  width,
  height,
  ...props
}: SkeletonProps) {
  // Multi-line text skeleton
  if (lines && lines > 1) {
    return (
      <Box sx={{ width: width ?? '100%' }}>
        {Array.from({ length: lines }).map((_, i) => (
          <StyledSkeleton
            key={i}
            variant="text"
            width={i === lines - 1 ? '60%' : '100%'}
            {...props}
          />
        ))}
      </Box>
    );
  }

  // Avatar skeleton shorthand
  if (variant === 'circular') {
    return (
      <StyledSkeleton
        variant="circular"
        width={width ?? avatarSize}
        height={height ?? avatarSize}
        {...props}
      />
    );
  }

  return (
    <StyledSkeleton
      variant={variant}
      width={width ?? '100%'}
      height={height}
      {...props}
    />
  );
}
