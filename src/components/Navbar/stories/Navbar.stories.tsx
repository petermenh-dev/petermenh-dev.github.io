import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Stack, Typography } from '@mui/material';
import Navbar from '../Navbar';
import { NavbarProps } from '../Navbar.types';

const meta: Meta<NavbarProps> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The **Navbar** component extends Appbar with a responsive Toolbar layout.  
Pass nav links, logo, and action buttons as \`children\`.  
Use \`rounded\` for a pill/card style, or leave flat for a full-width header.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    rounded: {
      control: 'boolean',
      description: 'Apply theme border radius to the bar',
    },
    elevation: {
      control: { type: 'number', min: 0, max: 24 },
      description: 'Shadow elevation level',
    },
  },
  args: {
    rounded: false,
    elevation: 4,
    position: 'static',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const NavLinks = () => (
  <Stack direction="row" spacing={2}>
    {['About', 'Projects', 'Resume', 'Contact'].map((item) => (
      <Button key={item} color="inherit" size="small">{item}</Button>
    ))}
  </Stack>
);

export const Default: Story = {
  render: (args) => (
    <Navbar {...args}>
      <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
        Portfolio
      </Typography>
      <NavLinks />
    </Navbar>
  ),
};

export const Rounded: Story = {
  args: { rounded: true },
  parameters: {
    docs: { description: { story: 'Rounded corners using the theme border radius token.' } },
  },
  render: (args) => (
    <Navbar {...args}>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>Portfolio</Typography>
      <NavLinks />
    </Navbar>
  ),
};

export const FlatNoShadow: Story = {
  args: { elevation: 0 },
  parameters: {
    docs: { description: { story: 'Zero elevation for a flat, borderless bar.' } },
  },
  render: (args) => (
    <Navbar {...args}>
      <Typography variant="h6">Portfolio</Typography>
      <NavLinks />
    </Navbar>
  ),
};

export const WithCallToAction: Story = {
  name: 'With Call-to-Action',
  parameters: {
    docs: { description: { story: 'A navbar with an outlined CTA button at the end.' } },
  },
  render: (args) => (
    <Navbar {...args}>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>Peter Menh</Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Button color="inherit" size="small">Projects</Button>
        <Button color="inherit" size="small">Resume</Button>
        <Button
          color="inherit"
          size="small"
          variant="outlined"
          sx={{ borderColor: 'rgba(255,255,255,0.5)', ml: 1 }}
        >
          Contact
        </Button>
      </Stack>
    </Navbar>
  ),
};