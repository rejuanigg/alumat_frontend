import './App.css'
import AreaPrincipal from './componentes/area-principal/area-principal'
import Footer from './componentes/footer/footer.jsx'
import Navbar from './componentes/navbar/navbar.jsx'
import Arrayfunction from './componentes/array/array.jsx'
import {Pantallas} from './componentes/estados/pantallas.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <AreaPrincipal />
      <Arrayfunction/>
      <Pantallas/>
      <Footer />
    </>
  )
}

export default App