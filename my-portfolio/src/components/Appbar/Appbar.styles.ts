import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

// Styled AppBar component
export const StyledAppBar = styled(MuiAppBar)<MuiAppBarProps>(() => ({
	flexGrow: 1,
	// You can add custom styling here
	// For example, custom heights, shadows, etc.
}));