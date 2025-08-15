import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test1 from './test/Test1.jsx'

createRoot(document.getElementById('roo')).render(
  <StrictMode>
    <App />
    <Test1 />
  </StrictMode>,
)
