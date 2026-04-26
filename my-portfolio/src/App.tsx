import React from 'react';
import { Header, Resume, Projects, Button } from './components';

const storybookUrl = import.meta.env.VITE_STORYBOOK_URL;

export default function App() {
  return (
    <div>
      <Header />
      <Resume />
      <Projects />
      <Button color={'success'} variant={'contained'} onClick={() => window.open(storybookUrl, "_blank")} >Open Design System in New Tab</Button>
    </div>
  );
}