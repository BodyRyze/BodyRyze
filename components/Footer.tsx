import Link from "next/link";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#05070d] py-12 text-center">
      <Reveal>
        <h2 className="text-3xl font-black text-white">
          Body<span className="text-blue-500">Ryze</span>
        </h2>

        <div className="mt-5 flex items-center justify-center gap-6 text-sm text-[#8a93a6]">
          <Link href="/mentions-legales" className="transition hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]">
            Mentions légales
          </Link>
          <span className="text-white/20">·</span>
          <Link href="/cgv" className="transition hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]">
            CGV
          </Link>
        </div>

        <p className="mt-4 text-gray-500">© 2026 BodyRyze. Tous droits réservés.</p>
      </Reveal>
    </footer>
  );
}
