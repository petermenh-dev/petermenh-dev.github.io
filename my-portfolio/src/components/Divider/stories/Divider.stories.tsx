import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography } from '@mui/material';
import Divider from '../Divider';
import { DividerProps } from '../Divider.types';

const meta: Meta<DividerProps> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Divider** component wraps MUI Divider with a \`spacing\` prop that adds consistent vertical margins using design tokens.
Use it to visually separate sections, list items, or content blocks.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
      description: 'Vertical margin above and below the divider',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: { type: 'select' },
      options: ['fullWidth', 'inset', 'middle'],
    },
  },
  args: { spacing: 'none' },
} satisfies Meta<DividerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const Section = ({ title, body }: { title: string; body: string }) => (
  <Box sx={{ py: 1 }}>
    <Typography variant="subtitle1" fontWeight={600}>{title}</Typography>
    <Typography variant="body2" color="text.secondary">{body}</Typography>
  </Box>
);

export const Default: Story = {
  render: (args) => (
    <Box sx={{ width: 400 }}>
      <Section title="Section A" body="Content for the first section." />
      <Divider {...args} />
      <Section title="Section B" body="Content for the second section." />
    </Box>
  ),
};

export const SmallSpacing: Story = {
  args: { spacing: 'small' },
  render: (args) => (
    <Box sx={{ width: 400 }}>
      <Section title="About" body="Full-stack developer with a focus on design systems." />
      <Divider {...args} />
      <Section title="Skills" body="React, TypeScript, MUI, Vite" />
    </Box>
  ),
};

export const MediumSpacing: Story = {
  args: { spacing: 'medium' },
  render: (args) => (
    <Box sx={{ width: 400 }}>
      <Section title="Experience" body="3 years building web applications." />
      <Divider {...args} />
      <Section title="Education" body="B.S. Computer Science" />
    </Box>
  ),
};

export const LargeSpacing: Story = {
  args: { spacing: 'large' },
  render: (args) => (
    <Box sx={{ width: 400 }}>
      <Section title="Projects" body="Open source contributions and portfolio pieces." />
      <Divider {...args} />
      <Section title="Contact" body="Available for freelance and full-time opportunities." />
    </Box>
  ),
};

export const WithText: Story = {
  args: { spacing: 'medium' },
  render: (args) => (
    <Box sx={{ width: 400 }}>
      <Section title="Top" body="Content above." />
      <Divider {...args}>OR</Divider>
      <Section title="Bottom" body="Content below." />
    </Box>
  ),
};

export const MiddleVariant: Story = {
  args: { variant: 'middle', spacing: 'medium' },
  render: (args) => (
    <Box sx={{ width: 400 }}>
      <Section title="Left-inset divider" body="The middle variant adds horizontal margin." />
      <Divider {...args} />
      <Section title="Below" body="Separated content." />
    </Box>
  ),
};
