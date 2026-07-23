import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { initGA } from "./utils/analytics";


initGA();

const rootElement = document.getElementById('root')
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

if (rootElement.dataset.prerendered === 'true') {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
