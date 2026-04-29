
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
} from './components';
import Resume from './components/ResumeReact';
import ThemeCustomizerPanel from './components/ThemeCustomizer';

const storybookUrl = import.meta.env.VITE_STORYBOOK_URL;
const resumeUrl = '/src/components/Resume/index.html';

export default function Home() {
  const [showStorybook, setShowStorybook] = React.useState(false);
  const [showResumeHtml, setShowResumeHtml] = React.useState(false);
  const [showResume, setShowResume] = React.useState(false);
  // Closes all content panels at once
  const closeAllPanels = () => {
    setShowStorybook(false);
    setShowResumeHtml(false);
    setShowResume(false);
  };

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
      >
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'nowrap' }}>
          <Button
            color="primary"
            variant="contained"
            size="small"
            disabled={!storybookUrl}
            onClick={() => closeAllPanels()}
          >
            Close All
          </Button>
          <Button
            color="primary"
            variant="contained"
            size="small"
            disabled={!storybookUrl}
            onClick={() => setShowStorybook((v) => !v)}
          >
            {showStorybook ? 'Hide Storybook' : 'Design System'}
          </Button>
          <Button
            color="primary"
            variant="outlined"
            size="small"
            onClick={() => setShowResumeHtml((v) => !v)}
          >
            {showResumeHtml ? 'Hide Resume (HTML)' : 'Resume (HTML)'}
          </Button>
          <Button 
            color="primary" 
            variant="outlined" 
            size="small" 
            onClick={() => setShowResume((v) => !v)}
          >
            {showResume ? 'Hide Resume' : 'Resume (React)'}
          </Button>
        </Box>
      </Appbar>
      <Box
        sx={{
          maxWidth: '90%',
          width: '100%',
          mt: 6,
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          '& > .MuiPaper-root, & > .MuiCard-root': {
            width: '100%',
            boxSizing: 'border-box',
          },
        }}
      >
        {showStorybook && storybookUrl && (
          <Paper rounded elevation={3} noPadding sx={{ width: '100%', overflow: 'hidden' }}>
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

        {showResumeHtml && (
          <Paper rounded elevation={3} noPadding sx={{ width: '100%', overflow: 'hidden' }}>
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

        {showResume && <Resume />}
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
        <Divider spacing="large" sx={{ my: '2.5rem' }} />
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
        </Card>
      </Box>

      </Box>
    </Box>
  );
}
