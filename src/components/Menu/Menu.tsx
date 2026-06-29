import React from 'react';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { StyledMenu, StyledMenuItem } from './Menu.styles';
import { MenuProps, MenuItemProps } from './Menu.types';

export function MenuItem({ icon, children, ...props }: MenuItemProps) {
  return (
    <StyledMenuItem {...props}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText>{children}</ListItemText>
    </StyledMenuItem>
  );
}

export default function Menu({ items, onSelect, children, ...props }: MenuProps) {
  return (
    <StyledMenu {...props}>
      {items
        ? items.map((item) => (
            <React.Fragment key={item.value}>
              {item.divider && <Divider />}
              <MenuItem
                disabled={item.disabled}
                icon={item.icon}
                onClick={() => onSelect?.(item.value)}
              >
                {item.label}
              </MenuItem>
            </React.Fragment>
          ))
        : children}
    </StyledMenu>
  );
}
