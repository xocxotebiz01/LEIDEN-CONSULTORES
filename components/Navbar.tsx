import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-extrabold tracking-tighter text-slate-900">LEIDEN</span>
            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
            <span className="hidden sm:block text-[9px] uppercase font-bold tracking-[0.25em] text-slate-400">
              Talento & Organización
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500/80">
            <a href="#capacitacion" className="hover:text-slate-900 transition-colors duration-300">Capacitación</a>
            <a href="#seleccion" className="hover:text-slate-900 transition-colors duration-300">Selección</a>
            <a href="#consultoria" className="hover:text-slate-900 transition-colors duration-300">Consultoría</a>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/5491168014839"
              className="bg-slate-900 text-white px-7 py-3 rounded-full hover:bg-slate-800 transition-all duration-300 font-bold text-[10px] uppercase tracking-widest"
            >
              WhatsApp
            </a>  
  <a 
    href="https://www.leiden.com.ar/#contacto"
    className="bg-slate-900 text-white px-7 py-3 rounded-full hover:bg-slate-800 transition-all duration-300 font-bold text-[10px] uppercase tracking-widest"
  >
    Form. Consulta
  </a>

          </div>
        </div>
      </div>
    </nav>
  );
};
