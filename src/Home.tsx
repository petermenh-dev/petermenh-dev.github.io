import React from 'react';
import {
  Appbar,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Paper,
  Typography,
  Tabs,
} from './components';
import Tab from '@mui/material/Tab';
import Resume from './components/ResumeReact';
import ThemeCustomizerPanel from './components/ThemeCustomizer';

const storybookUrl = import.meta.env.DEV
  ? 'http://localhost:6006'
  : './storybook/';
const resumeUrl = '/src/components/Resume/index.html';

export default function Home() {
  const [tabIndex, setTabIndex] = React.useState(0); // Home tab is default

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'background.default',
      }}
    >
      <ThemeCustomizerPanel />
      {/* Main content column */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
        <Appbar
          position="static"
          title="Peter Menh"
          onTitleClick={() => { window.location.href = '/'; }}
        />
        {/* Tabs for content panels */}
        <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto', mt: 2 }}>
          <Tabs
            value={tabIndex}
            onChange={(_, v) => setTabIndex(v)}
            aria-label="Portfolio content panels"
            variant="fullWidth"
          >
            <Tab label="Home" />
            <Tab label="Design System" />
            <Tab label="Resume (HTML)" />
            <Tab label="Resume (React)" />
          </Tabs>
          {/* Tab panels */}
          {tabIndex === 0 && (
            <Box sx={{ mt: 2 }}>
              <Paper rounded elevation={3}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    py: '2.5rem',
                  }}
                >
                  <Badge badgeContent={<span>New</span>} color="secondary" sx={{ mb: '0.5rem' }}>
                    <Avatar size="xlarge" bordered src="/avatar.png" alt="Peter Menh" />
                  </Badge>
                  <Typography variant="h4" sx={{ mt: '0.75rem', fontWeight: 700 }}>
                    Peter Menh
                  </Typography>
                  <Typography variant="body1" sx={{ mt: '0.5rem', mb: '1rem', textAlign: 'center', color: 'text.secondary' }}>
                    Full-Stack Developer · Design System Enthusiast · React/MUI Specialist
                  </Typography>
                </Box>
              </Paper>
              {/* <Divider spacing="large" sx={{ my: '2.5rem' }} />
              <Card>
                <Box sx={{ p: '1.5rem' }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: '0.5rem' }} gutterBottom>
                    Featured Projects
                  </Typography>
                  <Typography variant="body2" sx={{ mb: '1rem', color: 'text.secondary' }}>
                    Explore my latest work and open source contributions.
                  </Typography>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => window.location.href = '#projects'}
                  >
                    View Projects
                  </Button>
                </Box>
              </Card> */}
            </Box>
          )}
          {tabIndex === 1 && storybookUrl && (
            <Paper rounded elevation={3} noPadding sx={{ width: '100%', overflow: 'hidden', mt: 2 }}>
              <Box
                sx={{
                  p: '0.85rem 1rem',
                  fontWeight: 700,
                  borderBottom: '2px solid',
                  borderColor: 'divider',
                  backgroundColor: 'background.paper',
                }}
              >
                Design System (Storybook)
              </Box>
              <iframe
                style={{ width: '100%', minHeight: 720, height: '80vh', border: 0, display: 'block', background: '#fff' }}
                src={storybookUrl}
                title="Design System Storybook"
              />
            </Paper>
          )}
          {tabIndex === 2 && (
            <Paper rounded elevation={3} noPadding sx={{ width: '100%', overflow: 'hidden', mt: 2 }}>
              <Box
                sx={{
                  p: '0.85rem 1rem',
                  fontWeight: 700,
                  borderBottom: '2px solid',
                  borderColor: 'divider',
                  backgroundColor: 'background.paper',
                }}
              >
                Resume (HTML)
              </Box>
              <iframe
                style={{ width: '100%', minHeight: 720, height: '80vh', border: 0, display: 'block', background: '#fff' }}
                src={resumeUrl}
                title="Resume HTML"
              />
            </Paper>
          )}
          {tabIndex === 3 && <Resume />}
        </Box>
      </Box>
    </Box>
  );
}
