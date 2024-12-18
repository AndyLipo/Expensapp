import { TitleCrearCuenta } from '../Componentes/CrearCuenta/TitleCrearCuenta';
import { IniciarSesionFormulario } from '../Componentes/IniciarSesion/IniciarSesionFormulario';
import { Navbar } from '../Componentes/Navbar/Navbar';

export const IniciarSesionPagina = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </header>

        {/* Contenido principal */}
        <main className="flex-1 p-14 pt-24">
          <section className="create-account-section bg-[#D6F2E5] p-10 rounded-lg shadow-lg">
            {/* Título */}
            <TitleCrearCuenta />

            {/* Formulario */}
            <article className="mt-8">
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
