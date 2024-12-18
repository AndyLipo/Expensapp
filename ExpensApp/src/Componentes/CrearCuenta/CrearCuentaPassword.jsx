import { useState, useEffect, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Check, Eye, EyeOff, X, Lock } from "lucide-react";
import PropTypes from "prop-types";

export default function CrearCuentaPassword({ id, onChange }) {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); // Simula 2 segundos de carga
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

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    onChange(e);
  };

  const strength = checkStrength(password);

  const strengthScore = useMemo(
    () => strength.filter((req) => req.met).length,
    [strength]
  );

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
        {/* Ícono de candado */}
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-muted-foreground/80">
          <Lock size={16} strokeWidth={2} aria-hidden="true" />
        </div>
        {/* Input de contraseña */}
        <Input
          id={id}
          type={isVisible ? "text" : "password"}
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
          aria-invalid={strengthScore < 4}
          aria-describedby="password-strength"
          className="peer ps-9"
        />
        {/* Botón para mostrar/ocultar contraseña */}
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
        />
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
