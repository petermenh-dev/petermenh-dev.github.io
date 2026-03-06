import { styled } from '@mui/material/styles';
import MuiTextField from '@mui/material/TextField';
import { TextFieldProps } from './TextField.types';

export const StyledTextField = styled(MuiTextField, {
  shouldForwardProp: (prop) => prop !== 'rounded',
})<TextFieldProps>(({ theme, rounded = false }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: rounded ? theme.customBorderRadius?.rounded ?? theme.shape.borderRadius : theme.shape.borderRadius,
  },
}));