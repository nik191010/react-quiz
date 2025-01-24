import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import Home from './pages/Home'
import ComponentShowCasePage from './pages/ComponentShowCasePage'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<ComponentShowCasePage />} />
      </Routes>
    </Router>
  </ThemeProvider>
)

export default App
