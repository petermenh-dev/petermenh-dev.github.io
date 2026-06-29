import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import Dialog from '../Dialog';
import type { DialogProps } from '../Dialog.types';

const meta: Meta<DialogProps> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Dialog** component wraps MUI Dialog with a consistent design system style.
Use it for confirmations, project detail views, and image galleries.

Custom props:
- \`title\`: Header text for the dialog.
- \`description\`: Subtitle / body description text.
- \`confirmLabel\`: Label for the confirm action button.
- \`cancelLabel\`: Label for the cancel action button.
- \`onConfirm\`: Callback when confirm is clicked.
- \`onCancel\`: Callback when cancel is clicked.
- \`sizeVariant\`: \`'small' | 'medium' | 'large' | 'fullscreen'\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    sizeVariant: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'fullscreen'],
      description: 'Controls the max width of the dialog.',
    },
    title: { control: 'text' },
    description: { control: 'text' },
    confirmLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Dialog</button>
        <Dialog
          {...args}
          open={open}
          onCancel={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
  args: {
    title: 'Confirm Action',
    description: 'Are you sure you want to proceed with this action?',
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
    sizeVariant: 'medium',
  },
};

export const ProjectDetail: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>View Project</button>
        <Dialog {...args} open={open} onCancel={() => setOpen(false)} />
      </>
    );
  },
  args: {
    title: 'Portfolio Design System',
    description:
      'A comprehensive MUI-based design system built with React, TypeScript, and Storybook. Features custom theme tokens, reusable components, and full documentation.',
    sizeVariant: 'large',
    cancelLabel: 'Close',
  },
};

export const Fullscreen: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Fullscreen</button>
        <Dialog {...args} open={open} onCancel={() => setOpen(false)} />
      </>
    );
  },
  args: {
    title: 'Image Gallery',
    description: 'A fullscreen dialog for displaying images or detailed content.',
    sizeVariant: 'fullscreen',
    cancelLabel: 'Close',
  },
};
