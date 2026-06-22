import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-avenida-dark/80 border-t border-avenida-surface/50 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="text-avenida-text font-extrabold text-lg tracking-tight">
              AVENIDA
            </p>
            <p className="text-avenida-text-muted text-xs mt-1">
              &copy; {new Date().getFullYear()} Avenida
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <Link
              href="https://instagram.com/avenida"
              target="_blank"
              rel="noopener"
              className="text-avenida-text-muted hover:text-avenida-text transition-colors text-sm tracking-wider"
            >
              STAGRAM
            </Link>
            <Link
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener"
              className="text-avenida-text-muted hover:text-avenida-text transition-colors text-sm tracking-wider"
            >
              SPOTIFY
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener"
              className="text-avenida-text-muted hover:text-avenida-text transition-colors text-sm tracking-wider"
            >
              YOUTUBE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
