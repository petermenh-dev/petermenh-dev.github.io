import type { Meta, StoryObj } from '@storybook/react-vite';
import Accordion from '../Accordion';
import type { AccordionProps } from '../Accordion.types';

const meta: Meta<AccordionProps> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The **Accordion** component wraps MUI Accordion with a consistent design system style.
Use it for FAQs, collapsible experience timelines, and expandable content sections.

Custom props:
- \`items\`: Array of \`{ id, summary, detail, disabled? }\` items to render.
- \`allowMultiple\`: If \`true\`, multiple panels can be open simultaneously.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: { control: 'boolean' },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 'panel1',
        summary: 'What technologies do you use?',
        detail: 'I specialize in React, TypeScript, MUI, Node.js, and modern front-end tooling like Vite and Storybook.',
      },
      {
        id: 'panel2',
        summary: 'Are you available for freelance work?',
        detail: 'Yes! I am open to freelance and contract opportunities. Feel free to reach out via the contact section.',
      },
      {
        id: 'panel3',
        summary: 'What is your preferred working style?',
        detail: 'I enjoy collaborative environments with a focus on clean code, design systems, and iterative development.',
      },
    ],
    allowMultiple: false,
  },
};

export const MultipleOpen: Story = {
  args: {
    items: [
      {
        id: 'exp1',
        summary: '2023–Present: Senior Frontend Developer',
        detail: 'Led design system buildout using MUI and Storybook, improving component consistency across 3 product teams.',
      },
      {
        id: 'exp2',
        summary: '2021–2023: Frontend Developer',
        detail: 'Built React SPAs, mentored junior developers, and shipped accessible UI components.',
      },
      {
        id: 'exp3',
        summary: '2019–2021: Junior Developer',
        detail: 'Worked on internal tools using React and REST APIs.',
      },
    ],
    allowMultiple: true,
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      {
        id: 'q1',
        summary: 'Can I view your source code?',
        detail: 'Yes, everything is open source on GitHub.',
      },
      {
        id: 'q2',
        summary: 'Unavailable question',
        detail: 'This panel is disabled.',
        disabled: true,
      },
    ],
    allowMultiple: false,
  },
};
