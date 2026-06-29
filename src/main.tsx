import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeCustomizationProvider } from './theme'
import Home from './Home'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {/* ThemeCustomizationProvider owns ThemeProvider + CssBaseline internally */}
      <ThemeCustomizationProvider>
        <Home />
      </ThemeCustomizationProvider>
    </StrictMode>,
  );
}
