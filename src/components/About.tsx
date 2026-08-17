import React from 'react';
import { User, GraduationCap, MapPin, Globe, CheckCircle2, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-semibold text-sm tracking-wider uppercase">
            Profile Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
            About Eshan Sanjot
          </h2>
          <p className="text-stone-600 mt-3 text-base">
            Hardworking, punctual, and creative graphic designer and digital marketing enthusiast based in Karachi, Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Bio Card */}
          <div className="lg:col-span-6 bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-stone-900 text-white rounded-2xl flex items-center justify-center font-serif text-2xl font-bold shadow-md">
                ES
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900">Eshan Sanjot</h3>
                <p className="text-sm text-orange-600 font-medium">Graphic Designer & Student</p>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  <span>Shah Abdul Latif Bhittai Road, Nayabad Lyari, Karachi South</span>
                </div>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              Hi, I'm Eshan Sanjot, a Graphic Designer from Karachi, Pakistan. I completed my Graphic Design certificate from <strong className="text-stone-900">Bano Qabil</strong> (HOL Foundation), with a strong eye for detail and a focus on turning ideas into clean, visually appealing designs. I am also skilled in digital marketing (Meta Ads fundamentals).
            </p>

            <div className="pt-4 border-t border-stone-200 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-xs uppercase font-semibold text-stone-400">Languages</span>
                <span className="text-stone-800 font-medium text-sm">Urdu, English</span>
              </div>
              <div>
                <span className="block text-xs uppercase font-semibold text-stone-400">Cell / Phone</span>
                <span className="text-stone-800 font-medium text-sm">0336-3179298</span>
              </div>
            </div>
          </div>

          {/* Right Education & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-orange-600" />
              Education & Academic Background
            </h3>

            <div className="space-y-4">
              {/* Edu 1 */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs hover:border-orange-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">2025 – 2026 (1st Year)</span>
                    <h4 className="font-serif font-bold text-stone-900 text-lg mt-1">First Year in Process (Humanities Arts Group)</h4>
                    <p className="text-stone-600 text-sm mt-1">S.M Arts and Commerce College</p>
                  </div>
                  <BookOpen className="w-5 h-5 text-stone-400" />
                </div>
              </div>

              {/* Edu 2 */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs hover:border-orange-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">2022 – 2025</span>
                    <h4 className="font-serif font-bold text-stone-900 text-lg mt-1">Matriculation (Science Group)</h4>
                    <p className="text-stone-600 text-sm mt-1">Iranian Technical Govt Sec School</p>
                  </div>
                  <BookOpen className="w-5 h-5 text-stone-400" />
                </div>
              </div>
            </div>

            {/* Objective Box */}
            <div className="bg-orange-50/70 p-6 rounded-xl border border-orange-200">
              <h4 className="font-serif font-bold text-stone-900 text-base mb-1">Career Objective</h4>
              <p className="text-stone-700 text-sm leading-relaxed">
                Hardworking and reliable individual seeking an entry-level opportunity. Quick to learn, committed to punctuality and teamwork, with additional professional skills in Graphic Design and Digital Marketing.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
