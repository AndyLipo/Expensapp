import { useEffect, useState } from 'react';
import IniciarSesionContraseña from './IniciarSesionContraseña'
import IniciarSesionMail from './IniciarSesionMail'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


export const IniciarSesionFormulario = () => {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simular una llamada a una API
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Simula 2 segundos de tiempo de carga
    }, []);
  /*Crear handlesubmit axios.get('http://localhost:3000/login)* y pasarle usuarioEmail: email,
    usuarioPassword: password,
    retornar con formulario en vez de div y agregar boton para que maneje el handleSubmit*/
  return (
    <>
    <div>
      
       {isLoading ?(
        <Skeleton height={40} width="100%" />
       ):(

        <IniciarSesionMail titulo="Email" id="usuario_correo"/>
       )}
    </div>
    <div>
    {isLoading ?(
        <Skeleton height={40} width="100%" />
       ):(
        <IniciarSesionContraseña id="usuario_password"/>
       )}
    </div>
    </>
)
}
