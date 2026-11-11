import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveContactForm from '@/components/InteractiveContactForm';
import { 
  Globe2, 
  PhoneCall, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Building2, 
  Server
} from 'lucide-react';

export const metadata = {
  title: 'Global Virtual Numbers & DID Solutions | Mind Tree Communication',
  description: 'Acquire local, national, and toll-free virtual DID numbers across 140+ countries with two-way SMS and instant SIP forwarding from Mind Tree Communication.'
};

export default function VirtualNumbersPage() {
  const didCategories = [
    {
      title: 'Local DID Numbers',
      desc: 'Establish a local trusted presence in major financial centers like Hong Kong, London, New York, Singapore, Tokyo, and Sydney without physical offices.',
      icon: Building2,
      reach: '4,000+ Area Codes'
    },
    {
      title: 'Toll-Free Numbers',
      desc: 'Freephone (0800, 800, 888) numbers that maximize inbound customer acquisition and enterprise technical support engagement globally.',
      icon: PhoneCall,
      reach: '100+ Countries'
    },
    {
      title: 'Mobile Virtual Numbers with 2-Way SMS',
      desc: 'Two-way SMS and voice-enabled mobile numbers ideal for interactive customer service, two-factor authentication receipts, and local sales communication.',
      icon: MessageSquare,
      reach: 'Inbound & Outbound SMS'
    },
    {
      title: 'Instant SIP Trunk Forwarding',
      desc: 'Forward inbound calls over standard SIP to your existing IP-PBX, cloud dialer, Asterisk, FreeSWITCH, or Microsoft Teams with zero transcoding delay.',
      icon: Server,
      reach: 'Direct SIP URI Forwarding'
    },
    {
      title: 'High Concurrency Channels',
      desc: 'Scale from 2 channels to 500+ simultaneous calls per number with automated overflow routing and round-robin failover.',
      icon: Zap,
      reach: 'Flexible Capacity'
    },
    {
      title: 'Compliant KYC & Quick Activation',
      desc: 'Fast regulatory registration handled directly by our Hong Kong compliance desk, ensuring compliant activation within 24 to 48 hours.',
      icon: ShieldCheck,
      reach: 'Full Legal Compliance'
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
                <Globe2 className="w-3.5 h-3.5" /> Worldwide Telecom Addressing
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Global Virtual Numbers &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                  International DID Infrastructure
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Expand your international footprint instantly. Mind Tree Communication provisions local, national, mobile, and toll-free DID numbers in over 140 countries with two-way SMS capabilities and crystal-clear voice clarity.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#did-form"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-sky-700 transition flex items-center gap-2"
                >
                  <span>Request DID Inventory &amp; Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/voice"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition"
                >
                  Explore Wholesale Voice Routes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">140+</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Countries Covered</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">4,000+</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Local Area Codes</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">2-Way</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Voice &amp; SMS Supported</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">&lt; 24h</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Rapid Provisioning</div>
              </div>
            </div>
          </div>
        </section>

        {/* DID FEATURES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Virtual Presence
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Comprehensive Number Solutions for Enterprise Scale
              </h2>
              <p className="text-sm text-slate-600">
                Connect your business to your customers locally everywhere with flexible routing and high channel concurrency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {didCategories.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{c.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{c.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-blue-700 font-mono">
                      {c.reach}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INQUIRY FORM */}
        <section id="did-form" className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Order Virtual DID Numbers &amp; Test Trunks
              </h2>
              <p className="text-sm text-slate-600">
                Contact our Hong Kong provisioning team with your target countries and channel requirements.
              </p>
            </div>

            <InteractiveContactForm defaultService="Global DID & Toll-Free Numbers" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
