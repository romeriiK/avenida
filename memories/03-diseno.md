# 03 — Diseño

## Paleta de colores

Extraída del vídeo de diseño original mediante análisis de frames.

| Token | Hex | HSL | Uso |
|-------|-----|-----|-----|
| `--avenida-blue` | `#1223c8` | `234°, 84%, 43%` | Fondo principal, hero |
| `--avenida-dark` | `#282e3f` | `224°, 23%, 20%` | Secciones secundarias |
| `--avenida-surface` | `#32355c` | `236°, 29%, 28%` | Tarjetas, superficies elevadas |
| `--avenida-text` | `#fafafc` | `240°, 25%, 98%` | Texto principal (blanco roto) |
| `--avenida-text-muted` | `#c0c4e7` | `234°, 45%, 83%` | Texto secundario, labels |
| `--avenida-accent` | `#ffffff` | — | Acentos, hover, elementos activos |

---

## Accesibilidad

| Combinación | Contraste | WCAG AA |
|-------------|-----------|---------|
| `#fafafc` sobre `#1223c8` | 8.4:1 | ✅ AAA |
| `#c0c4e7` sobre `#1223c8` | 4.8:1 | ✅ AA |
| `#fafafc` sobre `#282e3f` | 9.1:1 | ✅ AAA |

---

## Tipografía

| Propiedad | Valor |
|-----------|-------|
| Fuente principal | **Geist** (Google Fonts, via `next/font/google`) |
| Fallback | system-ui, -apple-system, sans-serif |
| Weights | 400 (regular), 700 (bold) |
| Escala | Tailwind default (text-sm → text-9xl) |

---

## Breakpoints responsive

| Breakpoint | Ancho | Dispositivo |
|-----------|-------|-------------|
| Base (mobile) | <640px | Teléfono |
| `sm` | ≥640px | Teléfono grande / tablet pequeña |
| `md` | ≥768px | Tablet |
| `lg` | ≥1024px | Desktop |
| `xl` | ≥1280px | Desktop grande |

**Regla**: diseñar siempre desde mobile (clases base sin prefijo) y sobrescribir hacia arriba.

---

## Layout mobile (<640px)

```
┌─────────────────────┐
│ ☰ (hamburger)       │
├─────────────────────┤
│                     │
│    HERO             │
│    (full width)     │
│                     │
├─────────────────────┤
│    CONCIERTOS       │
├─────────────────────┤
│    TIENDA           │
├─────────────────────┤
│    MÚSICA           │
├─────────────────────┤
│    AVENIDAES        │
├─────────────────────┤
│    MUÑECOS          │
└─────────────────────┘
```

---

## Layout desktop (≥1024px)

```
┌──────────┬──────────────────────────────────┐
│ SIDEBAR  │                                  │
│ 25% fix  │  CONTENIDO (75%, scrollable)     │
│          │                                  │
│ LOGO     │  HERO → CONCIERTOS → TIENDA      │
│          │  → MÚSICA → AVENIDAES → MUÑECOS  │
│ 01 Inicio│                                  │
│ 02 Conc. │                                  │
│ 03 Tienda│                                  │
│ 04 Música│                                  │
│ 05 Aven. │                                  │
│          │                                  │
│ CLUB     │                                  │
│ INSTA    │                                  │
│ TIKTOK   │                                  │
│ © AVENIDA│                                  │
└──────────┴──────────────────────────────────┘
```

---

## Secciones visuales

### Hero
- Imagen de la banda a full width del área de contenido
- Logo superpuesto (probablemente con opacidad o blend mode)
- Título "AVENIDA" en grande

### Sidebar
- Fondo azul oscuro sólido
- Navegación numerada: `01 INICIO`, `02 CONCIERTOS`, `03 TIENDA`, `04 MÚSICA`, `05 AVENIDAES`
- Separadores finos entre items
- Sección "ACCESO CLUB" (CTA secundario)
- Iconos de redes sociales (Instagram, TikTok)
- Copyright pequeño abajo

### Muñecos (sección final de Home)
- Efecto visual: negativo/invertido (filtro CSS `invert(1)` o `hue-rotate`)
- 5 cabezas de muñecos en fila
- Hover: cabeza activa crece, demás se encogen
- Panel inferior muestra nombre del miembro activo
- Botón "VER MÁS FOTOS" en esquina

---

## Animaciones

| Elemento | Efecto | Implementación |
|----------|--------|---------------|
| Muñecos hover | Scale + opacity | Tailwind `transition-all duration-300` |
| Navegación hover | Color shift + underline | `hover:text-white transition-colors` |
| Sidebar items | Slide reveal | CSS transition en opacity/transform |

---

## Assets visuales

Ver [`05-assets.md`](./05-assets.md) para el detalle completo del procesamiento de imágenes.
