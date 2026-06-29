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
    position: 'static',
    elevation: 4,
  },
} satisfies Meta<typeof Appbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithActions: Story = {
  parameters: {
    docs: { description: { story: 'App bar with nav action buttons in the right slot via children.' } },
  },
  render: (args) => (
    <Appbar {...args}>
      <Button color="inherit">Projects</Button>
      <Button color="inherit">Resume</Button>
      <Button color="inherit">Contact</Button>
    </Appbar>
  ),
};

export const FlatNoShadow: Story = {
  args: { elevation: 0 },
  parameters: {
    docs: { description: { story: 'Zero elevation gives a flat, borderless appearance.' } },
  },
};

export const CustomColor: Story = {
  args: { backgroundColor: '#1a1a2e', title: 'Dark Portfolio' },
  parameters: {
    docs: { description: { story: 'Override background with any hex color.' } },
  },
};

export const PortfolioHeader: Story = {
  name: 'Portfolio Header (realistic)',
  parameters: {
    docs: { description: { story: 'A realistic portfolio header with logo and nav links.' } },
  },
  render: () => (
    <Appbar title="Peter Menh" elevation={2}>
      <Button color="inherit" size="small">About</Button>
      <Button color="inherit" size="small">Projects</Button>
      <Button color="inherit" size="small">Resume</Button>
      <Button color="inherit" size="small" variant="outlined" sx={{ ml: 1, borderColor: 'rgba(255,255,255,0.5)' }}>
        Contact
      </Button>
    </Appbar>
  ),
};