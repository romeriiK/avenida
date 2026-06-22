import Image from "next/image";

const PRODUCTS = [
  {
    name: "CAMISETA OVERSIZE",
    price: "26€",
    img: "/assets/merch/frontal_izq_oversized.webp",
    imgBack: "/assets/merch/trasera_oversized.webp",
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <p className="section-num">03</p>
      <h1 className="hero-title !text-4xl sm:!text-6xl md:!text-7xl mb-4">TIENDA</h1>
      <p className="text-avenida-text-muted text-sm sm:text-base mb-10 max-w-lg">
        Merch oficial de Avenida. Posibilidad de firma y personalización.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {PRODUCTS.map((product, i) => (
          <div
            key={product.name}
            className="merch-card animate-in"
            style={{ animationDelay: `${0.15 * i}s` }}
          >
            {/* Product image */}
            <div className="relative aspect-square bg-avenida-surface/50 overflow-hidden">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover p-8 sm:p-12"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>

            {/* Product info */}
            <div className="p-4 sm:p-5">
              <h3 className="text-avenida-text font-bold text-base sm:text-lg mb-1">
                {product.name}
              </h3>
              <p className="text-avenida-text-muted text-xs sm:text-sm mb-3">
                {product.desc}
              </p>

              {/* Sizes */}
              <div className="flex gap-1.5 mb-4">
                {product.sizes.map((s) => (
                  <span
                    key={s}
                    className="text-xs border border-avenida-surface px-2 py-0.5 rounded text-avenida-text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Price + buy */}
              <div className="flex items-center justify-between">
                <span className="text-avenida-text font-extrabold text-xl sm:text-2xl">
                  {product.price}
                </span>
                <button className="btn-primary !py-2 !px-4 !text-xs">
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
