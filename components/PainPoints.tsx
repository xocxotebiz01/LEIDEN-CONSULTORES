import React from 'react';

export const PainPoints: React.FC = () => {
  const challenges = [
    {
      title: "Desalineación de Líderes",
      desc: "Mandos medios con gran capacidad técnica pero que necesitan herramientas de conducción humana.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Cultura de Silos",
      desc: "Estructuras que frenan la comunicación y dificultan la ejecución de los objetivos estratégicos anuales.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Retención de Talento",
      desc: "La necesidad de planes de desarrollo claros para mantener el compromiso de los perfiles críticos.",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
            Liberamos el potencial <br/>
            <span className="text-blue-700">para desafíos de gran escala.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto">
            Ayudamos a las organizaciones a superar las barreras invisibles que frenan el crecimiento mediante la profesionalización de sus equipos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {challenges.map((item) => (
            <div key={item.title} className="relative aspect-[3/4] rounded-[2rem] overflow-hidden group">
              <img 
                src={item.img} 
                alt={`Imagen representando ${item.title}`} 
                className="absolute inset-0 w-full h-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 p-10 text-white">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
