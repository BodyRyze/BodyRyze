import Link from "next/link";

export default function Story() {
  return (
    <section id="histoire" className="relative w-full overflow-hidden px-6 py-28">
      <div className="absolute inset-0 bg-[#05070d]" />
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/story-bg.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070d] via-[#05070d]/70 to-[#05070d]" />
      <div className="pointer-events-none absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#1e6bff] opacity-20 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="text-3d text-center text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
          Ma transformation en seulement 6 mois
        </h2>

        <div className="mx-auto mt-6 flex w-24 items-center gap-2">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#00e5ff]" />
          <div className="h-1.5 w-1.5 rotate-45 bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#00e5ff]" />
        </div>

        <div
          className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-full border border-[#1e6bff]/40 bg-[#1e6bff]/10 px-6 py-2.5 text-sm uppercase tracking-[0.3em] text-[#9dc0ff] backdrop-blur"
          style={{ fontFamily: "'Anton', sans-serif", fontStyle: "italic" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
          Photos 100% authentiques, non retouchées
          <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
        </div>

        <div className="mt-16 flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-center">
          <div className="flex flex-col items-center gap-4">
            <p className="text-3d-sm text-2xl uppercase text-white sm:text-3xl">Avant</p>
            <div className="group-glow flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-nowrap sm:overflow-x-auto sm:gap-6">
              <div className="group relative w-full sm:min-w-[320px] sm:max-w-[600px] sm:flex-1 overflow-hidden rounded-none border-2 border-[#1e6bff]/50 shadow-[0_0_40px_rgba(30,107,255,0.35)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#1e6bff]/80 hover:shadow-[0_0_60px_rgba(30,107,255,0.6)]">
                <img src="/avant-1.jpeg" alt="Avant 1" className="h-64 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-96" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="light-streak" />
                <div className="card-scan" />
                <div className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#00e5ff]" />
                <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-[#00e5ff]" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-[#00e5ff]" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-[#00e5ff]" />
              </div>
              <div className="group relative w-full sm:min-w-[320px] sm:max-w-[600px] sm:flex-1 overflow-hidden rounded-none border-2 border-[#1e6bff]/50 shadow-[0_0_40px_rgba(30,107,255,0.35)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#1e6bff]/80 hover:shadow-[0_0_60px_rgba(30,107,255,0.6)]">
                <img src="/avant-2.jpeg" alt="Avant 2" className="h-64 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-96" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="light-streak" />
                <div className="card-scan" />
                <div className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#00e5ff]" />
                <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-[#00e5ff]" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-[#00e5ff]" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-[#00e5ff]" />
              </div>
            </div>
          </div>

          <span className="text-neon rotate-90 text-4xl sm:rotate-0 sm:self-center">→</span>

          <div className="flex flex-col items-center gap-4">
            <p className="text-3d-sm text-2xl uppercase text-white sm:text-3xl">Après</p>
            <div className="group-glow flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-nowrap sm:overflow-x-auto sm:gap-6">
              <div className="group relative w-full sm:min-w-[320px] sm:max-w-[600px] sm:flex-1 overflow-hidden rounded-none border-2 border-[#1e6bff]/50 shadow-[0_0_40px_rgba(30,107,255,0.35)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#1e6bff]/80 hover:shadow-[0_0_60px_rgba(30,107,255,0.6)]">
                <img src="/apres-1.jpeg" alt="Après 1" className="h-64 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-96" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="light-streak" />
                <div className="card-scan" />
                <div className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#00e5ff]" />
                <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-[#00e5ff]" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-[#00e5ff]" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-[#00e5ff]" />
              </div>
              <div className="group relative w-full sm:min-w-[320px] sm:max-w-[600px] sm:flex-1 overflow-hidden rounded-none border-2 border-[#1e6bff]/50 shadow-[0_0_40px_rgba(30,107,255,0.35)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#1e6bff]/80 hover:shadow-[0_0_60px_rgba(30,107,255,0.6)]">
                <img src="/apres-2.jpeg" alt="Après 2" className="h-64 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-96" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="light-streak" />
                <div className="card-scan" />
                <div className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#00e5ff]" />
                <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-[#00e5ff]" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-[#00e5ff]" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-[#00e5ff]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-md items-center gap-4">
          <span className="text-3d-sm text-sm uppercase tracking-widest text-white">0 jours</span>
          <div className="relative h-[2px] flex-1 bg-gradient-to-r from-[#1e6bff]/20 via-[#00e5ff] to-[#1e6bff]/20">
            <div className="card-dot" style={{ top: "-4px", left: "50%", transform: "translateX(-50%)" }} />
          </div>
          <span className="text-3d-sm text-sm uppercase tracking-widest text-white">180 jours</span>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/commencer"
            className="text-3d-sm text-neon group inline-flex items-center gap-3 text-2xl uppercase tracking-wide transition hover:-translate-y-0.5 sm:text-3xl"
          >
            On en discute
            <span className="transition group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
