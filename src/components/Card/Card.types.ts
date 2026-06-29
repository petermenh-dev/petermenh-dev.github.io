import { CardProps as MuiCardProps } from '@mui/material/Card';

export interface CardProps extends MuiCardProps {
  elevationVariant?: 'none' | 'low' | 'medium' | 'high'; // Custom elevation
  rounded?: boolean; // Use theme border radius
  hoverable?: boolean; // Apply hover effect
  children?: React.ReactNode;
}