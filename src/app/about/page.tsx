import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NetworkPoPMap from '@/components/NetworkPoPMap';
import { 
  ShieldCheck, 
  Globe2, 
  MapPin, 
  Mail, 
  CheckCircle2, 
  Server, 
  Activity, 
  Users, 
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

export const metadata = {
  title: 'About Us | Mind Tree Communication Limited (Hong Kong)',
  description: 'Learn about Mind Tree Communication, our global Tier-1 telecom carrier network, Hong Kong headquarters, and our mission to power seamless Voice, SMS, and CPaaS communications.'
};

export default function AboutPage() {
  const values = [
    {
      title: 'Carrier-Grade Reliability',
      desc: 'We engineer our voice switching and SMS routing core for 99.999% uptime, utilizing redundant fiber backbones and multi-homed BGP anycast architecture.',
      icon: Server
    },
    {
      title: 'Zero FAS & Route Transparency',
      desc: 'We hold our bilateral routes to the highest international quality standards. Zero tolerance for False Answer Supervision (FAS), grey routes, or audio clipping.',
      icon: ShieldCheck
    },
    {
      title: 'Hong Kong Global Financial Hub',
      desc: 'Headquartered in Central, Hong Kong, we sit at the intersection of Asia-Pacific telecommunication fiber conduits and international capital markets.',
      icon: MapPin
    },
    {
      title: 'Innovation in CPaaS & AI Voice',
      desc: 'Continuously modernizing telecom infrastructure with RESTful programmable APIs, automated LCR/QBR routing, and next-generation WebRTC contact center tools.',
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-[#061124] text-white pt-20 pb-24 overflow-hidden bg-dark-mesh">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold">
                <Globe2 className="w-3.5 h-3.5" /> Corporate Overview &amp; Telecom Network
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Architecting the Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                  Global Voice, SMS &amp; CPaaS
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Mind Tree Communication Limited is an international telecommunications company headquartered in Hong Kong. We bridge enterprise communication with wholesale telecom trading, delivering carrier-grade voice routes, high-throughput A2P messaging, and cloud contact center platforms worldwide.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition flex items-center gap-2"
                >
                  <span>Connect With Hong Kong Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/voice"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition"
                >
                  Explore Voice Termination
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  Our Mission &amp; Infrastructure
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  High-Availability Switching Engineered in Hong Kong for the World
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Founded by telecom industry veterans, Mind Tree Communication was created to solve the fundamental challenges of global VoIP trading: unstable route quality, grey SMS channels, and lack of real-time transparency.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  By anchoring our core switching infrastructure in Hong Kong&apos;s premier carrier-neutral datacenters and interconnecting directly with Tier-1 PTTs and mobile network operators (MNOs), we guarantee premium CLI termination, sub-3-second OTP verification delivery, and carrier-grade voice quality.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>Direct Tier-1 Interconnections in 140+ countries</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>24/7/365 Proactive Carrier Network Operations Center (NOC)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>ISO 27001 &amp; Hong Kong Telecom Regulatory Compliant</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-[#091b36] rounded-3xl p-8 sm:p-10 text-white border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
                    <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-md">
                      <Image
                        src="/logo.png"
                        alt="Mind Tree Communication"
                        width={52}
                        height={52}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Mind Tree Communication</h3>
                      <p className="text-xs text-sky-400 font-medium">Voice • SMS • Global Reach</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs text-slate-300">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block mb-0.5 text-sm">Hong Kong Headquarters:</strong>
                        <span>Unit 1805, 18/F, Crawford House, 70 Queen&apos;s Road Central, Central, Hong Kong</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block mb-0.5 text-sm">Direct Carrier Desk:</strong>
                        <a href="mailto:connect@mindtreecom.com" className="text-sky-300 hover:underline">
                          connect@mindtreecom.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block mb-0.5 text-sm">Service Availability:</strong>
                        <span>Continuous 99.999% SLA with automated failover routing</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <Link
                      href="/contact"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 text-white font-bold text-xs text-center block hover:from-blue-500 hover:to-sky-500 transition shadow-md"
                    >
                      Connect With Our Team
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Guiding Principles
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                The Core Values That Power Our Carrier Partnerships
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-lg transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* GLOBAL POPS MAP */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <NetworkPoPMap />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
