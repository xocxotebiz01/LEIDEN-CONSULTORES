import React, { useState } from "react";

const Unsubscribe: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby9iHnaEfit33xRo5QfRTsZQx82w9ESFzzRUpoD8BtTKiqWh9EaR2ve55KtBFkfJSmFRg/exec",
        {
          method: "POST",
          body: new URLSearchParams({ email }),
        }
      );

      const text = await response.text();
      if (text === "OK") {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <img src="/logo.png" alt="Leiden Consultores" className="mb-6 w-40" />
      <h1 className="text-2xl font-bold mb-4">Cancelar suscripción</h1>
      <p className="mb-4">Ingresá tu correo para darte de baja de nuestras comunicaciones.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border rounded p-2"
          placeholder="tuemail@ejemplo.com"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
          disabled={status === "loading"}
        >
          Confirmar baja
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 mt-4">Tu baja fue registrada correctamente.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-4">Error de conexión. Intentalo más tarde.</p>
      )}
    </div>
  );
};

export default Unsubscribe;
