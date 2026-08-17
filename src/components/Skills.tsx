import React from 'react';
import { Palette, Layers, Megaphone, CheckCircle, Cpu, Users, Clock, Award } from 'lucide-react';

export const Skills: React.FC = () => {
  const softwareSkills = [
    { name: 'Canva', level: 90, color: 'bg-cyan-500' },
    { name: 'Adobe Photoshop', level: 50, color: 'bg-blue-600' },
    { name: 'Adobe Illustrator', level: 50, color: 'bg-amber-600' },
    { name: 'MS PowerPoint', level: 85, color: 'bg-red-600' },
  ];

  const designExpertise = [
    'Logo Design & Monograms',
    'Branding & Corporate Identity',
    'Social Media Graphics & Ad Creatives',
    'Poster & Flyer Design',
    'Typography & Layouting',
    'Invoice & Letterhead Templates',
  ];

  const marketingAndSoftSkills = [
    'Digital Marketing – Meta Ads (Campaign setup, targeting & ad creation)',
    'Time Management & Punctuality',
    'Teamwork & Collaboration',
    'Quick Learner & Adaptable',
  ];

  return (
    <section id="skills" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-semibold text-sm tracking-wider uppercase">
            Competencies & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
            Skills & Tools
          </h2>
          <p className="text-stone-600 mt-3 text-base">
            Professional proficiency acquired through hands-on coursework, Bano Qabil certification, and practical client projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Software Proficiency */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">Software & Tools</h3>
              
              <div className="space-y-4">
                {softwareSkills.map((tool) => (
                  <div key={tool.name}>
                    <div className="flex justify-between text-sm font-medium text-stone-700 mb-1">
                      <span>{tool.name}</span>
                      <span className="text-stone-500">{tool.level}%</span>
                    </div>
                    <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${tool.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${tool.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 text-xs text-stone-500">
              * Based on practical coursework at Bano Qabil (HOL Foundation).
            </div>
          </div>

          {/* Card 2: Design Services */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">Design Expertise</h3>
              
              <ul className="space-y-3">
                {designExpertise.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-stone-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 text-xs text-stone-500">
              Clean visual hierarchy & typography pairing.
            </div>
          </div>

          {/* Card 3: Marketing & Soft Skills */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">Digital Marketing & Soft Skills</h3>
              
              <ul className="space-y-3">
                {marketingAndSoftSkills.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-stone-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 text-xs text-stone-500">
              2-month Digital Marketing & Meta Ads coursework.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
