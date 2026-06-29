import { styled } from '@mui/material/styles';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export const StyledButton = styled(MuiButton)<MuiButtonProps>(() => ({
	// Sizing is determined by content and the `size` prop; override per-use via sx
}));
