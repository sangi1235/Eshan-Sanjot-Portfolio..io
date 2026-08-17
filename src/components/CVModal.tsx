import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, ExternalLink, Award, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadFile = () => {
    const cvHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Eshan Sanjot - CV</title>
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1c1917; max-width: 800px; margin: 0 auto; padding: 40px; background: #fff; }
    h1 { font-size: 28px; margin-bottom: 5px; }
    h2 { font-size: 18px; border-bottom: 2px solid #ea580c; padding-bottom: 5px; margin-top: 30px; color: #1c1917; }
    .contact { font-size: 13px; color: #57534e; margin-bottom: 20px; }
    .section { margin-bottom: 25px; }
    .item { margin-bottom: 12px; }
    .title { font-weight: bold; color: #1c1917; }
    .sub { font-size: 13px; color: #78716c; }
  </style>
</head>
<body>
  <h1>Eshan Sanjot</h1>
  <div class="contact">
    Shah Abdul Latif Bhittai Road, Nayabad Lyari, Karachi South | 0336-3179298 | Eshansanjot@gmail.com
  </div>

  <div class="section">
    <h2>Objective</h2>
    <p>Hardworking and reliable individual seeking an entry-level opportunity. Quick to learn, committed to punctuality and teamwork, with additional skills in Graphic Design and Digital Marketing.</p>
  </div>

  <div class="section">
    <h2>Qualification</h2>
    <div class="item">
      <div class="title">Matriculation (Science Group)</div>
      <div class="sub">Iranian Technical Govt Sec School (2022–2025)</div>
    </div>
    <div class="item">
      <div class="title">First Year in Process (Humanities Arts Group)</div>
      <div class="sub">S.M Arts and Commerce College (2025–2026)</div>
    </div>
  </div>

  <div class="section">
    <h2>Skills Highlights</h2>
    <ul>
      <li>Graphic Design (Canva, Photoshop, Illustrator)</li>
      <li>Digital Marketing (Meta Ads)</li>
      <li>Logo, Poster & Social Media Design</li>
      <li>Time Management, Punctuality & Teamwork</li>
    </ul>
  </div>

  <div class="section">
    <h2>Featured Project</h2>
    <div class="item">
      <div class="title">M.K Tailors Brand Identity Package</div>
      <div class="sub">Complete branding including logo, business card, invoice template, official letterhead, and promotional posters.</div>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([cvHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Eshan_Sanjot_CV.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-stone-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-stone-900 text-white rounded-xl flex items-center justify-center font-serif font-bold">
              ES
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900">Eshan Sanjot — Curriculum Vitae</h3>
              <span className="text-xs text-orange-600 font-medium">Graphic Designer & Digital Marketing Student</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {downloadSuccess && (
              <span className="text-xs font-medium text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4" /> Downloaded Successfully!
              </span>
            )}
            <button
              onClick={handleDownloadFile}
              className="px-3.5 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" /> Download CV File
            </button>
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-sm font-medium flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4" /> Print / PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-stone-500 hover:bg-stone-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* CV Content Document */}
        <div className="p-8 sm:p-12 space-y-8 bg-stone-50/50">
          
          {/* Header block */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <h1 className="text-3xl font-serif font-bold text-stone-900">Eshan Sanjot</h1>
            <div className="flex flex-wrap gap-4 text-sm text-stone-600">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-orange-600" /> Shah Abdul Latif Bhittai Road, Nayabad Lyari, Karachi South</span>
              <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-orange-600" /> 0336-3179298</span>
              <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-orange-600" /> Eshansanjot@gmail.com</span>
            </div>
          </div>

          {/* Objective */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <h2 className="text-lg font-serif font-bold text-stone-900 border-b border-stone-100 pb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-600" /> Objective
            </h2>
            <p className="text-stone-700 text-sm leading-relaxed">
              Hardworking and reliable individual seeking an entry-level opportunity. Quick to learn, committed to punctuality and teamwork, with additional skills in Graphic Design and Digital Marketing.
            </p>
          </div>

          {/* Qualification */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <h2 className="text-lg font-serif font-bold text-stone-900 border-b border-stone-100 pb-2 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-orange-600" /> Qualification
            </h2>
            <div className="space-y-3 text-sm text-stone-700">
              <div>
                <strong className="text-stone-900 block font-serif">Matriculation (Science Group)</strong>
                <span>Iranian Technical Govt Sec School (2022–2025)</span>
              </div>
              <div>
                <strong className="text-stone-900 block font-serif">First Year in Process (Humanities Arts Group)</strong>
                <span>S.M Arts and Commerce College (2025–2026)</span>
              </div>
            </div>
          </div>

          {/* Skills Highlights */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <h2 className="text-lg font-serif font-bold text-stone-900 border-b border-stone-100 pb-2">Skills Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-700">
              <div className="flex items-center gap-2">✓ Graphic Design (Tools: Canva, Photoshop, Illustrator)</div>
              <div className="flex items-center gap-2">✓ Digital Marketing – Meta Ads</div>
              <div className="flex items-center gap-2">✓ Logo, Poster & Social Media Design</div>
              <div className="flex items-center gap-2">✓ Time Management & Punctuality</div>
              <div className="flex items-center gap-2">✓ Teamwork & Collaboration</div>
              <div className="flex items-center gap-2">✓ Computer Skills (MS Office) & Quick Learner</div>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <h2 className="text-lg font-serif font-bold text-stone-900 border-b border-stone-100 pb-2 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-orange-600" /> Featured Projects
            </h2>
            <div className="space-y-3 text-sm text-stone-700">
              <div>
                <strong className="text-stone-900 block font-serif">M.K Tailors — Brand Identity Package — Course Project (Bano Qabil, 2025)</strong>
                <p className="text-stone-600 mt-1">
                  Designed complete branding package for men's tailoring business including logo, business card, invoice template, official letterhead, promotional posters, and grand opening graphics.
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <h2 className="text-lg font-serif font-bold text-stone-900 border-b border-stone-100 pb-2">Experience & Coursework</h2>
            <div className="space-y-3 text-sm text-stone-700">
              <div>
                <strong className="text-stone-900 block font-serif">Graphic Design Coursework — 3 Months</strong>
                <p className="text-stone-600 mt-0.5">Completed hands-on projects in logo design, branding, and social media graphics.</p>
              </div>
              <div>
                <strong className="text-stone-900 block font-serif">Digital Marketing Coursework — 2 Months</strong>
                <p className="text-stone-600 mt-0.5">Learned Meta Ads fundamentals — campaign setup, targeting, and ad creation.</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <h2 className="text-lg font-serif font-bold text-stone-900 border-b border-stone-100 pb-2">Languages</h2>
            <p className="text-stone-700 text-sm">Urdu, English</p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-white border-t border-stone-200 px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors"
          >
            Close CV
          </button>
        </div>

      </div>
    </div>
  );
};

