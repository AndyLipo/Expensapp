import  CrearCuentaInput from './CrearCuentaInput'
import CrearCuentaMail from './CrearCuentaMail'
import CrearCuentaNombre from './CrearCuentaNombre'
import CrearCuentaPassword from './CrearCuentaPassword'
export const CrearCuentaFormulario = () => {
  return (
    <div className="space-y-10 w-full max-w-md mx-auto">
     <div>
        <CrearCuentaNombre texto="Nombre de usuario" textoPlaceholder="" id='usuario_nombre'/>
    </div> 
    <div>
        <CrearCuentaInput texto="Apellido" textoPlaceholder="" id='usuario_apellido'/>
    </div>
    {/* <div>
        <CrearCuentaInput texto="Nombre de usuario" textoPlaceholder="" id='usuario_nombre'/>
    </div> */}
    <div>
        <CrearCuentaMail  id='usuario_correo'/>
    </div>
    <div>
        <CrearCuentaPassword id='usuario_password'/>
    </div> 
</div>
  )
}
