# 01 — Stack técnico

## Runtime

| Capa | Tecnología | Versión | Notas |
|------|-----------|---------|-------|
| Framework | **Next.js** | 16.2.9 | App Router, Turbopack |
| Runtime | **Node.js** | 22 | LTS |
| Lenguaje | **TypeScript** | 5.x | Strict mode |
| Package manager | **pnpm** | 10.x | Lockfile `pnpm-lock.yaml` |

---

## Frontend

| Capa | Tecnología | Notas |
|------|-----------|-------|
| Estilos | **Tailwind CSS 4** | Utility-first, mobile-first |
| Componentes | React Server Components (RSC) por defecto | Solo los interactivos usan `'use client'` |
| Fuente | **Geist** (via `next/font/google`) | Sans-serif, weights 400+700 |

---

## Build & Deploy

| Capa | Tecnología | Notas |
|------|-----------|-------|
| Build output | `output: 'export'` | Static HTML/CSS/JS, sin servidor Node |
| Directorio output | `out/` | Subido directamente a Cloudflare Pages |
| Tamaño build | ~2.1 MB (gzip) | Muy por debajo del límite de 25 MB de CF Pages |

---

## Hosting

| Capa | Tecnología | Detalle |
|------|-----------|---------|
| Hosting | **Cloudflare Pages** | Static site hosting, CDN global |
| Dominio producción | `avenida.pages.dev` | Subdominio automático de CF |
| Dominio preview | `<commit>.avenida.pages.dev` | Deploy previews automáticos |
| Account ID | `fa56e1bae19f37b871610a5ae853985f` | CF account |
| Project ID | `262619b7-aa92-42b7-820a-d718e249f427` | CF project |

---

## CI/CD

| Capa | Tecnología | Detalle |
|------|-----------|---------|
| Auto-deploy primario | **Cronjob en VPS** | Cada 5 min: `git fetch` → detecta cambios → build → deploy |
| Auto-deploy secundario | **GitHub Actions** | Workflow listo (`.github/workflows/deploy.yml`), pendiente añadir secret `CF_PAGES_TOKEN` |
| Script deploy | `~/.hermes/scripts/avenida-auto-deploy.sh` | Bash, autosuficiente |
| Token CF | `/root/.cf_pages_token` | `chmod 600`, UTF-8 |

---

## Herramientas de desarrollo

| Herramienta | Uso |
|-------------|-----|
| `wrangler` (CLI Cloudflare) | Deploy a Cloudflare Pages |
| `ffmpeg` | Extracción de keyframes del vídeo de diseño |
| `Tesseract OCR` | Análisis de texto en frames |
| `numpy` + `Pillow` | Procesamiento de imágenes (eliminar fondos, WebP) |
| `gh` (CLI GitHub) | Gestión del repositorio |
| `git` (SSH via `github-personal`) | Push/pull al repo |

---

## Dependencias clave (package.json)

```json
{
  "dependencies": {
    "next": "^16.2.9",
    "react": "^19.x",
    "react-dom": "^19.x"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.x",
    "tailwindcss": "^4.x",
    "typescript": "^5.x",
    "@types/react": "^19.x",
    "@types/node": "^22.x"
  }
}
```

Sin dependencias externas de componentes ni librerías de UI — todo es Tailwind nativo + componentes propios.
