export const SITIO = "https://culto-racional.store-esbdgg.com";

export function metadataDe({ title, description, ruta, imagen }) {
  const images = [{ url: `/og/${imagen}.jpg`, width: 1200, height: 630, alt: title }];
  return {
    title,
    description,
    alternates: { canonical: ruta },
    openGraph: {
      title,
      description,
      url: ruta,
      siteName: "Culto Racional",
      locale: "es_ES",
      type: "website",
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
