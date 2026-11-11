import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveContactForm from '@/components/InteractiveContactForm';
import { 
  Cpu, 
  PhoneCall, 
  MessageSquare, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Layers,
  Terminal
} from 'lucide-react';

export const metadata = {
  title: 'CPaaS & Developer Communication APIs | Mind Tree Communication',
  description: 'Integrate programmable Voice, SMS, WhatsApp Business API, and RCS into your applications with Mind Tree Communication developer platform.'
};

export default function CPaaSPage() {
  const cpaasPillars = [
    {
      title: 'Programmable Voice API',
      desc: 'Build intelligent IVR flows, outbound automated dialers, call forwarding, and real-time call recording directly in your web or mobile software.',
      icon: PhoneCall,
      tech: 'REST / WebRTC / WebSocket Streams'
    },
    {
      title: 'Programmable SMS API',
      desc: 'Dispatch one-way transactional alerts or two-way conversational SMS with automatic GSM-7 encoding, message concatenation, and live DLR callbacks.',
      icon: MessageSquare,
      tech: 'SMPP / HTTP REST / Webhooks'
    },
    {
      title: 'WhatsApp Business API',
      desc: 'Official Meta BSP infrastructure for verified business profiles, automated customer support chatbots, rich media catalogs, and transactional order updates.',
      icon: Zap,
      tech: 'Cloud API & On-Premises Gateway'
    },
    {
      title: 'RCS Business Messaging',
      desc: 'Upgrade standard text messages to branded, verified interactive cards with high-res carousels, action buttons, and live map directions.',
      icon: Layers,
      tech: 'GSMA Universal Profile 2.4'
    },
    {
      title: 'Turnkey 2FA / OTP Verification',
      desc: 'Complete authentication API that generates secure time-based tokens, handles token validation, and automatically falls back to Voice or WhatsApp.',
      icon: ShieldCheck,
      tech: 'Auto-fallback Engine'
    },
    {
      title: 'Omnichannel Routing Engine',
      desc: 'Route messages through the most cost-effective or highest-performing channel based on recipient preference and network availability.',
      icon: Cpu,
      tech: 'Dynamic Failover Routing'
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
                <Code2 className="w-3.5 h-3.5" /> Next-Generation CPaaS Platform
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Programmable Voice, SMS &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                  Omnichannel Communication APIs
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Empower your engineers to embed carrier-grade Voice, SMS, WhatsApp Business, and RCS directly into your workflows. High-performance REST APIs anchored at our Hong Kong telecom switching core.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#cpaas-form"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-indigo-700 transition flex items-center gap-2"
                >
                  <span>Request API Sandbox Keys</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/dialer"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition"
                >
                  Explore Call Center Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CPaaS METRICS */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">99.999%</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Platform Availability</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">&lt; 50ms</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">API Response Time</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">140+</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Countries Covered</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-blue-900 font-mono">ISO 27001</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Enterprise Certified</div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE CPaaS CAPABILITIES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                Unified CPaaS Engine
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Complete APIs for Modern Engineering Teams
              </h2>
              <p className="text-sm text-slate-600">
                Designed by telecom veterans, our developer-first APIs simplify complex telecom signaling into intuitive JSON payloads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cpaasPillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{p.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-indigo-700 font-mono">
                      {p.tech}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CODE SNIPPET PREVIEW SECTION */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                  Developer First
                </span>
                <h3 className="text-3xl font-extrabold tracking-tight">
                  Start Sending Messages &amp; Making Calls in Minutes
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our comprehensive SDKs and RESTful endpoints ensure zero friction. Test right from your terminal or integrate into your backend with native libraries.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Instant sandbox testing with live Hong Kong test numbers</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Cryptographic HMAC webhook signature validation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Automated retry and multi-carrier failover logic</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#08182e] rounded-3xl p-6 border border-slate-700/80 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-bold text-slate-200 font-mono">cURL / Node.js Dispatch</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono">200 OK (28ms)</span>
                </div>

                <pre className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed border border-slate-800">
{`curl -X POST https://api.mindtreecom.com/v1/voice/calls \\
  -H "Authorization: Bearer YOUR_HK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+14155552671",
    "from": "+85230018899",
    "answer_url": "https://yourserver.com/ivr/welcome.xml",
    "record": true,
    "status_callback": "https://yourserver.com/voice/events"
  }'`}
                </pre>

                <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                  <span>Gateway: HK1-Equinix Core</span>
                  <span>Direct Carrier Bindings</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INQUIRY FORM */}
        <section id="cpaas-form" className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Request CPaaS API Access &amp; Documentation
              </h2>
              <p className="text-sm text-slate-600">
                Contact our solutions engineering desk for dedicated sandbox keys and enterprise SLAs.
              </p>
            </div>

            <InteractiveContactForm defaultService="CPaaS APIs (Voice & SMS)" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
