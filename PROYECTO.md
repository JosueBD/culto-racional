# culto-racional

## Estado actual
App web para reflexionar sobre el culto racional de Romanos 12:1. Es la aplicación más importante para Josué de todo el ecosistema ESBDGG. Está publicada y en uso. El 2026-10-03 la carpeta se movió de `E:\culto-racional` a `E:\claude code proyecto src\culto-racional` para quedar junto al resto de proyectos de Claude; el código no cambió.

- Publicada en: `culto-racional.store-esbdgg.com` (Hostinger, única copia activa). El proyecto de Vercel (`culto-racional.vercel.app`) está PAUSADO desde el 2026-10-05 por decisión de Josué: no se elimina, lo conserva guardado.
- Repositorio: https://github.com/JosueBD/culto-racional.git
- Último commit (2026-09-29): `1391eca` "Corregir footer: flecha duplicada y colision audio/enlace"

## Stack
- Next.js 16.2.4, React 19.2.4 (JavaScript, sin TypeScript)
- Supabase (`@supabase/ssr`, `@supabase/supabase-js`)
- framer-motion
- Despliegue: Hostinger, subiendo a mano la carpeta `out/` (exportación estática). Vercel pausado. El script `deploy` de `gh-pages` se retiró el 2026-10-05.

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
- [x] `culto-racional-deploy.zip`: enviado a la Papelera de reciclaje el 2026-10-05 por orden de Josué.
- [x] Copia `E:\prueba de culto-racional desde github`: enviada a la Papelera de reciclaje el 2026-10-05 por orden de Josué (era un clon sin cambios propios).
- [x] `PROYECTO.md` guardado en git el 2026-10-05 (rama `seo-visibilidad-google`).
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

## Publicado en Hostinger el 2026-10-05 (Josué subió `out/`; verificado en vivo por Code)
- `robots.txt` y `sitemap.xml` nuevos en vivo (8 direcciones, sin `/puerta/` ni `/atrio/`).
- Las 7 imágenes de `/og/` responden 200.
- Las 6 etapas, `/curso/` y `/politica-de-privacidad/` tienen `og:image` y `canonical` propios; la portada trae `<h1>Culto Racional</h1>` en el HTML.
- Portada probada en vivo como invitado: abre la Guía de Inicio, sin recursos fallidos.
- HECHO 2026-10-05: Josué creó en Hostinger `culto-racional/.htaccess` con la línea `ErrorDocument 404 /404.html` (no existía antes). Verificado en vivo: una dirección inexistente responde 404 con la página en español "Página no encontrada | Culto Racional"; el resto de rutas sigue en 200. OJO: ese `.htaccess` vive solo en el servidor, no en el repositorio; al subir `out/` no se pisa porque `out/` no trae `.htaccess`.
- HECHO 2026-10-05: Josué probó su sesión y la sincronización en vivo: funciona igual.
- Pendiente: pedir en Search Console que Google lea el `sitemap.xml`.
- `culto-racional.vercel.app` no recibe estos cambios hasta fusionar la rama `seo-visibilidad-google` en `main` y hacer `push`.

## Cierre del 2026-10-05
- Vercel pausado por Josué; verificado: `culto-racional.vercel.app` responde 503 `DEPLOYMENT_PAUSED`. DECISIÓN: pausar, no eliminar. No volver a proponer borrarlo.
- Supabase, Authentication > URL Configuration (captura de Josué): Site URL = `https://culto-racional.store-esbdgg.com` (correcto). Redirect URLs: `culto-racional.vercel.app/**`, `localhost:3000/**`, `culto-racional.store-esbdgg.com/**`. No se cambió nada.
- Search Console (propiedad `store-esbdgg.com`): Josué reenvió `sitemap.xml` el 2026-10-05; marcaba 7 páginas (lectura anterior a la subida), debe pasar a 8.
- Vulnerabilidades al 2026-10-05 (`npm audit`): 16 en total, 1 crítica (`next`), 13 altas (casi todas en `gh-pages` y `eslint-config-next`, herramientas de construcción), 1 moderada, 1 baja. No se actualizó nada. Con Vercel pausado, en producción solo hay archivos estáticos.
- `README.md` todavía enlaza a `culto-racional.vercel.app`.
- Rama `seo-visibilidad-google` subida a GitHub el 2026-10-05 como respaldo (con el sí de Josué). `main` sin cambios (`1391eca`). No hay pull request abierto.
- Corrección del conteo de vulnerabilidades: GitHub (Dependabot) informa 42 en `main` (3 críticas, 23 altas, 13 moderadas, 3 bajas); `npm audit` en local informa 16. Cuentan distinto: GitHub suma cada aviso, `npm audit` agrupa por paquete. Existe en GitHub una rama de Dependabot con actualizaciones propuestas (`dependabot/npm_and_yarn/...`), sin fusionar.

## Actualización de paquetes del 2026-10-05 (con el sí de Josué, "cuidar el código")
- `README.md`: enlace cambiado de `culto-racional.vercel.app` a `culto-racional.store-esbdgg.com`.
- `npm audit fix` (sin `--force`): solo cambió `package-lock.json`; ningún archivo de `app/`, `components/` ni `lib/`. `next` pasó de 16.2.4 a 16.3.8; `react`, `framer-motion` y Supabase no cambiaron de versión. Vulnerabilidades según `npm audit`: de 16 (1 crítica) a 7, todas altas y todas en herramientas de desarrollo (`eslint-config-next`, `gh-pages` y sus dependencias), que no forman parte del sitio publicado. Quitarlas exige `--force` (cambios mayores): NO se hizo.
- Comprobación: `npm run build` pasó; las 19 páginas de `out/` son idénticas a las de antes en etiquetas del `<head>`, texto y clases (comparación automática). Prueba en local como invitado: Guía de Inicio, redirección de `/puertas/` y `/final/` a `/introduccion/`, Política de Privacidad, sin errores de consola. No probado en local: inicio de sesión y sincronización con cuenta.
- ESTADO: `out/` local está compilado con `next` 16.3.8 y NO está subido a Hostinger. Hostinger sigue con la compilación anterior (16.2.4), que funciona. Para volver atrás: `git checkout <commit anterior> -- package-lock.json` y `npm ci`.
- `culto-racional-deploy.zip` (raíz, 520 KB, 29/09): es una copia comprimida de un `out/` antiguo, sin `robots.txt` ni `og/`; se regenera con `npm run build`. `E:\prueba de culto-racional desde github\culto-racional\culto-racional` (70 MB, agosto): clon limpio del mismo repositorio en el commit `3a87f25`, que ya está contenido en `main`; sin cambios propios. Ninguno de los dos aporta nada que no esté en el repositorio. No se borró nada: pendiente de que Josué los elimine o diga que sí.
- 2026-10-05: zip y copia vieja enviados a la Papelera de reciclaje de Windows (recuperables hasta que se vacíe). La compilación con `next` 16.3.8 NO se subió a Hostinger: no hace falta, porque sus correcciones son de servidor y Hostinger solo sirve archivos estáticos; se subirá con el próximo cambio real del sitio.
- 2026-10-05 (más tarde): Josué subió a Hostinger el `out/` compilado con `next` 16.3.8. Verificado en vivo por huella SHA-256: los 122 archivos publicados (todo `out/` salvo `audio` y `sources`) son idénticos a los locales del commit `e22d812`; `audio` y `sources` siguen respondiendo 200; la página 404 en español y el `.htaccess` siguen activos; portada e Introducción cargan como invitado sin recursos fallidos. Lo publicado y el repositorio (rama `seo-visibilidad-google`) coinciden. Josué confirmó que su sesión y la sincronización funcionan igual con esta compilación.

## 2026-10-05: gh-pages retirado y rama fusionada en main
- GitHub Pages en desuso (rama `gh-pages` sin cambios desde el 2026-05-09; no hay workflows). Con el sí de Josué se quitó de `package.json` la dependencia `gh-pages` y los scripts `predeploy` y `deploy`. Solo cambiaron `package.json` y `package-lock.json`. La rama remota `gh-pages` no se borró.
- `npm audit`: de 7 a 5 vulnerabilidades, todas altas y todas en la cadena de `eslint-config-next` (herramienta de revisión de código, no forma parte del sitio). No tienen arreglo en la serie 16; `npm audit fix --force` propone bajar a la 14: no hacerlo.
- `npm run build` pasó; las 19 páginas generadas son idénticas en contenido a las publicadas. El `out/` local se regeneró (cambia el identificador interno de compilación); no hace falta subirlo a Hostinger.
- La rama `seo-visibilidad-google` se fusionó en `main` y `main` se subió a GitHub. Vercel sigue pausado: no se publicó nada.
- 2026-10-05: `.htaccess` guardado en el repositorio como `public/.htaccess` (una línea: `ErrorDocument 404 /404.html`), igual al que Josué creó en Hostinger. `npm run build` lo copia a `out/.htaccess`, así cada subida de `out/` lo incluye. Ojo al arrastrar `out/` desde el Explorador de Windows: los archivos que empiezan por punto se ven, pero conviene comprobar que `.htaccess` va en la selección.
- 2026-10-05: Search Console confirma el `sitemap.xml` releído ese día con 8 páginas descubiertas y estado "procesado correctamente" (captura de Josué). Punto cerrado.
