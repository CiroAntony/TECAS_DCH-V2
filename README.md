# TECAS · DCH — React + JavaScript

Web con React, React Router y Vite. Conserva el diseño, las imágenes WebP y las descripciones del mockup. Un solo HTML inicia la aplicación; las vistas y controles están separados en componentes JSX.

## Ejecutar en tu PC

Desde PowerShell:

```powershell
cd "C:\Users\vasqu\Documents\Codex\2026-09-17\a\outputs\tecas-web"
pnpm install
pnpm dev
```

Abre **http://127.0.0.1:4173/**. Mantén la terminal abierta; **Ctrl+C** detiene el servidor. Los cambios en `src/` se reflejan durante el desarrollo. Ejecuta `pnpm install` la primera vez y cuando cambien las dependencias.

Si PowerShell no reconoce `pnpm`, en este equipo puedes usar las herramientas instaladas por Codex:

```powershell
cd "C:\Users\vasqu\Documents\Codex\2026-09-17\a\outputs\tecas-web"
$env:PATH = "C:\Users\vasqu\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;" + $env:PATH
& "C:\Users\vasqu\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd" install
& "C:\Users\vasqu\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd" dev
```

En otra computadora necesitas Node.js 22.12 o posterior y pnpm 11. Si el puerto 4173 está ocupado, detén la otra vista previa o ejecuta `pnpm dev --port 4174` y abre el puerto indicado en la terminal.

## Archivos para editar

- `src/pages/`: inicio, nosotros, productos, aplicaciones, servicios, soporte, contacto y una ficha reutilizable.
- `src/components/`: cabecera y pie compartidos, selector de marca, tarjetas, paginación y contenido común.
- `src/data/catalog.json`: marcas, categorías, cantidades del mockup y 37 descripciones con sus datos.
- `src/styles.css`, `public/style.css` y `public/refinement.css`: estilos.
- `public/assets/`: imágenes WebP.
- `src/App.jsx`: rutas de la aplicación.

React maneja las interacciones y el estado; no hay generadores con `innerHTML`. Categoría, búsqueda, página del catálogo y filtros se conservan en la URL. Al regresar desde una ficha se recupera la selección anterior.

Los registros repetidos y las cantidades del catálogo corresponden a la maqueta anterior. Sustituye esos datos cuando estén disponibles los productos reales.

## Generar la versión para publicar

```powershell
pnpm build
pnpm preview
```

`dist/` contiene la versión compilada. Puedes subir su contenido completo a un alojamiento estático. No edites `dist/`: se regenera al compilar. Las rutas usan `#/` para que las fichas y las recargas funcionen en alojamiento estático sin reglas de servidor.

## Contacto

Se mantienen los teléfonos y correos del PDF. El formulario no está conectado a un servicio de envío: no hace peticiones, no almacena datos y no envía correos. Los enlaces de correo, teléfono y WhatsApp se abren únicamente cuando el visitante decide pulsarlos.
