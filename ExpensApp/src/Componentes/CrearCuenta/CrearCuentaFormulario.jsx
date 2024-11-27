import  CrearCuentaInput from './CrearCuentaInput'
import CrearCuentaMail from './CrearCuentaMail'
import CrearCuentaPassword from './CrearCuentaPassword'
export const CrearCuentaFormulario = () => {
  return (
    <div className="space-y-6 w-full max-w-md mx-auto">
    <div>
        <CrearCuentaInput texto="Nombre" textoPlaceholder="Nombre" id='usuario_nombre'/>
    </div>
    <div>
        <CrearCuentaInput texto="Apellido" textoPlaceholder="Apellido" id='usuario_apellido'/>
    </div>
    <div>
        <CrearCuentaInput texto="Nombre de usuario" textoPlaceholder="Nombre de usuario" id='usuario_nombre'/>
    </div>
    <div>
        <CrearCuentaMail  id='usuario_correo'/>
    </div>
    <div>
        <CrearCuentaPassword id='usuario_password'/>
    </div> 
</div>
  )
}
