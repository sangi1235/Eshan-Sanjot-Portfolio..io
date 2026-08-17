import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { InvoiceSimulator } from './components/InvoiceSimulator';
import { Experience } from './components/Experience';
import { CVModal } from './components/CVModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-orange-500 selection:text-white flex flex-col justify-between">
      <div>
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenCV={() => setIsCVOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <main className="animate-fadeIn">
          {currentPage === 'home' && (
            <>
              <Hero
                onOpenCV={() => setIsCVOpen(true)}
                onExploreProjects={() => handleNavigate('project')}
              />
              <About />
              <Skills />
              <Projects onSelectInvoiceDemo={() => handleNavigate('invoice')} />
              <Experience />
            </>
          )}

          {currentPage === 'about' && (
            <div className="py-6">
              <About />
            </div>
          )}

          {currentPage === 'skills' && (
            <div className="py-6">
              <Skills />
            </div>
          )}

          {currentPage === 'project' && (
            <div className="py-6">
              <Projects onSelectInvoiceDemo={() => handleNavigate('invoice')} />
            </div>
          )}

          {currentPage === 'experience' && (
            <div className="py-6">
              <Experience />
            </div>
          )}

          {currentPage === 'invoice' && (
            <div className="py-6">
              <InvoiceSimulator />
            </div>
          )}
        </main>
      </div>

      <Footer />

      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />

      <Contact
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

