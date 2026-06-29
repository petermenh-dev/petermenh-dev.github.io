import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '../Menu';
import type { MenuProps } from '../Menu.types';

const meta: Meta<MenuProps> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Menu** component wraps MUI Menu with a consistent design system style.
Use it for dropdown navigation, context menus, and action lists.

Custom props:
- \`items\`: Array of \`{ label, value, icon?, disabled?, divider? }\` to render automatically.
- \`onSelect\`: Callback with the selected item's value.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    return (
      <>
        <Button variant="contained" onClick={(e) => setAnchorEl(e.currentTarget)}>
          Open Menu
        </Button>
        <Menu
          {...args}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          onSelect={(value) => { alert(`Selected: ${value}`); setAnchorEl(null); }}
        />
      </>
    );
  },
  args: {
    items: [
      { label: 'Home', value: 'home' },
      { label: 'Resume', value: 'resume' },
      { label: 'Projects', value: 'projects' },
      { label: 'Contact', value: 'contact', divider: true },
      { label: 'GitHub', value: 'github' },
    ],
  },
};

export const WithDisabled: Story = {
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    return (
      <>
        <Button variant="contained" onClick={(e) => setAnchorEl(e.currentTarget)}>
          Open Menu
        </Button>
        <Menu
          {...args}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          onSelect={(value) => { alert(`Selected: ${value}`); setAnchorEl(null); }}
        />
      </>
    );
  },
  args: {
    items: [
      { label: 'Edit', value: 'edit' },
      { label: 'Delete', value: 'delete', disabled: true },
      { label: 'Share', value: 'share', divider: true },
      { label: 'Export', value: 'export' },
    ],
  },
};
