import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Tag, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  Headphones 
} from 'lucide-react';

export const metadata = {
  title: 'Telecom Insights & VoIP Industry Updates | Mind Tree Communication',
  description: 'Read the latest telecommunication industry analyses, VoIP trading strategies, A2P SMS deliverability benchmarks, and CPaaS technology trends.'
};

export default function BlogPage() {
  const articles = [
    {
      title: 'The Evolution of Wholesale VoIP Trading: How AI-Driven Routing Eliminates False Answer Supervision (FAS)',
      slug: 'evolution-of-wholesale-voip-trading',
      category: 'VoIP Trading',
      readTime: '6 min read',
      date: 'November 2026',
      summary: 'Explore how real-time SIP signaling telemetry and machine-learning audio fingerprinting enable modern wholesale carriers to weed out FAS and loop routes instantly.',
      icon: TrendingUp
    },
    {
      title: 'Why Direct SS7 & MNO Bindings Outperform Grey Routes for Enterprise Banking OTP Deliverability',
      slug: 'direct-ss7-mno-bindings-vs-grey-routes',
      category: 'A2P SMS & Security',
      readTime: '5 min read',
      date: 'October 2026',
      summary: 'Understanding the mechanics of carrier-grade A2P SMS firewalls, SIM-box bypass detection, and why sub-3-second OTP speed is critical for reducing transaction drop-offs.',
      icon: ShieldCheck
    },
    {
      title: 'Next-Generation Contact Centers: How WebRTC Predictive Dialers Triple Agent Talk Time',
      slug: 'next-gen-contact-centers-webrtc-dialers',
      category: 'Call Center & CRM',
      readTime: '7 min read',
      date: 'September 2026',
      summary: 'A deep-dive into how browser-native WebRTC softphones paired with intelligent call-abandonment pacing algorithms maximize live customer connection rates.',
      icon: Headphones
    },
    {
      title: 'Unified CPaaS Architecture: Bridging Programmable Voice, SMS, and WhatsApp Business API',
      slug: 'unified-cpaas-architecture-voice-sms-whatsapp',
      category: 'CPaaS & Developer APIs',
      readTime: '8 min read',
      date: 'August 2026',
      summary: 'A practical guide for engineers on structuring multi-channel customer communications with automated fallback routing and centralized webhook telemetry.',
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-[#061124] text-white pt-20 pb-20 overflow-hidden bg-dark-mesh">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5" /> Industry Analysis &amp; Technical Guides
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Telecom Insights &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                  Global Market Reports
                </span>
              </h1>

              <p className="text-base text-slate-300 leading-relaxed">
                Expert perspectives from Mind Tree Communication&apos;s Hong Kong trading desk on VoIP routing, SMS delivery engineering, CPaaS advancements, and contact center optimization.
              </p>
            </div>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((art) => {
                const Icon = art.icon;
                return (
                  <article
                    key={art.slug}
                    className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                          <Tag className="w-3 h-3" /> {art.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{art.readTime}</span>
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                        {art.title}
                      </h2>

                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {art.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-400">{art.date}</span>
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-blue-600 group-hover:text-blue-800 flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        <span>Discuss with Trading Desk</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
