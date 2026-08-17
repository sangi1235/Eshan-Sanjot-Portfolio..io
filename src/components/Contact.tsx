import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Contact: React.FC<ContactProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl border border-stone-200 relative">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-400 hover:text-stone-700 text-xl font-bold"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <span className="text-orange-600 font-semibold text-xs tracking-wider uppercase">Let's Work Together</span>
          <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">Contact Eshan Sanjot</h3>
          <p className="text-stone-600 text-sm mt-1">Available for freelance projects, branding, and small businesses.</p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif font-bold text-xl text-stone-900">Message Sent Successfully!</h4>
            <p className="text-stone-600 text-sm">Thank you for reaching out. Eshan will get back to you soon at Eshansanjot@gmail.com.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">Your Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">Message / Project Details</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your design project or inquiry..."
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-stone-900 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors shadow-md"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>

            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3 text-xs text-stone-500 justify-between">
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-orange-600" /> +92 336 3179298</span>
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-orange-600" /> Eshansanjot@gmail.com</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
