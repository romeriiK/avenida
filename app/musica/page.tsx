import Image from "next/image";

export default function MusicaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <p className="section-num">04</p>
      <h1 className="hero-title !text-4xl sm:!text-6xl md:!text-7xl mb-4">MÚSICA</h1>
      <p className="text-avenida-text-muted text-sm sm:text-base mb-10 max-w-lg">
        Discografía oficial de Avenida. Escúchanos en tu plataforma favorita.
      </p>

      {/* Featured release */}
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mb-12 sm:mb-16">
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 shrink-0">
          <Image
            src="/assets/logo/labanda.webp"
            alt="La banda de mi vida"
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 640px) 224px, 256px"
          />
        </div>

        <div className="text-center sm:text-left">
          <p className="text-avenida-text-muted text-xs tracking-widest uppercase mb-2">
            Single 2026
          </p>
          <h2 className="text-avenida-text text-2xl sm:text-3xl font-bold mb-2">
            La banda de mi vida
          </h2>
          <p className="text-avenida-text-muted text-sm mb-6">
            Disponible en todas las plataformas digitales
          </p>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener"
              className="btn-outline text-sm !py-2 !px-5"
            >
              SPOTIFY
            </a>
            <a
              href="https://music.apple.com"
              target="_blank"
              rel="noopener"
              className="btn-outline text-sm !py-2 !px-5"
            >
              APPLE MUSIC
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener"
              className="btn-outline text-sm !py-2 !px-5"
            >
              YOUTUBE
            </a>
          </div>
        </div>
      </div>

      {/* Discography placeholder */}
      <div className="border-t border-avenida-surface/50 pt-10">
        <h3 className="section-title !text-xl sm:!text-2xl">
          Discografía
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="tour-card flex items-center gap-4">
            <div className="w-12 h-12 bg-avenida-surface rounded-lg shrink-0" />
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
