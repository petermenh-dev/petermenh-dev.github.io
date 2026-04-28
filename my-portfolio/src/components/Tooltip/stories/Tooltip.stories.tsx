import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Button, IconButton, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from '../Tooltip';
import { TooltipProps } from '../Tooltip.types';

const meta: Meta<TooltipProps> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Tooltip** component wraps MUI Tooltip with a \`variant\` prop.
- \`default\` — standard compact tooltip
- \`rich\` — wider tooltip with more padding for longer descriptions

Use it for icon button labels, field hints, and contextual help.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'rich'],
      description: 'Tooltip size/style variant',
    },
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end'],
    },
    title: { control: 'text' },
    arrow: { control: 'boolean' },
  },
  args: {
    variant: 'default',
    placement: 'top',
    title: 'Tooltip text',
    arrow: false,
  },
} satisfies Meta<TooltipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <IconButton><InfoIcon /></IconButton>
    </Tooltip>
  ),
};

export const WithArrow: Story = {
  args: { arrow: true, title: 'Arrow tooltip' },
  render: (args) => (
    <Tooltip {...args}>
      <IconButton><HelpOutlineIcon /></IconButton>
    </Tooltip>
  ),
};

export const RichVariant: Story = {
  args: {
    variant: 'rich',
    arrow: true,
    title: 'This is a richer tooltip with more descriptive content. It supports longer lines of contextual help text.',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="outlined">Hover for rich tooltip</Button>
    </Tooltip>
  ),
};

export const AllPlacements: Story = {
  render: () => (
    <Stack spacing={2} alignItems="center" sx={{ p: 6 }}>
      {(['top', 'right', 'bottom', 'left'] as const).map((placement) => (
        <Tooltip key={placement} title={`Placed ${placement}`} placement={placement} arrow>
          <Button variant="outlined" size="small" sx={{ width: 120 }}>{placement}</Button>
        </Tooltip>
      ))}
    </Stack>
  ),
};

export const IconExplanations: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Tooltip title="View on GitHub" arrow>
        <IconButton color="default"><GitHubIcon /></IconButton>
      </Tooltip>
      <Tooltip title="Connect on LinkedIn" arrow>
        <IconButton color="primary"><LinkedInIcon /></IconButton>
      </Tooltip>
      <Tooltip title="Send an email" arrow>
        <IconButton color="secondary"><EmailIcon /></IconButton>
      </Tooltip>
    </Stack>
  ),
};

export const ContextualHelp: Story = {
  render: () => (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="body1">Years of Experience</Typography>
      <Tooltip
        variant="rich"
        arrow
        title="Includes professional work, freelance projects, and open source contributions since 2021."
      >
        <HelpOutlineIcon fontSize="small" color="action" sx={{ cursor: 'help' }} />
      </Tooltip>
    </Stack>
  ),
};
