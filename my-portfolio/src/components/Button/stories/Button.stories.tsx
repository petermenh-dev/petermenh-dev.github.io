import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Button from '../Button';
import { ButtonProps } from '../Button.types';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Button** component is built on top of MUI Button.  
Use it for user actions like submitting forms or navigation.  
Supports MUI props: \`variant\`, \`color\`, \`size\`, etc.  

Custom props:
- \`primary\`: boolean — highlights the button in primary color.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The content displayed inside the button',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when button is clicked',
    },
    primary: {
      control: 'boolean',
      description: 'Is this the primary call to action?',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size variant of the button',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color override',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default button
export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const Primary: Story = {
  args: {
    primary: true,
    children: "Primary Button",
  },
  parameters: {
    docs: {
      description: {
        story: "The main action button with primary styling.",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    children: "Secondary Button",
  },
  parameters: {
    docs: {
      description: {
        story: "A secondary action button with neutral styling.",
      },
    },
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    primary: true,
    disabled: true,
    children: "Disabled Button",
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled button that cannot be interacted with.",
      },
    },
  },
};

// Different sizes
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'large',
  },
};

// Custom styling
export const CustomBackground: Story = {
  args: {
    children: 'Custom Button',
    backgroundColor: '#e74c3c',
  },
};

// Interactive example
export const WithClickHandler: Story = {
  args: {
    children: 'Click Me!',
    onClick: () => alert('Button clicked!'),
  },
};