import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { HashRouter, Route, Routes } from 'react-router'
import { Main } from './pages/main/main.tsx'
import { Confidentiality } from './pages/confidentiality/confidentiality.tsx'
import { PersonalData } from './pages/personalData/personalData.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename="/">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/confidentiality' element={<Confidentiality />}/>
        <Route path='/personaldata' element={<PersonalData />}/>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
