import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import All from './All'




createRoot(document.getElementById('root'))
.render(
  <StrictMode>
    <All />
  </StrictMode>,
)
