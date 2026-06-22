# 02 — Arquitectura

## Estructura de carpetas

```
avenida/
├── src/
│   └── app/                      # Next.js App Router
│       ├── layout.tsx            # Layout raíz: sidebar + contenido
│       ├── globals.css           # Design tokens, estilos globales
│       ├── page.tsx              # Home (01 — Inicio)
│       ├── conciertos/
│       │   └── page.tsx          # 02 — Conciertos
│       ├── tienda/
│       │   └── page.tsx          # 03 — Tienda
│       ├── musica/
│       │   └── page.tsx          # 04 — Música
│       └── avenidaes/
│           └── page.tsx          # 05 — Avenidaes
├── public/
│   └── assets/
│       ├── logo/                 # Logo y artwork (WebP)
│       ├── fotos/                # Fotos de miembros (WebP, bg transparente)
│       ├── munecos/              # Avatares/ilustraciones (WebP)
│       └── merch/                # Fotos de producto (WebP)
├── memories/                     # Esta documentación
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions deploy
├── deploy.sh                     # Script local de auto-deploy
├── next.config.ts                # output: 'export', imágenes unoptimized
├── tailwind.config.ts            # (si existe) — Tailwind 4 usa CSS config
├── tsconfig.json                 # TypeScript strict
├── package.json
├── pnpm-lock.yaml
├── AGENTS.md                     # Contexto rápido para agentes
└── out/                          # Build de producción (generado, no commiteado)
```

---

## Layout principal (`layout.tsx`)

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ┌──────────┐  ┌──────────────────────────────────┐  │
│  │          │  │                                  │  │
│  │ SIDEBAR  │  │         CONTENIDO                │  │
│  │          │  │                                  │  │
│  │ 25% w    │  │         75% w                    │  │
│  │ fija     │  │         scrollable               │  │
│  │          │  │                                  │  │
│  │ • Logo   │  │                                  │  │
│  │ • 01-05  │  │                                  │  │
│  │ • Club   │  │                                  │  │
│  │ • Redes  │  │                                  │  │
│  │ • (c)    │  │                                  │  │
│  │          │  │                                  │  │
│  └──────────┘  └──────────────────────────────────┘  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Sidebar**: `position: fixed`, 25% ancho, altura completa
- **Contenido**: `margin-left: 25%`, scroll independiente
- **Mobile** (<640px): sidebar colapsa a menú hamburger

---

## Páginas

### 01 — Inicio (`page.tsx`)
Componentes en orden:
1. **Hero** — foto de la banda a full width, logo superpuesto
2. **Conciertos preview** — próximas 3 fechas
3. **Música preview** — single "La banda de mi vida"
4. **Avenidaes preview** — mini-grid de miembros
5. **Muñecos** — sección interactiva con cabezas grandes

### 02 — Conciertos (`conciertos/page.tsx`)
- Listado completo de 11 fechas de gira
- Formato: ciudad + fecha + venue
- Datos extraídos del vídeo original vía OCR

### 03 — Tienda (`tienda/page.tsx`)
- Camiseta oversize: 26 €
- Camiseta regular: 22 €
- Fotos de producto con fondo transparente

### 04 — Música (`musica/page.tsx`)
- Single destacado: "La banda de mi vida"
- Links de streaming (Spotify, YouTube, Apple Music, etc.)

### 05 — Avenidaes (`avenidaes/page.tsx`)
- Grid de 5 miembros con foto y nombre
- Links a redes sociales
- Avatares/ilustraciones

---

## Componentes interactivos

### Sección Muñecos (`page.tsx`, `'use client'`)
La única sección que requiere cliente:
- 5 cabezas de muñeco con efecto visual invertido/negativo
- **Hover**: la cabeza seleccionada se agranda (`scale-110`), las demás se encogen y atenúan
- **Panel info**: al hacer hover aparece nombre del miembro + placeholder
- **Barra inferior**: mini-cabezas + logo + nav resumido
- **Botón "VER MÁS FOTOS"**: esquina superior derecha

```tsx
// Estados clave
const [activeIndex, setActiveIndex] = useState<number | null>(null)
// null = ninguna seleccionada, 0-4 = miembro activo
```

---

## Flujo de datos

- **Sin API ni backend** — sitio puramente estático
- Datos (fechas, precios, miembros) hardcodeados en cada `page.tsx`
- Para actualizar contenido: editar TSX → commit → auto-deploy en ≤5 min

---

## Convenciones de código

- **Server Components por defecto** — solo añadir `'use client'` cuando sea estrictamente necesario
- **Tailwind nativo** — sin `@apply`, sin abstracciones
- **TypeScript strict** — sin `any`, tipos explícitos
- **Mobile-first** — clases base para mobile, `sm:` / `md:` / `lg:` para breakpoints superiores
- **Nombres en español** — rutas (`/conciertos`, `/tienda`), contenido, comentarios
