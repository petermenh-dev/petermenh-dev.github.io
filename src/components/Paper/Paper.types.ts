import { PaperProps as MuiPaperProps } from '@mui/material/Paper';

export interface PaperProps extends MuiPaperProps {
  rounded?: boolean;
  noPadding?: boolean;
}
