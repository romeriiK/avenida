# 04 — Deploy & CI/CD

## Infraestructura

```
┌──────────┐     ┌──────────┐     ┌─────────────────┐     ┌──────────────┐
│  GitHub  │────▶│   VPS    │────▶│  Cloudflare      │────▶│  Usuario      │
│  romeriiK│     │  Hermes  │     │  Pages           │     │  final        │
│ /avenida │     │ (cronjob)│     │  avenida.pages.  │     │               │
│          │     │          │     │  dev             │     │               │
└──────────┘     └──────────┘     └─────────────────┘     └──────────────┘
   git push      detecta cada      static hosting        CDN global
                 5 min cambios     + SSL automático
```

---

## Método 1: Cronjob auto-deploy (activo ✅)

### Configuración
| Parámetro | Valor |
|-----------|-------|
| **Job ID** | `7b4b51d754b2` |
| **Frecuencia** | Cada 5 minutos |
| **Script** | `~/.hermes/scripts/avenida-auto-deploy.sh` |
| **Token CF** | `/root/.cf_pages_token` (UTF-8, chmod 600) |
| **Repositorio** | `/root/avenida` (git@github-personal:romeriiK/avenida.git) |
| **No agent** | `true` — script bash puro, sin LLM |

### Flujo del script

```bash
#!/bin/bash
# 1. git fetch origin main
# 2. Comparar REMOTE_HASH con LAST_DEPLOYED
# 3. Si no hay cambios → salir (0)
# 4. Si hay cambios → git pull → pnpm build → wrangler deploy out/
# 5. Guardar REMOTE_HASH en /root/.avenida_last_deploy
```

### Comportamiento
- **Sin cambios**: no gasta deploys, no genera ruido
- **Con cambios**: build (~30s) + deploy (~5s)
- **Latencia máxima**: 5 minutos desde el push
- **Silencioso**: entrega `local` (sin notificaciones al usuario)

---

## Método 2: GitHub Actions (workflow listo, pendiente secret)

### Archivo: `.github/workflows/deploy.yml`

```yaml
name: Deploy to Cloudflare Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
      - run: pnpm install
      - run: pnpm build
      - name: Deploy
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CF_PAGES_TOKEN }}
          accountId: fa56e1bae19f37b871610a5ae853985f
          command: pages deploy out/ --project-name=avenida --branch=main
```

### Para activarlo
1. Ir a https://github.com/romeriiK/avenida/settings/secrets/actions
2. Añadir secret: `CF_PAGES_TOKEN` = contenido de `/root/.cf_pages_token`
3. El workflow se ejecutará en cada push a `main`

**Ventaja sobre el cronjob**: deploy en <1 minuto tras push, sin depender del VPS.

---

## Cloudflare Pages

### Configuración del proyecto

| Campo | Valor |
|-------|-------|
| **Project name** | `avenida` |
| **Account ID** | `fa56e1bae19f37b871610a5ae853985f` |
| **Production branch** | `main` |
| **Build command** | `pnpm build` |
| **Output directory** | `out` |
| **Root directory** | `/` |
| **Build caching** | Enabled |
| **Framework** | None (static export pre-built) |

### URLs

| Entorno | URL |
|---------|-----|
| **Producción** | https://avenida.pages.dev |
| **Preview** | https://`<commit-hash>`.avenida.pages.dev |

---

## Deploy manual

Si alguna vez necesitas desplegar manualmente:

```bash
cd /root/avenida
pnpm build
export CLOUDFLARE_API_TOKEN=$(cat /root/.cf_pages_token)
npx wrangler pages deploy out/ --project-name=avenida
```

O simplemente ejecutar el script:

```bash
bash /root/avenida/deploy.sh
```

---

## Troubleshooting

| Problema | Diagnóstico | Solución |
|----------|-------------|----------|
| **Cronjob no despliega** | Ver `~/.hermes/scripts/avenida-auto-deploy.sh` ejecutándose | `cronjob action='list'` → buscar `7b4b51d754b2` |
| **Error de autenticación CF** | Token inválido o expirado | Regenerar token en Cloudflare Dashboard y actualizar `/root/.cf_pages_token` |
| **Error de push (publickey)** | Remote apunta a `github.com` en vez de `github-personal` | `git remote set-url origin git@github-personal:romeriiK/avenida.git` |
| **Build roto** | Error de compilación TypeScript o Tailwind | `pnpm build` localmente para ver el error |
| **Assets no cargan** | Ruta incorrecta o extensión equivocada | Verificar `public/assets/` tiene los archivos WebP |
