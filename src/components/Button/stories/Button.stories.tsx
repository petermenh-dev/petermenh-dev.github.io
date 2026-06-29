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

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
  },
  parameters: {
    docs: { description: { story: 'Outlined style for secondary actions.' } },
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
  },
  parameters: {
    docs: { description: { story: 'Text style for low-emphasis actions.' } },
  },
};

/** All three variants side-by-side */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button {...args} variant="contained">
        Contained
      </Button>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </div>
  ),
  args: {
    children: undefined,
  },
};