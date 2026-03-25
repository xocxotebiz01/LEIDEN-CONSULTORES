import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block px-5 py-2 rounded-full bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-10 border border-slate-200">
          Acompañando procesos de evolución
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight max-w-5xl mx-auto">
          Potenciamos el talento que <br/>
          <span className="text-blue-600">impulsa tu organización.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
          Acompañamos a empresas en la evolución de sus mandos medios y equipos de trabajo. Soluciones de formación y talento diseñadas para cumplir tus metas anuales con excelencia técnica.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#contacto"
            className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-100"
          >
            Contactanos por mail
          </a>
          <a 
            href="https://wa.me/5491122715446"
            className="w-full sm:w-auto px-12 py-5 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
          >
            Contactanos por WhatsApp
          </a>
        </div>
      </div>
      
      <div className="mt-20 max-w-6xl mx-auto px-4">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
            alt="Colaboración institucional en LEIDEN" 
            className="w-full h-[550px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};
