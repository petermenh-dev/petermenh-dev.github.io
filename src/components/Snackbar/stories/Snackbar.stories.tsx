import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import Snackbar from '../Snackbar';
import Button from '../../Button';
import type { SnackbarProps } from '../Snackbar.types';

const PREVIEW_STYLE: React.CSSProperties = {
  minHeight: 300,
  minWidth: 500,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
};

const meta: Meta<SnackbarProps> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Snackbar** component wraps MUI Snackbar + Alert for consistent feedback messages.
Use it for success/error messages after form submissions or actions.

Custom props:
- \`message\`: The text to display.
- \`severity\`: \`'success' | 'error' | 'warning' | 'info'\`
- \`onClose\`: Callback when the snackbar closes.
- \`anchorOrigin\`: Position of the snackbar. Default: \`{ vertical: 'bottom', horizontal: 'center' }\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
    },
    message: { control: 'text' },
    autoHideDuration: { control: 'number' },
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={PREVIEW_STYLE}>
        <button onClick={() => setOpen(true)}>Show Success</button>
        <Snackbar {...args} open={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
  args: {
    message: 'Form submitted successfully!',
    severity: 'success',
  },
};

export const Error: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={PREVIEW_STYLE}>
        <button onClick={() => setOpen(true)}>Show Error</button>
        <Snackbar {...args} open={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
  args: {
    message: 'Something went wrong. Please try again.',
    severity: 'error',
  },
};

export const Warning: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={PREVIEW_STYLE}>
        <button onClick={() => setOpen(true)}>Show Warning</button>
        <Snackbar {...args} open={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
  args: {
    message: 'You have unsaved changes.',
    severity: 'warning',
  },
};

export const Info: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={PREVIEW_STYLE}>
        <button onClick={() => setOpen(true)}>Show Info</button>
        <Snackbar {...args} open={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
  args: {
    message: 'New version available. Please refresh.',
    severity: 'info',
  },
};

// ─── AnchorOrigin Stories ────────────────────────────────────────────────────

export const AnchorTopLeft: Story = {
  name: 'Anchor: Top Left',
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={PREVIEW_STYLE}>
        <button onClick={() => setOpen(true)}>Show Top Left</button>
        <Snackbar
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        />
      </div>
    );
  },
  args: { message: 'Snackbar — top left', severity: 'info' },
};

export const AnchorTopCenter: Story = {
  name: 'Anchor: Top Center',
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={PREVIEW_STYLE}>
        <button onClick={() => setOpen(true)}>Show Top Center</button>
        <Snackbar
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        />
      </div>
    );
  },
  args: { message: 'Snackbar — top center', severity: 'info' },
};

export const AnchorTopRight: Story = {
  name: 'Anchor: Top Right',
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={PREVIEW_STYLE}>
        <button onClick={() => setOpen(true)}>Show Top Right</button>
        <Snackbar
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        />
      </div>
    );
  },
  args: { message: 'Snackbar — top right', severity: 'info' },
};

export const AnchorBottomLeft: Story = {
  name: 'Anchor: Bottom Left',
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={PREVIEW_STYLE}>
        <button onClick={() => setOpen(true)}>Show Bottom Left</button>
        <Snackbar
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        />
      </div>
    );
  },
  args: { message: 'Snackbar — bottom left', severity: 'info' },
};

export const AnchorBottomCenter: Story = {
  name: 'Anchor: Bottom Center (Default)',
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={PREVIEW_STYLE}>
        <button onClick={() => setOpen(true)}>Show Bottom Center</button>
        <Snackbar
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
      </div>
    );
  },
  args: { message: 'Snackbar — bottom center (default)', severity: 'info' },
};

export const AnchorBottomRight: Story = {
  name: 'Anchor: Bottom Right',
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={PREVIEW_STYLE}>
        <button onClick={() => setOpen(true)}>Show Bottom Right</button>
        <Snackbar
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        />
      </div>
    );
  },
  args: { message: 'Snackbar — bottom right', severity: 'info' },
};

// ─── With Button Component ───────────────────────────────────────────────────

export const WithButton: Story = {
  name: 'With Button Component',
  parameters: {
    docs: {
      description: {
        story: 'Uses the design system `Button` component to trigger the Snackbar.',
      },
    },
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={PREVIEW_STYLE}>
        <Button label="Save Changes" primary onClick={() => setOpen(true)} />
        <Snackbar {...args} open={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
  args: {
    message: 'Changes saved successfully!',
    severity: 'success',
  },
};
