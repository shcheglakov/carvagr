import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router'
import { Main } from './pages/main/main.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/carvagr">
      <Main />
    </BrowserRouter>
  </StrictMode>,
)
