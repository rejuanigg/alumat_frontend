import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './componentes/footer/footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Footer/>
  </StrictMode>,
)
