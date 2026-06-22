"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAV_ITEMS = [
  { num: "01", label: "INICIO", href: "/" },
  { num: "02", label: "CONCIERTOS", href: "/conciertos" },
  { num: "03", label: "TIENDA", href: "/tienda" },
  { num: "04", label: "MÚSICA", href: "/musica" },
  { num: "05", label: "AVENIDA ES", href: "/avenidaes" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full sm:w-64 lg:w-72 xl:w-80 shrink-0 bg-avenida-blue flex flex-col border-b sm:border-b-0 sm:border-r border-avenida-surface/30">
      {/* Mobile: compact horizontal nav */}
      <div className="sm:hidden flex items-center gap-3 px-4 py-3 overflow-x-auto">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-1.5 whitespace-nowrap ${
              pathname === item.href
                ? "text-avenida-text font-bold"
                : "text-avenida-text-muted"
            }`}
          >
            <span className="text-sm font-bold">{item.num}</span>
            <span className="text-xs tracking-wider">{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Desktop: full sidebar */}
      <div className="hidden sm:flex flex-col h-full p-6 lg:p-8">
        {/* Logo/title area */}
        <Link href="/" className="mb-12 lg:mb-16">
          <Image
            src="/assets/logo/logo.webp"
            alt="AVENIDA"
            width={160}
            height={60}
            className="w-32 lg:w-40"
            priority
          />
        </Link>

        {/* Nav items */}
        <nav className="flex flex-col gap-2 lg:gap-3 flex-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-baseline gap-3 lg:gap-4 py-1.5 lg:py-2 transition-all duration-200 ${
                  isActive
                    ? "text-avenida-text"
                    : "text-avenida-text-muted hover:text-avenida-text"
                }`}
              >
                <span
                  className={`text-xl lg:text-2xl font-extrabold tabular-nums transition-colors ${
                    isActive ? "text-avenida-text" : "text-avenida-text-muted group-hover:text-avenida-text"
                  }`}
                >
                  {item.num}
                </span>
                <span className="text-xs lg:text-sm tracking-[0.2em] lg:tracking-[0.3em] uppercase">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom: social / club */}
        <div className="mt-auto pt-8">
          <Link
            href="/avenidaes"
            className="inline-block border border-avenida-text/30 text-avenida-text-muted 
                       hover:text-avenida-text hover:border-avenida-text text-xs 
                       tracking-widest uppercase px-4 py-2 transition-all"
          >
            ACCESO CLUB
          </Link>
          
          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              className="text-avenida-text-muted hover:text-avenida-text text-xs tracking-wider transition-colors"
            >
              STAGRAM
            </a>
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener"
              className="text-avenida-text-muted hover:text-avenida-text text-xs tracking-wider transition-colors"
            >
              SPOTIFY
            </a>
          </div>

          <p className="text-avenida-text-muted/40 text-[10px] mt-4">
            &copy; {new Date().getFullYear()} AVENIDA
          </p>
        </div>
      </div>
    </aside>
  );
}
