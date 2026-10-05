# culto-racional

## Estado actual
App web para reflexionar sobre el culto racional de Romanos 12:1. Es la aplicación más importante para Josué de todo el ecosistema ESBDGG. Está publicada y en uso. El 2026-10-03 la carpeta se movió de `E:\culto-racional` a `E:\claude code proyecto src\culto-racional` para quedar junto al resto de proyectos de Claude; el código no cambió.

- Publicada en: https://culto-racional.vercel.app/ y `culto-racional.store-esbdgg.com`
- Repositorio: https://github.com/JosueBD/culto-racional.git
- Último commit (2026-09-29): `1391eca` "Corregir footer: flecha duplicada y colision audio/enlace"

## Stack
- Next.js 16.2.4, React 19.2.4 (JavaScript, sin TypeScript)
- Supabase (`@supabase/ssr`, `@supabase/supabase-js`)
- framer-motion
- Despliegue en Vercel. `package.json` conserva además un script `deploy` con `gh-pages -d out` [PENDIENTE: confirmar si todavía se usa o es un resto anterior].

Aviso de `AGENTS.md`: esta versión de Next.js tiene cambios que rompen con versiones anteriores. Antes de escribir código, leer la guía correspondiente en `node_modules/next/dist/docs/`.

## Estructura (carpeta `app/`)
Recorrido por etapas: `introduccion`, `puertas`, `atrios`, `lugar-santo`, `lugar-santisimo`, `final`. Además: `curso`, `actualizar-password`, `politica-de-privacidad`.

## Partes de riesgo o impacto alto
- REGLA DE JOSUÉ (2026-10-05): no tocar el código de la app sin avisarle antes de que se va a editar código y sin su sí. Ese día autorizó solo cambios para que Google vea la aplicación (metadata, pantalla de carga de la portada, página 404, `robots.txt`, `sitemap.xml`). La lógica de sesión, sincronización y bloqueo por etapas no se toca.
- Todo cambio que se suba a GitHub puede publicarse en producción. No hacer `push` sin el visto bueno de Josué.
- `.env` contiene las claves de Supabase. No se copia, no se comparte y no entra en git.
- Autenticación y datos de usuarios en Supabase (`actualizar-password`): cualquier cambio ahí se revisa con Josué antes de aplicarlo.

## Decisiones clave
- [2026-10-03] La carpeta se mueve dentro de `E:\claude code proyecto src\` y se crea este `PROYECTO.md`. Motivo: es la app prioritaria de Josué y estaba suelta, sin memoria de proyecto.

## Pendientes
- [x] Fix de `app/layout.js` verificado el 2026-10-04: ya está aplicado. `layout.js` es Server Component (sin "use client", exporta `metadata`, la parte de cliente va en `ClientShell`) y está en git, commit `07e61e1` ("Sincronizar con git el fix de indexacion ya aplicado en produccion").
- [ ] `culto-racional-deploy.zip` está en la raíz sin registrar en git: decidir si se conserva, se mueve o se ignora.
- [ ] Existe otra copia en `E:\prueba de culto-racional desde github\culto-racional` (agosto 2026): decidir si se retira.
- [ ] Este `PROYECTO.md` no está guardado en git todavía. Guardarlo cuando Josué lo apruebe.
- [ ] Candidato para usar el crédito de 100 USD de sesiones en la nube (vence el 2026-11-05): es el único proyecto que ya tiene repositorio en GitHub.

## Revisión en vivo del 2026-10-05 (Claude en Chrome, solo lectura, `culto-racional.store-esbdgg.com`)
Bien: las 10 rutas responden 200; cada etapa tiene título y descripción propios; `actualizar-password` lleva `noindex`; `lang="es"`; hay favicon; la Política de Privacidad está publicada.

Hallazgos (ninguno corregido, pendientes de decisión de Josué):
- [x] CORREGIDO EN EL CÓDIGO el 2026-10-05, SIN PUBLICAR NI GUARDAR EN GIT (`public/sitemap.xml`: `/puertas/`, `/atrios/` y añadida `/politica-de-privacidad/`). Falta: commit, `npm run build` y que Josué suba `out/` a Hostinger. Original: `sitemap.xml` tenía dos direcciones equivocadas: `/puerta/` y `/atrio/` dan 404; las reales son `/puertas/` y `/atrios/`. Tampoco incluye `/politica-de-privacidad/`.
- [x] CREADO EN EL CÓDIGO el 2026-10-05, SIN PUBLICAR NI GUARDAR EN GIT: `public/robots.txt` (permite todo y señala el `sitemap.xml`). Original: no existía `robots.txt` (404).
- [x] PORTADA HECHA EN EL CÓDIGO el 2026-10-05, SIN PUBLICAR: en `app/page.js` solo se cambió el bloque de la pantalla de carga (`isSyncing`), que ahora muestra `<h1>Culto Racional</h1>`, "El Tabernáculo de David Reedificado" y una línea de descripción encima de "Sincronizando tu camino...". No se tocó la lógica de sesión ni de sincronización. Original: el HTML de la portada solo contenía "Sincronizando tu camino...".
- [ ] `/final/` NO se tocó: su HTML sigue sin contenido porque la página espera a montarse y comprobar el progreso antes de mostrar nada; cambiarlo exige tocar esa comprobación. Además, todas las etapas redirigen por JavaScript a quien no tiene progreso (un visitante nuevo que abre `/puertas/` acaba en `/introduccion/`); Google ejecuta JavaScript, así que puede ver esa redirección en vez del texto de la etapa. Arreglarlo es cambiar el bloqueo por etapas: no hacerlo sin orden expresa de Josué.
- [x] HECHO EN EL CÓDIGO el 2026-10-05, SIN PUBLICAR NI GUARDAR EN GIT: `app/seo.js` (función `metadataDe`) añade Open Graph, tarjeta de Twitter y `canonical` a las 6 etapas y a la Política de Privacidad; `app/layout.js` define `metadataBase` y el Open Graph por defecto (sin `canonical` ni `og:url`, porque lo heredan `/curso/` y `/actualizar-password/`). Imágenes para compartir en `public/og/` (7 JPG de 1200x630, 115-184 KB, recortadas de `public/sources/`; las PNG originales pesan 2,5 MB y WhatsApp no las muestra). `npm run build` pasó y las etiquetas se comprobaron en `out/`. JSON-LD no se añadió. `out/` quedó regenerado en local con estos cambios más `robots.txt` y `sitemap.xml`. Original: ninguna ruta tenía etiquetas Open Graph (`og:title`, `og:image`), `canonical` ni JSON-LD: al compartir el enlace en WhatsApp o redes no sale imagen ni título propio.
- [x] HECHO EN EL CÓDIGO el 2026-10-05, SIN PUBLICAR: `app/curso/page.js` exporta su propio `metadata` ("Curso | Culto Racional"). Original: `/curso/` usaba el título y la descripción genéricos de la portada.
- [x] A MEDIAS, 2026-10-05, SIN PUBLICAR: creado `app/not-found.js` en español (genera `out/404.html`). Falta para que se vea: Hostinger no usa `404.html` por sí solo; hay que añadir la línea `ErrorDocument 404 /404.html` al `.htaccess` de la carpeta `culto-racional/` en Hostinger. No se creó `.htaccess` en `public/` para no pisar el que pueda existir en el servidor. Original: la página de error 404 es la de Hostinger, en inglés.
- [ ] Pendientes anteriores anotados en `ESBDGG-web-store-esbdgg\PROYECTO.md`: 42 vulnerabilidades de dependencias en GitHub (2 críticas, 24 altas, dato del 2026-09-29).

Despliegue: Hostinger no tiene despliegue automático; Josué sube `out/` arrastrando la carpeta (sin `audio` ni `sources`). Detalle en `ESBDGG-web-store-esbdgg\PROYECTO.md`.

## Artefactos generados
| Archivo | Entorno donde se creó | Ubicación | Qué hace |
|---|---|---|---|
| PROYECTO.md | Claude Code | raíz | memoria del proyecto |

## Próximo paso
Decidir en qué se usa el crédito de sesiones en la nube.


## Estado al 2026-10-05
GUARDADO EN GIT el 2026-10-05: commit `cde985c` en la rama local `seo-visibilidad-google` (no en `main`, no subido a GitHub; `main` sigue en `1391eca`). Para publicar por GitHub habría que fusionar la rama en `main` y hacer `push`, con el sí de Josué. Hostinger no depende de git: se publica subiendo `out/`. Cambios incluidos: `public/sitemap.xml`, `public/robots.txt`, `public/og/` (7 imágenes), `app/seo.js`, `app/not-found.js`, `app/layout.js`, los 6 `layout.js` de etapa, `app/politica-de-privacidad/page.js`, `app/curso/page.js`, `app/page.js` (solo pantalla de carga). `npm run build` pasó; `out/` está regenerado con todo. Probado en local como invitado: portada con Guía de Inicio, etapas bloqueadas, `/curso/`, página 404, sin errores de consola. No probado en local: inicio de sesión y sincronización con cuenta. Siguiente: commit con el sí de Josué; él sube `out/` a Hostinger (sin `audio` ni `sources`); después verificar en vivo y probar su sesión.
