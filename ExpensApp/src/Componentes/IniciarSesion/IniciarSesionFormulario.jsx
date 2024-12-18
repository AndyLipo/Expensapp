import { useEffect, useState } from 'react';
import IniciarSesionContraseña from './IniciarSesionContraseña'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CrearCuentaMail from '../CrearCuenta/CrearCuentaMail';


export const IniciarSesionFormulario = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
   useEffect(() => {
      // Simular una llamada a una API
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Simula 2 segundos de tiempo de carga
    }, []);
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        console.log('Enviando:', { email, password });
        const response = await axios.post(
          'http://localhost:3000/login',
          {
            usuarioEmail: email,
            usuarioPassword: password,
          },
          { withCredentials: true }          
        );
        setMensaje('Usuario registrado con éxito.');
        console.log('Respuesta del servidor:', response.data);

        navigate('/perfil');
      } catch (error) {
        console.error('Error al registrar el usuario:', error.response?.data || error.message);
        setMensaje(
          error.response?.data?.message || 'Error al registrar el usuario. Intente nuevamente.'
        );
      } finally {
        setIsSubmitting(false);
      }
    }

    if(isLoading) {
      // Mostrar Skeleton mientras carga
    return (
      <div>
        <div className="space-y-10 max-w-md mx-auto">
          <Skeleton height={44} width="90%" />
          <Skeleton height={44} className="w-full mt-5"/> 
        </div>
        <div className='mt-3 max-w-sm mx-auto'>
          <Skeleton height={50} borderRadius={20} width="100%" className=''/>
          <Skeleton height={50} borderRadius={20} width="100%" className=''/>
        </div>
      </div>
    );
   }
    return (
    <>
    <form
  className="space-y-5 w-full max-w-[244px] mx-auto flex flex-col items-center justify-center"
  onSubmit={handleSubmit}
>
  {/* Campo de Email */}
  <div className="w-full">
    <CrearCuentaMail
      titulo="Email"
      id="usuarioEmail"
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  {/* Campo de Contraseña */}
  <div className="w-full">
    <IniciarSesionContraseña
      id="usuarioPassword"
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>

  {/* Botón "Crear cuenta" */}
  <button
    type="submit"
    disabled={isSubmitting}
    className={`w-[206px] p-3 bg-[#94D9A4] text-[#D6F2E5] rounded-full ${
      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
    }`}
  >
    {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
  </button>

  {/* Botón "Cancelar" */}
  <button
    type="button" // Cambié el tipo a "button" para evitar que envíe el formulario
    disabled={isSubmitting}
    className={`w-[206px] p-3 bg-[#4A607A] text-[#D6F2E5] rounded-full ${
      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
    }`}
  >
    {isSubmitting ? "Cancelando..." : "Cancelar"}
  </button>

  {/* Mensaje */}
  {mensaje && (
    <p
      className={`mt-4 text-center ${
        mensaje.includes("éxito") ? "text-green-500" : "text-red-500"
      }`}
    >
      {mensaje}
    </p>
  )}
</form>

    </>
)
}
