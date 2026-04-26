import { StyledDrawer } from './Drawer.styles';
import { DrawerProps } from './Drawer.types';

export default function Drawer({ width = 280, anchor = 'left', children, ...props }: DrawerProps) {
  return (
    <StyledDrawer width={width} anchor={anchor} {...props}>
      {children}
    </StyledDrawer>
  );
}
