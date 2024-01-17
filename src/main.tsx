import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import FullscreenToggle from './App/Services/FullScreanPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FullscreenToggle />
    <App />
  </React.StrictMode>,
)
