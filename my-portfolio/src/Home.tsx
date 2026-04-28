
import React from 'react';
import './Home.css';
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

const storybookUrl = import.meta.env.VITE_STORYBOOK_URL;
const resumeUrl = '/src/components/Resume/index.html';

export default function Home() {
  const [showStorybook, setShowStorybook] = React.useState(false);
  const [showResumeHtml, setShowResumeHtml] = React.useState(false);
  const [showResume, setShowResume] = React.useState(false);

  return (
    <Box className="home">
      <Appbar position="static" title="Peter Menh">
        <Box sx={{ display: 'flex', gap: 1 }}>
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
            color="secondary"
            variant="outlined"
            size="small"
            onClick={() => setShowResumeHtml((v) => !v)}
          >
            {showResumeHtml ? 'Hide Resume (HTML)' : 'Resume (HTML)'}
          </Button>
          <Button color="secondary" variant="outlined" size="small" onClick={() => setShowResume((v) => !v)}>
            {showResume ? 'Hide Resume' : 'Resume (React)'}
          </Button>
        </Box>
      </Appbar>
      <Box className="home__container">
        {showStorybook && storybookUrl && (
          <Paper rounded elevation={3} noPadding className="home__embed-card">
            <Box className="home__embed-header">Design System (Storybook)</Box>
            <iframe
              className="home__embed-frame"
              src={storybookUrl}
              title="Design System Storybook"
            />
          </Paper>
        )}

        {showResumeHtml && (
          <Paper rounded elevation={3} noPadding className="home__embed-card">
            <Box className="home__embed-header">Resume (HTML)</Box>
            <iframe
              className="home__embed-frame"
              src={resumeUrl}
              title="Resume HTML"
            />
          </Paper>
        )}

        {showResume && <Resume />}
        <Paper rounded elevation={3}>
          <Box className="home__intro">
            <Badge badgeContent={<span>New</span>} color="secondary" className="home__avatar-badge">
              <Avatar size="xlarge" bordered src="/avatar.png" alt="Peter Menh" />
            </Badge>
            <Typography variant="h4" className="home__name">
              Peter Menh
            </Typography>
            <Typography variant="body1" className="home__subtitle">
              Full-Stack Developer · Design System Enthusiast · React/MUI Specialist
            </Typography>
          </Box>
        </Paper>
        <Divider spacing="large" className="home__divider" />
        <Card>
          <Box className="home__projects">
            <Typography variant="h5" className="home__projects-title" gutterBottom>
              Featured Projects
            </Typography>
            <Typography variant="body2" className="home__projects-desc">
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
  );
}
