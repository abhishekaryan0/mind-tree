import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, Lock, CheckCircle2, Server, EyeOff, Globe2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Security, Anti-Fraud & Regulatory Compliance | Mind Tree Communication',
  description: 'Learn about Mind Tree Communication security architecture, ISO 27001 standards, GDPR compliance, and real-time anti-fraud telecom protection.'
};

export default function SecurityCompliancePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <section className="relative bg-[#061124] text-white pt-20 pb-20 overflow-hidden bg-dark-mesh">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Enterprise Telecom Security Framework
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Security, Anti-Fraud &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
                  Regulatory Compliance
                </span>
              </h1>

              <p className="text-base text-slate-300 leading-relaxed">
                Mind Tree Communication Limited maintains stringent operational, data protection, and anti-fraud protocols to ensure our carrier interconnections and enterprise messaging remain safe and compliant worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Anti-fraud framework */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Real-Time Telecom Anti-Fraud Engine</h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our Hong Kong switching core is protected by proprietary machine-learning heuristics that inspect signaling metadata across millions of calls and messages each minute:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Wangiri &amp; IRSF Protection:</strong> Automatic detection and instant blocking of International Revenue Share Fraud and one-ring robocall waves.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Anti-FAS Defense:</strong> Proactive audio and signaling inspection identifies False Answer Supervision (early billing before connection) and immediately reroutes traffic.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>SMS Spoofing &amp; Grey Route Scrubbing:</strong> Enforcement of sender ID legitimacy and direct SS7 bindings to ensure compliance with national telecom directives.</span>
                </li>
              </ul>
            </div>

            {/* Data privacy & Encryption */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Data Encryption &amp; Transport Security</h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                All voice signaling, media streams, and SMS payloads can be protected in transit and at rest using modern cryptographic standards:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Signaling &amp; Media:</strong> TLS 1.3 encryption for SIP control channels and SRTP (Secure Real-Time Transport Protocol) for voice audio payloads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>CPaaS &amp; Webhook Security:</strong> HMAC SHA-256 signature verification for all event callbacks to prevent webhook tampering or replay attacks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>GDPR &amp; Data Residency:</strong> Fully compliant with European GDPR, Hong Kong PDPO (Personal Data Privacy Ordinance), and regional telecom privacy guidelines.</span>
                </li>
              </ul>
            </div>

            {/* Hong Kong Legal & Interconnect Inquiries */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 text-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-blue-950">Security Audits &amp; Compliance Inquiries</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                For enterprise security questionnaires, SOC 2 reports, mutual Non-Disclosure Agreements (NDAs), or carrier bilateral compliance forms, please contact our Hong Kong compliance office directly:
              </p>
              <div className="pt-2">
                <a 
                  href="mailto:connect@mindtreecom.com" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 underline"
                >
                  connect@mindtreecom.com
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
