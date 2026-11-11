import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveContactForm from '@/components/InteractiveContactForm';
import { 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Globe2, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Layers,
  Send,
  BarChart3
} from 'lucide-react';

export const metadata = {
  title: 'Wholesale A2P SMS & Bulk Messaging Solutions | Mind Tree Communication',
  description: 'Global A2P SMS termination, high-throughput OTP verification routes, dynamic alphanumeric sender IDs, and enterprise SMPP gateway from Mind Tree Communication Hong Kong.'
};

export default function MessagingPage() {
  const messagingFeatures = [
    {
      title: 'High-Priority OTP Routes',
      desc: 'Sub-3-second delivery with Tier-1 direct SS7 binds. Dedicated bypass pipelines prioritize time-critical one-time passwords for fintech and banking.',
      icon: Lock,
      stats: 'Sub-3s Delivery Guaranteed'
    },
    {
      title: 'Transactional SMS Alerts',
      desc: 'Ensure flight notifications, shipping updates, payment confirmations, and account security notices reach customers with 99.8% handset delivery.',
      icon: Send,
      stats: '99.8% Handset Delivery'
    },
    {
      title: 'Dynamic Alphanumeric Sender IDs',
      desc: 'Reinforce brand identity across 140+ countries with customizable alphanumeric sender IDs compliant with local telecom regulatory frameworks.',
      icon: ShieldCheck,
      stats: 'Brand Sender IDs Supported'
    },
    {
      title: 'Direct SMPP v3.4 Gateway',
      desc: 'High-capacity SMPP binds supporting up to 5,000 TPS per customer connection. Dual live IP links ensure 99.999% message engine uptime.',
      icon: Zap,
      stats: '5,000+ TPS Throughput'
    },
    {
      title: 'Real-Time DLR Tracking & Analytics',
      desc: 'Live delivery receipts (DLR) pushed straight to your webhook endpoints with granular error code mappings (expired, undelivered, rejected).',
      icon: BarChart3,
      stats: 'Instant Webhook DLRs'
    },
    {
      title: 'Bulk Promotional Campaigns',
      desc: 'Send millions of personalized promotional messages without throttling. Automated DND and opt-out management compliant with GDPR and TCPA.',
      icon: Layers,
      stats: 'Zero Campaign Throttling'
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
                <Globe2 className="w-3.5 h-3.5" /> Global Enterprise Messaging Infrastructure
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Wholesale A2P SMS &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                  Mission-Critical OTP Delivery
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Connect directly to Mind Tree Communication&apos;s Hong Kong SMS gateway. We provide high-throughput SMPP binds and REST APIs with direct carrier routing, sub-3-second latency, and verified handset delivery across 800+ mobile networks worldwide.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#sms-quote"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition flex items-center gap-2"
                >
                  <span>Request SMS Rate Deck</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/advance-sms-portal"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition"
                >
                  Explore Bulk SMS CRM Portal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS ROW */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">&lt; 2.5s</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Avg. OTP Delivery Speed</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">99.8%</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Direct Route Handset DLR</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">5,000+</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Messages Per Second (TPS)</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">800+</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Direct Mobile Networks (MNO)</div>
              </div>
            </div>
          </div>
        </section>

        {/* MESSAGING FEATURES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
                Messaging Capabilities
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Engineered for High-Converting Global Communication
              </h2>
              <p className="text-sm text-slate-600">
                From high-security banking verification to massive promotional retail blasts, our Hong Kong messaging infrastructure delivers unmatched throughput and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {messagingFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{feat.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-sky-700 font-mono">
                      {feat.stats}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROTOCOLS & INTEGRATION */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                  Developer &amp; Carrier Interfaces
                </span>
                <h3 className="text-3xl font-extrabold tracking-tight">
                  Seamless SMPP v3.4 &amp; Modern REST API Binds
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Connect using standard telecom protocols or integrate via modern JSON REST endpoints. Our Hong Kong gateway handles load balancing, dynamic encoding (GSM 7-bit, Unicode UCS-2), and automated concatenation.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Multi-bind SMPP v3.4 (Transmitter, Receiver, Transceiver)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>REST API with Python, Node.js, PHP, Java, and Go SDKs</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Unicode, Chinese Big5 / GB2312, and Arabic character encoding</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Real-time DLR webhooks with sub-second receipt delivery</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0b1c36] p-8 rounded-3xl border border-slate-700/80 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold text-sky-400 uppercase font-mono">REST API / SMPP Connectivity</span>
                  <span className="text-xs text-slate-400">Hong Kong Gateway Node</span>
                </div>
                
                <pre className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed border border-slate-800">
{`// Sample High-Speed SMS API Dispatch
POST https://api.mindtreecom.com/v1/sms/send
Authorization: Bearer MT_LIVE_HK_88291f0a
Content-Type: application/json

{
  "to": "+85291234567",
  "from": "MindTree",
  "text": "Your verification code is 849201. Valid for 5 minutes.",
  "route": "direct_otp_tier1",
  "dlr_callback": "https://yourdomain.com/webhooks/dlr"
}`}
                </pre>

                <div className="text-xs text-slate-400 pt-2 flex items-center justify-between">
                  <span>SMPP Host: <code className="text-sky-300">smpp-hk.mindtreecom.com:2775</code></span>
                  <span className="text-emerald-400 font-semibold">TLS Active</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INQUIRY FORM */}
        <section id="sms-quote" className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Request A2P SMS Rate Deck &amp; Test Account
              </h2>
              <p className="text-sm text-slate-600">
                Get volume-tiered SMS pricing and instant test credits from our Hong Kong messaging desk.
              </p>
            </div>

            <InteractiveContactForm defaultService="A2P SMS & Bulk Messaging" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
