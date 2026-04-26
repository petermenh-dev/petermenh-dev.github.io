import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import IconButton from '../IconButton';
import { IconButtonProps } from '../IconButton.types';

// Inline icon placeholders (swap for @mui/icons-material if installed)
const MenuIcon = () => <span aria-hidden style={{ fontSize: 20, lineHeight: 1 }}>☰</span>;
const HeartIcon = () => <span aria-hidden style={{ fontSize: 20, lineHeight: 1 }}>♥</span>;
const SearchIcon = () => <span aria-hidden style={{ fontSize: 20, lineHeight: 1 }}>🔍</span>;
const ShareIcon = () => <span aria-hidden style={{ fontSize: 20, lineHeight: 1 }}>↗</span>;

const meta: Meta<IconButtonProps> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **IconButton** wraps MUI IconButton with custom \`colorVariant\` tokens.  
Pass any icon as \`children\`. Use \`aria-label\` for accessibility.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    colorVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted'],
      description: 'Color from design token',
    },
    sizeVariant: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Icon button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
  args: {
    colorVariant: 'primary',
    sizeVariant: 'medium',
    disabled: false,
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <IconButton {...args} aria-label="menu">
      <MenuIcon />
    </IconButton>
  ),
};

export const AllColors: Story = {
  name: 'All Color Variants',
  parameters: { docs: { description: { story: 'Primary, Secondary, and Muted color tokens.' } } },
  render: (args) => (
    <Stack direction="row" spacing={2} alignItems="center" bgcolor="background.paper" p={2} borderRadius={1}>
      <IconButton {...args} colorVariant="primary" aria-label="primary">
        <MenuIcon />
      </IconButton>
      <IconButton {...args} colorVariant="secondary" aria-label="secondary">
        <HeartIcon />
      </IconButton>
      <IconButton {...args} colorVariant="muted" aria-label="muted">
        <SearchIcon />
      </IconButton>
    </Stack>
  ),
};

export const AllSizes: Story = {
  name: 'All Sizes',
  parameters: { docs: { description: { story: 'Small, Medium, and Large sizes.' } } },
  render: (args) => (
    <Stack direction="row" spacing={2} alignItems="center" bgcolor="background.paper" p={2} borderRadius={1}>
      <IconButton {...args} sizeVariant="small" aria-label="small">
        <SearchIcon />
      </IconButton>
      <IconButton {...args} sizeVariant="medium" aria-label="medium">
        <SearchIcon />
      </IconButton>
      <IconButton {...args} sizeVariant="large" aria-label="large">
        <SearchIcon />
      </IconButton>
    </Stack>
  ),
};

export const Disabled: Story = {
  parameters: { docs: { description: { story: 'Disabled icon buttons cannot be interacted with.' } } },
  render: (args) => (
    <Stack direction="row" spacing={2} alignItems="center" bgcolor="background.paper" p={2} borderRadius={1}>
      <IconButton {...args} colorVariant="primary" disabled aria-label="disabled primary">
        <MenuIcon />
      </IconButton>
      <IconButton {...args} colorVariant="secondary" disabled aria-label="disabled secondary">
        <HeartIcon />
      </IconButton>
    </Stack>
  ),
};

export const ActionRow: Story = {
  name: 'Action Row (Portfolio use)',
  parameters: { docs: { description: { story: 'Typical action row for a project card.' } } },
  render: () => (
    <Stack direction="row" spacing={1} bgcolor="background.paper" p={1} borderRadius={1}>
      <IconButton colorVariant="primary" sizeVariant="medium" aria-label="view project">
        <SearchIcon />
      </IconButton>
      <IconButton colorVariant="secondary" sizeVariant="medium" aria-label="like project">
        <HeartIcon />
      </IconButton>
      <IconButton colorVariant="muted" sizeVariant="medium" aria-label="share project">
        <ShareIcon />
      </IconButton>
    </Stack>
  ),
};
