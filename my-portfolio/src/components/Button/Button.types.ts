import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export interface ButtonProps extends MuiButtonProps {
  backgroundColor?: string;
  label?: string;
  primary?: boolean;
  rounded?: boolean;
  size?: 'small' | 'medium' | 'large';
}
