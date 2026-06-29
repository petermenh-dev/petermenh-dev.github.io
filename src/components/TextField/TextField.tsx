import { InputAdornment, IconButton } from '@mui/material';
import { StyledTextField } from './TextField.styles';
import { TextFieldProps } from './TextField.types';

export default function TextField({
  rounded = false,
  clearable = false,
  compact = false,
  startIcon,
  slotProps,
  ...props
}: TextFieldProps) {
  const startAdornment = startIcon ? (
    <InputAdornment position="start">{startIcon}</InputAdornment>
  ) : undefined;

  const endAdornment =
    clearable && props.value ? (
      <InputAdornment position="end">
        <IconButton
          aria-label="clear input"
          size="small"
          onClick={() =>
            props.onChange?.({
              target: { value: '' },
            } as React.ChangeEvent<HTMLInputElement>)
          }
          edge="end"
        >
          ×
        </IconButton>
      </InputAdornment>
    ) : undefined;

  return (
    <StyledTextField
      rounded={rounded}
      compact={compact}
      slotProps={{
        input: {
          startAdornment,
          endAdornment,
        },
        ...slotProps,
      }}
      {...props}
    />
  );
}