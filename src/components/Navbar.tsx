import React, { useState } from 'react';
import { Menu, X, FileText, Sparkles, Mail, Home, User, Briefcase, Cpu, Layers } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenCV: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenCV, onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills & Tools', icon: Cpu },
    { id: 'project', label: 'M.K Tailors', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Layers },
    { id: 'invoice', label: 'Invoice Tool', icon: Sparkles },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left focus:outline-none group"
          >
            <div className="w-11 h-11 bg-stone-900 rounded-xl flex items-center justify-center text-white font-serif font-bold text-lg shadow-md border border-stone-800 group-hover:bg-orange-600 transition-colors">
              ES
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-tight text-stone-900 block leading-tight">
                Eshan Sanjot
              </span>
              <span className="text-[11px] uppercase tracking-widest text-orange-600 font-semibold block">
                Graphic Designer
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-orange-400' : 'text-stone-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-2.5">
            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-stone-300 bg-white text-stone-700 font-medium text-xs sm:text-sm hover:bg-stone-50 transition-all shadow-2xs"
            >
              <FileText className="w-4 h-4 text-orange-600" />
              <span>CV</span>
            </button>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-900 text-white font-medium text-xs sm:text-sm hover:bg-stone-800 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors ${
                  isActive ? 'bg-stone-900 text-white' : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-orange-400' : 'text-stone-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-4 border-t border-stone-100 grid grid-cols-2 gap-2">
            <button
              onClick={() => { setIsOpen(false); onOpenCV(); }}
              className="py-2.5 px-4 rounded-xl border border-stone-300 text-stone-800 font-medium text-xs flex items-center justify-center gap-2 bg-stone-50"
            >
              <FileText className="w-4 h-4 text-orange-600" /> View CV
            </button>
            <button
              onClick={() => { setIsOpen(false); onOpenContact(); }}
              className="py-2.5 px-4 rounded-xl bg-stone-900 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-xs"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

