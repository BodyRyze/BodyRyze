import Link from "next/link";
import ParallaxBg from "./ParallaxBg";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-16 text-center sm:py-32">
      {/* ---------- FOND ---------- */}
      <div className="absolute inset-0 bg-[#05070d]" />
      <ParallaxBg src="/gym.jpg" className="absolute inset-0 opacity-60" speed={0.15} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070d]/80 via-[#05070d]/55 to-[#05070d]" />
      <div className="hero-orb absolute left-1/2 top-[38%] h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e6bff] blur-[170px]" />
      <div className="hero-grid absolute inset-x-0 bottom-0 h-[38%]" />
      <div className="hero-scan absolute inset-x-0 top-0 h-px" />
      <div className="light-streak" />

      {/* ---------- CONTENU ---------- */}
      <div className="relative z-10 flex max-w-5xl flex-col items-center">
        <p className="hero-in hero-eyebrow mb-10 inline-flex items-center gap-3 rounded-full border border-[#1e6bff]/40 bg-[#1e6bff]/10 px-6 py-2.5 text-sm uppercase tracking-[0.3em] text-[#9dc0ff] backdrop-blur sm:mb-24">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
          Coaching 100% BodyRyze
          <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
        </p>

        <h1 className="hero-in hero-d2 text-3d text-6xl uppercase leading-[0.82] tracking-tight text-white sm:text-7xl md:text-8xl">
          Ton programme,
          <span className="mt-5 block">
            <span className="hero-block inline-block -rotate-2 whitespace-nowrap bg-gradient-to-r from-[#00e5ff] to-[#1e6bff] px-3 pb-1.5 pt-2 text-3xl text-white shadow-[0_0_45px_rgba(30,107,255,0.6)] sm:px-5 sm:pb-2 sm:pt-3 sm:text-7xl md:text-8xl">
              mon expérience
            </span>
          </span>
        </h1>

        <Link
          href="/commencer"
          className="hero-in hero-d3 text-3d-sm text-neon group mt-8 inline-flex items-center gap-3 text-2xl uppercase tracking-wide transition hover:-translate-y-0.5 sm:mt-16 sm:text-3xl"
        >
          Commencer maintenant
          <span className="transition group-hover:translate-x-1">→</span>
        </Link>

        <a
          href="#histoire"
          className="hero-in hero-d3 text-3d-sm text-neon group mt-5 inline-flex items-center gap-2 text-lg uppercase tracking-wide transition hover:-translate-y-0.5"
        >
          Voir avant / après
          <span className="transition group-hover:translate-x-1">→</span>
        </a>

        <p className="hero-in hero-d4 mt-7 text-base uppercase text-white sm:text-lg">
          Je te contacte <span className="text-glow-soft font-semibold text-white">sous 24h</span>
        </p>

        <div className="hero-in hero-d4 mt-4 hidden flex-col items-center text-[#00e5ff] sm:mt-8 sm:flex">
          <svg className="scroll-chevron h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M4 8l8 8 8-8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className="scroll-chevron scroll-chevron-2 -mt-3 h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M4 8l8 8 8-8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className="scroll-chevron scroll-chevron-3 -mt-3 h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M4 8l8 8 8-8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* ---------- STATS CENTRÉES EN BAS ---------- */}
      <div className="hero-in hero-d4 absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-8 px-6 text-center sm:bottom-10 sm:gap-12">
        <div>
          <CountUp end={12} prefix="+" suffix="kg" className="text-3d-sm text-2xl text-white sm:text-3xl" />
          <p className="mt-1 text-[10px] uppercase tracking-wider text-[#5b657c] sm:text-xs">6 mois</p>
        </div>
        <div className="h-9 w-px bg-white/15" />
        <div>
          <CountUp end={100} suffix="%" className="text-3d-sm text-2xl text-white sm:text-3xl" />
          <p className="mt-1 text-[10px] uppercase tracking-wider text-[#5b657c] sm:text-xs">programme sur-mesure</p>
        </div>
        <div className="h-9 w-px bg-white/15" />
        <div>
          <CountUp end={24} suffix="h" className="text-3d-sm text-2xl text-white sm:text-3xl" />
          <p className="mt-1 text-[10px] uppercase tracking-wider text-[#5b657c] sm:text-xs">délai de réponse</p>
        </div>
      </div>

      {/* ---------- STYLES ---------- */}
      <style>{`
        .hero-eyebrow {
          font-family: 'Anton', sans-serif;
          font-style: italic;
        }
        .hero-block {
          font-family: 'Anton', sans-serif;
          font-style: italic;
          text-shadow: 0 2px 0 rgba(0,0,0,0.18), 0 4px 10px rgba(0,0,0,0.35);
        }
        .hero-grid {
          background-image:
            linear-gradient(to right, rgba(30,107,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(30,107,255,0.15) 1px, transparent 1px);
          background-size: 55px 55px;
          transform: perspective(500px) rotateX(60deg);
          transform-origin: bottom;
          -webkit-mask-image: linear-gradient(to top, black, transparent);
          mask-image: linear-gradient(to top, black, transparent);
        }
        .hero-scan {
          background: linear-gradient(90deg, transparent, rgba(0,229,255,0.7), transparent);
          box-shadow: 0 0 18px rgba(0,229,255,0.5);
          animation: scan 6s ease-in-out infinite;
        }
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .hero-orb { opacity: 0.42; animation: glow 7s ease-in-out infinite; }
        @keyframes glow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.6; }
        }
        .hero-in { opacity: 0; animation: fadeUp 0.8s ease forwards; }
        .hero-d2 { animation-delay: 0.12s; }
        .hero-d3 { animation-delay: 0.24s; }
        .hero-d4 { animation-delay: 0.38s; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scroll-chevron {
          filter: drop-shadow(0 0 6px rgba(0,229,255,0.85));
          animation: chevron-bounce 1.6s ease-in-out infinite;
        }
        .scroll-chevron-2 { animation-delay: 0.2s; }
        .scroll-chevron-3 { animation-delay: 0.4s; }
        @keyframes chevron-bounce {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(6px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-scan, .hero-orb, .hero-in, .scroll-chevron { animation: none; opacity: 1; }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-bottom-left -rotate-1 bg-gradient-to-r from-transparent via-[#00e5ff]/60 to-transparent shadow-[0_0_12px_rgba(0,229,255,0.6)]" />
    </section>
  );
}