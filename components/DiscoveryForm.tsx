
import React, { useState } from 'react';

interface DiscoveryFormProps {
  onClose: () => void;
}

export const DiscoveryForm: React.FC<DiscoveryFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    focus: ''
  });

  const nextStep = () => setStep(s => s + 1);

  const handleWhatsAppRedirect = () => {
    const text = `Hola LEIDEN, soy ${formData.name} de ${formData.company}. Me interesa conversar sobre: ${formData.focus} para nuestra organización.`;
    window.open(`https://wa.me/5491168014839?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="text-slate-900">
      <div className="mb-10 text-center">
        <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Evolución Estratégica</h3>
        <p className="text-slate-400 font-medium text-sm">Iniciemos una conversación sobre el futuro de su talento.</p>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest block mb-4">Área de Interés</span>
          <div className="grid gap-3">
            {[
              { id: 'training', label: 'Capacitación y Up-skilling de Equipos' },
              { id: 'coaching', label: 'Executive Coaching (C-Level & Dir)' },
              { id: 'search', label: 'Búsqueda de Talento Estratégico' },
              { id: 'org', label: 'Transformación Cultural / Cambio Org.' }
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => { setFormData({...formData, focus: p.label}); nextStep(); }}
                className="w-full text-left p-6 border border-slate-100 rounded-2xl hover:border-blue-600 hover:bg-blue-50 transition-all font-bold text-slate-700 shadow-sm"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Nombre y Apellido" 
              className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-blue-600"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Cargo / Rol" 
              className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-blue-600"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Organización" 
              className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-blue-600"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>
          <button 
            onClick={handleWhatsAppRedirect}
            className="w-full py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-50"
          >
            Solicitar Contacto Directo
          </button>
        </div>
      )}
    </div>
  );
};
