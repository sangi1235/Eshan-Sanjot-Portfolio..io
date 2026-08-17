import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white text-stone-900 rounded-xl flex items-center justify-center font-serif font-bold text-lg">
                ES
              </div>
              <span className="font-serif text-xl font-bold text-white">Eshan Sanjot</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Graphic Designer & Digital Marketing student from Karachi South, Pakistan. Certified from Bano Qabil with a passion for pristine brand identity and visual arts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills & Tools</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Project (M.K Tailors)</a></li>
              <li><a href="#invoice-demo" className="hover:text-white transition-colors">Invoice Generator</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Education & Experience</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-base">Contact & Location</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span>+92 336 3179298</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Eshansanjot@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Shah Abdul Latif Bhittai Road, Nayabad Lyari, Karachi South</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500">
          <p>© 2025 Eshan Sanjot — Graphic Designer. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built with precision & creative passion.</p>
        </div>
      </div>
    </footer>
  );
};
