import { useState } from 'react';
import { Input } from "@/components/ui/input";
import PropTypes from 'prop-types';

export default function CrearCuentaMail({id, onChange}) {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (emailToValidate) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailToValidate);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
    onChange(e);
  };

  return (
    <div className="group relative mt-3">
      <label
        htmlFor={id}
        className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all 
        group-focus-within:pointer-events-none 
        group-focus-within:top-0 
        group-focus-within:cursor-default 
        group-focus-within:text-xs 
        group-focus-within:font-medium 
        group-focus-within:text-foreground 
        has-[+input:not(:placeholder-shown)]:pointer-events-none 
        has-[+input:not(:placeholder-shown)]:top-0 
        has-[+input:not(:placeholder-shown)]:cursor-default 
        has-[+input:not(:placeholder-shown)]:text-xs 
        has-[+input:not(:placeholder-shown)]:font-medium 
        has-[+input:not(:placeholder-shown)]:text-foreground"
      >
        <span className="inline-flex bg-background px-2">Ingresa tu correo</span>
      </label>
      <Input 
        id={id} 
        type="email" 
        placeholder="Ingresa tu correo"
        value={email}
        onChange={handleEmailChange}
      />
      {!isValidEmail && (
        <p className="text-xs text-destructive">Tu correo no es válido</p>
      )}
    </div>
  );
}

CrearCuentaMail.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};