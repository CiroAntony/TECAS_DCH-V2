# TECAS · DCH

Sitio estático con siete páginas en `dist/`:

- `index.html`: inicio completo.
- `nosotros.html`: presentación de TECAS y DCH.
- `aplicaciones.html`: aplicaciones de ambas marcas y sus descripciones.
- `productos.html`: catálogo de ambas marcas y sus fichas.
- `servicios.html`: servicios de ambas marcas y sus detalles.
- `soporte.html`: soporte técnico.
- `contacto.html`: datos de contacto y formulario sin envío.

Cada página contiene directamente su estructura y contenido HTML. Las fichas se despliegan con elementos nativos `<details>` dentro de la página correspondiente; no hay archivos separados por ficha o categoría. Los enlaces a una ficha usan un ancla dentro de su página.

`style.css` y `refinement.css` contienen el diseño. `assets/` contiene las imágenes WebP. `interactions.js` se limita al menú móvil, filtros, búsqueda, apertura de anclas y control del formulario desconectado. No genera el contenido de las páginas.

Para editar, abre el HTML correspondiente. Para publicar en un alojamiento estático, utiliza el contenido de `dist/`. No requiere compilación ni dependencias.
