import type { Meta, StoryObj } from '@storybook/react-vite';
import Card from '../Card';
import { CardProps } from '../Card.types';

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Card** component is built on top of MUI Card.  
Customizable elevation, border radius, and hover effects.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    elevationVariant: {
      control: { type: 'select' },
      options: ['none', 'low', 'medium', 'high'],
      description: 'Custom elevation variant',
    },
    rounded: {
      control: 'boolean',
      description: 'Use theme border radius',
    },
    hoverable: {
      control: 'boolean',
      description: 'Apply hover effect',
    },
    children: {
      control: 'text',
      description: 'Card content',
    },
  },
  args: {
    children: 'Card Content',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ width: 400, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Default Card
      </div>
    ),
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
    children: <PortraitMockTemplate />,
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: <PortraitMockTemplate />,
  },
};

export const LowElevation: Story = {
  args: {
    elevationVariant: 'low',
    children: <PortraitMockTemplate />,
  },
};

export const HighElevation: Story = {
  args: {
    elevationVariant: 'high',
    children: <PortraitMockTemplate />,
  },
};

export const Custom: Story = {
  args: {
    rounded: true,
    hoverable: true,
    elevationVariant: 'medium',
    children: <PortraitMockTemplate style={{ background: '#f9f9f9', border: '2px solid #1976d2', width: '320px', height: '480px' }} />,
  },
  parameters: {
    docs: {
      description: {
        story: `Portrait layout with mock data and placeholders.\n\nTODO: Replace icon, image, and icon row with custom components.\n\nYou can override styles using the style prop.`,
      },
    },
  },
};

// Template for mock portrait layout
function PortraitMockTemplate({ style = {} }: { style?: React.CSSProperties }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        minWidth: 320,
        ...style,
      }}
    >
      {/* Top section: icon + text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* TODO: Replace with Icon component */}
        <div style={{ width: 32, height: 32, background: '#ccc', borderRadius: '50%' }} />
        <div>
          <strong>Jane Doe</strong>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>Frontend Developer</div>
        </div>
      </div>
      {/* Image placeholder */}
      <div style={{ width: '100%', height: 120, background: '#e0e0e0', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* TODO: Replace with Image component */}
        <span style={{ color: '#888' }}>Image Placeholder</span>
      </div>
      {/* Text area */}
      <div style={{ fontSize: '1rem', color: '#333' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur cursus, nisl erat.
      </div>
      {/* Icon row */}
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
        {/* TODO: Replace with IconButton components */}
        <div style={{ width: 24, height: 24, background: '#bbb', borderRadius: '50%' }} />
        <div style={{ width: 24, height: 24, background: '#bbb', borderRadius: '50%' }} />
        <div style={{ width: 24, height: 24, background: '#bbb', borderRadius: '50%' }} />
      </div>
    </div>
  );
}

