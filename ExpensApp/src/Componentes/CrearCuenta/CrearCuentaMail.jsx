import { useState } from 'react';
import { Input } from "@/components/ui/input";
import PropTypes from 'prop-types';
import { Mail } from "lucide-react";

export default function CrearCuentaMail({ id, onChange, textoPlaceholder }) {
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
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-muted-foreground/80 peer-disabled:opacity-50">
          <Mail size={16} strokeWidth={2} aria-hidden="true" />
        </div>
        <Input
          id={id}
          type="email"
          placeholder={textoPlaceholder || "Email"}
          value={email}
          onChange={handleEmailChange} 
          className="peer ps-9"  />
      </div>
      {!isValidEmail && (
        <p className="text-xs text-destructive mt-1">Tu correo no es válido</p>
      )}
    </div>
  );
}

CrearCuentaMail.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textoPlaceholder: PropTypes.string,
};