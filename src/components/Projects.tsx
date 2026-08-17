import React, { useState } from 'react';
import { Award, Scissors, FileText, Layout, MapPin, Phone, Mail, CheckCircle2, Eye, Sparkles } from 'lucide-react';

interface ProjectsProps {
  onSelectInvoiceDemo: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectInvoiceDemo }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'logo' | 'card' | 'letterhead' | 'posters'>('overview');

  return (
    <section id="projects" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-semibold text-sm tracking-wider uppercase">
            Bano Qabil 2025 Final Project
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
            M.K Tailors — Brand Identity Package
          </h2>
          <p className="text-stone-600 mt-3 text-base">
            Complete professional branding package created by Eshan Sanjot (Student ID: 471554, Campus: HOL Foundation, Instructor: Sir Shujaat Ejaz) for a men's custom tailoring business.
          </p>
        </div>

        {/* Project Meta Bar */}
        <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 mb-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <span className="text-xs uppercase font-semibold text-stone-400 block">Company Name</span>
            <span className="font-serif font-bold text-stone-900 text-lg">M.K Tailors (Master Kishan)</span>
          </div>
          <div>
            <span className="text-xs uppercase font-semibold text-stone-400 block">Nature of Business</span>
            <span className="text-stone-700 text-sm font-medium">Men's Custom Tailoring, Formal Wear & Salwar Kameez</span>
          </div>
          <div>
            <span className="text-xs uppercase font-semibold text-stone-400 block">Shop Location</span>
            <span className="text-stone-700 text-sm font-medium">Shop#23, Mehran Centre, Shah Abdul Latif Bhittai Road, Moosa Lane, Karachi</span>
          </div>
          <div>
            <span className="text-xs uppercase font-semibold text-stone-400 block">Contact & Email</span>
            <span className="text-stone-700 text-sm font-medium">03343024769 | kishanmaster@gmail.com</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-stone-200 pb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'overview'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Project Overview
          </button>
          <button
            onClick={() => setActiveTab('logo')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'logo'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Logo Emblem
          </button>
          <button
            onClick={() => setActiveTab('card')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'card'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Business Card
          </button>
          <button
            onClick={() => setActiveTab('letterhead')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'letterhead'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Official Letterhead
          </button>
          <button
            onClick={() => setActiveTab('posters')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'posters'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Opening Day Posters
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="bg-gradient-to-br from-stone-50 to-stone-100/60 rounded-3xl p-8 sm:p-12 border border-stone-200">
          
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-lg text-xs font-semibold">
                  <Scissors className="w-4 h-4 text-orange-600" /> Bano Qabil Final Project Presentation
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  Comprehensive Brand Identity for M.K Tailors
                </h3>
                <p className="text-stone-700 leading-relaxed text-base">
                  Designed by Eshan Sanjot under instructor Sir Shujaat Ejaz. This project establishes a complete brand identity system for Master Kishan's bespoke tailoring establishment in Karachi South.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900">Custom Vintage Logo Emblem:</strong> Features a sewing machine graphic with establishment year (ESTD 2002) and curved typography.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900">Business Card & Gents Specialist Collateral:</strong> High-end styling showcasing formal wear and traditional sherwanis/salwar kameez.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900">Professional Invoicing & Letterhead:</strong> Structured itemized tables for custom suit orders, VAT, and balance calculations.
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={onSelectInvoiceDemo}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-medium text-sm transition-all shadow-md"
                  >
                    <Sparkles className="w-4 h-4" /> Try Live Invoice Generator
                  </button>
                  <button
                    onClick={() => setActiveTab('logo')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-stone-300 text-stone-800 font-medium text-sm hover:bg-stone-50 transition-all"
                  >
                    <Eye className="w-4 h-4 text-orange-600" /> View Logo & Assets
                  </button>
                </div>
              </div>

              {/* Visual Preview Box */}
              <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-stone-200 shadow-xl text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-stone-900 rounded-full flex items-center justify-center text-white font-serif font-bold text-3xl shadow-lg border-4 border-amber-500/20">
                  M.K
                </div>
                <h4 className="font-serif font-bold text-xl text-stone-900">M.K TAILORS</h4>
                <p className="text-xs tracking-widest text-orange-600 uppercase font-semibold">Master Kishan — Gents Specialist</p>
                <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 space-y-1">
                  <p>Program: Graphic Designing (3 Months)</p>
                  <p>Student ID: 471554 | Campus: HOL Foundation</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'logo' && (
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-serif font-bold text-stone-900">M.K Tailors Logo Emblem</h3>
                <p className="text-stone-600 text-sm mt-2">
                  Designed with a vintage emblem aesthetic featuring a classic sewing machine, thread spindle, and established year 2002.
                </p>
              </div>

              <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-stone-200 shadow-xl text-center space-y-6">
                <div className="w-40 h-40 mx-auto rounded-full border-4 border-amber-600/40 bg-amber-50/50 flex flex-col items-center justify-center p-4 relative shadow-inner">
                  <Scissors className="w-12 h-12 text-amber-800 mb-2" />
                  <span className="font-serif font-bold text-stone-900 text-sm tracking-widest">M.K TAILORS</span>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider">Estd 2002</span>
                  <span className="text-[11px] font-semibold text-amber-900 mt-1">KISHAN MASTER</span>
                </div>
                <div className="bg-stone-50 p-4 rounded-xl text-xs text-stone-700 text-left space-y-1">
                  <p><strong>Colors:</strong> Cream, Charcoal Black, Warm Amber, Teal Accent</p>
                  <p><strong>Typography:</strong> Serif Display & Classic Monogram Framing</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'card' && (
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-serif font-bold text-stone-900">Business Card & Gents Specialist Badge</h3>
                <p className="text-stone-600 text-sm mt-2">
                  Showcases Master Kishan with formal wear imagery, address, and contact number.
                </p>
              </div>

              <div className="max-w-2xl mx-auto bg-gradient-to-r from-amber-50 via-white to-stone-50 p-8 rounded-2xl border-2 border-amber-500/30 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center text-white font-serif font-bold">MK</div>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-stone-900">MASTER KISHAN</h4>
                      <span className="text-xs text-orange-600 font-semibold uppercase">Gents Specialist</span>
                    </div>
                  </div>
                  <span className="text-xs bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-medium">Business Card</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-stone-700">
                  <div className="space-y-2">
                    <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-600" /> 03343024769</p>
                    <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange-600" /> kishanmaster@gmail.com</p>
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-600" /> Shop#23, Mehran Centre, Shah Abdul Latif Bhittai Road, Karachi</p>
                  </div>
                  <div className="bg-stone-900 text-white p-4 rounded-xl flex flex-col justify-center items-center text-center">
                    <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Specialization</span>
                    <span className="text-sm font-serif mt-1">Formal Wear, Shalwar Kameez & Traditional Clothing</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'letterhead' && (
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-serif font-bold text-stone-900">Official Letterhead & Order Confirmation</h3>
                <p className="text-stone-600 text-sm mt-2">
                  Official correspondence template for custom suit order confirmations.
                </p>
              </div>

              <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-stone-200 shadow-xl space-y-4 text-sm text-stone-700">
                <div className="flex justify-between items-start border-b border-stone-200 pb-4">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-stone-900">MASTER KISHAN</h4>
                    <p className="text-xs text-stone-500">Professional Men's Tailoring & Stitching Services</p>
                  </div>
                  <div className="text-right text-xs text-stone-500">
                    <p>Date: 27 October 2025</p>
                    <p>Contact: 03343024769</p>
                  </div>
                </div>

                <div className="space-y-2 py-2">
                  <p><strong>To:</strong> Mr. [Kishan Master]</p>
                  <p><strong>Subject:</strong> Confirmation of Custom Suit Order</p>
                  <p className="text-stone-600 leading-relaxed pt-2">
                    Dear Mr. [Kishan Master], We are pleased to confirm your recent order for a custom-designed men's suit from Kishan Master – Tailor Master. Our team has carefully noted your fabric choice, fitting details, and delivery preferences. The estimated completion date is [30 October 2025].
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 flex justify-between items-center text-xs">
                  <span>Warm regards, <br /><strong>Kishan Master (Owner & Head Tailor)</strong></span>
                  <span className="italic font-serif">Signed digitally</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'posters' && (
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-serif font-bold text-stone-900">Opening Day Promotional Posters</h3>
                <p className="text-stone-600 text-sm mt-2">
                  Announcement graphics for grand opening events, featuring vintage styling, thimbles, and tailoring pins.
                </p>
              </div>

              <div className="max-w-xl mx-auto bg-stone-900 text-stone-100 p-8 rounded-2xl border-2 border-amber-500/40 shadow-xl text-center space-y-6">
                <span className="px-3 py-1 bg-amber-500 text-stone-900 text-xs font-bold rounded-full uppercase tracking-wider">
                  Grand Opening Announcement
                </span>
                <h4 className="font-serif text-3xl font-extrabold tracking-wide text-amber-400">WELCOME TO OPENING DAY</h4>
                <p className="text-stone-300 text-sm">
                  Professional Men's Tailoring & Stitching Services by Master Kishan
                </p>
                <div className="py-4 border-y border-stone-800 flex justify-around text-sm">
                  <div>
                    <span className="block text-xs text-stone-400">Day</span>
                    <strong className="text-white text-base">Monday</strong>
                  </div>
                  <div>
                    <span className="block text-xs text-stone-400">Date</span>
                    <strong className="text-white text-base">30 October</strong>
                  </div>
                  <div>
                    <span className="block text-xs text-stone-400">Location</span>
                    <strong className="text-white text-base">Shop #23, Mehran Centre</strong>
                  </div>
                </div>
                <p className="text-xs text-stone-400">Designed by Eshan Sanjot • Bano Qabil 2025</p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
