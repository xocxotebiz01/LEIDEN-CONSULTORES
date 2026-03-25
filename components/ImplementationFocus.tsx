import React from 'react';

export const ImplementationFocus: React.FC = () => {
  const pillars = [
    {
      title: "Diagnóstico Organizacional",
      desc: "Análisis profundo de la estructura actual, detección de cuellos de botella y evaluación de clima para trazar una hoja de ruta real.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Optimización de Procesos",
      desc: "Rediseño de flujos de trabajo para eliminar la fricción operativa, mejorar la comunicación interna y maximizar la rentabilidad del talento.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Transformación Cultural",
      desc: "Alineación de los valores de la empresa con las prácticas diarias del equipo, fomentando el compromiso y la identidad corporativa.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="consultoria" className="py-32 bg-[#020617] text-white scroll-mt-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
            Consultoría con <br/><span className="text-slate-400 italic">visión humana.</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Entendemos la complejidad de las organizaciones con años de trayectoria. No buscamos imponer modelos, sino descubrir juntos el camino hacia una mayor eficiencia, honrando el camino ya recorrido.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="p-10 bg-[#0f172a] border border-slate-800 rounded-[2.5rem] hover:border-blue-500/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-900/40 text-blue-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-sm font-medium text-slate-400 italic">"Nuestra fortaleza reside en saber escuchar antes de proponer."</p>
          <a 
            href="#contacto" 
            className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-200 transition-all"
          >
            Conversemos
          </a>
        </div>
      </div>
    </section>
  );
};
