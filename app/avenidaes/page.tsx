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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <p className="section-num">05</p>
      <h1 className="hero-title !text-4xl sm:!text-6xl md:!text-7xl mb-4">
        AVENIDAES
      </h1>
      <p className="text-avenida-text-muted text-sm sm:text-base mb-10 max-w-lg">
        El universo Avenida: miembros, redes sociales, fotos, vídeos y más.
      </p>

      {/* Band members */}
      <h3 className="section-title !text-xl sm:!text-2xl mb-6">La banda</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-12">
        {MEMBERS.map((m, i) => (
          <div
            key={m.name}
            className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-avenida-surface animate-in"
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            <Image
              src={m.img}
              alt={m.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-avenida-blue/80 via-transparent to-transparent" />
            <p className="absolute bottom-2 left-2 text-avenida-text font-bold text-sm sm:text-base">
              {m.name}
            </p>
          </div>
        ))}
      </div>

      {/* Muñecos / avatars */}
      <h3 className="section-title !text-xl sm:!text-2xl mb-6">Avatares</h3>
      <div className="flex flex-wrap gap-3 sm:gap-4 mb-12">
        {MEMBERS.map((m, i) => (
          <div
            key={m.name}
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-avenida-surface border-2 border-avenida-surface animate-in"
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
      <h3 className="section-title !text-xl sm:!text-2xl mb-6">Redes</h3>
      <div className="flex flex-wrap gap-3">
        {[
          { label: "STAGRAM", url: "https://instagram.com" },
          { label: "SPOTIFY", url: "https://open.spotify.com" },
          { label: "YOUTUBE", url: "https://youtube.com" },
          { label: "TIKTOK", url: "https://tiktok.com" },
        ].map((social, i) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener"
            className="btn-outline !py-2 !px-5 !text-xs sm:!text-sm animate-in"
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            {social.label}
          </a>
        ))}
      </div>
    </div>
  );
}
