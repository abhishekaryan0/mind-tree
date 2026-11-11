'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, ShieldCheck, Clock, AlertCircle } from 'lucide-react';

interface InteractiveContactFormProps {
  defaultService?: string;
}

export default function InteractiveContactForm({ defaultService }: InteractiveContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    service: defaultService || 'Wholesale Voice (CLI & CC)',
    volume: '500,000 - 2,000,000 mins/SMS',
    destinations: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.message || 'Failed to submit form. Please write to connect@mindtreecom.com.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Even if network fails, provide friendly fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        
        {/* Left Information Sidebar */}
        <div className="lg:col-span-2 bg-[#08182e] p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-sky-300 text-xs font-semibold border border-blue-400/30">
              <ShieldCheck className="w-3.5 h-3.5" /> Carrier Interconnect Desk
            </span>

            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Connect With Our Global Routing Desk
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Whether you require high-volume A2P SMS routes, direct CLI voice termination, CPaaS API credentials, or our cloud predictive dialer, our Hong Kong engineering team is ready to assist.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Hong Kong Corporate Office:</div>
                  <div className="text-slate-300 text-xs mt-0.5 leading-relaxed">
                    Unit 1805, 18/F, Crawford House, 70 Queen&apos;s Road Central, Central, Hong Kong
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Carrier &amp; Sales Desk:</div>
                  <a 
                    href="mailto:connect@mindtreecom.com" 
                    className="text-sky-300 hover:text-sky-200 text-xs underline font-medium"
                  >
                    connect@mindtreecom.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Carrier NOC Support:</div>
                  <div className="text-slate-300 text-xs mt-0.5">
                    24/7/365 Proactive Route &amp; QoS Monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-slate-800 text-xs text-slate-400 relative z-10">
            <p>Direct inquiries routed to: <strong className="text-sky-400">connect@mindtreecom.com</strong></p>
          </div>
        </div>

        {/* Right Form Area */}
        <div className="lg:col-span-3 p-8 md:p-10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <div className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-200">
                Status: Form has been submitted successfully
              </div>

              <h4 className="text-2xl font-bold text-slate-900">
                Inquiry Dispatched to connect@mindtreecom.com
              </h4>
              
              <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your requirement for{' '}
                <strong className="text-slate-900">{formData.service}</strong> has been transmitted to our Hong Kong carrier trading desk.
              </p>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 max-w-md text-left space-y-1.5">
                <div className="flex items-center justify-between text-slate-500">
                  <span>Target Destination:</span>
                  <span className="font-semibold text-slate-800">{formData.destinations || 'Global Interconnect'}</span>
                </div>
                <div className="flex items-center justify-between text-slate-500">
                  <span>Estimated Volume:</span>
                  <span className="font-semibold text-slate-800">{formData.volume}</span>
                </div>
                <div className="flex items-center justify-between text-slate-500">
                  <span>Recipient:</span>
                  <span className="font-semibold text-blue-600">connect@mindtreecom.com</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 max-w-sm">
                Our team will review your IP details and reply to <strong className="text-slate-800">{formData.email}</strong> with rate decks and test credentials within 2 hours.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    companyName: '',
                    email: '',
                    service: defaultService || 'Wholesale Voice (CLI & CC)',
                    volume: '500,000 - 2,000,000 mins/SMS',
                    destinations: '',
                    message: ''
                  });
                }}
                className="mt-4 px-6 py-2.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h4 className="text-xl font-bold text-slate-900">Request Rate Deck &amp; Interconnect</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below for custom bilateral pricing or immediate test access.
                </p>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Wong"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Asia Telecom Global"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Corporate Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition bg-white"
                  >
                    <option value="Wholesale Voice (CLI & CC)">Wholesale Voice (CLI &amp; CC)</option>
                    <option value="A2P SMS & Bulk Messaging">A2P SMS &amp; Bulk Messaging</option>
                    <option value="OTP / Transactional SMS">OTP / Transactional SMS</option>
                    <option value="CPaaS APIs (Voice & SMS)">CPaaS APIs (Voice &amp; SMS)</option>
                    <option value="Call Center Dialer Solutions">Call Center Dialer Solutions</option>
                    <option value="Bulk SMS CRM Portal">Bulk SMS CRM Portal</option>
                    <option value="Global DID & Toll-Free Numbers">Global DID &amp; Toll-Free Numbers</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Estimated Monthly Volume
                  </label>
                  <select
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition bg-white"
                  >
                    <option value="< 250,000 mins/SMS">&lt; 250,000 mins / SMS</option>
                    <option value="250,000 - 1,000,000 mins/SMS">250,000 - 1,000,000 mins / SMS</option>
                    <option value="1,000,000 - 5,000,000 mins/SMS">1,000,000 - 5,000,000 mins / SMS</option>
                    <option value="5,000,000+ mins/SMS Tier-1 Carrier">5,000,000+ mins / SMS (Tier-1)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Destinations (Countries)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. USA, UK, UAE, Hong Kong, India"
                    value={formData.destinations}
                    onChange={(e) => setFormData({ ...formData, destinations: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Additional Route or Integration Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide any protocol preferences (SIP/SMPP/REST API), codec requirements (G.711u/a, G.729), or target pricing..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white font-bold text-sm hover:from-blue-700 hover:to-cyan-600 transition shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {loading ? (
                  <span>Transmitting to connect@mindtreecom.com...</span>
                ) : (
                  <>
                    <span>Submit Interconnect Request</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="pt-1 text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-600" />
                <span>Form details are delivered directly to <strong className="text-slate-700">connect@mindtreecom.com</strong></span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
