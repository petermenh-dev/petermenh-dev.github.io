import { Toolbar, Typography } from '@mui/material';
import { StyledAppBar } from './Appbar.styles';
import { AppBarProps } from './Appbar.types';

export default function Appbar({
  position = 'static',
  backgroundColor,
  title = 'My Portfolio',
  elevation = 4,
  onTitleClick,
  children,
  ...props
}: AppBarProps) {

  return (
    <StyledAppBar 
      position={position} 
      elevation={elevation}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      <Toolbar sx={{ minHeight: 64, display: 'flex', alignItems: 'center', flexWrap: 'nowrap', gap: 1 }}>
        <Typography
          variant="h6"
          component="div"
          noWrap
          sx={{ flexGrow: 1, cursor: onTitleClick ? 'pointer' : undefined, userSelect: 'none' }}
          onClick={onTitleClick}
          tabIndex={onTitleClick ? 0 : undefined}
          role={onTitleClick ? 'button' : undefined}
          aria-label={onTitleClick ? 'Go to home' : undefined}
          onKeyDown={onTitleClick ? ((e: React.KeyboardEvent<HTMLDivElement>) => { if (e.key === 'Enter' || e.key === ' ') onTitleClick(); }) : undefined}
        >
          {title}
        </Typography>
        {children}
      </Toolbar>
    </StyledAppBar>
  );
}