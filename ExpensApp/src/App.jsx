import { Routes, Route } from 'react-router-dom';
import { IniciarSesionFormulario } from "./Componentes/IniciarSesion/IniciarSesionFormulario"
import { CrearCuentaPagina } from "./Paginas/CrearCuentaPagina"
import './index.css'
import { useEffect, useState } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular una llamada a una API
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula 2 segundos de tiempo de carga
  }, []);
  return (
    <Routes>
      <Route path='/' element={<CrearCuentaPagina />} />
      <Route path='/login' element={<IniciarSesionFormulario />} />
    </Routes>
    
  )
}

export default App
