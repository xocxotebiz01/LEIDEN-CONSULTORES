import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Hero } from './components/Hero';
import { TopTrainings } from './components/TopTrainings';
import { Services } from './components/Services';
import { ImplementationFocus } from './components/ImplementationFocus';
import { PainPoints } from './components/PainPoints';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

// Importá tu página de baja
import Unsubscribe from './unsubscribe';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Ruta principal */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <TopTrainings />
                  <Services />
                  <PainPoints />
                  <ImplementationFocus />
                  <Contact />
                </>
              }
            />

            {/* Nueva ruta de baja */}
            <Route path="/unsubscribe" element={<Unsubscribe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
