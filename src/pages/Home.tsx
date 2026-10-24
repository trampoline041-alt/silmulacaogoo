import { useState } from "react";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { CpfForm } from "../components/CpfForm";
import { SimulationSummary } from "../components/SimulationSummary";
import { Features } from "../components/Features";
import { Loading } from "../components/Loading";
import { Footer } from "../components/Footer";

type Step = "intro" | "loading" | "summary";

export default function Home() {
  const [step, setStep] = useState<Step>("intro");
  const go = (s: Step) => { setStep(s); window.scrollTo({ top: 0 }); };
  // Transição apenas visual (~1s); nenhuma consulta real é feita.
  const finish = () => { go("loading"); setTimeout(() => go("summary"), 1000); };
  return (
    <div className="min-h-screen bg-white">
      <Header onBack={step === "summary" ? () => go("intro") : undefined} />
      {step === "intro" && (
        <main className="screen bg-ink">
          <div className="mx-auto max-w-3xl space-y-6 px-5 pb-10 pt-8">
            <div>
              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">Conheça o <span className="text-[#2EE27A]">Autopropelido X1000</span></h1>
              <p className="mt-3 text-white/85">Confira as condições comerciais e faça sua simulação.</p>
            </div>
            <ProductCard />
            <CpfForm onSubmit={finish} />
            <Features />
          </div>
        </main>
      )}
      {step === "loading" && <main><Loading /></main>}
      {step === "summary" && <main className="mx-auto max-w-3xl px-5 pb-4 pt-2"><SimulationSummary /></main>}
      <Footer />
    </div>
  );
}
