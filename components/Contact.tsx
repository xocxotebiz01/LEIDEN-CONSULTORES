import React from 'react';
import { Link } from 'react-router-dom'; // o Next.js: import Link from 'next/link';

export const Gracias: React.FC = () => {
  return (
    <section className="py-32 bg-white text-center">
      <div className="max-w-2xl mx-auto px-6">
        <div className="w-20 h-20 bg-slate-50 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">¡Gracias por tu consulta!</h1>
        <p className="text-lg text-slate-600 mb-10 font-medium">
          Un consultor de nuestro equipo se pondrá en contacto con vos a la brevedad.  
          Valoramos tu interés en LEIDEN y estamos listos para acompañar tu organización.
        </p>
        
        <Link 
          to="/" // en Next.js sería <Link href="/">Inicio</Link>
          className="inline-block px-10 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all"
        >
          Volver al Inicio
        </Link>
      </div>
    </section>
  );
};
