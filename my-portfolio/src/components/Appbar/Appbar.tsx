import { Toolbar, Typography, IconButton } from '@mui/material';
import { StyledAppBar } from './Appbar.styles';
import { AppBarProps } from './Appbar.types';

export default function Appbar({
  position = 'static',
  backgroundColor,
  title = 'My Portfolio',
  showMenuIcon = true,
  elevation = 4,
  children,
  ...rest
}: AppBarProps) {

  return (
    <StyledAppBar 
      position={position} 
      elevation={elevation}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...rest}
    >
      <Toolbar>
        {showMenuIcon && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            ☰
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {children}
      </Toolbar>
    </StyledAppBar>
  );
}