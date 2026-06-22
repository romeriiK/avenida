import Image from "next/image";
import Link from "next/link";
import { AvenidaEsSection } from "@/components/banda/avenida-es-section";

const BAND_PHOTOS = [
  { name: "Nacho", src: "/assets/fotos/nacho.webp" },
  { name: "Borja", src: "/assets/fotos/borja.webp" },
  { name: "Medina", src: "/assets/fotos/medina.webp" },
  { name: "Loren", src: "/assets/fotos/loren.webp" },
  { name: "Jacobo", src: "/assets/fotos/jacobo.webp" },
];

const NEXT_SHOWS = [
  { date: "29 JUN", city: "Burriana" },
  { date: "4 JUL", city: "El Puerto de Santa María" },
  { date: "25 JUL", city: "—" },
  { date: "29 AGO", city: "—" },
];

export default function Home() {
  return (
    <div className="min-h-dvh">
      {/* HERO — band photo full-width */}
      <section className="relative h-dvh sm:h-screen">
        {/* Main band photo */}
        <div className="absolute inset-0">
          <Image
            src="/assets/fotos/borja.webp"
            alt="Avenida"
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 75vw"
            priority
          />
          <div className="absolute inset-0 bg-avenida-blue/30" />
        </div>

        {/* Hero overlay content */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12">
          <div className="animate-in">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-none mb-4">
              AVENIDA
            </h1>
            <p className="text-avenida-text/80 text-lg sm:text-xl lg:text-2xl max-w-md mb-8">
              La banda de tu vida
            </p>
          </div>

          <div className="flex flex-wrap gap-3 animate-in stagger-2">
            <Link
              href="/conciertos"
              className="bg-avenida-text text-avenida-blue font-bold py-3 px-6 
                         text-sm tracking-wide hover:bg-avenida-accent transition-colors"
            >
              VER CONCIERTOS
            </Link>
            <Link
              href="/musica"
              className="border border-avenida-text text-avenida-text font-bold py-3 px-6 
                         text-sm tracking-wide hover:bg-avenida-text hover:text-avenida-blue transition-colors"
            >
              ESCUCHAR
            </Link>
          </div>
        </div>

        {/* Scroll arrow */}
        <div className="absolute bottom-4 right-8 animate-bounce hidden sm:block">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" className="text-avenida-text/40">
            <path d="M7 13l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* TOUR DATES section */}
      <section className="px-4 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="flex items-baseline justify-between mb-8">
          <div className="flex items-baseline gap-3">
            <span className="text-xl lg:text-2xl font-extrabold text-avenida-text-muted">
              02
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              CONCIERTOS
            </h2>
          </div>
          <Link
            href="/conciertos"
            className="text-avenida-text-muted hover:text-avenida-text text-sm tracking-wider transition-colors"
          >
            Ver todos →
          </Link>
        </div>

        <div className="space-y-2">
          {NEXT_SHOWS.map((show, i) => (
            <div
              key={i}
              className="flex items-center gap-4 py-3 border-b border-avenida-surface/30 
                         last:border-0 animate-in"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <span className="text-avenida-text font-bold text-sm sm:text-base w-20 sm:w-24 shrink-0">
                {show.date}
              </span>
              <span className="text-avenida-text-muted text-sm sm:text-base flex-1">
                {show.city}
              </span>
              <span className="text-avenida-text-muted text-2xl">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* MUSIC section */}
      <section className="px-4 sm:px-8 lg:px-12 py-16 sm:py-20 border-t border-avenida-surface/30">
        <div className="flex items-baseline gap-3 mb-8">
          <span className="text-xl lg:text-2xl font-extrabold text-avenida-text-muted">
            04
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            MÚSICA
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0">
            <Image
              src="/assets/logo/labanda.webp"
              alt="La banda de mi vida"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px, 192px"
            />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1">
              La banda de mi vida
            </h3>
            <p className="text-avenida-text-muted text-sm mb-4">
              Disponible en todas las plataformas
            </p>
            <div className="flex gap-3">
              <Link
                href="/musica"
                className="border border-avenida-text/40 text-avenida-text-muted 
                           hover:text-avenida-text hover:border-avenida-text text-xs 
                           tracking-wider px-4 py-2 transition-all"
              >
                SPOTIFY
              </Link>
              <Link
                href="/musica"
                className="border border-avenida-text/40 text-avenida-text-muted 
                           hover:text-avenida-text hover:border-avenida-text text-xs 
                           tracking-wider px-4 py-2 transition-all"
              >
                YOUTUBE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AVENIDA ES — interactive muñecos section */}
      <AvenidaEsSection />
    </div>
  );
}
