import { CrearCuentaFormulario } from '../Componentes/CrearCuenta/CrearCuentaFormulario'
import { TitleCrearCuenta } from '../Componentes/CrearCuenta/TitleCrearCuenta'
import { Navbar } from '../Componentes/Navbar/Navbar'

export const CrearCuentaPagina = () => {
  return (
    <div className="page-container">
      <header className='fixed top-0 left-0 w-full z-50'>
        <Navbar />
      </header>
      
      <main className='p-9 pt-24'>
        <section className="create-account-section bg-[#D6F2E5] p-4 rounded-lg shadow-lg">
          <TitleCrearCuenta />
          <article className='mt-10'>
            <CrearCuentaFormulario />
          </article>
        </section>
      </main>
      
      <footer>
        {/* Puedes agregar contenido del pie de página si lo necesitas */}
      </footer>
    </div>
  )
}