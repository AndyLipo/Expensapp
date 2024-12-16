import { Input } from "@/components/ui/input";
import { Check, Eye, EyeOff, X } from "lucide-react";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect, useMemo } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import PropTypes from 'prop-types';

/*revisar colores barra de fuerza y textos de fuerza de contraseña*/

export default function CrearCuentaPassword({id, onChange}) {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular una llamada a una API
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula 2 segundos de tiempo de carga
  }, []);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);
  
  const checkStrength = (pass) => {
    const requirements = [
      { regex: /.{8,}/, text: "Al menos 8 caracteres" },
      { regex: /[0-9]/, text: "Al menos 1 número" },
      { regex: /[A-Z]/, text: "Al menos 1 mayúscula" },
      { regex: /[a-z]/, text: "Al menos 1 minúscula" },
    ];

    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text,
    }));
  };

  // const validatePassword = (pass) => {
  //   const strength = checkStrength(pass);
  //   return strength.every((req) => req.met);
  // };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    onChange(e); // Actualiza el estado global del padre
  };

  const strength = checkStrength(password);

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length;
  }, [strength]);

  const getStrengthColor = (score) => {
    if (score === 0) return "bg-border";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score === 3) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const getStrengthText = (score) => {
    if (score === 0) return "Ingrese una contraseña";
    if (score <= 2) return "Contraseña débil";
    if (score === 3) return "Contraseña media";
    return "Contraseña fuerte";
  };
  
  return (
    <div className="group relative mt-3">
      <div className="relative">
      <Input
        id={id}
        type={isVisible ? "text" : "password"}
        placeholder="Ingresa tu contraseña"
        onChange={handlePasswordChange}
        aria-invalid={strengthScore < 4}
        aria-describedby="password-strength"
      />
      <label 
        htmlFor={id} 
        className="absolute left-2 top-0 -translate-y-1/2 z-10 
            text-xs text-muted-foreground/70 
            transition-all duration-200 
            bg-background px-1
            peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:-translate-y-1/2 
            peer-placeholder-shown:text-base 
            peer-focus:top-0 
            peer-focus:-translate-y-1/2 
            peer-focus:text-xs 
            peer-focus:text-foreground">Contraseña
      </label>
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center"
      >
        {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
      </div>

    {/* Barra de fuerza */}
    <div
      className="mt-3 h-1 w-full overflow-hidden rounded-full bg-border"
      role="progressbar"
      aria-valuenow={strengthScore}
      aria-valuemin={0}
      aria-valuemax={4}
    >
      <div
        className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-out`}
        style={{ width: `${(strengthScore / 4) * 100}%` }}
      >
      </div>
    </div>

    {/* Texto de fuerza */}
      <p id="password-strength" className="text-sm font-medium">
      {getStrengthText(strengthScore)}
      </p>

    {/* Lista de requisitos */}
    <ul className="space-y-1.5 mt-3">
  {strength.map((req, index) => (
    <li key={index} className="flex items-center gap-2">
      {req.met ? (
        <Check className="text-emerald-500" size={16} />
      ) : (
        <X className="text-red-500" size={16} />
      )}
      <span
        className={`text-sm font-medium ${
          req.met ? "text-emerald-500" : "text-muted-foreground"
        }`}
      >
        {req.text}
      </span>
    </li>
  ))}
</ul>

    </div>
  );
}

CrearCuentaPassword.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


