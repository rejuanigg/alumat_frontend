import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AreaPrincipal from './componentes/area-principal/area-principal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AreaPrincipal/>
  </StrictMode>,
)
