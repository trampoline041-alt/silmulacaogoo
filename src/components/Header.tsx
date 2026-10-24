import { ArrowLeft, Lock } from "lucide-react";
import { ProductImage } from "./ProductImage";

export function Header({ onBack }: { onBack?: () => void }) {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className="mx-auto flex h-[72px] max-w-3xl items-center justify-between px-5">
        <div className="flex items-center gap-2">
          {onBack && (
            <button onClick={onBack} aria-label="Voltar" className="-ml-2 grid h-11 w-11 place-items-center rounded-full text-navy transition hover:bg-mist">
              <ArrowLeft size={22} />
            </button>
          )}
          <ProductImage src="/images/logo-goo-eletricos.png" alt="GOO ELÉTRICOS" className="h-11 w-auto max-w-[170px]" />
        </div>
        <span className="flex items-center gap-1.5 text-xs text-slate-500"><Lock size={14} aria-hidden /> Conexão segura</span>
      </div>
    </header>
  );
}
