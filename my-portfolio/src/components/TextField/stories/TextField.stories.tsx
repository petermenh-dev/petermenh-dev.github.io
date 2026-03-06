import type { Meta, StoryObj } from '@storybook/react-vite';
import TextField from '../TextField';
import { TextFieldProps } from '../TextField.types';

const meta: Meta<TextFieldProps> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **TextField** component is built on top of MUI TextField.  
Custom border radius and fullWidth support.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    rounded: {
      control: 'boolean',
      description: 'Use theme border radius',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width input',
    },
    label: {
      control: 'text',
      description: 'Input label',
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder',
    },
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
      description: 'MUI TextField variant',
    },
  },
  args: {
    label: 'Label',
    placeholder: 'Type here...',
    variant: 'outlined',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Rounded: Story = {
  args: {
    rounded: true,
    label: 'Rounded',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: 'Full Width',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled Variant',
  },
};

export const Standard: Story = {
  args: {
    variant: 'standard',
    label: 'Standard Variant',
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Search or type...',
    label: 'With Placeholder',
  },
};