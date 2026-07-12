export default function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-5xl px-6 py-32"
    >
      <div className="rounded-[40px] border border-blue-500/20 bg-white/5 p-12 text-center backdrop-blur-xl">

        <span className="rounded-full bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
          🎁 Offre de lancement
        </span>

        <h2 className="mt-8 text-5xl font-black text-white">
          Seulement
          <br />
          <span className="text-blue-500">
            1,99€
          </span>
        </h2>

        <p className="mt-4 text-lg text-gray-400">
          par mois après tes 3 jours gratuits.
        </p>

        <div className="mt-10 space-y-4 text-left max-w-sm mx-auto">

          <div>✅ Coaching personnalisé</div>
          <div>✅ Nutrition adaptée</div>
          <div>✅ Analyse des repas</div>
          <div>✅ Suivi de progression</div>
          <div>✅ Sans publicité</div>

        </div>

        <button className="mt-10 rounded-full bg-blue-600 px-10 py-5 text-lg font-bold text-white transition hover:scale-105 hover:bg-blue-500">
          Commencer gratuitement
        </button>

      </div>
    </section>
  );
}