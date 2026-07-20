import Link from "next/link";

export default function CGV() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#05070d] px-6 py-24 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#1e6bff] opacity-10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-[#98a2b8] transition hover:text-white">
          ← Retour à l&apos;accueil
        </Link>

        <h1 className="text-3d text-4xl uppercase text-white sm:text-5xl">Conditions générales de vente</h1>

        <div className="mt-10 space-y-8 text-[#cbd2df]">
          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-[#7db4ff]">Article 1 — Objet</h2>
            <p className="mt-2 leading-relaxed">
              Les présentes CGV encadrent la vente d&apos;un programme de coaching sportif personnalisé, établi à partir des
              réponses fournies dans le questionnaire disponible sur le site BodyRyze.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-[#7db4ff]">Article 2 — Prix</h2>
            <p className="mt-2 leading-relaxed">
              Le prix du programme est de 19,99€ TTC. Le paiement s&apos;effectue directement avec le coach sur WhatsApp,
              après l&apos;envoi du questionnaire.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-[#7db4ff]">Article 3 — Commande et paiement</h2>
            <p className="mt-2 leading-relaxed">
              La commande est confirmée dès l&apos;envoi du questionnaire. Le client est ensuite recontacté sous 24h
              directement sur WhatsApp, où les modalités de paiement sont convenues.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-[#7db4ff]">Article 4 — Exécution de la prestation</h2>
            <p className="mt-2 leading-relaxed">
              Après paiement, le client est contacté sous 24h afin d&apos;échanger sur son objectif et son quotidien. Le
              programme personnalisé est ensuite livré dans les jours suivant cet échange.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-[#7db4ff]">Article 5 — Remboursement</h2>
            <p className="mt-2 leading-relaxed">
              Le programme étant personnalisé et réalisé sur-mesure pour chaque client après paiement, aucun remboursement
              n&apos;est possible une fois le programme livré. Un remboursement intégral est effectué uniquement dans le cas
              où le programme ne serait pas livré au client.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-[#7db4ff]">Article 6 — Responsabilité</h2>
            <p className="mt-2 leading-relaxed">
              Le programme fourni est un conseil sportif personnalisé et ne remplace pas un avis médical. Le client est
              invité à consulter un professionnel de santé avant de débuter toute activité physique intense, notamment en
              cas de condition médicale particulière.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-[#7db4ff]">Article 7 — Litiges</h2>
            <p className="mt-2 leading-relaxed">
              En cas de litige, le client est invité à me contacter directement à l&apos;amiable en premier lieu. À défaut
              d&apos;accord, les tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
