import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Typography } from '@mui/material';
import Avatar from '../Avatar';
import { AvatarProps } from '../Avatar.types';

const meta: Meta<AvatarProps> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Avatar** component wraps MUI Avatar with \`size\` and \`bordered\` props.
Use it for profile photo display, user initials, or placeholder icons.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Avatar dimensions (32 / 40 / 64 / 96 px)',
    },
    bordered: {
      control: 'boolean',
      description: 'Add a primary-color border ring',
    },
    alt: { control: 'text' },
    src: { control: 'text' },
  },
  args: {
    size: 'medium',
    bordered: false,
    alt: 'Peter',
  },
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'PM' },
};

export const WithPhoto: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'Profile photo',
    size: 'large',
  },
};

export const Bordered: Story = {
  args: { children: 'PM', bordered: true, size: 'large' },
};

export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" alignItems="center" spacing={3}>
      {(['small', 'medium', 'large', 'xlarge'] as const).map((size) => (
        <Stack key={size} alignItems="center" spacing={1}>
          <Avatar size={size} src="https://i.pravatar.cc/150?img=12" alt="Profile" />
          <Typography variant="caption">{size}</Typography>
        </Stack>
      ))}
    </Stack>
  ),
};

export const AllSizesBordered: Story = {
  render: () => (
    <Stack direction="row" alignItems="center" spacing={3}>
      {(['small', 'medium', 'large', 'xlarge'] as const).map((size) => (
        <Stack key={size} alignItems="center" spacing={1}>
          <Avatar size={size} bordered src="https://i.pravatar.cc/150?img=12" alt="Profile" />
          <Typography variant="caption">{size}</Typography>
        </Stack>
      ))}
    </Stack>
  ),
};

export const InitialsFallback: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar size="small">PM</Avatar>
      <Avatar size="medium">PM</Avatar>
      <Avatar size="large" bordered>PM</Avatar>
      <Avatar size="xlarge" bordered>PM</Avatar>
    </Stack>
  ),
};

export const ProfileHero: Story = {
  render: () => (
    <Stack alignItems="center" spacing={2}>
      <Avatar
        size="xlarge"
        bordered
        src="https://i.pravatar.cc/150?img=12"
        alt="Peter Menh"
      />
      <Stack alignItems="center">
        <Typography variant="h6">Peter Menh</Typography>
        <Typography variant="body2" color="text.secondary">Full-Stack Developer</Typography>
      </Stack>
    </Stack>
  ),
};
