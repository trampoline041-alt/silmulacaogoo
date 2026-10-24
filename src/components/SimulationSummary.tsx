import { useState } from "react";
import { CalendarDays, ChevronUp, Info, Lock } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { WhatsAppButton } from "./WhatsAppButton";
import { formatBRL, simulate } from "../utils/currency";

export function SimulationSummary() {
  const s = simulate();
  const [open, setOpen] = useState(true);
  const rows: [string, string][] = [
    ["Produto", "Autopropelido X1000 (1000 W)"],
    ["Entrada simulada", formatBRL(s.down)],
    ["Valor total", formatBRL(s.total)],
    ["Saldo restante", formatBRL(s.balance)],
    ["Parcelas", `${s.installments}x de ${formatBRL(s.monthly)}`],
  ];
  return (
    <div className="screen space-y-3">
      <div className="flex items-start gap-3 rounded-2xl bg-tint p-4 text-navy">
        <Info className="mt-0.5 shrink-0 text-goo" size={22} aria-hidden />
        <div>
          <p className="font-bold">Simulação comercial</p>
          <p className="text-sm text-slate-600">Valores ilustrativos. Não é aprovação de crédito.</p>
        </div>
      </div>
      <ProductCard showPower />
      <section aria-label="Entrada e valor total" className="grid grid-cols-2 divide-x divide-slate-200 rounded-2xl bg-tint p-4">
        <div className="pr-3"><p className="text-sm text-slate-600">Entrada simulada</p><p className="text-xl font-extrabold text-goo-dark">{formatBRL(s.down)}</p></div>
        <div className="pl-4"><p className="text-sm text-slate-600">Valor total do produto</p><p className="text-xl font-extrabold">{formatBRL(s.total)}</p></div>
      </section>
      <section aria-label="Parcelas" className="flex items-center gap-4 rounded-2xl bg-ink p-5 text-white">
        <CalendarDays size={34} strokeWidth={1.5} aria-hidden />
        <div>
          <p className="text-sm">Saldo de {formatBRL(s.balance)} em {s.installments}x</p>
          <p className="text-3xl font-extrabold text-[#2EE27A]">{formatBRL(s.monthly)} <span className="text-sm font-normal text-white/80">por mês</span></p>
        </div>
      </section>
      <section className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
        <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex w-full items-center justify-between bg-mist px-4 py-3 font-bold">
          Resumo da simulação <ChevronUp size={20} className={`transition ${open ? "" : "rotate-180"}`} aria-hidden />
        </button>
        {open && (
          <dl className="divide-y divide-slate-100 px-4 text-sm">
            {rows.map(([k, v]) => (<div key={k} className="flex justify-between gap-4 py-2.5"><dt className="text-slate-600">{k}</dt><dd className="text-right">{v}</dd></div>))}
          </dl>
        )}
      </section>
      <p className="text-xs leading-relaxed text-slate-500">
        Valores ilustrativos de uma simulação comercial. As condições finais, a disponibilidade do produto e as formas de pagamento devem ser confirmadas com a equipe de atendimento.
      </p>
      <WhatsAppButton />
      <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500"><Lock size={13} aria-hidden /> Seu CPF não é enviado nem salvo</p>
    </div>
  );
}
