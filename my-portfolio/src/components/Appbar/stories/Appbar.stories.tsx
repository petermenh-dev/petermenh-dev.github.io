import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mui/material';
import Appbar from '../Appbar';
import { AppBarProps } from '../Appbar.types';

const meta: Meta<AppBarProps> = {
  title: 'Components/Appbar',
  component: Appbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The **Appbar** component is built on top of MUI AppBar.  
Use it for navigation and branding at the top of your application.  
Supports all MUI AppBar props: \`position\`, \`color\`, \`elevation\`, etc.  

Custom props:
- \`title\`: string — the title displayed in the app bar.
- \`showMenuIcon\`: boolean — whether to show the menu icon.
- \`backgroundColor\`: string — custom background color override.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed in the app bar',
    },
    showMenuIcon: {
      control: 'boolean',
      description: 'Whether to show the menu icon',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color override',
    },
    position: {
      control: { type: 'select' },
      options: ['fixed', 'absolute', 'sticky', 'static', 'relative'],
      description: 'Positioning of the app bar',
    },
    elevation: {
      control: { type: 'number', min: 0, max: 24 },
      description: 'Shadow elevation level',
    },
  },
  args: {
    title: 'My Portfolio',
    showMenuIcon: true,
    position: 'static',
    elevation: 4,
  },
} satisfies Meta<typeof Appbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default appbar
export const Default: Story = {
  args: {
    title: 'My Portfolio',
  },
};

export const WithCustomTitle: Story = {
  args: {
    title: 'Custom Application Title',
  },
  parameters: {
    docs: {
      description: {
        story: "An app bar with a custom title text.",
      },
    },
  },
};

export const WithoutMenuIcon: Story = {
  args: {
    title: 'Clean Header',
    showMenuIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: "An app bar without the menu icon for a cleaner look.",
      },
    },
  },
};

// Different positions
export const Fixed: Story = {
  args: {
    title: 'Fixed Position',
    position: 'fixed',
  },
  parameters: {
    docs: {
      description: {
        story: "A fixed position app bar that stays at the top when scrolling.",
      },
    },
  },
};

export const Sticky: Story = {
  args: {
    title: 'Sticky Position',
    position: 'sticky',
  },
  parameters: {
    docs: {
      description: {
        story: "A sticky app bar that sticks to the top when scrolling.",
      },
    },
  },
};

// Custom styling
export const CustomBackground: Story = {
  args: {
    title: 'Custom Colors',
    backgroundColor: '#e74c3c',
  },
  parameters: {
    docs: {
      description: {
        story: "An app bar with custom background color.",
      },
    },
  },
};

export const NoElevation: Story = {
  args: {
    title: 'Flat Design',
    elevation: 0,
  },
  parameters: {
    docs: {
      description: {
        story: "An app bar with no shadow for a flat design look.",
      },
    },
  },
};

export const HighElevation: Story = {
  args: {
    title: 'High Shadow',
    elevation: 12,
  },
  parameters: {
    docs: {
      description: {
        story: "An app bar with high elevation for a more prominent shadow.",
      },
    },
  },
};

// With additional content
export const WithActions: Story = {
  args: {
    title: 'App with Actions',
    children: (
      <>
        <Button color="inherit" sx={{ ml: 1 }}>
          Login
        </Button>
        <Button color="inherit" sx={{ ml: 1 }}>
          Sign Up
        </Button>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "An app bar with additional action buttons on the right side.",
      },
    },
  },
};