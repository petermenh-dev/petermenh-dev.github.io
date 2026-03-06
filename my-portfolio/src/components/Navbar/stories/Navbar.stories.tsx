import type { Meta, StoryObj } from '@storybook/react-vite';
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
The **Navbar** component is a custom navigation component.  
Use it for application navigation and menu items.  

This is a custom component that you can extend with your own functionality.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The content displayed inside the navbar',
    },
  },
  args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default navbar
export const Default: Story = {
  args: {
    children: 'Navbar Content',
    rounded: true,
  },
};