export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="flex w-full items-center justify-center bg-black py-2">
        <a href="/" className="text-3d-sm text-neon text-3xl uppercase tracking-wide sm:text-4xl">
          Body<span className="text-[#1e6bff]" style={{ textShadow: "0 0 22px rgba(30,107,255,0.7)" }}>Ryze</span>
        </a>
      </div>
    </header>
  );
}
