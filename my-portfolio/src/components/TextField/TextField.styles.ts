import { styled } from '@mui/material/styles';
import MuiTextField from '@mui/material/TextField';
import { TextFieldProps } from './TextField.types';

type StyledTextFieldProps = TextFieldProps & {
  rounded?: boolean;
  compact?: boolean;
};

export const StyledTextField = styled(MuiTextField, {
  shouldForwardProp: (prop) =>
    prop !== 'rounded' && prop !== 'compact' && prop !== 'clearable' && prop !== 'startIcon',
})<StyledTextFieldProps>(({ theme, rounded = false, compact = false }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: rounded
      ? (theme.customBorderRadius?.rounded ?? theme.shape.borderRadius)
      : theme.shape.borderRadius,
  },
  ...(compact && {
    '& .MuiInputBase-input': {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      fontSize: theme.typography.body2.fontSize,
    },
    '& .MuiInputLabel-root': {
      fontSize: theme.typography.body2.fontSize,
    },
  }),
}));