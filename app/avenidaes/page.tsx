import Image from "next/image";

const MEMBERS = [
  { name: "Nacho", img: "/assets/fotos/nacho.webp", muneco: "/assets/munecos/nacho.webp" },
  { name: "Borja", img: "/assets/fotos/borja.webp", muneco: "/assets/munecos/borja.webp" },
  { name: "Medina", img: "/assets/fotos/medina.webp", muneco: "/assets/munecos/medina.webp" },
  { name: "Loren", img: "/assets/fotos/loren.webp", muneco: "/assets/munecos/loren.webp" },
  { name: "Jacobo", img: "/assets/fotos/jacobo.webp", muneco: "/assets/munecos/jaco.webp" },
];

export default function AvenidaesPage() {
  return (
    <div className="min-h-dvh px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
      {/* Header */}
      <div className="flex items-baseline gap-3 mb-8">
        <span className="text-xl lg:text-2xl font-extrabold text-avenida-text-muted">
          05
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          AVENIDA ES
        </h1>
      </div>

      <p className="text-avenida-text-muted text-sm sm:text-base mb-12 max-w-lg">
        El universo Avenida: miembros, avatares, redes sociales, fotos y más.
      </p>

      {/* Band members */}
      <h3 className="text-avenida-text-muted text-xs tracking-[0.3em] uppercase mb-6">
        La banda
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-16 max-w-4xl">
        {MEMBERS.map((m, i) => (
          <div
            key={m.name}
            className="relative aspect-[3/4] overflow-hidden animate-in"
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            <Image
              src={m.img}
              alt={m.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-avenida-blue/80 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 text-avenida-text font-bold text-sm">
              {m.name}
            </p>
          </div>
        ))}
      </div>

      {/* Avatars */}
      <h3 className="text-avenida-text-muted text-xs tracking-[0.3em] uppercase mb-6">
        Avatares
      </h3>
      <div className="flex flex-wrap gap-3 mb-16">
        {MEMBERS.map((m, i) => (
          <div
            key={m.name}
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden 
                       border-2 border-avenida-surface/50 animate-in"
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            <Image
              src={m.muneco}
              alt={m.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 64px, 80px"
            />
          </div>
        ))}
      </div>

      {/* Social links */}
      <h3 className="text-avenida-text-muted text-xs tracking-[0.3em] uppercase mb-6">
        Redes
      </h3>
      <div className="flex flex-wrap gap-3">
        {[
          { label: "STAGRAM", url: "https://instagram.com" },
          { label: "SPOTIFY", url: "https://open.spotify.com" },
          { label: "YOUTUBE", url: "https://youtube.com" },
          { label: "TIKTOK", url: "https://tiktok.com" },
        ].map((s, i) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener"
            className="border border-avenida-text/40 text-avenida-text-muted 
                       hover:text-avenida-text hover:border-avenida-text 
                       text-xs tracking-wider px-4 py-2 transition-all animate-in"
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
