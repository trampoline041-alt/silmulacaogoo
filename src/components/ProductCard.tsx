import { ProductImage } from "./ProductImage";
import { formatBRL, TOTAL_PRICE } from "../utils/currency";

export function ProductCard({ showPower = false }: { showPower?: boolean }) {
  return (
    <section aria-label="Produto" className="relative overflow-hidden rounded-3xl bg-ink shadow-soft">
      <ProductImage src="/images/autopropelido-x1000.png" alt="Autopropelido X1000 vermelho e preto" className="mx-auto h-60 w-full sm:h-80" />
      {showPower ? (
        <div className="absolute right-4 top-4 text-right text-white">
          <h2 className="text-lg font-bold leading-tight">Autopropelido<br />X1000</h2>
          <span className="mt-2 inline-block rounded-full bg-goo px-3 py-0.5 text-sm font-bold">1000 W</span>
        </div>
      ) : (
        <div className="absolute bottom-3 left-3 rounded-2xl bg-white/95 px-3 py-2 text-navy">
          <p className="text-[11px] text-slate-500">Preço total do produto</p>
          <p className="text-lg font-extrabold">{formatBRL(TOTAL_PRICE)}</p>
        </div>
      )}
    </section>
  );
}
