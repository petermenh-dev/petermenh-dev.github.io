import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import Chip from '../Chip';
import { ChipProps } from '../Chip.types';

const meta: Meta<ChipProps> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Chip** component wraps MUI Chip with design-token \`colorVariant\` support.  
Use it for tags, filters, status badges, and tech stack labels.
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
      options: ['small', 'medium'],
      description: 'Chip size',
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined'],
      description: 'MUI chip variant',
    },
    label: {
      control: 'text',
      description: 'Chip label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
  args: {
    label: 'React',
    colorVariant: 'primary',
    sizeVariant: 'medium',
    variant: 'filled',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllColors: Story = {
  name: 'All Color Variants',
  render: (args) => (
    <Stack direction="row" spacing={1} flexWrap="wrap" bgcolor="background.paper" p={2} borderRadius={1}>
      <Chip {...args} colorVariant="primary" label="Primary" />
      <Chip {...args} colorVariant="secondary" label="Secondary" />
      <Chip {...args} colorVariant="muted" label="Muted" />
    </Stack>
  ),
};

export const Outlined: Story = {
  args: { variant: 'outlined', label: 'Outlined' },
};

export const OutlinedAllColors: Story = {
  name: 'Outlined — All Colors',
  render: (args) => (
    <Stack direction="row" spacing={1} flexWrap="wrap" bgcolor="background.paper" p={2} borderRadius={1}>
      <Chip {...args} variant="outlined" colorVariant="primary" label="Primary" />
      <Chip {...args} variant="outlined" colorVariant="secondary" label="Secondary" />
      <Chip {...args} variant="outlined" colorVariant="muted" label="Muted" />
    </Stack>
  ),
};

export const SmallChips: Story = {
  name: 'Small Size',
  render: (args) => (
    <Stack direction="row" spacing={1} flexWrap="wrap" bgcolor="background.paper" p={2} borderRadius={1}>
      <Chip {...args} sizeVariant="small" colorVariant="primary" label="TypeScript" />
      <Chip {...args} sizeVariant="small" colorVariant="secondary" label="React" />
      <Chip {...args} sizeVariant="small" colorVariant="muted" label="Node.js" />
    </Stack>
  ),
};

export const Deletable: Story = {
  args: { label: 'Removable', onDelete: () => {} },
  parameters: { docs: { description: { story: 'Chips can include a delete/close button.' } } },
};

export const Disabled: Story = {
  args: { label: 'Disabled', disabled: true },
};

export const TechStackRow: Story = {
  name: 'Tech Stack (Portfolio use)',
  parameters: { docs: { description: { story: 'How chips appear as tech stack tags on a project card.' } } },
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap" bgcolor="background.paper" p={2} borderRadius={1}>
      {['React', 'TypeScript', 'MUI', 'Vite', 'Storybook'].map((tech) => (
        <Chip key={tech} label={tech} sizeVariant="small" colorVariant="primary" variant="outlined" />
      ))}
    </Stack>
  ),
};
