import React from 'react';
import { Briefcase, BookOpen, CheckCircle2, Globe, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-semibold text-sm tracking-wider uppercase">
            Practical Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
            Experience & Coursework
          </h2>
          <p className="text-stone-600 mt-3 text-base">
            Professional training and hands-on project work in graphic design and digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Coursework & Experience */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-orange-600" />
              Professional Coursework
            </h3>

            <div className="space-y-6">
              {/* Exp 1 */}
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 shadow-xs relative pl-8">
                <div className="absolute left-3 top-6 w-2 h-2 rounded-full bg-orange-600" />
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">3 Months Duration</span>
                <h4 className="font-serif font-bold text-stone-900 text-lg mt-1">Graphic Design Coursework</h4>
                <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                  Completed rigorous hands-on projects in logo design, corporate branding, poster creation, and social media graphics as part of professional coursework at Bano Qabil.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-white border border-stone-200 rounded-md text-xs font-medium text-stone-700">Logo Design</span>
                  <span className="px-2.5 py-1 bg-white border border-stone-200 rounded-md text-xs font-medium text-stone-700">Branding</span>
                  <span className="px-2.5 py-1 bg-white border border-stone-200 rounded-md text-xs font-medium text-stone-700">Canva & Adobe</span>
                </div>
              </div>

              {/* Exp 2 */}
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 shadow-xs relative pl-8">
                <div className="absolute left-3 top-6 w-2 h-2 rounded-full bg-orange-600" />
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">2 Months Duration</span>
                <h4 className="font-serif font-bold text-stone-900 text-lg mt-1">Digital Marketing Coursework</h4>
                <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                  Learned Meta Ads fundamentals including campaign setup, audience targeting, budgeting, and high-converting ad creation.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-white border border-stone-200 rounded-md text-xs font-medium text-stone-700">Meta Ads</span>
                  <span className="px-2.5 py-1 bg-white border border-stone-200 rounded-md text-xs font-medium text-stone-700">Campaign Targeting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills Highlights & Languages */}
          <div className="space-y-8">
            <div className="bg-stone-900 text-white p-8 rounded-2xl shadow-xl space-y-6">
              <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-400" />
                Skills Highlights
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Graphic Design (Canva, Photoshop, Illustrator)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Digital Marketing – Meta Ads</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Logo, Poster & Social Media Design</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Time Management & Punctuality</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Teamwork & Collaboration</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Quick Learner & Adaptable</span>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-4">
              <h4 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
                <Globe className="w-5 h-5 text-orange-600" />
                Languages Spoken
              </h4>
              <div className="flex gap-4">
                <div className="bg-white px-4 py-3 rounded-xl border border-stone-200 flex-1 text-center shadow-2xs">
                  <span className="block font-bold text-stone-900">Urdu</span>
                  <span className="text-xs text-stone-500">Native / Fluent</span>
                </div>
                <div className="bg-white px-4 py-3 rounded-xl border border-stone-200 flex-1 text-center shadow-2xs">
                  <span className="block font-bold text-stone-900">English</span>
                  <span className="text-xs text-stone-500">Professional Working</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
