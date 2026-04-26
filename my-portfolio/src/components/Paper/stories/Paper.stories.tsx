import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Typography } from '@mui/material';
import Paper from '../Paper';
import { PaperProps } from '../Paper.types';

const meta: Meta<PaperProps> = {
  title: 'Components/Paper',
  component: Paper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Paper** component wraps MUI Paper with \`rounded\` and \`noPadding\` convenience props.
Use it for elevated section backgrounds, cards, and content surfaces.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    rounded: { control: 'boolean', description: 'Apply extra border radius from design tokens' },
    noPadding: { control: 'boolean', description: 'Remove default padding' },
    elevation: { control: { type: 'range', min: 0, max: 24 }, description: 'MUI elevation shadow depth' },
  },
  args: {
    rounded: false,
    noPadding: false,
    elevation: 1,
    children: 'Section content goes here.',
  },
} satisfies Meta<PaperProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Rounded: Story = {
  args: { rounded: true, elevation: 2 },
};

export const Flat: Story = {
  args: { elevation: 0 },
};

export const HighElevation: Story = {
  args: { elevation: 8 },
};

export const NoPadding: Story = {
  args: {
    noPadding: true,
    children: (
      <div style={{ padding: '24px', background: '#f5f5f5' }}>Custom padded inner content</div>
    ),
  },
};

export const SectionBackground: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 480 }}>
      <Paper elevation={1} rounded>
        <Typography variant="h6" gutterBottom>About Me</Typography>
        <Typography variant="body2">
          Full-stack developer with a passion for building clean, accessible, and performant web apps.
        </Typography>
      </Paper>
      <Paper elevation={3} rounded>
        <Typography variant="h6" gutterBottom>Skills</Typography>
        <Typography variant="body2">React, TypeScript, Node.js, MUI, Vite, Storybook</Typography>
      </Paper>
      <Paper elevation={0} rounded sx={{ border: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h6" gutterBottom>Contact</Typography>
        <Typography variant="body2">Feel free to reach out via email or LinkedIn.</Typography>
      </Paper>
    </Stack>
  ),
};
