import './App.css'
import AreaPrincipal from './componentes/area-principal/area-principal'
import Footer from './componentes/footer/footer.jsx'
import Navbar from './componentes/navbar/navbar.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <AreaPrincipal />
      <Footer />
    </>
  )
}

export default App