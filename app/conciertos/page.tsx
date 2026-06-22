type TourShow = {
  date?: string;
  city?: string;
  venue?: string;
  tickets?: string | null;
  venueCity?: string;
};

const TOUR_DATES: TourShow[] = [
  { date: "29 JUN 2026", city: "Burriana", venue: "—", tickets: null },
  { date: "4 JUL 2026", city: "El Puerto de Santa María", venue: "—", tickets: null },
  { date: "9 JUL 2026", city: "—", venue: "—", tickets: null },
  { date: "25 JUL 2026", city: "—", venue: "—", tickets: null },
  { date: "29 AGO 2026", city: "—", venue: "—", tickets: null },
  { date: "2 AGO 2026", city: "—", venue: "—", tickets: null },
  { date: "5 AGO 2026", city: "—", venue: "—", tickets: null },
  { date: "12 SEPT 2028", city: "Ponte...", venue: "Plaza de Toros", tickets: null },
  { date: "19 SEPT 2028", city: "Plaza de Chamberí", venue: "—", tickets: null },
  { venueCity: "Castellón" },
  { venueCity: "Bilbao (Aste Nagusia)" },
  { venueCity: "Aravaca (Recinto Ferial)" },
];

export default function ConciertosPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <p className="section-num">02</p>
      <h1 className="hero-title !text-4xl sm:!text-6xl md:!text-7xl mb-4">CONCIERTOS</h1>
      <p className="text-avenida-text-muted text-sm sm:text-base mb-10 max-w-lg">
        Próximas fechas de la gira. Más fechas próximamente.
      </p>

      <div className="flex flex-col gap-3">
        {TOUR_DATES.map((show, i) => (
          <div
            key={i}
            className="tour-card animate-in"
            style={{ animationDelay: `${0.05 * i}s` }}
          >
            {show.date ? (
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="text-right min-w-[80px] sm:min-w-[100px]">
                  <p className="text-avenida-text font-bold text-sm sm:text-base leading-tight">
                    {show.date.split(" ")[0]}
                  </p>
                  <p className="text-avenida-text-muted text-xs sm:text-sm leading-tight">
                    {show.date.split(" ").slice(1).join(" ")}
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-avenida-text font-semibold text-sm sm:text-base">
                    {show.city}
                  </p>
                  {show.venue !== "—" && (
                    <p className="text-avenida-text-muted text-xs">
                      {show.venue}
                    </p>
                  )}
                </div>
                {show.tickets && (
                  <a
                    href={show.tickets}
                    target="_blank"
                    rel="noopener"
                    className="btn-primary !py-2 !px-4 !text-xs shrink-0"
                  >
                    ENTRADAS
                  </a>
                )}
              </div>
            ) : (
              <p className="text-avenida-text-muted text-sm text-center">
                {show.venueCity}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
