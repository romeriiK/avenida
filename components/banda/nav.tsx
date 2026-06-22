"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { num: "01", label: "INICIO", href: "/" },
  { num: "02", label: "CONCIERTOS", href: "/conciertos" },
  { num: "03", label: "TIENDA", href: "/tienda" },
  { num: "04", label: "MÚSICA", href: "/musica" },
  { num: "05", label: "AVENIDAES", href: "/avenidaes" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-avenida-blue/95 backdrop-blur-sm border-b border-avenida-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo / brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-avenida-text font-extrabold text-lg sm:text-xl tracking-tight">
            AVENIDA
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item flex items-center gap-1 ${
                pathname === item.href
                  ? "!text-avenida-text"
                  : ""
              }`}
            >
              <span className="num">{item.num}</span>
              <span className="hidden lg:inline">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span
            className={`block w-5 h-0.5 bg-avenida-text transition-transform ${
              open ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-avenida-text transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-avenida-text transition-transform ${
              open ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-avenida-blue border-t border-avenida-surface/50 animate-in">
          <div className="px-4 py-3 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 py-2 ${
                  pathname === item.href
                    ? "text-avenida-text font-bold"
                    : "text-avenida-text-muted"
                }`}
              >
                <span className="text-lg font-bold w-8">{item.num}</span>
                <span className="text-sm tracking-widest">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
