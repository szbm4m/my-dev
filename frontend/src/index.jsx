import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeUIProvider } from 'theme-ui';




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



createRoot(document.getElementById('root')).render(

  <StrictMode>
     <ThemeUIProvider theme={themeUITheme}>
        <App/>
    </ThemeUIProvider>

  </StrictMode>,
)

