import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Comm from './components/comm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comm />
  </StrictMode>,
)
