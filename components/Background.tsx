export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#05070d]">

      {/* Halo principal */}
      <div
        className="absolute top-[-220px] left-1/2 -translate-x-1/2
        w-[900px] h-[900px]
        rounded-full
        bg-blue-600/30
        blur-[180px]"
      />

      {/* Halo gauche */}
      <div
        className="absolute top-1/3 -left-52
        w-[500px] h-[500px]
        rounded-full
        bg-cyan-500/10
        blur-[140px]"
      />

      {/* Halo droite */}
      <div
        className="absolute bottom-[-120px] right-[-120px]
        w-[500px] h-[500px]
        rounded-full
        bg-blue-500/20
        blur-[160px]"
      />

      {/* Dégradé */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070b15]/40 to-[#05070d]" />

      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,.75))]" />

    </div>
  );
}