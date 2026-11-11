import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveContactForm from '@/components/InteractiveContactForm';
import { 
  Headphones, 
  PhoneCall, 
  Users, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Globe2, 
  Sliders, 
  Volume2, 
  Monitor
} from 'lucide-react';

export const metadata = {
  title: 'Call Center Solutions & Cloud Predictive Dialer | Mind Tree Communication',
  description: 'Boost agent productivity and connect rates with Mind Tree Communication cloud predictive dialer, WebRTC browser softphones, and CRM integrations.'
};

export default function DialerPage() {
  const dialerFeatures = [
    {
      title: 'Smart Predictive Dialer',
      desc: 'Machine-learning pacing algorithms forecast agent availability and call abandonment rates to dial multiple leads simultaneously, slashing idle time by up to 300%.',
      icon: Zap,
      metric: '300% Higher Talk Time'
    },
    {
      title: 'WebRTC Browser Softphone',
      desc: 'Zero hardware or softphone software installation. Agents take HD-quality calls directly within Chrome, Firefox, or Edge with automatic noise suppression.',
      icon: Headphones,
      metric: 'Zero Hardware Required'
    },
    {
      title: 'Real-Time Supervisor Wallboard',
      desc: 'Live operational dashboards with instant Listen, Whisper, and Barge-In capabilities so team leads can coach agents during active calls.',
      icon: Monitor,
      metric: 'Live Listen & Barge-in'
    },
    {
      title: 'Seamless CRM & Lead Sync',
      desc: 'Two-way synchronization with Salesforce, HubSpot, Zoho, and custom proprietary SQL/REST CRMs. Automatic click-to-dial and call activity logging.',
      icon: Users,
      metric: 'Instant CRM Integration'
    },
    {
      title: 'Interactive Multi-Level IVR',
      desc: 'Visual drag-and-drop IVR designer with conditional routing based on caller input, agent skillset, business hours, and VIP customer status.',
      icon: Sliders,
      metric: 'Drag-and-Drop Flows'
    },
    {
      title: 'High-Fidelity Call Recording & Storage',
      desc: 'Secure dual-channel stereo call recordings stored in compliance with PCI-DSS and GDPR. Instant search and playback with transcription options.',
      icon: Volume2,
      metric: 'PCI-DSS Compliant'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative bg-[#061124] text-white pt-20 pb-24 overflow-hidden bg-dark-mesh">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold">
                <Headphones className="w-3.5 h-3.5" /> Enterprise Contact Center Infrastructure
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Cloud Call Center Solutions &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                  Intelligent Predictive Dialers
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Supercharge outbound sales campaigns and streamline inbound customer support. Mind Tree Communication provides high-concurrency cloud dialers powered by our direct wholesale SIP trunking network.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#dialer-form"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-cyan-600 transition flex items-center gap-2"
                >
                  <span>Request Live Dialer Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/voice"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition"
                >
                  View High-Capacity CC Voice Routes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DIALER METRICS */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">+45%</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Lead Contact Rate</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">&lt; 3%</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Call Abandonment Rate</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">1,000+</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Concurrent Agent Support</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">99.99%</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Cloud Uptime SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* DIALER MODES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Multi-Mode Dialing Engine
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Tailored Dialing Strategies for Maximum Conversion
              </h2>
              <p className="text-sm text-slate-600">
                Switch effortlessly between predictive, progressive, and preview modes depending on whether your campaign prioritizes high volume or high-touch relationship management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs hover:shadow-lg transition">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">High Volume</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Predictive Dialing</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Dials multiple numbers ahead of agent availability using statistical pacing. Ideal for debt collection, large-scale telemarketing, and customer surveys.
                </p>
                <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Eliminates Busy Tones &amp; Voicemails
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs hover:shadow-lg transition">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">Balanced Contact</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Progressive Dialing</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Dials only when an agent is free, guaranteeing zero abandoned calls. Perfect for VIP outbound sales and verified inbound inquiry follow-ups.
                </p>
                <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> 0% Call Abandonment Guaranteed
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs hover:shadow-lg transition">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">High Touch</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Preview Dialing</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Presents complete customer CRM history and previous call notes to the agent before initiating the call with one click.
                </p>
                <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Personalized High-Value Sales
                </div>
              </div>
            </div>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dialerFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{f.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-cyan-700 font-mono">
                      {f.metric}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INQUIRY FORM */}
        <section id="dialer-form" className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Deploy Cloud Call Center Dialer
              </h2>
              <p className="text-sm text-slate-600">
                Talk to our call center solutions specialists for customized agent seats, CRM mappings, and wholesale SIP trunk pricing.
              </p>
            </div>

            <InteractiveContactForm defaultService="Call Center Dialer Solutions" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
