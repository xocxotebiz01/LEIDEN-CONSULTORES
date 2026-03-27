import React from "react";

export default function Unsubscribe() {
  return (
    <div style={{maxWidth:"600px",margin:"40px auto",fontFamily:"Arial"}}>
      <h1>Cancelar suscripción</h1>
      <p>Ingresá tu correo para darte de baja de nuestras comunicaciones.</p>
      <form method="POST" action="/api/unsubscribe">
        <input type="email" name="email" required style={{padding:"10px",width:"100%"}} />
        <button type="submit" style={{marginTop:"10px",padding:"10px 20px",background:"#2563eb",color:"#fff",border:"none",borderRadius:"6px"}}>
          Confirmar baja
        </button>
      </form>
    </div>
  );
}
