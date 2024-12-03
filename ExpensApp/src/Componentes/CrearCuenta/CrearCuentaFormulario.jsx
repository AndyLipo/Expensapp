import { useEffect, useState } from 'react';
import  CrearCuentaInput from './CrearCuentaInput'
import CrearCuentaMail from './CrearCuentaMail'
import CrearCuentaNombre from './CrearCuentaNombre'
import CrearCuentaPassword from './CrearCuentaPassword'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CrearCuentaFormulario = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simular una llamada a una API
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Simula 2 segundos de tiempo de carga
    }, []);
  
    return (
    <div className="space-y-10 w-full max-w-md mx-auto">
     <div>
     {isLoading ?(
        <Skeleton height={40} width="100%" />
     ) : (
        <CrearCuentaNombre texto="Nombre de usuario" textoPlaceholder="" id='usuario_nombre'/>
     )}
    </div> 
    <div>
    {isLoading ?(
        <Skeleton height={40} width="100%" />
     ) : (
        <CrearCuentaInput texto="Apellido" textoPlaceholder="" id='usuario_apellido'/>
     )}
    </div>
    {/* <div>
        <CrearCuentaInput texto="Nombre de usuario" textoPlaceholder="" id='usuario_nombre'/>
    </div> */}
    <div>
    {isLoading ?(
        <Skeleton height={40} width="100%" />
     ) : (
        <CrearCuentaMail  id='usuario_correo'/>
     )}
    </div>
    <div>
        <CrearCuentaPassword id='usuario_password'/>
    </div> 
</div>
  )
}
