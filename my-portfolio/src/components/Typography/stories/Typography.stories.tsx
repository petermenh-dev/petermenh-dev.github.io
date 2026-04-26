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

export const TypeScale: Story = {
  name: 'Type Scale',
  parameters: {
    layout: 'padded',
    docs: { description: { story: 'All MUI typography variants rendered together for quick reference.' } },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 600 }}>
      {(
        [
          { variant: 'h1', label: 'h1 — Display' },
          { variant: 'h2', label: 'h2 — Heading' },
          { variant: 'h3', label: 'h3 — Sub-heading' },
          { variant: 'h4', label: 'h4 — Section' },
          { variant: 'h5', label: 'h5 — Card title' },
          { variant: 'h6', label: 'h6 — Small title' },
          { variant: 'subtitle1', label: 'subtitle1 — Sub text' },
          { variant: 'subtitle2', label: 'subtitle2 — Small sub' },
          { variant: 'body1', label: 'body1 — Main body copy' },
          { variant: 'body2', label: 'body2 — Secondary copy' },
          { variant: 'caption', label: 'caption — Helper text' },
        ] as const
      ).map(({ variant, label }) => (
        <Typography key={variant} variant={variant} colorVariant="primary">
          {label}
        </Typography>
      ))}
    </div>
  ),
};

export const AllWeights: Story = {
  name: 'All Font Weights',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Typography variant="h4" fontWeight="regular" colorVariant="primary">Regular — 400</Typography>
      <Typography variant="h4" fontWeight="medium" colorVariant="primary">Medium — 500</Typography>
      <Typography variant="h4" fontWeight="bold" colorVariant="primary">Bold — 700</Typography>
    </div>
  ),
};