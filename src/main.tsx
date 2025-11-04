import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { HashRouter } from 'react-router'
import { Main } from './pages/main/main.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Main />
    </HashRouter>
  </StrictMode>,
)
