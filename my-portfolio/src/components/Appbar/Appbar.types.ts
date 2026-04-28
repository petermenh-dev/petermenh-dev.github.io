import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

// Your custom props
export interface AppBarProps extends MuiAppBarProps {
  backgroundColor?: string;
  title?: string;
  elevation?: number;
  onTitleClick?: () => void;
}