
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

const storybookUrl = import.meta.env.VITE_STORYBOOK_URL;
const resumeUrl = '/src/components/Resume/index.html';

export default function Home() {
  return (
    <Box className="home">
      <Appbar position="static" title="Peter Menh Portfolio" />
      <Box className="home__container">
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
            <Box className="home__actions">
              <Button
                color="primary"
                variant="contained"
                onClick={() => window.open(storybookUrl, '_blank')}
              >
                View Design System
              </Button>
              <Button
                color="secondary"
                variant="outlined"
                onClick={() => window.open(resumeUrl, '_blank')}
              >
                View Resume
              </Button>
            </Box>
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
