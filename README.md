# TECAS · DCH

Web estática: cada página contiene su contenido completo en HTML. No necesita compilación, frameworks, plantillas ni un renderizador de JavaScript.

## Archivos para editar

Todo el sitio publicable está en `dist/`:

- `index.html`: inicio.
- `contacto.html`: teléfonos, correos y formulario visual.
- `nosotros.html` y `nosotros-dch.html`: información de cada marca.
- `aplicaciones.html` y `aplicaciones-dch.html`: listados y filtros.
- `servicios.html` y `servicios-dch.html`: servicios y soluciones.
- `productos.html`: entrada a los dos catálogos.
- `productos-tecas.html`, `productos-dch.html` y variantes: categorías del catálogo.
- `producto-*.html`, `servicio-*.html`, `aplicacion-*.html`: fichas completas, con imágenes, descripción y datos.
- `style.css` y `refinement.css`: diseño responsive y animaciones CSS.
- `interactions.js`: menú móvil, filtro de aplicaciones, búsqueda/paginación y comportamiento del formulario sin envío. No genera el contenido de las páginas.
- `assets/`: imágenes WebP.

Los archivos HTML están indentados y pueden editarse directamente. Cabecera y pie se encuentran en cada página, para que sean independientes. Para cambiar un elemento compartido, aplica el cambio en todos los HTML correspondientes.

## Abrir y publicar

Puedes abrir `dist/index.html` directamente en un navegador o servir la carpeta `dist/` con cualquier servidor estático. Los enlaces usan archivos HTML reales. No hay rutas `#/...` ni descargas de contenido mediante `fetch`.

Sin JavaScript, todas las páginas y fichas siguen siendo legibles y navegables; el catálogo muestra todas sus tarjetas y el menú móvil queda visible. Con JavaScript se habilitan búsqueda, filtros y paginación sobre el contenido existente.

## Contacto

El formulario no tiene conexión a un servicio de correo ni almacena datos. Sin JavaScript, sus campos están deshabilitados para impedir un envío accidental. Los enlaces de correo, teléfono y WhatsApp mantienen los datos originales del PDF.
