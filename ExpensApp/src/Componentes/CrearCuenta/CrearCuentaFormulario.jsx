import { useEffect, useState } from 'react';
import CrearCuentaMail from './CrearCuentaMail'
import CrearCuentaNombre from './CrearCuentaNombre'
import CrearCuentaPassword from './CrearCuentaPassword'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CrearCuentaFormulario = () => {
   const navigate = useNavigate();
   const [nombre, setNombre] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [mensaje, setMensaje] = useState('');
   const [isLoading, setIsLoading] = useState(true);
   const [isSubmitting, setIsSubmitting] = useState(false);

   // Simular carga inicial del formulario
    useEffect(() => {
      
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Simula 2 segundos de tiempo de carga
    }, []);
  
   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        const response = await axios.post(
          'http://localhost:3000/register',
          {
            usuarioNombre: nombre,
            usuarioEmail: email,
            usuarioPassword: password,
            idRol: 1, // Por ejemplo, rol de "consorcista"
          },
          { withCredentials: true }
        );
  
        setMensaje('Usuario registrado con éxito.');
        console.log('Respuesta del servidor:', response.data);
      } catch (error) {
        console.error('Error al registrar el usuario:', error.response?.data || error.message);
        setMensaje(
          error.response?.data?.message || 'Error al registrar el usuario. Intente nuevamente.'
        );
      } finally {
        setIsSubmitting(false);
        navigate('/perfil');
      }
   };

   if(isLoading) {
      // Mostrar Skeleton mientras carga
    return (
      <div>
      <div className="space-y-10 max-w-md mx-auto">
        <Skeleton height={40} width="100%" />
        <Skeleton height={40} width="100%" className="flex my-10"/>
        <Skeleton height={44} className="w-full" />
        <Skeleton height={8} width="100%" />
        <Skeleton height={20} width={150} />
      </div>
        <div className="mt-5 max-w-md mx-auto">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center gap-1">
              <Skeleton circle width={16} height={16} />
              <Skeleton width={200} height={14} />
            </div>
          ))}
        </div>
        <div className='mt-3 max-w-md mx-auto'>
          <Skeleton height={50} width="100%" className=''/>
        </div>
        </div>
    );
   }
    
   return (
      <form className="space-y-10 w-full max-w-md mx-auto" onSubmit={handleSubmit}>
         <div>
            <CrearCuentaNombre
            texto="Nombre"
            textoPlaceholder=""
            id="usuarioNombre"
            onChange={(e) => setNombre(e.target.value)}
            />
         </div> 
         <div>
            <CrearCuentaMail
            id="usuarioEmail"
             texto="Ingresa tu correo"
            textoPlaceholder=""
            onChange={(e) => setEmail(e.target.value)}
            />
         </div>
         <div>
            <CrearCuentaPassword
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
            {isSubmitting ? 'Registrando...' : 'Registrarse'}
         </button>

         {mensaje && (
            <p className={`mt-4 text-center ${mensaje.includes('éxito') ? 'text-green-500' : 'text-red-500'}`}>
            {mensaje}
            </p>
            )
         }
      </form>
   )
}
