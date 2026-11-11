import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveContactForm from '@/components/InteractiveContactForm';
import { 
  MapPin, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Globe2, 
  Server, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export const metadata = {
  title: 'Contact Our Hong Kong Carrier Desk | Mind Tree Communication',
  description: 'Connect with Mind Tree Communication for wholesale voice interconnection, A2P SMS rate decks, CPaaS APIs, and cloud predictive dialer solutions.'
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-[#061124] text-white pt-20 pb-20 overflow-hidden bg-dark-mesh">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold">
                <Globe2 className="w-3.5 h-3.5" /> Global Telecom Interconnection
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Contact Mind Tree <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                  Carrier Interconnect &amp; Trading Desk
                </span>
              </h1>

              <p className="text-base text-slate-300 leading-relaxed">
                Reach our Hong Kong telecommunications engineers and wholesale account managers for bilateral route testing, custom rate decks, CPaaS integration keys, and cloud dialer provisioning.
              </p>
            </div>
          </div>
        </section>

        {/* QUICK CONTACT HIGHLIGHT CARDS */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Hong Kong Office */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Hong Kong Corporate Headquarters</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unit 1805, 18/F, Crawford House, 70 Queen&apos;s Road Central, Central, Hong Kong
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200 text-[11px] text-slate-500 font-medium">
                  Asia-Pacific Telecom &amp; Financial Core
                </div>
              </div>

              {/* Direct Carrier Email */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Direct Carrier Trading Email</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For rate decks, bilateral agreements, IP whitelist requests, and NOC inquiries:
                  </p>
                  <a 
                    href="mailto:connect@mindtreecom.com" 
                    className="text-sm font-bold text-blue-600 hover:underline block mt-2"
                  >
                    connect@mindtreecom.com
                  </a>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200 text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> SLA Response within 2 hours
                </div>
              </div>

              {/* 24/7 Carrier NOC */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">24/7/365 Carrier NOC Support</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Continuous route health monitoring, automated FAS detection, and instant traffic re-routing across our multi-homed BGP network.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200 text-[11px] text-slate-500 font-medium">
                  Switching nodes in HK, SG, FRA, LON, NYC
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INTERACTIVE FORM SECTION */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Carrier Interconnect Request
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Send Us Your Interconnect Specifications
              </h2>
              <p className="text-sm text-slate-600">
                Please complete the form below. Our trading desk in Hong Kong will reply promptly with rate proposals, IP testing configs, or platform access.
              </p>
            </div>

            <InteractiveContactForm />
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Interconnection &amp; Carrier FAQs
              </h2>
              <p className="text-sm text-slate-600">
                Quick answers regarding Mind Tree Communication bilateral trading and platform integrations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  How fast can we set up a Voice or SMS test trunk?
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Upon receiving your IP address, signaling preferences (SIP 2.0 or SMPP v3.4), and company details at <strong className="text-slate-800">connect@mindtreecom.com</strong>, our NOC whitelists your IPs and provisions initial test credits within 30 minutes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  What billing and payment terms do you support?
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We support both Pre-pay and Post-pay terms (7/1, 15/1, 30/30) for certified Tier-1/Tier-2 telecom operators subject to standard credit risk and KYC approval. Payments are handled via international bank wire transfer in USD, EUR, or HKD.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  Do you provide direct CLI guarantee for banking OTPs?
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Yes. Our Direct Premium CLI Voice and Priority OTP SMS pipelines route strictly over direct SS7/MNO bindings without grey-route hops or SIM-box interference, ensuring 100% verified alphanumeric sender IDs and caller IDs.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  Can we white-label your Call Center Dialer and Bulk SMS Portal?
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Yes, Mind Tree Communication offers enterprise white-label solutions. You can brand the portal with your company logo, custom domain, and manage tiered reseller markups.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
