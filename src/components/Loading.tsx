import { Check } from "lucide-react";
export function Loading() {
  return (
    <div role="status" aria-live="polite" className="screen flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 text-center text-navy">
      <div className="grid h-28 w-28 place-items-center rounded-full border-4 border-goo/20 border-t-goo motion-safe:animate-spin" aria-hidden />
      <Check className="-mt-[72px] mb-10 text-goo" size={36} aria-hidden />
      <h1 className="text-2xl font-extrabold">Preparando sua simulação…</h1>
      <p className="mt-2 text-slate-500">Só um instante.</p>
    </div>
  );
}
