import { Input } from "@/components/ui/input";
import { Check, Eye, EyeOff, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CrearCuentaPasswordValidation() {
  const [password, setPassword] = useState("");
  const [isStrongPassword, setIsStrongPassword] = useState(true);
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

  const validatePassword = (pass) => {
    const strength = checkStrength(pass);
    return strength.every((req) => req.met);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setIsStrongPassword(validatePassword(inputPassword));
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

  // Skeleton para toda la sección mientras carga
  if (isLoading) {
    return (
      <div className="space-y-4">
        {/* Input de contraseña */}
        <div className="relative">
          <Skeleton height={44} className="w-full" />
        </div>
        {/* Barra de fuerza */}
        <Skeleton height={8} width="100%" />
        {/* Descripción de fuerza */}
        <Skeleton height={20} width={150} />
        {/* Lista de requisitos */}
        <div className="space-y-1.5">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <Skeleton circle width={16} height={16} />
              <Skeleton width={200} height={14} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Contenido cuando ya no está cargando
  return (
    <div className="group relative mt-3">
      <div className="relative">
        <Input
          id="password-input-valid"
          className="peer pe-9"
          placeholder=" "
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          aria-invalid={strengthScore < 4}
          aria-describedby="password-strength"
        />
        <label
          htmlFor="password-input-valid"
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
            peer-focus:text-foreground"
        >
          Contraseña
        </label>
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg"
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
        ></div>
      </div>

      {/* Texto de fuerza */}
      <p id="password-strength" className="text-sm font-medium">
        {getStrengthText(strengthScore)}
      </p>

      {/* Lista de requisitos */}
      <ul className="space-y-1.5">
        {strength.map((req, index) => (
          <li key={index} className="flex items-center gap-2">
            {req.met ? <Check size={16} /> : <X size={16} />}
            <span>{req.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
