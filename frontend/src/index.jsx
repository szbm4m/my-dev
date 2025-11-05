import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import theme from './theme.js'
import { ThemeUIProvider } from 'theme-ui';
import { createTheme as materialCreateTheme, THEME_ID } from '@mui/material/styles';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import Home from './pages/Home/Home.jsx'
import Page from './Page.jsx'


const themeUITheme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#080808ff',
    background: 'rgba(220, 226, 228, 1)',
    primary: 'rgba(125, 125, 238, 1)',
  },

};


const materialTheme = materialCreateTheme();

createRoot(document.getElementById('root')).render(

  <StrictMode>
     <ThemeUIProvider theme={themeUITheme}>
      <MaterialThemeProvider theme={{ [THEME_ID]: materialTheme }}>
        <Home/>
        <App/>

      </MaterialThemeProvider>
    </ThemeUIProvider>

  </StrictMode>,
)

