import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2, ShieldCheck, UserRound } from "lucide-react";
import { maskCpf, validateCpf } from "../utils/cpf";

export function CpfForm({ onSubmit }: { onSubmit: () => void }) {
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState<string | null>(null);
  const loading = false;

  const handle = (e: FormEvent) => {
    e.preventDefault();
    const err = validateCpf(cpf);
    setError(err);
    if (err) return;
    // O CPF não é enviado, salvo ou registrado: é descartado ao avançar.
    setCpf("");
    onSubmit();
  };

  return (
    <form onSubmit={handle} noValidate className="rounded-3xl bg-white p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <UserRound size={32} strokeWidth={1.5} aria-hidden />
        <div>
          <h2 className="text-lg font-bold leading-tight">Faça sua simulação</h2>
          <label htmlFor="cpf" className="text-sm text-slate-500">Informe seu CPF. Digite apenas os números.</label>
        </div>
      </div>
      <input
        id="cpf" name="cpf" inputMode="numeric" autoComplete="off" placeholder="000.000.000-00"
        value={cpf} maxLength={14} onChange={(e) => { setCpf(maskCpf(e.target.value)); if (error) setError(null); }}
        aria-invalid={!!error} aria-describedby={error ? "cpf-error" : undefined} disabled={loading}
        className={`mt-4 h-14 w-full rounded-xl border bg-white px-4 text-lg tracking-wide outline-none transition focus:ring-2 focus:ring-goo ${error ? "border-red-400" : "border-slate-200"}`}
      />
      {error && <p id="cpf-error" role="alert" className="mt-2 text-sm text-red-600">{error}</p>}
      <button type="submit" disabled={loading} className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-goo text-base font-bold text-white transition hover:bg-goo-dark active:scale-[.99] disabled:opacity-80">
        {loading ? (<><Loader2 className="animate-spin" size={20} aria-hidden /> Preparando…</>) : (<>Continuar simulação <ArrowRight size={20} aria-hidden /></>)}
      </button>
      <p className="mt-4 flex gap-2 text-xs leading-relaxed text-slate-500">
        <ShieldCheck size={16} className="mt-0.5 shrink-0 text-goo" aria-hidden />
        <span>O CPF é usado só neste aparelho para liberar a simulação. Não é enviado, salvo ou compartilhado. O atendimento continua pelo WhatsApp com nossa equipe. Isto é uma simulação para aprovação de crédito.</span>
      </p>
    </form>
  );
}
