import IniciarSesionContraseña from './IniciarSesionContraseña'
import IniciarSesionMail from './IniciarSesionMail'

export const IniciarSesionFormulario = () => {
  return (
    <>
        <IniciarSesionMail titulo="Email" id="usuario_correo"/>
        <IniciarSesionContraseña id="usuario_password"/>
    </>
)
}
