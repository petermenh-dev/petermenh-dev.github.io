import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Box, Tab, Typography } from '@mui/material';
import Tabs from '../Tabs';
import { TabsProps } from '../Tabs.types';

// ── Tab panel helper ──────────────────────────────────────────────────────────
interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      sx={{
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: '0 0 8px 8px',
        border: '1px solid',
        borderTop: 'none',
        borderColor: 'divider',
      }}
    >
      {value === index && children}
    </Box>
  );
}

// ── Meta ──────────────────────────────────────────────────────────────────────
const meta: Meta<TabsProps> = {
  title: 'Layout/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The **Tabs** component wraps MUI Tabs with design-token \`colorVariant\` support.

Use it for section switching: **Projects**, **Experience**, **Skills**, **Contact**, etc.  
Compose \`Tab\` items from MUI directly as children — this component controls only the tab bar itself.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    colorVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Indicator and selected label color',
    },
    variant: {
      control: { type: 'select' },
      options: ['standard', 'scrollable', 'fullWidth'],
      description: 'MUI Tabs variant',
    },
    centered: {
      control: 'boolean',
      description: 'Center the tab labels',
    },
  },
  args: {
    colorVariant: 'primary',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Stories ───────────────────────────────────────────────────────────────────

export const PortfolioSections: Story = {
  name: 'Portfolio Sections (interactive)',
  parameters: {
    docs: { description: { story: 'Section switcher for a portfolio page. Includes panel content.' } },
  },
  render: (args) => {
    const [value, setValue] = useState(0);
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            {...args}
            value={value}
            onChange={(_, v) => setValue(v)}
            aria-label="portfolio sections"
          >
            <Tab label="Projects" id="tab-0" aria-controls="tabpanel-0" />
            <Tab label="Experience" id="tab-1" aria-controls="tabpanel-1" />
            <Tab label="Skills" id="tab-2" aria-controls="tabpanel-2" />
            <Tab label="Contact" id="tab-3" aria-controls="tabpanel-3" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography variant="body1">🗂 Your projects go here.</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="body1">📋 Work experience and timeline.</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="body1">⚡ Tech skills and tools.</Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography variant="body1">✉️ Contact form or links.</Typography>
        </TabPanel>
      </Box>
    );
  },
};

export const SecondaryVariant: Story = {
  name: 'Secondary Color Variant',
  args: { colorVariant: 'secondary' },
  parameters: {
    docs: { description: { story: 'Uses the secondary palette color for the indicator.' } },
  },
  render: (args) => {
    const [value, setValue] = useState(0);
    return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs {...args} value={value} onChange={(_, v) => setValue(v)} aria-label="secondary tabs">
          <Tab label="All" />
          <Tab label="Web" />
          <Tab label="Mobile" />
          <Tab label="Tools" />
        </Tabs>
      </Box>
    );
  },
};

export const FullWidth: Story = {
  name: 'Full Width',
  parameters: {
    docs: { description: { story: 'Tabs stretch to fill the full container width.' } },
  },
  render: (args) => {
    const [value, setValue] = useState(0);
    return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          {...args}
          value={value}
          onChange={(_, v) => setValue(v)}
          variant="fullWidth"
          aria-label="full width tabs"
        >
          <Tab label="Projects" />
          <Tab label="Skills" />
          <Tab label="Contact" />
        </Tabs>
      </Box>
    );
  },
};

export const Centered: Story = {
  args: { centered: true },
  parameters: {
    docs: { description: { story: 'Centered tabs — good for smaller tab counts.' } },
  },
  render: (args) => {
    const [value, setValue] = useState(0);
    return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs {...args} value={value} onChange={(_, v) => setValue(v)} aria-label="centered tabs">
          <Tab label="Projects" />
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </Box>
    );
  },
};

export const Scrollable: Story = {
  name: 'Scrollable (many tabs)',
  parameters: {
    docs: { description: { story: 'Scrollable tabs for filter bars with many categories.' } },
  },
  render: (args) => {
    const [value, setValue] = useState(0);
    const labels = ['React', 'TypeScript', 'Node.js', 'Python', 'CSS', 'GraphQL', 'Docker', 'Kubernetes'];
    return (
      <Box sx={{ maxWidth: 480, borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          {...args}
          value={value}
          onChange={(_, v) => setValue(v)}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable filter tabs"
        >
          {labels.map((label, i) => (
            <Tab key={label} label={label} value={i} />
          ))}
        </Tabs>
      </Box>
    );
  },
};
