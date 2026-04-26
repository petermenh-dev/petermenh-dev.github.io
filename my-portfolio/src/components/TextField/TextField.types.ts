import MuiTextField from '@mui/material/TextField';
import { ReactNode, ComponentProps } from 'react';

export interface TextFieldProps extends ComponentProps<typeof MuiTextField> {
  /** Apply theme rounded border radius */
  rounded?: boolean;
  /** Show a clear (×) button when the field has a value — requires value + onChange */
  clearable?: boolean;
  /** Prefix element placed inside the input (e.g. a search icon) */
  startIcon?: ReactNode;
  /** Reduce padding for dense filter contexts */
  compact?: boolean;
}