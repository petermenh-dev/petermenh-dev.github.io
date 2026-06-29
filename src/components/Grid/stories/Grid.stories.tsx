import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography } from '@mui/material';
import Grid from '../Grid';
import { GridProps } from '../Grid.types';

// ── Mock project card for demos ───────────────────────────────────────────────
const MockCard = ({ label = 'Project', color = '#e3f2fd' }: { label?: string; color?: string }) => (
  <Box
    sx={{
      background: color,
      borderRadius: 2,
      p: 2,
      minHeight: 140,
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      border: '1px solid',
      borderColor: 'divider',
    }}
  >
    <Box sx={{ width: '100%', height: 80, background: 'rgba(0,0,0,0.08)', borderRadius: 1 }} />
    <Typography variant="body2" fontWeight="bold">{label}</Typography>
    <Typography variant="caption" color="text.secondary">React · TypeScript · MUI</Typography>
  </Box>
);

const projects = [
  { label: 'Portfolio Site', color: '#e3f2fd' },
  { label: 'Design System', color: '#fce4ec' },
  { label: 'CLI Tool', color: '#e8f5e9' },
  { label: 'API Gateway', color: '#fff3e0' },
  { label: 'Dashboard', color: '#f3e5f5' },
  { label: 'Mobile App', color: '#e0f7fa' },
];

const skills = ['React', 'TypeScript', 'Node.js', 'MUI', 'Vite', 'Git', 'CSS', 'Figma'];

// ── Meta ──────────────────────────────────────────────────────────────────────
const meta: Meta<GridProps> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The **Grid** component is a responsive CSS-grid container with preset column counts and gaps.

- Mobile: always **1 column**
- Tablet (sm+): up to **2 columns**
- Desktop (md+): \`columnPreset\` columns

Use it for project galleries, skill grids, and any multi-column layout.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    columnPreset: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
      description: 'Number of columns at md+ breakpoint',
    },
    gapPreset: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
      description: 'Gap between grid items',
    },
  },
  args: {
    columnPreset: 3,
    gapPreset: 'medium',
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Stories ───────────────────────────────────────────────────────────────────

export const ProjectGallery: Story = {
  name: 'Project Gallery (3 columns)',
  parameters: { docs: { description: { story: 'Typical 3-column project card gallery.' } } },
  render: (args) => (
    <Grid {...args}>
      {projects.map((p) => (
        <MockCard key={p.label} label={p.label} color={p.color} />
      ))}
    </Grid>
  ),
};

export const TwoColumn: Story = {
  name: '2 Columns',
  args: { columnPreset: 2 },
  render: (args) => (
    <Grid {...args}>
      {projects.slice(0, 4).map((p) => (
        <MockCard key={p.label} label={p.label} color={p.color} />
      ))}
    </Grid>
  ),
};

export const SkillGrid: Story = {
  name: 'Skill Grid (4 columns)',
  args: { columnPreset: 4, gapPreset: 'small' },
  parameters: { docs: { description: { story: 'Compact 4-column grid for tech skill badges.' } } },
  render: (args) => (
    <Grid {...args}>
      {skills.map((skill) => (
        <Box
          key={skill}
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            p: 1.5,
            textAlign: 'center',
            bgcolor: 'background.paper',
          }}
        >
          <Typography variant="body2" fontWeight="medium">{skill}</Typography>
        </Box>
      ))}
    </Grid>
  ),
};

export const SingleColumn: Story = {
  name: 'Single Column',
  args: { columnPreset: 1, gapPreset: 'small' },
  render: (args) => (
    <Grid {...args}>
      {projects.slice(0, 3).map((p) => (
        <MockCard key={p.label} label={p.label} color={p.color} />
      ))}
    </Grid>
  ),
};

export const LargeGap: Story = {
  name: 'Large Gap',
  args: { columnPreset: 3, gapPreset: 'large' },
  render: (args) => (
    <Grid {...args}>
      {projects.map((p) => (
        <MockCard key={p.label} label={p.label} color={p.color} />
      ))}
    </Grid>
  ),
};
