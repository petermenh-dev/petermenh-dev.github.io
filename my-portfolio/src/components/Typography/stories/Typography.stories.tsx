import type { Meta, StoryObj } from '@storybook/react-vite';
import Typography from '../Typography';
import { TypographyProps } from '../Typography.types';

const meta: Meta<TypographyProps> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Typography** component is built on top of MUI Typography.  
Custom color variants and font weights from theme.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    colorVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted'],
      description: 'Custom color variant',
    },
    fontWeight: {
      control: { type: 'select' },
      options: ['regular', 'medium', 'bold'],
      description: 'Font weight from theme',
    },
    children: {
      control: 'text',
      description: 'Typography content',
    },
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'subtitle1', 'subtitle2'],
      description: 'MUI Typography variant',
    },
  },
  args: {
    children: 'Typography Example',
    variant: 'body1',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Typography',
  },
};

export const Primary: Story = {
  args: {
    colorVariant: 'primary',
    children: 'Primary Color',
  },
};

export const Secondary: Story = {
  args: {
    colorVariant: 'secondary',
    children: 'Secondary Color',
  },
};

export const Muted: Story = {
  args: {
    colorVariant: 'muted',
    children: 'Muted Color',
  },
};

export const Bold: Story = {
  args: {
    fontWeight: 'bold',
    children: 'Bold Font Weight',
  },
};

export const Medium: Story = {
  args: {
    fontWeight: 'medium',
    children: 'Medium Font Weight',
  },
};

export const Regular: Story = {
  args: {
    fontWeight: 'regular',
    children: 'Regular Font Weight',
  },
};

export const Heading: Story = {
  args: {
    variant: 'h2',
    fontWeight: 'bold',
    children: 'Heading Example',
  },
};