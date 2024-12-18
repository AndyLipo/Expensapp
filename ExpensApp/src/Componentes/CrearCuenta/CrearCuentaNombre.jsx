import { useState } from "react";
import { Input } from "@/components/ui/input";
import PropTypes from "prop-types";
import { User } from "lucide-react";

export default function CrearCuentaNombre({ id, onChange, textoPlaceholder }) {
  const [nombre, setNombre] = useState("");
  const [isValidName, setIsValidName] = useState(true);

  const validateName = (nameToValidate) => {
    return nameToValidate.trim().length > 0; // Asegura que el campo no esté vacío
  };

  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setNombre(inputName);
    setIsValidName(validateName(inputName));
    onChange(e);
  };

  return (
    <div className="group relative mt-3">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-muted-foreground/80 peer-disabled:opacity-50">
          <User size={16} strokeWidth={2} aria-hidden="true" />
        </div>
        <Input
          id={id}
          type="text"
          placeholder={textoPlaceholder || "Nombre"}
          value={nombre}
          onChange={handleNameChange}
          className="peer ps-9"
        />
      </div>
      {!isValidName && (
        <p className="text-xs text-destructive mt-1">El nombre no puede estar vacío</p>
      )}
    </div>
  );
}

CrearCuentaNombre.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textoPlaceholder: PropTypes.string,
};
