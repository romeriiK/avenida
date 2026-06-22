import Image from "next/image";
import Link from "next/link";

const MEMBERS = [
  { name: "Nacho", img: "/assets/fotos/nacho.webp" },
  { name: "Borja", img: "/assets/fotos/borja.webp" },
  { name: "Medina", img: "/assets/fotos/medina.webp" },
  { name: "Loren", img: "/assets/fotos/loren.webp" },
  { name: "Jacobo", img: "/assets/fotos/jacobo.webp" },
];

const NEXT_SHOWS = [
  { date: "29 JUN", city: "Burriana", venue: "—" },
  { date: "4 JUL", city: "El Puerto de Santa María", venue: "—" },
  { date: "25 JUL", city: "—", venue: "—" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90dvh] flex flex-col items-center justify-center px-4 sm:px-6 text-center overflow-hidden">
        {/* Background: band members grid (desktop) / stacked (mobile) */}
        <div className="absolute inset-0 opacity-20 sm:opacity-25 pointer-events-none">
          <div className="hidden sm:grid grid-cols-5 h-full">
            {MEMBERS.map((m) => (
              <div key={m.name} className="relative h-full">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="object-cover object-top"
                  sizes="20vw"
                  priority
                />
                <div className="absolute inset-0 bg-avenida-blue/60" />
              </div>
            ))}
          </div>
          {/* Mobile: muñeco group */}
          <div className="sm:hidden relative h-full">
            <Image
              src="/assets/munecos/todos.webp"
              alt="Avenida"
              fill
              className="object-contain p-8"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-avenida-blue/40" />
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10">
          <div className="animate-in">
            <p className="section-num">01</p>
            <h1 className="hero-title mb-4">AVENIDA</h1>
            <p className="text-avenida-text-muted text-lg sm:text-xl max-w-md mx-auto mb-8">
              La banda de tu vida
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-in stagger-2">
            <Link href="/conciertos" className="btn-primary">
              VER CONCIERTOS
            </Link>
            <Link href="/musica" className="btn-outline">
              ESCUCHAR
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-avenida-text/40"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* TOUR DATES PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="section-num">02</p>
            <h2 className="section-title">Próximos conciertos</h2>
          </div>
          <Link
            href="/conciertos"
            className="text-avenida-text-muted hover:text-avenida-text text-sm tracking-wider transition-colors"
          >
            Ver todos →
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          {NEXT_SHOWS.map((show, i) => (
            <div key={i} className="tour-card animate-in" style={{ animationDelay: `${0.15 * i}s` }}>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="text-right min-w-[60px] sm:min-w-[80px]">
                  <p className="text-avenida-text font-bold text-sm sm:text-base leading-tight">
                    {show.date.split(" ")[0]}
                  </p>
                  <p className="text-avenida-text-muted text-xs sm:text-sm leading-tight">
                    {show.date.split(" ")[1]}
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-avenida-text font-semibold text-sm sm:text-base truncate">
                    {show.city}
                  </p>
                  {show.venue !== "—" && (
                    <p className="text-avenida-text-muted text-xs truncate">
                      {show.venue}
                    </p>
                  )}
                </div>
                <Link
                  href="/conciertos"
                  className="text-avenida-text-muted hover:text-avenida-text text-2xl transition-colors shrink-0"
                >
                  →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MUSIC SECTION */}
      <section className="bg-avenida-dark py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="section-num">04</p>
          <h2 className="section-title">Música</h2>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0">
              <Image
                src="/assets/logo/labanda.webp"
                alt="La banda de mi vida"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 640px) 192px, 224px"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-avenida-text text-xl sm:text-2xl font-bold mb-2">
                La banda de mi vida
              </p>
              <p className="text-avenida-text-muted text-sm sm:text-base mb-6">
                Escucha nuestro último single en todas las plataformas
              </p>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <Link href="/musica" className="btn-outline text-sm py-2 px-5">
                  SPOTIFY
                </Link>
                <Link href="/musica" className="btn-outline text-sm py-2 px-5">
                  YOUTUBE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVENIDAES / CLUB */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center">
          <p className="section-num">05</p>
          <h2 className="section-title text-center">Avenidaes</h2>
          <p className="text-avenida-text-muted text-sm sm:text-base max-w-lg mx-auto mb-8">
            Fotos, vídeos, redes sociales y todo lo que pasa en el mundo Avenida
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto mb-8">
            {MEMBERS.map((m, i) => (
              <div
                key={m.name}
                className="relative aspect-square rounded-xl overflow-hidden bg-avenida-surface animate-in"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 45vw, 150px"
                />
              </div>
            ))}
          </div>

          <Link href="/avenidaes" className="btn-primary inline-block">
            ACCESO CLUB
          </Link>
        </div>
      </section>
    </>
  );
}
