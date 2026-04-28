import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import Drawer from '../Drawer';
import { DrawerProps } from '../Drawer.types';

// ── Reusable nav content ──────────────────────────────────────────────────────
const NavContent = ({ title = 'Portfolio' }: { title?: string }) => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
      {title}
    </Typography>
    <Divider sx={{ mb: 1 }} />
    <List disablePadding>
      {['Home', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemButton>
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

// ── Meta ──────────────────────────────────────────────────────────────────────
const meta: Meta<DrawerProps> = {
  title: 'Layout/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Drawer** component wraps MUI Drawer with a configurable \`width\` prop.

Pair it with the **Navbar** and a hamburger **IconButton** for a mobile navigation menu.
Pass any content as \`children\` — nav links, profile sections, filter panels, etc.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number', min: 160, max: 480, step: 8 },
      description: 'Width of the drawer panel in px',
    },
    anchor: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Which edge the drawer opens from',
    },
  },
  args: {
    width: 280,
    anchor: 'left',
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Stories ───────────────────────────────────────────────────────────────────

export const LeftNavigation: Story = {
  name: 'Left Navigation (interactive)',
  parameters: {
    docs: { description: { story: 'Mobile nav drawer. Click the button to open.' } },
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          ☰ Open Menu
        </Button>
        <Drawer {...args} anchor="left" open={open} onClose={() => setOpen(false)}>
          <NavContent />
        </Drawer>
      </Box>
    );
  },
};

export const RightDrawer: Story = {
  name: 'Right Drawer (interactive)',
  args: { anchor: 'right', width: 320 },
  parameters: {
    docs: { description: { story: 'A wider right-side drawer — useful for detail panels or filters.' } },
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Details →
        </Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <NavContent title="Project Details" />
        </Drawer>
      </Box>
    );
  },
};

export const NarrowDrawer: Story = {
  name: 'Narrow (200px)',
  args: { anchor: 'left', width: 200 },
  parameters: {
    docs: { description: { story: 'A compact 200px drawer for icon-plus-label nav menus.' } },
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open Narrow
        </Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <NavContent />
        </Drawer>
      </Box>
    );
  },
};

export const PortfolioMobileNav: Story = {
  name: 'Portfolio Mobile Nav (realistic)',
  parameters: {
    docs: { description: { story: 'A realistic mobile nav with branding and section links.' } },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          ☰ Menu
        </Button>
        <Drawer width={260} anchor="left" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight="bold" color="primary.main">
              Peter Menh
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Frontend Developer
            </Typography>
            <Divider sx={{ my: 1.5 }} />
            <List disablePadding>
              {[
                { label: 'Home', icon: '🏠' },
                { label: 'Projects', icon: '💼' },
                { label: 'Experience', icon: '📋' },
                { label: 'Skills', icon: '⚡' },
                { label: 'Contact', icon: '✉️' },
              ].map(({ label, icon }) => (
                <ListItem key={label} disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={`${icon}  ${label}`}
                      slotProps={{ primary: { variant: 'body2' } }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    );
  },
};
