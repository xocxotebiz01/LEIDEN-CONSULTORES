import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-400 py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-sm">
            <span className="text-3xl font-black text-slate-900 mb-4 block tracking-tighter">LEIDEN</span>
            <p className="text-sm leading-relaxed mb-8 font-medium">
              Consultoría estratégica para organizaciones que buscan evolucionar a través de su gente. Profesionalismo, ética y humildad técnica.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h4 className="text-slate-900 font-bold mb-6 text-xs uppercase tracking-widest">Áreas</h4>
              <ul className="space-y-4 text-sm font-semibold">
                <li><a href="#capacitacion" className="hover:text-slate-900 transition">Capacitación</a></li>
                <li><a href="#seleccion" className="hover:text-slate-900 transition">Selección</a></li>
                <li><a href="#consultoria" className="hover:text-slate-900 transition">Consultoría</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-bold mb-6 text-xs uppercase tracking-widest">Legal</h4>
              <ul className="space-y-4 text-sm font-semibold">
                <li>Privacidad</li>
                <li>Ética Profesional</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-16 mt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em]">
          <p>© 2024 LEIDEN | Talento & Organización</p>
          <div className="flex gap-8 text-slate-300">
            <span>Escuchar</span>
            <span>Comprender</span>
            <span>Acompañar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};