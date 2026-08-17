import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Download, Mail, Phone, MapPin, Award, ExternalLink, Camera } from 'lucide-react';
import defaultPortrait from '../assets/images/eshan_portrait_1786978663811.jpg';

interface HeroProps {
  onOpenCV: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV, onExploreProjects }) => {
  const [profileImage, setProfileImage] = useState<string>(() => {
    return localStorage.getItem('eshan_custom_photo') || defaultPortrait;
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const resultStr = event.target.result as string;
          setProfileImage(resultStr);
          localStorage.setItem('eshan_custom_photo', resultStr);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-white py-16 lg:py-24 border-b border-stone-200">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Portfolio 2025 • Creative Designer
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-stone-900 tracking-tight leading-[1.1]">
              ESHAN SANJOT
              <span className="block text-2xl sm:text-3xl font-sans font-normal text-orange-600 mt-2">
                Graphic Designer & Digital Marketer
              </span>
            </h1>

            <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
              Hardworking and reliable designer from Karachi, Pakistan. Certified from Bano Qabil with a strong eye for detail, specializing in brand identity, logo design, social media graphics, and Meta Ads.
            </p>

            {/* Contact Pills */}
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-stone-700">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-stone-200 shadow-2xs">
                <Phone className="w-4 h-4 text-orange-600" />
                <span>+92 336 3179298</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-stone-200 shadow-2xs">
                <Mail className="w-4 h-4 text-orange-600" />
                <span>Eshansanjot@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-stone-200 shadow-2xs">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span>Karachi South, Pakistan</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 text-white font-medium text-sm hover:bg-stone-800 transition-all shadow-md hover:shadow-lg group"
              >
                Explore M.K Tailors Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-stone-300 text-stone-800 font-medium text-sm hover:bg-stone-50 transition-all shadow-xs"
              >
                <Download className="w-4 h-4 text-orange-600" />
                View Full CV & Certificate
              </button>
            </div>
          </div>

          {/* Right Portrait & Showcase Card Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm bg-white p-6 rounded-3xl border border-stone-200 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full pointer-events-none" />
              
              {/* Portrait Container with Upload */}
              <div className="relative w-full h-80 rounded-2xl bg-stone-100 overflow-hidden border border-stone-200 flex items-center justify-center mb-6 shadow-inner">
                <img
                  src={profileImage}
                  alt="Eshan Sanjot - Graphic Designer"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Upload Real Photo Button */}
                <label className="absolute bottom-3 right-3 bg-stone-900/90 hover:bg-stone-900 text-white px-3 py-2 rounded-xl cursor-pointer shadow-lg backdrop-blur-sm transition-transform hover:scale-105 flex items-center gap-1.5 text-xs font-medium">
                  <Camera className="w-4 h-4 text-orange-400" />
                  <span>Upload Real Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">Eshan Sanjot</h3>
                  <span className="text-xs text-orange-600 font-semibold uppercase tracking-wider">Graphic Designer</span>
                </div>
                <span className="px-3 py-1 bg-stone-100 text-stone-800 rounded-full text-xs font-medium">
                  Bano Qabil 2025
                </span>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100">
                <button
                  onClick={onExploreProjects}
                  className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  View M.K Tailors Project <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

