# Project: Avenida — Web oficial

## Stack
| Capa | Tecnología |
|------|-----------|
| Framework | **Next.js 16** (App Router, `output: 'export'`) |
| Estilos | **Tailwind CSS 4** |
| Package | **pnpm** |
| Hosting | **Cloudflare Pages** (`out/`) |
| Dominio | `avenida.pages.dev` (configurable a dominio custom) |
| Repo | https://github.com/romeriiK/avenida |

## Quick Start
```bash
pnpm install
pnpm dev       # desarrollo local en http://localhost:3000
pnpm build     # static export → out/
```

## Arquitectura
```
avenida/
├── app/
│   ├── page.tsx              # Home (hero, tour preview, musica, avenidaes)
│   ├── conciertos/page.tsx   # Tour dates completos
│   ├── tienda/page.tsx       # Merch (camisetas oversize + regular)
│   ├── musica/page.tsx       # Discografía + streaming links
│   ├── avenidaes/page.tsx    # Miembros, avatares, redes sociales
│   ├── layout.tsx            # Nav global + footer + metadata
│   └── globals.css           # Design tokens (colores, tipografía, animaciones)
├── components/
│   └── banda/
│       ├── nav.tsx           # Nav 01-05 con hamburger mobile
│       └── footer.tsx        # Footer con redes sociales
├── public/assets/
│   ├── fotos/                # Miembros (WebP, bg blanco eliminado)
│   ├── munecos/              # Avatares/ilustraciones
│   ├── merch/                # Fotos de producto
│   └── logo/                 # Logo y artwork
├── AGENTS.md
└── out/                      # Build de producción (generado)
```

## Páginas
| # | Ruta | Contenido |
|---|------|-----------|
| 01 | `/` | Hero con miembros, preview conciertos, música, avenidaes |
| 02 | `/conciertos` | Calendario completo de giras |
| 03 | `/tienda` | Camisetas oversize (26€) y regular (22€) |
| 04 | `/musica` | Single "La banda de mi vida" + streaming |
| 05 | `/avenidaes` | Miembros, avatares, redes sociales |

## Diseño
### 🎨 Paleta
| Token | Hex | Uso |
|-------|-----|-----|
| `--color-avenida-blue` | `#1223c8` | Fondo principal |
| `--color-avenida-dark` | `#282e3f` | Secciones secundarias |
| `--color-avenida-surface` | `#32355c` | Tarjetas, superficies |
| `--color-avenida-text` | `#fafafc` | Texto principal |
| `--color-avenida-text-muted` | `#c0c4e7` | Texto secundario |

### 📱 Mobile-first
- Nav colapsa a hamburger en <640px
- Hero con muñecos grupales en mobile, grid de miembros en desktop
- Grids responsive: 1 col → 2 cols → 3-5 cols
- Tipografía escalable (text-sm → text-base → text-lg+)

## Assets procesados
| Tipo | Original | Procesado | Reducción |
|------|----------|-----------|-----------|
| 5 fotos miembros | 26.5 MB (PNG) | 349 KB (WebP) | 98.7% |
| 6 muñecos | 572 KB (PNG) | 57 KB (WebP) | 90% |
| 3 merch | 1 MB (PNG) | 85 KB (WebP) | 91.7% |
| Logo + artwork | 668 KB (PNG) | 125 KB (WebP) | 81.3% |
| **Total** | **28.7 MB** | **624 KB** | **97.8%** |

- Fondos blancos eliminados con numpy (vectorizado)
- Optimizado para web (WebP, calidad 80-85%)
- Miembros redimensionados a 600px, muñecos a 400px

## Estado actual
- ✅ Vídeo de diseño procesado (12 keyframes)
- ✅ Assets procesados (16 imágenes, 29MB → 624KB)
- ✅ Nombre confirmado: **Avenida**
- ✅ Next.js scaffold (App Router, Tailwind 4, TypeScript)
- ✅ 6 páginas implementadas (mobile-first)
- ✅ Build limpio (2.1 MB output)
- ✅ Repo GitHub: https://github.com/romeriiK/avenida
- ✅ Desplegado en Cloudflare Pages: https://avenida.pages.dev

## Pendiente / Mejoras
- ⬜ Añadir favicon real (usar logo extraído de FRONTAL_PADRES)
- ⬜ Conectar dominio custom (si se compra uno)
- ⬜ Links reales de Spotify, YouTube, Instagram, TikTok
- ⬜ Links de venta de entradas en conciertos
- ⬜ Integración de checkout (Stripe o similar) si se vende merch real
- ⬜ Hook up Cloudflare Pages git integration para auto-deploy en push

## Pitfalls
- El azul `#1223c8` es muy intenso — verificar contraste WCAG con texto blanco
- Las fechas de gira están extraídas por OCR y pueden tener errores
- Las imágenes de miembros eliminaron el fondo blanco pero pueden tener halos
- Sin favicon personalizado (usa el default de Next.js)
- Los links de streaming apuntan a las homepages genéricas (pendiente URLs reales)
- El token de Cloudflare es Pages-only → no permite auto-deploy via git; requiere deploy manual con `wrangler pages deploy out/`
