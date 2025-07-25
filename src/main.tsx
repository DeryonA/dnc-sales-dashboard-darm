import React from 'react'
import ReactDom from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'
import { darkTheme, GlobalStyle, lighTheme } from './styles/'

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={lighTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
