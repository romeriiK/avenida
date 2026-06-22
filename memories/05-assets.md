# 05 — Assets

## Origen

Los assets provienen de la carpeta `AVENIDA_ARCHIVOS_WEB_PNGS/` enviada por Javier vía Syncthing a `hermes-sync/`. Originalmente **16 archivos PNG** con fondos blancos o transparentes.

---

## Procesamiento

### Pipeline

```
PNG original (fondo blanco)
    │
    ▼
Eliminar fondo blanco (numpy + Pillow)
    │
    ▼
Redimensionar (fotos→600px, muñecos→400px, merch→tamaño original)
    │
    ▼
Convertir a WebP (calidad 80-85%)
    │
    ▼
public/assets/{logo,fotos,munecos,merch}/
```

### Herramientas
- **Python 3** + `numpy` (procesamiento vectorizado, rápido)
- **Pillow** (carga/guardado de imágenes)
- **Sin ImageMagick** — se colgaba con fondos complejos

---

## Resultados

| Categoría | Archivos | Original (PNG) | Procesado (WebP) | Reducción |
|-----------|----------|----------------|------------------|-----------|
| **Logo + artwork** | 2 | 668 KB | 125 KB | 81.3% |
| **Fotos miembros** | 5 | 26.5 MB | 349 KB | 98.7% |
| **Muñecos** | 6 | 572 KB | 57 KB | 90.0% |
| **Merch** | 3 | 1.0 MB | 85 KB | 91.7% |
| **Total** | **16** | **28.7 MB** | **624 KB** | **97.8%** |

---

## Estructura en el repo

```
public/assets/
├── logo/
│   ├── logo-avenida.webp       # Logo principal extraído de FRONTAL_PADRES
│   └── artwork.webp            # Arte gráfico adicional
├── fotos/
│   ├── miembro-01.webp         # Fotos de los 5 miembros
│   ├── miembro-02.webp         # Fondos blancos eliminados
│   ├── miembro-03.webp         # 600px de ancho
│   ├── miembro-04.webp
│   └── miembro-05.webp
├── munecos/
│   ├── muneco-01.webp          # Avatares/ilustraciones
│   ├── muneco-02.webp          # 400px de ancho
│   ├── muneco-03.webp
│   ├── muneco-04.webp
│   ├── muneco-05.webp
│   └── muneco-grupo.webp       # Imagen grupal de muñecos
└── merch/
    ├── camiseta-oversize.webp  # Camiseta oversize (26€)
    ├── camiseta-regular.webp   # Camiseta regular (22€)
    └── (producto adicional)
```

---

## Notas técnicas

### WebP
- Formato moderno con soporte universal (97%+ navegadores)
- Transparencia (canal alpha) conservada
- ~30-50% más pequeño que PNG equivalente
- No requiere `next/image` optimization (`images.unoptimized: true`)

### Eliminación de fondo
- Método: numpy vectorizado — detecta píxeles blancos (`R>240 & G>240 & B>240`) y pone alpha=0
- Ventaja: procesa arrays completos sin bucles Python
- Limitación: halos blancos residuales en bordes de pelo/ropa (aceptable visualmente)

### Codificación
- `cf_token.txt` llega en **UTF-16LE con BOM** desde Windows (Syncthing)
- Convertir a UTF-8 antes de usar: `iconv -f UTF-16LE -t UTF-8`
- El token CF se guarda en `/root/.cf_pages_token` (UTF-8, `chmod 600`)

---

## Script de procesamiento

El script original está en `/root/hermes-sync/` (puede no persistir). Para regenerar assets:

```python
from PIL import Image
import numpy as np
import os

def remove_white_bg(img_path, output_path, resize=None):
    img = Image.open(img_path).convert("RGBA")
    if resize:
        img = img.resize((resize, int(img.height * resize / img.width)))
    arr = np.array(img)
    # Detectar píxeles blancos (umbral 240)
    white_mask = (arr[:,:,0] > 240) & (arr[:,:,1] > 240) & (arr[:,:,2] > 240)
    arr[white_mask, 3] = 0  # alpha = 0 (transparente)
    result = Image.fromarray(arr)
    result.save(output_path, "WEBP", quality=85)
```

---

## Assets originales

Los PNGs originales (sin procesar) están en:
```
/root/hermes-sync/AVENIDA_ARCHIVOS_WEB_PNGS/
```

Conservados para reprocesamiento futuro si se necesita mayor calidad o distinto formato.
