"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Status = "idle" | "loading" | "success" | "error" | "full" | "cancelled";
type Genre = "Homme" | "Femme" | "";
type Objectif = "Prise de masse" | "Perte de poids" | "";
type Lieu = "Maison" | "Salle" | "";

const STEPS = ["Contact", "Profil", "Objectif", "Modalités", "Habitudes", "Récapitulatif"];

function ToggleCard({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex-1 overflow-hidden rounded-none border-2 px-6 py-10 text-center transition duration-300 ${
        active
          ? "border-[#00e5ff] bg-gradient-to-br from-[#00e5ff]/15 to-[#1e6bff]/15 shadow-[0_0_40px_rgba(0,229,255,0.5)]"
          : "border-white/10 bg-white/[0.03] hover:border-[#1e6bff]/50"
      }`}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-[#00e5ff]" />
      <div className="pointer-events-none absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-[#00e5ff]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-[#00e5ff]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[#00e5ff]" />
      <span className={`text-3d-sm block text-xl uppercase sm:text-2xl ${active ? "text-neon" : "text-white"}`}>{label}</span>
    </button>
  );
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-none border-2 px-6 py-4 transition duration-300 ${
        active
          ? "border-[#00e5ff] bg-[#00e5ff]/15 shadow-[0_0_25px_rgba(0,229,255,0.5)]"
          : "border-white/10 bg-white/[0.03] hover:border-[#1e6bff]/50"
      }`}
    >
      <span className={`text-3d-sm text-lg uppercase ${active ? "text-neon" : "text-white"}`}>{label}</span>
    </button>
  );
}

function FieldInput({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  unit,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  unit?: string;
}) {
  return (
    <div>
      <label className="text-3d-sm text-xl uppercase text-white sm:text-2xl">{label}</label>
      <div className="relative mt-4">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-none border-2 border-white/10 bg-white/[0.05] px-5 py-4 text-lg text-white placeholder:text-[#5b657c] outline-none transition focus:border-[#00e5ff] focus:shadow-[0_0_25px_rgba(0,229,255,0.4)]"
        />
        {unit && (
          <span className="text-3d-sm pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-lg text-[#7db4ff]">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

function RecapRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b-2 border-white/10 py-4">
      <span className="text-3d-sm text-sm uppercase text-[#7db4ff] sm:text-base">{label}</span>
      <span className="text-3d-sm text-right text-lg text-white sm:text-xl">{value || "—"}</span>
    </div>
  );
}

export default function Commencer() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");

  const [prenom, setPrenom] = useState("");
  const [numero, setNumero] = useState("");
  const [age, setAge] = useState("");
  const [genre, setGenre] = useState<Genre>("");
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [niveauSportif, setNiveauSportif] = useState("");
  const [objectif, setObjectif] = useState<Objectif>("");
  const [lieu, setLieu] = useState<Lieu>("");
  const [disponibilite, setDisponibilite] = useState<string[]>([]);
  const [materiel, setMateriel] = useState<string[]>([]);
  const [zonesPriorite, setZonesPriorite] = useState<string[]>([]);
  const [hygieneVie, setHygieneVie] = useState("");
  const [commentConnu, setCommentConnu] = useState("");

  function toggleDispo(value: string) {
    setDisponibilite((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  }

  function toggleMateriel(value: string) {
    setMateriel((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  }

  function toggleZone(value: string) {
    setZonesPriorite((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  }

  const canNext = [
    prenom.trim() !== "" && numero.trim() !== "",
    age.trim() !== "" && genre !== "" && poids.trim() !== "" && taille.trim() !== "" && niveauSportif !== "",
    objectif !== "",
    lieu !== "" && disponibilite.length > 0,
    true,
    true,
  ];

  async function sendLeadEmail(metadata: Record<string, string>) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        subject: "Nouvelle demande de coaching BodyRyze (payée)",
        name: metadata.prenom,
        phone: metadata.numero,
        message: `Prénom : ${metadata.prenom}
Numéro WhatsApp : ${metadata.numero}
Âge : ${metadata.age}
Genre : ${metadata.genre}
Poids : ${metadata.poids} kg
Taille : ${metadata.taille} cm
Niveau sportif : ${metadata.niveauSportif}
Objectif : ${metadata.objectif}
Zones à prioriser : ${metadata.zonesPriorite || "Non renseigné"}
Lieu d'entraînement : ${metadata.lieu}
Disponibilité : ${metadata.disponibilite}
Matériel disponible : ${metadata.materiel || "Non renseigné"}
Hygiène de vie : ${metadata.hygieneVie || "Non renseigné"}
Comment il m'a connu : ${metadata.commentConnu || "Non renseigné"}
Paiement : 19,99€ reçu ✅`,
      }),
    });
    const data = await res.json();
    return Boolean(data.success);
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment");
    const sessionId = params.get("session_id");
    if (!payment) return;

    window.history.replaceState(null, "", "/commencer");

    if (payment === "cancelled") {
      fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "release" }),
      }).catch(() => {});
      setStatus("cancelled");
      return;
    }

    if (payment === "success" && sessionId) {
      setStatus("loading");
      (async () => {
        try {
          const verifyRes = await fetch(`/api/verify-session?session_id=${sessionId}`);
          const verifyData = await verifyRes.json();
          if (verifyData.paid) {
            const sent = await sendLeadEmail(verifyData.metadata);
            setStatus(sent ? "success" : "error");
          } else {
            setStatus("error");
          }
        } catch {
          setStatus("error");
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit() {
    setStatus("loading");
    try {
      const reserveRes = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reserve" }),
      });
      const reserveData = await reserveRes.json();

      if (reserveData.limitReached) {
        setStatus("full");
        return;
      }

      const checkoutRes = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom,
          numero,
          age,
          genre,
          poids,
          taille,
          niveauSportif,
          objectif,
          zonesPriorite: zonesPriorite.join(", "),
          lieu,
          disponibilite: disponibilite.join(", "),
          materiel: materiel.join(", "),
          hygieneVie,
          commentConnu,
        }),
      });
      const checkoutData = await checkoutRes.json();

      if (checkoutData.url) {
        window.location.href = checkoutData.url;
      } else {
        await fetch("/api/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "release" }),
        });
        setStatus("error");
      }
    } catch {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "release" }),
      }).catch(() => {});
      setStatus("error");
    }
  }

  function next() {
    if (step < STEPS.length - 1) setStep(step + 1);
    else handleSubmit();
  }

  function prev() {
    if (step > 0) setStep(step - 1);
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#05070d] px-6 py-24 text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/gym.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070d] via-[#05070d]/70 to-[#05070d]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#1e6bff] opacity-20 blur-[160px]" />
      <div className="light-streak" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <Link href="/" className="text-3d-sm mb-10 inline-flex items-center gap-2 text-lg uppercase text-white transition hover:text-neon">
          ← Retour à l&apos;accueil
        </Link>

        <div
          className="mb-6 flex w-fit items-center gap-3 rounded-full border border-[#1e6bff]/40 bg-[#1e6bff]/10 px-6 py-2.5 text-sm uppercase tracking-[0.3em] text-[#9dc0ff] backdrop-blur"
          style={{ fontFamily: "'Anton', sans-serif", fontStyle: "italic" }}
        >
          <span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
          Ta demande de coaching
          <span className="ml-3 inline-block h-1.5 w-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
        </div>

        <h1 className="text-3d text-5xl uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
          Commence ta{" "}
          <span className="text-neon">transformation</span>
        </h1>
        <p className="text-3d-sm mt-6 max-w-xl text-lg uppercase text-white">
          Réponds à quelques questions pour un programme vraiment sur-mesure.
        </p>

        <div className="relative mt-12 overflow-hidden rounded-none border-2 border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-10">
          <div className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-[#00e5ff]" />
          <div className="pointer-events-none absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-[#00e5ff]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2 border-[#00e5ff]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-[#00e5ff]" />

          {status === "success" ? (
            <div className="py-6 text-center">
              <p className="text-3d text-4xl text-neon">C&apos;est payé et envoyé 🔥</p>
              <p className="text-3d-sm mt-4 text-lg uppercase text-white">
                Je te contacte sous 24h sur WhatsApp.
              </p>
            </div>
          ) : status === "full" ? (
            <div className="py-6 text-center">
              <p className="text-3d text-4xl text-neon">Places prises pour aujourd&apos;hui 🔒</p>
              <p className="text-3d-sm mt-4 text-lg uppercase text-white">
                Je ne peux prendre que quelques nouvelles demandes par jour pour bien m&apos;occuper de chacun. Reviens demain !
              </p>
            </div>
          ) : status === "cancelled" ? (
            <div className="py-6 text-center">
              <p className="text-3d text-4xl text-neon">Paiement annulé</p>
              <p className="text-3d-sm mt-4 text-lg uppercase text-white">
                Aucun souci, tu peux réessayer quand tu veux.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setStep(STEPS.length - 1);
                }}
                className="text-3d-sm text-neon mt-8 text-2xl uppercase tracking-wide transition hover:-translate-y-0.5"
              >
                Réessayer
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8 flex items-center gap-2">
                {STEPS.map((label, i) => (
                  <div key={label} className="flex-1">
                    <div
                      className={`h-2 transition-all duration-500 ${
                        i <= step ? "bg-gradient-to-r from-[#00e5ff] to-[#1e6bff] shadow-[0_0_10px_#00e5ff]" : "bg-white/10"
                      }`}
                    />
                  </div>
                ))}
              </div>
              <p className="text-3d-sm text-neon mb-10 text-center text-xl uppercase sm:text-2xl">
                Étape {step + 1} / {STEPS.length} — {STEPS[step]}
              </p>

              <div key={step} className="step-fade space-y-8">
                {step === 0 && (
                  <>
                    <FieldInput label="Ton prénom" value={prenom} onChange={setPrenom} placeholder="Sofiane" />
                    <FieldInput label="Ton numéro WhatsApp" value={numero} onChange={setNumero} type="tel" placeholder="06 12 34 56 78" />
                  </>
                )}

                {step === 1 && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <FieldInput label="Ton âge" value={age} onChange={setAge} type="number" placeholder="25" unit="ans" />
                      <FieldInput label="Ton poids" value={poids} onChange={setPoids} type="number" placeholder="70" unit="kg" />
                    </div>
                    <FieldInput label="Ta taille" value={taille} onChange={setTaille} type="number" placeholder="175" unit="cm" />
                    <div>
                      <label className="text-3d-sm text-xl uppercase text-white sm:text-2xl">Tu es</label>
                      <div className="mt-4 flex gap-4">
                        <ToggleCard label="Homme" active={genre === "Homme"} onClick={() => setGenre("Homme")} />
                        <ToggleCard label="Femme" active={genre === "Femme"} onClick={() => setGenre("Femme")} />
                      </div>
                    </div>
                    <div>
                      <label className="text-3d-sm text-xl uppercase text-white sm:text-2xl">Ton niveau sportif</label>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Chip label="Débutant" active={niveauSportif === "Débutant"} onClick={() => setNiveauSportif("Débutant")} />
                        <Chip
                          label="Intermédiaire"
                          active={niveauSportif === "Intermédiaire"}
                          onClick={() => setNiveauSportif("Intermédiaire")}
                        />
                        <Chip label="Confirmé" active={niveauSportif === "Confirmé"} onClick={() => setNiveauSportif("Confirmé")} />
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div>
                      <label className="text-3d-sm text-xl uppercase text-white sm:text-2xl">Ton objectif principal</label>
                      <div className="mt-4 flex gap-4">
                        <ToggleCard
                          label="Prise de masse"
                          active={objectif === "Prise de masse"}
                          onClick={() => setObjectif("Prise de masse")}
                        />
                        <ToggleCard
                          label="Perte de poids"
                          active={objectif === "Perte de poids"}
                          onClick={() => setObjectif("Perte de poids")}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-3d-sm text-xl uppercase text-white sm:text-2xl">Zones à prioriser</label>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Chip label="Ventre" active={zonesPriorite.includes("Ventre")} onClick={() => toggleZone("Ventre")} />
                        <Chip label="Bras" active={zonesPriorite.includes("Bras")} onClick={() => toggleZone("Bras")} />
                        <Chip label="Jambes" active={zonesPriorite.includes("Jambes")} onClick={() => toggleZone("Jambes")} />
                        <Chip label="Fessiers" active={zonesPriorite.includes("Fessiers")} onClick={() => toggleZone("Fessiers")} />
                        <Chip
                          label="Tout le corps"
                          active={zonesPriorite.includes("Tout le corps")}
                          onClick={() => toggleZone("Tout le corps")}
                        />
                      </div>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div>
                      <label className="text-3d-sm text-xl uppercase text-white sm:text-2xl">Où tu t&apos;entraînes</label>
                      <div className="mt-4 flex gap-4">
                        <ToggleCard label="Maison" active={lieu === "Maison"} onClick={() => setLieu("Maison")} />
                        <ToggleCard label="Salle" active={lieu === "Salle"} onClick={() => setLieu("Salle")} />
                      </div>
                    </div>
                    <div>
                      <label className="text-3d-sm text-xl uppercase text-white sm:text-2xl">Tes disponibilités</label>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Chip label="Semaine" active={disponibilite.includes("Semaine")} onClick={() => toggleDispo("Semaine")} />
                        <Chip label="Week-end" active={disponibilite.includes("Week-end")} onClick={() => toggleDispo("Week-end")} />
                      </div>
                    </div>
                    {lieu === "Maison" && (
                      <div>
                        <label className="text-3d-sm text-xl uppercase text-white sm:text-2xl">Matériel disponible</label>
                        <div className="mt-4 flex flex-wrap gap-3">
                          <Chip label="Rien" active={materiel.includes("Rien")} onClick={() => toggleMateriel("Rien")} />
                          <Chip label="Haltères" active={materiel.includes("Haltères")} onClick={() => toggleMateriel("Haltères")} />
                          <Chip label="Élastiques" active={materiel.includes("Élastiques")} onClick={() => toggleMateriel("Élastiques")} />
                          <Chip
                            label="Banc + barre"
                            active={materiel.includes("Banc + barre")}
                            onClick={() => toggleMateriel("Banc + barre")}
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}

                {step === 4 && (
                  <>
                    <div>
                      <label className="text-3d-sm text-xl uppercase text-white sm:text-2xl">Ton hygiène de vie</label>
                      <textarea
                        value={hygieneVie}
                        onChange={(e) => setHygieneVie(e.target.value)}
                        placeholder="Sommeil, stress, alimentation, activité..."
                        rows={4}
                        className="mt-4 w-full rounded-none border-2 border-white/10 bg-white/[0.05] px-5 py-4 text-lg text-white placeholder:text-[#5b657c] outline-none transition focus:border-[#00e5ff] focus:shadow-[0_0_25px_rgba(0,229,255,0.4)]"
                      />
                    </div>
                    <div>
                      <label className="text-3d-sm text-xl uppercase text-white sm:text-2xl">Comment tu m&apos;as connu</label>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Chip label="Instagram" active={commentConnu === "Instagram"} onClick={() => setCommentConnu("Instagram")} />
                        <Chip label="TikTok" active={commentConnu === "TikTok"} onClick={() => setCommentConnu("TikTok")} />
                        <Chip
                          label="Bouche à oreille"
                          active={commentConnu === "Bouche à oreille"}
                          onClick={() => setCommentConnu("Bouche à oreille")}
                        />
                        <Chip label="Google" active={commentConnu === "Google"} onClick={() => setCommentConnu("Google")} />
                        <Chip label="Autre" active={commentConnu === "Autre"} onClick={() => setCommentConnu("Autre")} />
                      </div>
                    </div>
                  </>
                )}

                {step === 5 && (
                  <div>
                    <RecapRow label="Prénom" value={prenom} />
                    <RecapRow label="Numéro WhatsApp" value={numero} />
                    <RecapRow label="Âge" value={age ? `${age} ans` : ""} />
                    <RecapRow label="Genre" value={genre} />
                    <RecapRow label="Poids" value={poids ? `${poids} kg` : ""} />
                    <RecapRow label="Taille" value={taille ? `${taille} cm` : ""} />
                    <RecapRow label="Niveau sportif" value={niveauSportif} />
                    <RecapRow label="Objectif" value={objectif} />
                    <RecapRow label="Zones à prioriser" value={zonesPriorite.join(", ")} />
                    <RecapRow label="Lieu d'entraînement" value={lieu} />
                    <RecapRow label="Disponibilité" value={disponibilite.join(", ")} />
                    {lieu === "Maison" && <RecapRow label="Matériel" value={materiel.join(", ")} />}
                    <RecapRow label="Comment connu" value={commentConnu} />
                  </div>
                )}
              </div>

              {step === STEPS.length - 1 && status !== "error" && (
                <div
                  className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-[#1e6bff]/40 bg-[#1e6bff]/10 px-6 py-2.5 text-[#9dc0ff] backdrop-blur"
                  style={{ fontFamily: "'Anton', sans-serif", fontStyle: "italic" }}
                >
                  <svg
                    className="h-5 w-5 text-neon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ filter: "drop-shadow(0 0 6px rgba(0,229,255,0.8))" }}
                  >
                    <rect x="5" y="11" width="14" height="9" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm uppercase tracking-[0.2em]">Paiement 100% sécurisé par Stripe</span>
                </div>
              )}

              {status === "error" && (
                <p className="text-3d-sm mt-8 text-center text-lg uppercase text-red-400">
                  Un problème est survenu. Contacte-moi directement sur WhatsApp.
                </p>
              )}

              <div className="mt-10 flex items-center justify-between gap-6">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={prev}
                    className="text-3d-sm text-xl uppercase text-white transition hover:text-neon"
                  >
                    ← Précédent
                  </button>
                ) : (
                  <span />
                )}
                <button
                  type="button"
                  onClick={next}
                  disabled={!canNext[step] || status === "loading"}
                  className="text-3d-sm text-neon group inline-flex items-center gap-3 text-2xl uppercase tracking-wide transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 sm:text-3xl"
                >
                  {status === "loading"
                    ? "Redirection..."
                    : step === STEPS.length - 1
                      ? "Payer 19,99€ et envoyer"
                      : "Suivant"}
                  <span className="transition group-hover:translate-x-1">→</span>
                </button>
              </div>

              <p
                className="text-3d-sm not-italic mt-12 text-center text-sm uppercase tracking-widest text-white underline"
                style={{ textShadow: "none" }}
              >
                Je te contacte sous 24h pour parler de ton objectif.
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
