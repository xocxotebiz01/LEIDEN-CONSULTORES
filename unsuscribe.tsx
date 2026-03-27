import React, { useState } from "react";

export default function Unsubscribe() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzsa-M5CSm_pJ_WpIGcNGqdZSnRtYHkC6x9itIUAmjWkaWsD_rrWNegHKq2bQp-NvcOQg/exec",
        {
          method: "POST",
          body: new URLSearchParams({ email }),
        }
      );

      if (response.ok) {
        setStatus("✅ Tu baja fue registrada con éxito.");
        form.reset();
      } else {
        setStatus("❌ Hubo un error al procesar tu baja.");
      }
    } catch (error) {
      setStatus("❌ Error de conexión. Intentalo más tarde.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial", textAlign: "center" }}>
      {/* Logo arriba */}
      <img
        src="/logo.png" // reemplazá con la ruta real de tu logo en la carpeta public/
        alt="Logo Leiden Consultores"
        style={{ maxWidth: "200px", marginBottom: "20px" }}
      />

      <h1>Cancelar suscripción</h1>
      <p>Ingresá tu correo para darte de baja de nuestras comunicaciones.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          required
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Confirmar baja
        </button>
      </form>

      {/* Mensaje de confirmación */}
      {status && <p style={{ marginTop: "20px", fontWeight: "bold" }}>{status}</p>}
    </div>
  );
}
