import { useState } from 'react';
import { Input } from "@/components/ui/input";
import PropTypes from 'prop-types';

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
      <label
        htmlFor={id}
        className="origin-start absolute top-1/2 left-2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all 
        group-focus-within:top-0 group-focus-within:left-2 group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground 
        group-focus-within:bg-[#D6F2E5] group-focus-within:px-1 
        has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:left-2 has-[+input:not(:placeholder-shown)]:text-xs 
        has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground has-[+input:not(:placeholder-shown)]:bg-[#D6F2E5]"
      >
        <span className="inline-flex px-2">Ingresa tu correo</span>
      </label>
      <Input
        id={id}
        type="email"
        placeholder={textoPlaceholder}
        value={email}
        onChange={handleEmailChange}
        className="w-full px-2 py-2 text-base border border-gray-300 rounded-md focus:border-green-500 focus:ring focus:ring-green-200"
      />
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
