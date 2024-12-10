import { useEffect, useState } from 'react';
import IniciarSesionContraseña from './IniciarSesionContraseña'
import IniciarSesionMail from './IniciarSesionMail'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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
          <Skeleton width={200} height={14} />
          <Skeleton height={40} width="100%" />
          <Skeleton width={200} height={14} className='mt-10'/>
          <Skeleton height={44} className="w-full"/> 
        </div>
        <div className='mt-5 max-w-md mx-auto'>
          <Skeleton height={50} width="100%" className=''/>
        </div>  
      </div>
    );
   }
    return (
    <>
    <form className="space-y-10 w-full max-w-md mx-auto" onSubmit={handleSubmit}>   
      <div className="max-w-md mx-auto">
          <IniciarSesionMail 
            titulo="Email" 
            id="usuarioEmail"
            onChange={(e) => setEmail(e.target.value)}
          />
      </div>
      <div className="max-w-md mx-auto">
          <IniciarSesionContraseña 
          id="usuarioPassword"
          onChange={(e) => setPassword(e.target.value)}
          />
      </div>
      <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3 bg-blue-500 text-white rounded-lg ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
         >
            {isSubmitting ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
         </button>
         {mensaje && (
            <p className={`mt-4 text-center ${mensaje.includes('éxito') ? 'text-green-500' : 'text-red-500'}`}>
            {mensaje}
            </p>
            )
         }
    </form>
    </>
)
}
