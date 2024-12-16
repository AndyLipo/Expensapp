import { Input } from "@/components/ui/input";
import PropTypes from 'prop-types';

export default function CrearCuentaNombre({ texto, textoPlaceholder, onChange }) {
  return (
    <div className="group relative mt-3">
      <label
        htmlFor="input-22"
        className="origin-start absolute top-1/2 left-2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all 
        group-focus-within:top-0 group-focus-within:left-2 group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground 
        group-focus-within:bg-[#D6F2E5] group-focus-within:px-1 
        has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:left-2 has-[+input:not(:placeholder-shown)]:text-xs 
        has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground has-[+input:not(:placeholder-shown)]:bg-[#D6F2E5]"
      >
        <span className="inline-flex px-1">{texto}</span>
      </label>
      <Input
        id="input-22"
        type="text"
        placeholder={textoPlaceholder}
        onChange={onChange}
        className="w-full px-2 py-2 text-base border border-gray-300 rounded-md"
      />
    </div>
  );
}

CrearCuentaNombre.propTypes = {
  texto: PropTypes.string.isRequired,
  textoPlaceholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
