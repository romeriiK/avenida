"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Muneco = {
  name: string;
  src: string;
  placeholder: string;
};

const MUNECOS: Muneco[] = [
  {
    name: "Nacho",
    src: "/assets/munecos/nacho.webp",
    placeholder:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae massa sed justo luctus porta.",
  },
  {
    name: "Borja",
    src: "/assets/munecos/borja.webp",
    placeholder:
      "Curabitur non sem id arcu facilisis pretium. Praesent ut urna a arcu tincidunt vulputate.",
  },
  {
    name: "Medina",
    src: "/assets/munecos/medina.webp",
    placeholder:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    name: "Loren",
    src: "/assets/munecos/loren.webp",
    placeholder:
      "Suspendisse potenti. Nullam auctor nisi quis diam fermentum, vel tincidunt nisl aliquam.",
  },
  {
    name: "Jacobo",
    src: "/assets/munecos/jaco.webp",
    placeholder:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.",
  },
];

const NAV_BOTTOM = [
  { num: "01", label: "INICIO", href: "/" },
  { num: "02", label: "CONCIERTOS", href: "/conciertos" },
  { num: "03", label: "TIENDA", href: "/tienda" },
  { num: "04", label: "MÚSICA", href: "/musica" },
];

export function AvenidaEsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative min-h-dvh border-t border-avenida-surface/30 flex flex-col">
      {/* VER MÁS FOTOS button - top right */}
      <div className="absolute top-6 right-4 sm:right-8 lg:right-12 z-10">
        <Link
          href="/avenidaes"
          className="border border-avenida-text/40 text-avenida-text-muted 
                     hover:text-avenida-text hover:border-avenida-text 
                     text-xs tracking-wider px-4 py-2 transition-all"
        >
          VER MÁS FOTOS
        </Link>
      </div>

      {/* Muñecos heads - centered vertically */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Heads row */}
        <div className="flex items-end justify-center gap-3 sm:gap-5 lg:gap-8">
          {MUNECOS.map((m, i) => {
            const isActive = activeIndex === i;
            const isNearActive = activeIndex !== null && Math.abs(activeIndex - i) === 1;
            const isFar = activeIndex !== null && Math.abs(activeIndex - i) > 1;

            let size = "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24";
            let opacity = "opacity-80";
            let zIndex = "z-10";

            if (isActive) {
              size = "w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40";
              opacity = "opacity-100";
              zIndex = "z-20";
            } else if (isNearActive) {
              size = "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24";
              opacity = "opacity-60";
            } else if (isFar) {
              size = "w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20";
              opacity = "opacity-40";
            }

            return (
              <button
                key={m.name}
                onClick={() => setActiveIndex(isActive ? null : i)}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`relative ${size} shrink-0 transition-all duration-500 ease-out ${zIndex}`}
              >
                <Image
                  src={m.src}
                  alt={m.name}
                  fill
                  className={`object-contain invert brightness-110 contrast-125 transition-all duration-500 ${opacity}`}
                  sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 160px"
                />
              </button>
            );
          })}
        </div>

        {/* Info panel below active head */}
        <div
          className={`mt-8 sm:mt-12 max-w-md mx-auto text-center transition-all duration-500 ${
            activeIndex !== null
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {activeIndex !== null && (
            <>
              {/* Name badge */}
              <div className="inline-block bg-avenida-blue border border-avenida-text/40 px-6 py-1.5 mb-4">
                <span className="text-avenida-text font-bold text-lg sm:text-xl tracking-wider">
                  {MUNECOS[activeIndex].name.toUpperCase()}
                </span>
              </div>
              {/* Placeholder text */}
              <p className="text-avenida-text-muted text-xs sm:text-sm leading-relaxed">
                {MUNECOS[activeIndex].placeholder}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Bottom: small muñeco heads + logo + nav */}
      <div className="px-4 sm:px-8 lg:px-12 pb-6 sm:pb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          {/* Left: small heads + logo */}
          <div className="flex items-end gap-3 sm:gap-4">
            {/* Small muñeco heads */}
            <div className="flex gap-1 sm:gap-1.5">
              {MUNECOS.map((m, i) => (
                <div key={m.name} className="relative w-8 h-8 sm:w-10 sm:h-10">
                  <Image
                    src={m.src}
                    alt={m.name}
                    fill
                    className="object-contain invert brightness-110 contrast-125 opacity-70"
                    sizes="40px"
                  />
                </div>
              ))}
            </div>
            {/* Logo */}
            <Image
              src="/assets/logo/logo.webp"
              alt="AVENIDA"
              width={100}
              height={36}
              className="w-20 sm:w-28 invert brightness-0"
            />
          </div>

          {/* Right: nav items */}
          <div className="flex gap-4 sm:gap-6">
            {NAV_BOTTOM.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-avenida-text-muted hover:text-avenida-text 
                           text-[10px] sm:text-xs tracking-wider uppercase transition-colors"
              >
                <span className="font-bold mr-1">{item.num}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
