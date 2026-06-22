# 00 — Origen del proyecto

## Contexto

El 21 de junio de 2026, Javier envía un **vídeo de 24 segundos** con el diseño de la web de su banda **Avenida**. El vídeo es una grabación de pantalla mostrando el diseño final deseado (mobile-first, estética oscura con toques azules).

---

## Cronología

### Día 1 — 21 junio 2026

| Paso | Acción | Resultado |
|------|--------|-----------|
| 1 | Extracción de keyframes del vídeo | 12 frames con `ffmpeg` scene detection |
| 2 | Análisis de layout | Tesseract OCR + inspección manual |
| 3 | Descubrimiento clave | **El nav es sidebar izquierda**, no superior |
| 4 | Extracción de paleta de colores | Azul `#1223c8`, texto `#fafafc`, superficie `#32355c` |
| 5 | Identificación de páginas | 01 Inicio, 02 Conciertos, 03 Tienda, 04 Música, 05 Avenidaes |
| 6 | Confirmación del nombre | **Avenida** (el OCR detectó "AVENIDA" en el logo) |
| 7 | Scaffold inicial | Next.js 16 + Tailwind 4 + TypeScript + pnpm |

### Día 2 — 22 junio 2026

| Paso | Acción | Resultado |
|------|--------|-----------|
| 8 | Procesamiento de assets | 16 imágenes: 29 MB (PNG) → 624 KB (WebP, 97.8% reducción) |
| 9 | Eliminación de fondos | Fondos blancos eliminados con numpy (vectorizado) |
| 10 | Rediseño v2 | Sidebar izquierda fija, 5 páginas completas |
| 11 | Repositorio GitHub | `romeriiK/avenida` |
| 12 | Primer deploy | Cloudflare Pages: `avenida.pages.dev` |
| 13 | Sección muñecos | Cabezas interactivas con efecto hover (invertido/negativo) |
| 14 | **Auto-deploy permanente** | Token CF persistido + cronjob cada 5 min |
| 15 | **Documentación** | Carpeta `memories/` en el repo |

---

## Decisiones clave

| Decisión | Alternativas consideradas | Motivo |
|----------|--------------------------|--------|
| **Sidebar izquierda** | Nav superior centrado | El OCR + frames del vídeo original mostraban nav lateral |
| **Next.js static export** | Vite/React, Astro, Hugo | Familiaridad con el stack, SSG nativo, Cloudflare Pages compatible |
| **Tailwind CSS 4** | CSS Modules, styled-components | Rápido, utility-first, mobile-first nativo |
| **WebP universal** | AVIF, PNG comprimido | Mejor balance calidad/tamaño, soporte universal |
| **Cronjob auto-deploy** | GitHub Actions, CF git integration | CF git requiere OAuth (no disponible vía API token); el cronjob es autosuficiente en el VPS |
| **Proyecto separado** | Mismo proyecto que v0-rata | Dominio, assets y propósito independientes |

---

## Participantes

- **Javier Romero** — dueño del proyecto, diseñador, músico (Avenida)
- **Hermes** — agente IA que ejecutó la construcción completa
