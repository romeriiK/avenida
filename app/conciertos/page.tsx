type TourShow = {
  date?: string;
  city?: string;
  venue?: string;
  tickets?: string | null;
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
];

const VENUES = [
  "Castellón",
  "Bilbao · Aste Nagusia",
  "Aravaca · Recinto Ferial",
];

export default function ConciertosPage() {
  return (
    <div className="min-h-dvh px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
      {/* Header */}
      <div className="flex items-baseline gap-3 mb-8">
        <span className="text-xl lg:text-2xl font-extrabold text-avenida-text-muted">
          02
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          CONCIERTOS
        </h1>
      </div>

      <p className="text-avenida-text-muted text-sm sm:text-base mb-10 max-w-lg">
        Próximas fechas de la gira
      </p>

      {/* Tour dates list */}
      <div className="space-y-1 max-w-2xl">
        {TOUR_DATES.map((show, i) => (
          <div
            key={i}
            className="flex items-center gap-4 py-3 border-b border-avenida-surface/30 
                       last:border-0 animate-in"
            style={{ animationDelay: `${0.05 * i}s` }}
          >
            <span className="text-avenida-text font-bold text-sm sm:text-base w-24 sm:w-32 shrink-0">
              {show.date}
            </span>
            <span className="text-avenida-text-muted text-sm sm:text-base flex-1">
              {show.city}
            </span>
            {show.venue !== "—" && (
              <span className="text-avenida-text-muted/60 text-xs sm:text-sm hidden sm:block">
                {show.venue}
              </span>
            )}
            {show.tickets ? (
              <a
                href={show.tickets}
                target="_blank"
                rel="noopener"
                className="border border-avenida-text/40 text-avenida-text-muted 
                           hover:text-avenida-text hover:border-avenida-text 
                           text-xs tracking-wider px-3 py-1.5 transition-all shrink-0"
              >
                ENTRADAS
              </a>
            ) : (
              <span className="text-avenida-text-muted/40 text-2xl shrink-0">
                →
              </span>
            )}
          </div>
        ))}
      </div>

      {/* More venues */}
      <div className="mt-12">
        <h3 className="text-avenida-text-muted text-xs tracking-[0.3em] uppercase mb-3">
          Más fechas
        </h3>
        <div className="space-y-2">
          {VENUES.map((v, i) => (
            <p key={i} className="text-avenida-text-muted text-sm">
              {v}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
