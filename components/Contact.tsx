import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <section id="contacto" className="py-32 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Acompañamos su <br/><span className="text-slate-500">visión a largo plazo.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              Sabemos que cada organización es única. Nos gustaría conocer sus desafíos específicos en la gestión de capital humano y explorar cómo LEIDEN puede sumar valor a su estructura.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm border border-slate-100">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0015.003 4H4.997a2 2 0 00-1.994 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">contacto@leiden.com.ar</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-slate-50 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Gracias por escribirnos</h3>
                <p className="text-slate-500 font-medium">Un consultor de nuestro equipo se pondrá en contacto con usted a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nombre Completo</label>
                    <input type="text" required className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-slate-900 transition" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Organización</label>
                    <input type="text" required className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-slate-900 transition" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Corporativo</label>
                  <input type="email" required className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-slate-900 transition" />
                </div>
                <div className="space-y-2 relative">
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Motivo de su consulta</label>
                    <span className={`text-[10px] font-bold ${message.length > 950 ? 'text-red-500' : 'text-slate-300'}`}>
                      {message.length} / 1000
                    </span>
                  </div>
                  <textarea 
                    required 
                    maxLength={1000}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Describa brevemente la situación o el área en la que requiere acompañamiento..."
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-slate-900 transition resize-none"
                  ></textarea>
                </div>
                <button className="w-full py-5 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3">
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
