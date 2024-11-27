
import { Input } from "@/components/ui/input";

// export default function CrearCuentaInput({texto, textoPlaceholder}) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="input-02">
//         {texto}
//         <span className="text-destructive"> *</span>
//       </Label>
//       <Input id="input-02" placeholder={textoPlaceholder} type="email" required />
//     </div>
//   );
// }


// import { Input } from "@/components/ui/input";

export default function CrearCuentaInput({texto, textoPlaceholder}) {
  return (
    <div className="group relative mt-3">
      <label
        htmlFor="input-32"
        className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
      >
        <span className="inline-flex bg-background px-2">{texto}</span>
      </label>
      <Input id="input-32" type="email" placeholder={textoPlaceholder} />
    </div>
  );
}
