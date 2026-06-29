import type { Preview } from '@storybook/react-vite'
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../src/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [],
      },
    },
  },
  decorators: [
    (Story) => React.createElement(ThemeProvider, { theme }, React.createElement(Story)),
  ],
};

export default preview;