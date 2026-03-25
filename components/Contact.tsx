import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <section id="contacto" className="py-32 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Texto institucional + datos de contacto */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Acompañamos su <br/><span className="text-slate-500">visión a largo plazo.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              Sabemos que cada organización es única. Nos gustaría conocer sus desafíos específicos en la gestión de capital humano y explorar cómo LEIDEN puede sumar valor a su estructura.
            </p>
            
            <div className="flex flex-col gap-6">
              {/* Mail */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm border border-slate-100">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                   
