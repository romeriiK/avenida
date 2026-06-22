# 🧠 Avenida — Documentación del proyecto

> **Registro completo de decisiones, arquitectura y evolución de la web oficial de Avenida.**
>
> Esta carpeta existe para que cualquier persona (o agente) que entre al proyecto entienda el contexto sin necesidad de leer todo el código ni preguntar.

---

## Índice

| Archivo | Contenido |
|---------|-----------|
| [`00-origen.md`](./00-origen.md) | Cómo nació el proyecto, decisiones clave, cronología |
| [`01-stack.md`](./01-stack.md) | Stack técnico, dependencias, herramientas |
| [`02-arquitectura.md`](./02-arquitectura.md) | Estructura de carpetas, componentes, flujo de datos |
| [`03-diseno.md`](./03-diseno.md) | Paleta, tipografía, decisiones visuales, responsive |
| [`04-deploy.md`](./04-deploy.md) | Cloudflare Pages, auto-deploy, cronjob, CI/CD |
| [`05-assets.md`](./05-assets.md) | Procesamiento de imágenes, optimización, fuentes |

---

## Datos rápidos

| Dato | Valor |
|------|-------|
| **Banda** | Avenida |
| **Web** | https://avenida.pages.dev |
| **Repo** | https://github.com/romeriiK/avenida |
| **Framework** | Next.js 16 (App Router) |
| **Estilos** | Tailwind CSS 4 |
| **Package manager** | pnpm |
| **Hosting** | Cloudflare Pages (static export) |
| **Dominio** | avenida.pages.dev |
| **Último deploy** | Auto-deploy cada 5 min vía cronjob |

---

## Cómo usar esta documentación

- **Si eres nuevo en el proyecto** → lee en orden: 00 → 01 → 02
- **Si quieres cambiar el diseño** → 03 + 05
- **Si toca desplegar o arreglar CI/CD** → 04
- **Si necesitas regenerar assets** → 05
