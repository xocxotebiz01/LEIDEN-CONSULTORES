import React from 'react';
import { Hero } from './components/Hero';
import { TopTrainings } from './components/TopTrainings';
import { Services } from './components/Services';
import { ImplementationFocus } from './components/ImplementationFocus';
import { PainPoints } from './components/PainPoints';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TopTrainings />
        <Services />
        <PainPoints />
        <ImplementationFocus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;