import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RouteSearchWidget from '@/components/RouteSearchWidget';
import InteractiveContactForm from '@/components/InteractiveContactForm';
import { 
  PhoneCall, 
  ShieldCheck, 
  Zap, 
  Globe2, 
  CheckCircle2, 
  Server, 
  ArrowRight, 
  Headphones, 
  Layers
} from 'lucide-react';

export const metadata = {
  title: 'Wholesale Voice Trading & Direct CLI Termination | Mind Tree Communication',
  description: 'Carrier-grade international voice termination, premium CLI routes, CC traffic handling, and bilateral interconnects from Mind Tree Communication Hong Kong.'
};

export default function VoicePage() {
  const voiceFeatures = [
    {
      title: 'Direct Premium CLI Routes',
      desc: '100% genuine Caller Line Identification (CLI) delivery with Tier-1 PTT & MNO direct interconnects. Optimized for enterprise communications and roaming.',
      icon: PhoneCall,
      stats: 'ASR 68%+ | ACD 5.2m'
    },
    {
      title: 'High-Capacity CC (Call Center) Routes',
      desc: 'Built specifically for high-frequency call centers and predictive dialers. Zero short duration penalties, unlimited concurrent channels, and rapid call setup.',
      icon: Headphones,
      stats: '1,000+ CPS Supported'
    },
    {
      title: 'Anti-FAS & Real-Time QoS Monitoring',
      desc: 'Patented AI monitoring detects and blocks False Answer Supervision (FAS), dead air, loop routing, and wangiri fraud before it impacts your traffic.',
      icon: ShieldCheck,
      stats: '0% False Answer Tolerance'
    },
    {
      title: 'Flexible Codec & Protocol Support',
      desc: 'Fully compliant with SIP 2.0 (RFC 3261). Supports G.711u/a, G.729, OPUS, AMR-WB, with SRTP & TLS signaling security available on all trunks.',
      icon: Server,
      stats: 'SIP 2.0 & TLS Encryption'
    },
    {
      title: 'Bilateral Carrier Trading Desk',
      desc: 'Hong Kong-based wholesale desk actively buying and selling high-demand routes with daily code-deck updates, flexible credit terms, and fast dispute resolution.',
      icon: Layers,
      stats: '150+ Bilateral Partners'
    },
    {
      title: 'Sub-Millisecond BGP Switching',
      desc: 'Multi-homed BGP4 anycast network anchored across Equinix HK1/HK2, SG1, and Frankfurt ensures the lowest latency and jitter worldwide.',
      icon: Zap,
      stats: '< 18ms Regional Latency'
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
                <Globe2 className="w-3.5 h-3.5" /> Tier-1 International Voice Trading &amp; Termination
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Enterprise Wholesale Voice <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                  Engineered for Maximum ASR &amp; ACD
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Connect your switches and softphones directly to Mind Tree Communication&apos;s Hong Kong switching infrastructure. We deliver direct CLI routes, bilateral trading options, and ultra-reliable call center traffic handling.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#quote-form"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition flex items-center gap-2"
                >
                  <span>Request Full Voice Rate Deck</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#matrix"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition"
                >
                  Browse Voice Routes
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* VOICE METRICS */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">68.5%</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Avg. Premium CLI ASR</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">5.2 min</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Avg. Call Duration (ACD)</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">&lt; 1.8s</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Post-Dial Delay (PDD)</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">99.999%</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Switch Availability SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE FEATURES GRID */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Carrier Architecture
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Why Top Telecom Operators Route Through Mind Tree
              </h2>
              <p className="text-sm text-slate-600">
                Our Hong Kong network engineering team enforces strict quality benchmarks, ensuring your international calls connect cleanly without clipped audio or dropped packets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {voiceFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{feat.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-blue-700 font-mono">
                      {feat.stats}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LIVE ROUTE SEARCH */}
        <section id="matrix" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
                Active Bilateral Routes
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Search Voice Termination Routes &amp; Pricing
              </h2>
              <p className="text-sm text-slate-600">
                Check active destination status, benchmark metrics, and request instant IP testing authorization.
              </p>
            </div>

            <RouteSearchWidget />
          </div>
        </section>

        {/* BILATERAL TRADING & SIP INTERCONNECT SPECIFICATIONS */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                  Technical Specifications
                </span>
                <h3 className="text-3xl font-extrabold tracking-tight">
                  Seamless SIP Trunk Interconnect &amp; IP Whitelisting
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Interconnecting with Mind Tree Communication is frictionless. Our automated carrier onboarding verifies your IP credentials within 30 minutes, allowing immediate access to testing trunks.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Dual Signaling Support: SIP over UDP / TCP &amp; TLS encrypted SIP</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>IP Authentication &amp; Digest Authentication Supported</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>E.164 dialing format standard with customized prefix routing</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Automated balance alerts and real-time CDR retrieval via REST API</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0b1c36] p-8 rounded-3xl border border-slate-700/80 space-y-5">
                <h4 className="text-lg font-bold text-white">SIP Trunk Interconnect Specs</h4>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400">Primary SBC Node:</span>
                    <span className="text-sky-400 font-bold">sip-hk.mindtreecom.com (Port 5060)</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400">Secondary Fallback Node:</span>
                    <span className="text-sky-400 font-bold">sip-sg.mindtreecom.com (Port 5060)</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400">Supported Codecs:</span>
                    <span className="text-emerald-400">G.711u, G.711a, G.729a, OPUS</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400">DTMF Relay:</span>
                    <span className="text-white">RFC 2833 / SIP INFO</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400">Billing Increment:</span>
                    <span className="text-white">1/1, 6/6, 30/6, or 60/60 custom</span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-400">
                  Direct inquiries to our carrier trading engineers:{' '}
                  <a href="mailto:connect@mindtreecom.com" className="text-sky-400 font-semibold underline">
                    connect@mindtreecom.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INQUIRY FORM */}
        <section id="quote-form" className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Request Voice Rate Deck &amp; Interconnect
              </h2>
              <p className="text-sm text-slate-600">
                Submit your target destinations and monthly minute volumes for custom bilateral rates.
              </p>
            </div>

            <InteractiveContactForm defaultService="Wholesale Voice (CLI & CC)" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
