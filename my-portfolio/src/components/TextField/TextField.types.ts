import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export interface TextFieldProps extends MuiTextFieldProps {
  rounded?: boolean; // Use theme border radius
  fullWidth?: boolean;
  // Add more custom props as needed
}