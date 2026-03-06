import { styled } from '@mui/material/styles';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

// Small MUI-styled Button (200x50)
export const StyledButton = styled(MuiButton)<MuiButtonProps>(() => ({
	width: 200,
	height: 50,
	minWidth: 200,
}));
