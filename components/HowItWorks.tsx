import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Réponds au questionnaire",
    text: "Quelques questions sur ton profil, tes objectifs et ton quotidien.",
  },
  {
    number: "02",
    title: "Je te contacte sous 24h",
    text: "On échange directement sur WhatsApp pour bien cerner tes besoins.",
  },
  {
    number: "03",
    title: "Reçois ton programme",
    text: "Un programme 100% sur-mesure, construit à partir de tes réponses.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full overflow-hidden bg-[#05070d] px-6 py-24">
      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3d text-center text-3xl uppercase leading-[0.95] tracking-tight text-white sm:text-4xl">
            Comment ça marche
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 100} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="text-3d text-3xl text-[#5b657c] sm:text-4xl">{step.number}</span>
              <p className="text-3d-sm mt-3 text-xl text-white sm:text-2xl">{step.title}</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#98a2b8]">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-bottom-left -rotate-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
