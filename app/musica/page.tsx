import Image from "next/image";

export default function MusicaPage() {
  return (
    <div className="min-h-dvh px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
      {/* Header */}
      <div className="flex items-baseline gap-3 mb-8">
        <span className="text-xl lg:text-2xl font-extrabold text-avenida-text-muted">
          04
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          MÚSICA
        </h1>
      </div>

      {/* Featured release */}
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 mb-16 max-w-2xl">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0">
          <Image
            src="/assets/logo/labanda.webp"
            alt="La banda de mi vida"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 192px, 224px"
          />
        </div>

        <div>
          <p className="text-avenida-text-muted text-xs tracking-[0.3em] uppercase mb-2">
            Single 2026
          </p>
          <h2 className="text-avenida-text text-2xl sm:text-3xl font-bold mb-2">
            La banda de mi vida
          </h2>
          <p className="text-avenida-text-muted text-sm mb-6">
            Disponible en todas las plataformas digitales
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "SPOTIFY", url: "https://open.spotify.com" },
              { label: "APPLE MUSIC", url: "https://music.apple.com" },
              { label: "YOUTUBE", url: "https://youtube.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener"
                className="border border-avenida-text/40 text-avenida-text-muted 
                           hover:text-avenida-text hover:border-avenida-text 
                           text-xs tracking-wider px-4 py-2 transition-all"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Discography */}
      <div className="border-t border-avenida-surface/30 pt-10">
        <h3 className="text-avenida-text-muted text-xs tracking-[0.3em] uppercase mb-6">
          Discografía
        </h3>
        <div className="max-w-md">
          <div className="flex items-center gap-4 py-3 border-b border-avenida-surface/30">
            <div className="w-10 h-10 bg-avenida-surface/30 shrink-0" />
            <div>
              <p className="text-avenida-text font-semibold text-sm">
                La banda de mi vida
              </p>
              <p className="text-avenida-text-muted text-xs">2026 · Single</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
