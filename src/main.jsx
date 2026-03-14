import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/400.css";  // regular
import "@fontsource/playfair-display/700.css";  // bold
import "@fontsource/inter";
import "@fontsource/inter/400.css";  // regular
import "@fontsource/inter/500.css";  // medium
import "@fontsource/inter/700.css";  // bold

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);