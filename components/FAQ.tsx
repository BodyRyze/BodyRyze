"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const QUESTIONS = [
  {
    q: "Combien de temps avant d'être contacté ?",
    a: "Dès que ton paiement est confirmé, je te contacte sous 24h directement sur WhatsApp pour discuter de ton objectif.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Le paiement (19,99€) se fait par carte bancaire, directement et de façon sécurisée sur le site via Stripe.",
  },
  {
    q: "Que se passe-t-il après le paiement ?",
    a: "On échange sur WhatsApp pour bien cerner ton quotidien et tes objectifs, puis je te construis un programme entièrement sur-mesure.",
  },
  {
    q: "C'est adapté si je suis débutant(e) ?",
    a: "Oui. Le programme est calibré selon ton niveau, ton matériel et tes réponses au questionnaire — que tu débutes ou que tu sois confirmé(e).",
  },
  {
    q: "Le programme est-il fait pour la maison ou la salle ?",
    a: "Les deux ! Tu choisis dans le questionnaire, et le programme est construit en fonction du lieu et du matériel que tu as.",
  },
  {
    q: "Je peux me faire rembourser ?",
    a: "Oui, dans les conditions prévues par nos CGV (droit de rétractation). Contacte-moi directement si besoin.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#05070d] px-6 py-28">
      <div className="pointer-events-none absolute left-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-[#1e6bff] opacity-20 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-3d text-center text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
            Questions <span className="text-neon">fréquentes</span>
          </h2>
        </Reveal>

        <div className="mt-14 space-y-4">
          {QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 80}>
                <div
                  className="relative overflow-hidden rounded-none border-2 border-white/10 bg-white/[0.03] transition duration-300"
                  style={isOpen ? { borderColor: "rgba(0,229,255,0.6)", boxShadow: "0 0 30px rgba(0,229,255,0.3)" } : undefined}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-3d-sm not-italic text-lg text-white sm:text-xl">{item.q}</span>
                    <span className={`text-neon text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 text-base leading-relaxed text-[#aeb6c8]">{item.a}</p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-bottom-left -rotate-1 bg-gradient-to-r from-transparent via-[#00e5ff]/60 to-transparent shadow-[0_0_12px_rgba(0,229,255,0.6)]" />
    </section>
  );
}
