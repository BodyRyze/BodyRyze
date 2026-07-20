import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#05070d] px-6 py-24 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#1e6bff] opacity-10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-[#98a2b8] transition hover:text-white">
          ← Retour à l&apos;accueil
        </Link>

        <h1 className="text-3d text-4xl uppercase text-white sm:text-5xl">Mentions légales</h1>

        <div className="mt-10 space-y-8 text-[#cbd2df]">
          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-[#7db4ff]">Éditeur du site</h2>
            <p className="mt-2 leading-relaxed">
              Site édité à titre individuel. Informations légales complètes (statut, SIRET, adresse) à venir prochainement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-[#7db4ff]">Hébergement</h2>
            <p className="mt-2 leading-relaxed">
              Ce site est hébergé par Vercel Inc.
              <br />
              340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-[#7db4ff]">Propriété intellectuelle</h2>
            <p className="mt-2 leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, logo) est la propriété de BodyRyze, sauf mention
              contraire. Toute reproduction sans autorisation est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-[#7db4ff]">Données personnelles</h2>
            <p className="mt-2 leading-relaxed">
              Les informations recueillies via le questionnaire (prénom, numéro, âge, objectifs...) sont utilisées uniquement
              pour te contacter et te proposer un programme personnalisé. Elles ne sont ni vendues ni partagées à des tiers.
              Conformément au RGPD, tu peux demander la suppression de tes données en me contactant directement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-[#7db4ff]">Cookies</h2>
            <p className="mt-2 leading-relaxed">
              Ce site n&apos;utilise aucun cookie de suivi ou de publicité.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
