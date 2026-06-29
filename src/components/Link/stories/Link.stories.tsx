import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Typography } from '@mui/material';
import Link from '../Link';
import { LinkProps } from '../Link.types';

const meta: Meta<LinkProps> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Link** component wraps MUI Link with design-token \`colorVariant\` and \`underlineVariant\` props.  
Use it for navigation, external references, and in-text links.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    colorVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted'],
      description: 'Color from design token',
    },
    underlineVariant: {
      control: { type: 'select' },
      options: ['none', 'hover', 'always'],
      description: 'When the underline is shown',
    },
    href: {
      control: 'text',
      description: 'Target URL',
    },
    children: {
      control: 'text',
      description: 'Link text content',
    },
  },
  args: {
    href: '#',
    children: 'View project →',
    colorVariant: 'primary',
    underlineVariant: 'hover',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllColors: Story = {
  name: 'All Color Variants',
  render: (args) => (
    <Stack spacing={1} bgcolor="background.paper" p={2} borderRadius={1}>
      <Link {...args} colorVariant="primary">Primary link</Link>
      <Link {...args} colorVariant="secondary">Secondary link</Link>
      <Link {...args} colorVariant="muted">Muted link</Link>
    </Stack>
  ),
};

export const AllUnderlines: Story = {
  name: 'All Underline Variants',
  render: (args) => (
    <Stack spacing={1} bgcolor="background.paper" p={2} borderRadius={1}>
      <Link {...args} underlineVariant="none">No underline</Link>
      <Link {...args} underlineVariant="hover">Underline on hover</Link>
      <Link {...args} underlineVariant="always">Always underlined</Link>
    </Stack>
  ),
};

export const InBodyText: Story = {
  name: 'In Body Text',
  parameters: { docs: { description: { story: 'Links used inline within a paragraph of body text.' } } },
  render: () => (
    <Typography variant="body1" maxWidth={400} bgcolor="background.paper" p={2} borderRadius={1}>
      I'm a software engineer who loves building things for the web. Check out my{' '}
      <Link href="#" colorVariant="primary" underlineVariant="hover">latest projects</Link>{' '}
      or read more{' '}
      <Link href="#" colorVariant="secondary" underlineVariant="always">about me</Link>.
    </Typography>
  ),
};

export const NavigationLinks: Story = {
  name: 'Navigation Links',
  parameters: { docs: { description: { story: 'Links used in a nav bar context.' } } },
  render: () => (
    <Stack direction="row" spacing={3} bgcolor="primary.main" p={2} borderRadius={1}>
      {['Home', 'Projects', 'Resume', 'Contact'].map((item) => (
        <Link
          key={item}
          href="#"
          colorVariant="muted"
          underlineVariant="none"
          sx={{ color: 'white', '&:hover': { color: 'rgba(255,255,255,0.75)' } }}
        >
          {item}
        </Link>
      ))}
    </Stack>
  ),
};
