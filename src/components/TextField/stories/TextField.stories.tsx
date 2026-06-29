import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Stack, Box } from '@mui/material';
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

// ── Contact Form ──────────────────────────────────────────────────────────────

export const ContactForm: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <Box
      component="form"
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 360 }}
    >
      <TextField label="Name" placeholder="Your name" fullWidth required />
      <TextField
        label="Email"
        placeholder="you@example.com"
        type="email"
        fullWidth
        required
      />
      <TextField
        label="Subject"
        placeholder="What's this about?"
        fullWidth
      />
      <TextField
        label="Message"
        placeholder="Write your message..."
        multiline
        rows={4}
        fullWidth
        required
      />
    </Box>
  ),
};

// ── Contact Form — Validation State ──────────────────────────────────────────

export const ContactFormErrors: Story = {
  name: 'Contact Form (with errors)',
  parameters: { layout: 'padded' },
  render: () => (
    <Box
      component="form"
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 360 }}
    >
      <TextField
        label="Name"
        fullWidth
        required
        error
        helperText="Name is required."
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
        required
        error
        defaultValue="not-an-email"
        helperText="Please enter a valid email address."
      />
      <TextField
        label="Message"
        multiline
        rows={4}
        fullWidth
        required
        error
        helperText="Message must be at least 10 characters."
      />
    </Box>
  ),
};

// ── Search ────────────────────────────────────────────────────────────────────

export const SearchField: Story = {
  name: 'Search',
  parameters: { layout: 'padded' },
  render: () => {
    const [value, setValue] = useState('');
    return (
      <TextField
        label="Search"
        placeholder="Search projects..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        clearable
        rounded
        startIcon={<span style={{ fontSize: 16, lineHeight: 1 }}>🔍</span>}
        sx={{ width: 320 }}
      />
    );
  },
};

// ── Filters ───────────────────────────────────────────────────────────────────

export const FilterRow: Story = {
  name: 'Filter Row',
  parameters: { layout: 'padded' },
  render: () => (
    <Stack direction="row" spacing={1.5} flexWrap="wrap">
      <TextField
        label="Project name"
        placeholder="Filter by name"
        compact
        sx={{ width: 180 }}
      />
      <TextField
        label="Technology"
        placeholder="e.g. React"
        compact
        sx={{ width: 160 }}
      />
      <TextField
        label="Year"
        placeholder="2024"
        type="number"
        compact
        sx={{ width: 100 }}
      />
    </Stack>
  ),
};