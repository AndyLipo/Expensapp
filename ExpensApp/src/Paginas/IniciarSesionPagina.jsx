import { TitleCrearCuenta } from '../Componentes/CrearCuenta/TitleCrearCuenta';
import { IniciarSesionFormulario } from '../Componentes/IniciarSesion/IniciarSesionFormulario';
import { Navbar } from '../Componentes/Navbar/Navbar';

export const IniciarSesionPagina = () => {
  return (
    <>
      <div className="page-container">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </header>

        {/* Contenido principal */}
        <main className="p-9 pt-24">
          <section className="create-account-section bg-[#D6F2E5] p-4 rounded-lg shadow-lg">
            {/* Título */}
            <TitleCrearCuenta />

            {/* Formulario */}
            <article className="mt-10">
              <IniciarSesionFormulario />
            </article>
          </section>
        </main>

        {/* Footer (opcional) */}
        <footer>
          {/* Contenido del pie de página, si lo necesitas */}
        </footer>
      </div>
    </>
  );
};
