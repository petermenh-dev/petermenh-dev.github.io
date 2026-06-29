import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import Badge from '../Badge';
import { BadgeProps } from '../Badge.types';

const meta: Meta<BadgeProps> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Badge** component wraps MUI Badge with a \`pulse\` prop for animated "live" indicators.
Use it for notification counts, "New" labels, and status indicators.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    pulse: { control: 'boolean', description: 'Animate badge with a pulse ring' },
    badgeContent: { control: 'text', description: 'Badge label or count' },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    variant: {
      control: { type: 'select' },
      options: ['standard', 'dot'],
    },
    max: { control: 'number', description: 'Max count before displaying max+' },
  },
  args: {
    badgeContent: 4,
    color: 'primary',
    pulse: false,
  },
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Badge {...args}>
      <MailIcon />
    </Badge>
  ),
};

export const Dot: Story = {
  args: { variant: 'dot', color: 'secondary' },
  render: (args) => (
    <Badge {...args}>
      <NotificationsIcon />
    </Badge>
  ),
};

export const Pulsing: Story = {
  args: { variant: 'dot', color: 'secondary', pulse: true },
  render: (args) => (
    <Badge {...args}>
      <NotificationsIcon />
    </Badge>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      {(['primary', 'secondary', 'error', 'info', 'success', 'warning'] as const).map((color) => (
        <Stack key={color} alignItems="center" spacing={1}>
          <Badge badgeContent={3} color={color}>
            <MailIcon />
          </Badge>
          <Typography variant="caption">{color}</Typography>
        </Stack>
      ))}
    </Stack>
  ),
};

export const HighCount: Story = {
  args: { badgeContent: 120, max: 99, color: 'error' },
  render: (args) => (
    <Badge {...args}>
      <NotificationsIcon />
    </Badge>
  ),
};

export const NewIndicator: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Badge badgeContent="New" color="secondary">
        <FiberNewIcon fontSize="large" />
      </Badge>
      <Badge badgeContent="New" color="secondary" pulse>
        <ShoppingCartIcon fontSize="large" />
      </Badge>
    </Stack>
  ),
};

export const NotificationRow: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Badge badgeContent={2} color="error">
        <MailIcon />
      </Badge>
      <Badge badgeContent={7} color="primary">
        <NotificationsIcon />
      </Badge>
      <Badge variant="dot" color="secondary" pulse>
        <ShoppingCartIcon />
      </Badge>
    </Stack>
  ),
};
