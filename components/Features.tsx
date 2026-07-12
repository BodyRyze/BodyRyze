export default function Features() {
  return (
    <section
      id="features"
      className="relative z-10 max-w-7xl mx-auto px-8 py-32"
    >
      <h2 className="text-5xl font-black text-center mb-20">
        Tout ce dont tu as besoin.
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white/5 border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500 transition">
          <div className="text-5xl mb-5">📸</div>
          <h3 className="text-3xl font-bold mb-4">
            BODYRYZE SCAN
          </h3>
          <p className="text-gray-400 leading-8">
            Photographiez vos repas.
            Votre coach analyse votre alimentation et ajuste vos calories,
            protéines, glucides et lipides selon votre objectif.
          </p>
        </div>

        <div className="bg-white/5 border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500 transition">
          <div className="text-5xl mb-5">🥗</div>
          <h3 className="text-3xl font-bold mb-4">
            Recettes Premium
          </h3>
          <p className="text-gray-400 leading-8">
            Des centaines de recettes pensées pour la prise de masse,
            la perte de poids ou la recomposition corporelle.
          </p>
        </div>

        <div className="bg-white/5 border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500 transition">
          <div className="text-5xl mb-5">🏋️</div>
          <h3 className="text-3xl font-bold mb-4">
            Exercices expliqués
          </h3>
          <p className="text-gray-400 leading-8">
            Chaque exercice possède sa vidéo,
            ses conseils d'exécution et les erreurs à éviter.
          </p>
        </div>

        <div className="bg-white/5 border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500 transition">
          <div className="text-5xl mb-5">🛍️</div>
          <h3 className="text-3xl font-bold mb-4">
            Shop BodyRyze
          </h3>
          <p className="text-gray-400 leading-8">
            Retrouve les accessoires BodyRyze :
            vêtements, gourdes, sangles, élastiques,
            shakers et bien plus.
          </p>
        </div>

        <div className="bg-white/5 border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500 transition">
          <div className="text-5xl mb-5">📋</div>
          <h3 className="text-3xl font-bold mb-4">
            Programme personnalisé
          </h3>
          <p className="text-gray-400 leading-8">
            Un véritable coach construit ton programme
            selon ton niveau, ton objectif,
            ton emploi du temps et ton matériel.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-8 flex flex-col justify-center">
          <h3 className="text-5xl font-black mb-6">
            1,99€/mois
          </h3>

          <p className="text-blue-100 text-lg mb-8">
            Toutes les fonctionnalités BodyRyze,
            sans engagement.
          </p>

          <button className="bg-white text-black font-bold py-4 rounded-full hover:scale-105 transition">
            Continuer
          </button>
        </div>

      </div>
    </section>
  );
}