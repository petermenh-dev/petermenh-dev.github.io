import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '@mui/material/Box';
import Skeleton from '../Skeleton';
import type { SkeletonProps } from '../Skeleton.types';

const meta: Meta<SkeletonProps> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The **Skeleton** component wraps MUI Skeleton with design system styling.
Use it for loading states for dynamic content like project cards, avatars, and text.

Custom props:
- \`lines\`: Number of text lines to render (for multi-line text skeletons).
- \`avatarSize\`: Size in px for circular avatar skeletons.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'rectangular', 'rounded', 'circular'],
    },
    animation: {
      control: { type: 'select' },
      options: ['pulse', 'wave', false],
    },
    lines: { control: 'number' },
    avatarSize: { control: 'number' },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    variant: 'text',
    width: 300,
    height: 20,
  },
};

export const MultiLine: Story = {
  args: {
    lines: 4,
    width: 400,
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: 300,
    height: 140,
  },
};

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    width: 300,
    height: 140,
  },
};

export const Avatar: Story = {
  args: {
    variant: 'circular',
    avatarSize: 64,
  },
};

export const CardLoading: Story = {
  render: () => (
    <Box sx={{ width: 320, p: 2, border: '1px solid #eee', borderRadius: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Skeleton variant="circular" avatarSize={48} />
        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" width="60%" height={20} />
          <Skeleton variant="text" width="40%" height={16} />
        </Box>
      </Box>
      <Skeleton variant="rectangular" height={140} />
      <Box sx={{ mt: 1 }}>
        <Skeleton lines={3} />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A composite card loading skeleton simulating a project card.',
      },
    },
  },
};
