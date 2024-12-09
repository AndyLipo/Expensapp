import { Routes, Route } from 'react-router-dom';
import { IniciarSesionFormulario } from "./Componentes/IniciarSesion/IniciarSesionFormulario"
import { CrearCuentaPagina } from "./Paginas/CrearCuentaPagina"
import './index.css'


function App() {

  return (
    <Routes>
      <Route path='/' element={<CrearCuentaPagina />} />
      <Route path='/login' element={<IniciarSesionFormulario />} />
    </Routes>
  )
}

export default App
