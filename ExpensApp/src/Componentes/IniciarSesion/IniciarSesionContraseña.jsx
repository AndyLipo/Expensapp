import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function IniciarSesionContraseña({ onChange }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <div className="space-y-2">
      <div className="relative">
        {/* Ícono de candado */}
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-muted-foreground/80">
          <Lock size={16} strokeWidth={2} aria-hidden="true" />
        </div>
        <Input
          id="input-23"
          className="pl-10 pe-9"
          placeholder="Contraseña"
          type={isVisible ? "text" : "password"}
          onChange={onChange}
        />
        <button
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
          aria-pressed={isVisible}
          aria-controls="password"
        >
          {isVisible ? (
            <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Eye size={16} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}

IniciarSesionContraseña.propTypes = {
  onChange: PropTypes.func.isRequired,
};
