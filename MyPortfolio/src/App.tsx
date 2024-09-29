import Contacto from "./pages/Home/Contacto/Contacto"
import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SobreMi from "./pages/Home/SobreMi/SobreMi"
import Proyectos from "./pages/Home/ProyectosPage/Proyectos"
import './css/App.css'
function App() {


  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/SobreMi" element={<SobreMi />} />
            <Route path="/Proyectos" element={<Proyectos/>} />
          </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
