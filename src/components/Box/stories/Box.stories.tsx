import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../Box';
import { BoxProps } from '../Box.types';

const meta: Meta<BoxProps> = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Box** component is built on top of MUI Box.  
Custom max-width presets and padding tied to theme.spacing.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidthPreset: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Max width preset',
    },
    paddingPreset: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
      description: 'Padding preset',
    },
    children: {
      control: 'text',
      description: 'Box content',
    },
  },
  args: {
    children: 'Box Example',
    maxWidthPreset: 'md',
    paddingPreset: 'medium',
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div style={{ border: '2px dashed #1976d2', background: '#f5f5f5', height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Default Box</div>,
  },
};

export const Small: Story = {
  args: {
    maxWidthPreset: 'sm',
    children: <div style={{ border: '2px dashed #1976d2', background: '#f5f5f5', height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Small Max Width</div>,
  },
};

export const Large: Story = {
  args: {
    maxWidthPreset: 'lg',
    children: <div style={{ border: '2px dashed #1976d2', background: '#f5f5f5', height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Large Max Width</div>,
  },
};

export const NoPadding: Story = {
  args: {
    paddingPreset: 'none',
    children: <div style={{ border: '2px dashed #1976d2', background: '#f5f5f5', height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No Padding</div>,
  },
};

export const MediumPadding: Story = {
  args: {
    paddingPreset: 'medium',
    children: <div style={{ border: '2px dashed #1976d2', background: '#f5f5f5', height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Medium Padding</div>,
  },
};

export const LargePadding: Story = {
  args: {
    paddingPreset: 'large',
    children: <div style={{ border: '2px dashed #1976d2', background: '#f5f5f5', height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Large Padding</div>,
  },
};