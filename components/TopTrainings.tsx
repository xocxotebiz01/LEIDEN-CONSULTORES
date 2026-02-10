import React from 'react';

export const TopTrainings: React.FC = () => {
  const trainings = [
    { id: 1, title: "Liderazgo y Gestión de Equipos (Mandos Medios)" },
    { id: 2, title: "Comunicación Efectiva y Resolución de Conflictos" },
    { id: 3, title: "Eficiencia Operativa y Gestión del Tiempo" },
    { id: 4, title: "Bienestar e Inteligencia Emocional" },
    { id: 5, title: "Productividad y Gestión con IA" }
  ];

  return (
    <section id="capacitacion" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 flex items-center">
          <div className="h-10 w-1.5 bg-slate-900 rounded-full mr-4"></div>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Ejes de Capacitación
          </h2>
        </div>

        <div className="space-y-8">
          {trainings.map((item) => (
            <div key={item.id} className="flex items-center gap-6 group">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 text-sm font-bold shrink-0 transition-all group-hover:bg-slate-900 group-hover:text-white">
                {item.id}
              </div>
              <p className="text-xl md:text-2xl font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};