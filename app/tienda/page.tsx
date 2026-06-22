import Image from "next/image";

const PRODUCTS = [
  {
    name: "CAMISETA OVERSIZE",
    price: "26€",
    img: "/assets/merch/frontal_izq_oversized.webp",
    desc: "Doble impresión frontal + trasera",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "CAMISETA REGULAR",
    price: "22€",
    img: "/assets/merch/prueba_frontal.webp",
    desc: "Impresión frontal, corte recto",
    sizes: ["S", "M", "L", "XL"],
  },
];

export default function TiendaPage() {
  return (
    <div className="min-h-dvh px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
      {/* Header */}
      <div className="flex items-baseline gap-3 mb-8">
        <span className="text-xl lg:text-2xl font-extrabold text-avenida-text-muted">
          03
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          TIENDA
        </h1>
      </div>

      <p className="text-avenida-text-muted text-sm sm:text-base mb-10 max-w-lg">
        Merch oficial de Avenida. Posibilidad de firma y personalización.
      </p>

      {/* Products grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl">
        {PRODUCTS.map((product, i) => (
          <div
            key={product.name}
            className="group animate-in"
            style={{ animationDelay: `${0.15 * i}s` }}
          >
            {/* Product image */}
            <div className="relative aspect-[4/3] bg-avenida-dark/30 overflow-hidden mb-4">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-contain p-6 sm:p-10 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Product info */}
            <div>
              <h3 className="text-avenida-text font-bold text-sm sm:text-base tracking-wider mb-1">
                {product.name}
              </h3>
              <p className="text-avenida-text-muted text-xs mb-3">
                {product.desc}
              </p>

              {/* Sizes */}
              <div className="flex gap-1.5 mb-4">
                {product.sizes.map((s) => (
                  <span
                    key={s}
                    className="text-xs border border-avenida-surface/50 px-2 py-0.5 text-avenida-text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <span className="text-avenida-text font-extrabold text-xl">
                  {product.price}
                </span>
                <button
                  className="border border-avenida-text/40 text-avenida-text-muted 
                             hover:text-avenida-text hover:border-avenida-text 
                             text-xs tracking-wider px-4 py-2 transition-all"
                >
                  AÑADIR AL CARRITO
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
