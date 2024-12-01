import { Input } from "@/components/ui/input";
import { Check, Eye, EyeOff, X } from "lucide-react";
import { useMemo, useState } from "react";

export default function CrearCuentaPasswordValidation() {
  const [password, setPassword] = useState("");
  const [isStrongPassword, setIsStrongPassword] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const checkStrength = (pass) => {
    const requirements = [
      { regex: /.{8,}/, text: "Al menos 8 carácteres" },
      { regex: /[0-9]/, text: "Al menos 1 número" },
      { regex: /[A-Z]/, text: "Al menos 1 mayúscula" },
      { regex: /[a-z]/, text: "Al menos 1 minuscula" },
    ];

    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text,
    }));
  };

  const validatePassword = (pass) => {
    const strength = checkStrength(pass);
    return strength.every(req => req.met);
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

  return isStrongPassword ? (
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
            peer-focus:text-foreground 
            peer:not(:placeholder-shown):top-0 
            peer:not(:placeholder-shown):-translate-y-1/2 
            peer:not(:placeholder-shown):text-xs"
        >
          Contraseña
        </label>

        <button
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
          aria-pressed={isVisible}
          aria-controls="password"
        >
          {isVisible ? (
            <Eye size={16} strokeWidth={2} aria-hidden="true" />
          ) : (
            <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Password strength indicator */}
      <div
        className="mb-4 mt-3 h-1 w-full overflow-hidden rounded-full bg-border"
        role="progressbar"
        aria-valuenow={strengthScore}
        aria-valuemin={0}
        aria-valuemax={4}
        aria-label="Fuerza de contraseña"
      >
        <div
          className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-out`}
          style={{ width: `${(strengthScore / 4) * 100}%` }}
        ></div>
      </div>

      {/* Password strength description */}
      <p id="password-strength" className="mb-2 text-sm font-medium text-foreground">
        {getStrengthText(strengthScore)}
      </p>

      {/* Password requirements list */}
      <ul className="space-y-1.5" aria-label="Requisitos de contraseña">
        {strength.map((req, index) => (
          <li key={index} className="flex items-center gap-2">
            {req.met ? (
              <Check size={16} className="text-emerald-500" aria-hidden="true" />
            ) : (
              <X size={16} className="text-muted-foreground/80" aria-hidden="true" />
            )}
            <span className={`text-xs ${req.met ? "text-emerald-600" : "text-muted-foreground"}`}>
              {req.text}
              <span className="sr-only">
                {req.met ? " - Requisito cumplido" : " - Requisito no cumplido"}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="group space-y-2">
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
            peer-focus:text-foreground 
            peer:not(:placeholder-shown):top-0 
            peer:not(:placeholder-shown):-translate-y-1/2 
            peer:not(:placeholder-shown):text-xs"
        >
          Contraseña
        </label>

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
      <p className="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
        Tu contraseña no cumple con los requisitos
      </p>

      {/* Password strength description */}
      <p className="text-sm font-medium text-destructive">
        Debe Contener:
      </p>

      {/* Password requirements list */}
      <ul className="space-y-1.5" aria-label="Requisitos de contraseña">
        {strength.map((req, index) => (
          <li key={index} className="flex items-center gap-2">
            {req.met ? (
              <Check size={16} className="text-emerald-500" aria-hidden="true" />
            ) : (
              <X size={16} className="text-destructive" aria-hidden="true" />
            )}
            <span className={`text-xs ${req.met ? "text-emerald-600" : "text-destructive"}`}>
              {req.text}
              <span className="sr-only">
                {req.met ? " - Requisito cumplido" : " - Requisito no cumplido"}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}