import React from 'react';

export const Services: React.FC = () => {
  return (
    <section id="seleccion" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10 flex items-center">
          <div className="h-10 w-1.5 bg-slate-300 rounded-full mr-4"></div>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Gestión de Talento
          </h2>
        </div>

        <div className="space-y-8">
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium italic">
            "Entendemos que el talento adecuado no solo cumple con un perfil técnico, sino que se integra armónicamente a una cultura ya consolidada."
          </p>
          <p className="text-lg text-slate-600">
            Acompañamos procesos de búsqueda y selección con una mirada sistémica, garantizando un onboarding profesional que respete los tiempos y valores de su organización.
          </p>
          <div className="pt-6 flex flex-wrap gap-4">
            <span className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mandos Medios</span>
            <span className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest">Perfiles Especializados</span>
            <span className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest">Executive Search</span>
          </div>
        </div>
      </div>
    </section>
  );
};