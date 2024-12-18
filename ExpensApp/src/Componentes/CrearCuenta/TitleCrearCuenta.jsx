import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const TitleCrearCuenta = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simular carga inicial del formulario
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula 2 segundos de tiempo de carga
  }, []);

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-sm sm:max-w-md space-y-10 px-4">
        <Skeleton height={40} />
      </div>
    );
  }

  return (
    <h1 className="font-nunito text-[#76B1AC] flex justify-center items-center font-bold text-5xl lg:text-6xl">
      Tu consorcio virtual
    </h1>
  );
};
