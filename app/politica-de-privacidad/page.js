export const metadata = {
  title: "Política de Privacidad | Culto Racional",
  description: "Política de privacidad de Culto Racional: qué datos recopilamos, para qué los usamos y tus derechos.",
};

export default function PoliticaDePrivacidad() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0c0a06",
        color: "rgba(255,255,255,0.85)",
        padding: "64px 24px",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <h1 style={{ color: "#d4af37", fontSize: "2rem" }}>Política de Privacidad</h1>
        <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>
          Última actualización: 29 de septiembre de 2026
        </p>

        <section style={{ marginTop: "32px" }}>
          <h2 style={{ color: "#d4af37" }}>Quiénes somos</h2>
          <p style={{ marginTop: "8px", lineHeight: 1.6 }}>
            Culto Racional es una aplicación de Josué Borges Diaz, un recorrido progresivo de
            enseñanza (Introducción, Puertas, Atrios, Lugar Santo, Lugar Santísimo, Final) sobre
            acción de gracias, alabanza, bendición y adoración.
          </p>
          <p style={{ marginTop: "8px" }}>Contacto: esbdggpets@store-esbdgg.com</p>
        </section>

        <section style={{ marginTop: "32px" }}>
          <h2 style={{ color: "#d4af37" }}>Qué datos recopilamos</h2>
          <p style={{ marginTop: "8px", lineHeight: 1.6 }}>
            Para crear una cuenta y guardar tu progreso, pedimos únicamente tu correo electrónico
            y una contraseña. También guardamos, vinculado a tu cuenta, en qué etapa del
            recorrido te quedaste, para que puedas continuar donde lo dejaste desde cualquier
            dispositivo.
          </p>
          <p style={{ marginTop: "8px", lineHeight: 1.6 }}>
            No es obligatorio crear una cuenta: puedes usar la aplicación como invitado, aunque
            en ese caso el progreso no se guarda entre dispositivos.
          </p>
        </section>

        <section style={{ marginTop: "32px" }}>
          <h2 style={{ color: "#d4af37" }}>Dónde se guardan tus datos</h2>
          <p style={{ marginTop: "8px", lineHeight: 1.6 }}>
            Tu cuenta y tu progreso se guardan en Supabase, el proveedor técnico que hace
            funcionar el inicio de sesión y la sincronización. No compartimos tu información con
            nadie más.
          </p>
        </section>

        <section style={{ marginTop: "32px" }}>
          <h2 style={{ color: "#d4af37" }}>Cookies y rastreo</h2>
          <p style={{ marginTop: "8px", lineHeight: 1.6 }}>
            Esta aplicación no utiliza cookies de rastreo ni de terceros (analítica, publicidad,
            redes sociales).
          </p>
        </section>

        <section style={{ marginTop: "32px" }}>
          <h2 style={{ color: "#d4af37" }}>Tus derechos</h2>
          <p style={{ marginTop: "8px", lineHeight: 1.6 }}>
            Puedes restablecer tu progreso o cerrar sesión desde la propia aplicación en cualquier
            momento. Si quieres que eliminemos tu cuenta por completo, escríbenos a
            esbdggpets@store-esbdgg.com.
          </p>
        </section>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "40px",
            color: "#d4af37",
            textDecoration: "underline",
          }}
        >
          Volver al inicio
        </a>
      </div>
    </main>
  );
}
