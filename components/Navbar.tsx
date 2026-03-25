import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-extrabold tracking-tighter text-slate-900">LEIDEN</span>
            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
            <span className="hidden sm:block text-[9px] uppercase font-bold tracking-[0.25em] text-slate-400">
              Talento & Organización
            </span>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex items-center space-x-12 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500/80">
            <a href="#capacitacion" className="hover:text-slate-900 transition-colors duration-300">Capacitación</a>
            <a href="#seleccion" className="hover:text-slate-900 transition-colors duration-300">Selección</a>
            <a href="#consultoria" className="hover:text-slate-900 transition-colors duration-300">Consultoría</a>
          </div>

          {/* Botones desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="https://wa.me/5491122715446"
              aria-label="Contactar por WhatsApp"
              className="bg-slate-900 text-white px-7 py-3 rounded-full hover:bg-slate-800 transition-all duration-300 font-bold text-[10px] uppercase tracking-widest"
            >
              WhatsApp
            </a>  
            <a 
              href="#contacto"
              aria-label="Ir a formulario de consulta"
              className="bg-slate-900 text-white px-7 py-3 rounded-full hover:bg-slate-800 transition-all duration-300 font-bold text-[10px] uppercase tracking-widest"
            >
              Form. Consulta
            </a>
          </div>

          {/* Botón hamburguesa mobile */}
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 text-slate-700"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            {open ? (
              <span className="text-xl font-bold">×</span>
            ) : (
              <span className="text-xl font-bold">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700">
          <a href="#capacitacion" className="block hover:text-slate-900">Capacitación</a>
          <a href="#seleccion" className="block hover:text-slate-900">Selección</a>
          <a href="#consultoria" className="block hover:text-slate-900">Consultoría</a>
          <a 
            href="https://wa.me/5491168014839"
            className="block bg-slate-900 text-white px-5 py-3 rounded-full text-center hover:bg-slate-800 transition-all"
          >
            WhatsApp
          </a>
          <a 
            href="#contacto"
            className="block bg-slate-900 text-white px-5 py-3 rounded-full text-center hover:bg-slate-800 transition-all"
          >
            Form. Consulta
          </a>
        </div>
      )}
    </nav>
  );
};
