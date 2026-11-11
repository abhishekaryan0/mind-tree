import Link from 'next/link';
import Image from 'next/image';
import { 
  PhoneCall, 
  MessageSquare, 
  Cpu, 
  Headphones, 
  Globe2, 
  Layers, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  TrendingUp, 
  Building2, 
  Lock, 
  Users,
  Activity
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RouteSearchWidget from '@/components/RouteSearchWidget';
import NetworkPoPMap from '@/components/NetworkPoPMap';
import InteractiveContactForm from '@/components/InteractiveContactForm';

export const metadata = {
  title: 'Mind Tree Communication | Carrier-Grade VoIP Trading, A2P SMS & CPaaS Provider',
  description: 'Mind Tree Communication is a premier telecom trading and CPaaS provider headquartered in Hong Kong. Offering wholesale voice termination, A2P SMS messaging, cloud call center dialers, and bulk SMS CRM.'
};

export default function HomePage() {
  const coreSolutions = [
    {
      title: 'Wholesale Voice Trading',
      desc: 'Carrier-grade international voice termination with guaranteed CLI delivery, superior ASR/ACD ratios, and high-capacity SIP trunking.',
      icon: PhoneCall,
      href: '/voice',
      tag: 'Tier-1 Interconnects',
      color: 'from-blue-600 to-indigo-600',
      badge: 'Direct CLI & Non-CLI'
    },
    {
      title: 'A2P & Bulk SMS Solutions',
      desc: 'Ultra-low latency global SMS termination for mission-critical OTPs, transactional notifications, and high-throughput promotional campaigns.',
      icon: MessageSquare,
      href: '/messaging',
      tag: 'Sub-3s Delivery',
      color: 'from-sky-500 to-blue-600',
      badge: 'Direct Carrier Bindings'
    },
    {
      title: 'CPaaS & Developer APIs',
      desc: 'Scalable programmable Voice, SMS, WhatsApp Business API, and RCS messaging endpoints built for modern SaaS and enterprise integrations.',
      icon: Cpu,
      href: '/cpaas',
      tag: 'REST APIs & SDKs',
      color: 'from-indigo-600 to-purple-600',
      badge: '99.999% SLA'
    },
    {
      title: 'Smart Call Center & Cloud Dialer',
      desc: 'Predictive, progressive, and preview dialers integrated with WebRTC softphones and CRM pipelines to maximize agent contact rates.',
      icon: Headphones,
      href: '/dialer',
      tag: 'Cloud Contact Center',
      color: 'from-cyan-500 to-blue-600',
      badge: 'Omnichannel CRM'
    },
    {
      title: 'Bulk SMS CRM Portal',
      desc: 'Enterprise self-service messaging portal featuring contact list management, dynamic sender IDs, campaign analytics, and DND filtering.',
      icon: Layers,
      href: '/advance-sms-portal',
      tag: 'Enterprise Portal',
      color: 'from-teal-500 to-emerald-600',
      badge: 'Instant Provisioning'
    },
    {
      title: 'Virtual Numbers & Global DID',
      desc: 'Local, national, mobile, and toll-free virtual numbers across 140+ countries supporting inbound voice, two-way SMS, and cloud PBX routing.',
      icon: Globe2,
      href: '/virtual-numbers-did',
      tag: '140+ Countries',
      color: 'from-blue-700 to-sky-700',
      badge: 'Instant Activation'
    }
  ];

  const industries = [
    {
      name: 'Banking & Financial Services',
      desc: 'High-security OTP delivery, fraud-resistant transaction alerts, and multi-factor authentication (MFA) via encrypted SMPP channels.',
      icon: Lock,
      metric: '99.9% OTP Deliverability'
    },
    {
      name: 'Call Centers & BPO Operators',
      desc: 'High-capacity SIP trunks with low post-dial delay (PDD), robust predictive dialing, and seamless CRM integrations.',
      icon: Headphones,
      metric: '+45% Contact Rate'
    },
    {
      name: 'E-Commerce & Retail Logistics',
      desc: 'Automated dispatch notifications, two-way delivery confirmations, and conversational WhatsApp commerce.',
      icon: Building2,
      metric: 'Real-time DLR Tracking'
    },
    {
      name: 'Telecom Carriers & Aggregators',
      desc: 'High-volume wholesale voice and SMS bilateral trading with 24/7 rate-deck updates and proactive QoS monitoring.',
      icon: Server,
      metric: '150+ Bilateral Partners'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative bg-[#061124] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-dark-mesh">
          {/* Glowing ambient orbs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Headline & Action */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Hong Kong Global Telecom Hub • Wholesale Voice &amp; SMS Trading</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                  Global Communication, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300">
                    Engineered for Scale.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Mind Tree Communication delivers carrier-grade VoIP termination, ultra-low latency A2P SMS messaging, CPaaS APIs, and cloud predictive dialers for tier-1 operators, enterprise brands, and global call centers.
                </p>

                {/* Highlights Pill Row */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Guaranteed CLI Delivery
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sub-3s OTP Latency
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero False Answer Supervision (FAS)
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Request Carrier Rate Deck</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="#routes"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-semibold text-sm transition flex items-center justify-center gap-2"
                  >
                    <Activity className="w-4 h-4 text-sky-400" />
                    <span>Check Live Routes</span>
                  </a>
                </div>

                {/* Email Support Badge */}
                <div className="pt-2 text-xs text-slate-400">
                  Direct Carrier Interconnect Inquiries:{' '}
                  <a href="mailto:connect@mindtreecom.com" className="text-sky-300 font-semibold hover:underline">
                    connect@mindtreecom.com
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Brand Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Decorative glowing backdrops */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-30"></div>
                  
                  {/* Card Container */}
                  <div className="relative bg-[#091b36] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                    
                    {/* Header with logo */}
                    <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-md">
                          <Image
                            src="/logo.png"
                            alt="Mind Tree Communication"
                            width={44}
                            height={44}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">Mind Tree Communication</h4>
                          <p className="text-[11px] text-sky-400">Hong Kong Switching Node #01</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> ONLINE
                      </span>
                    </div>

                    {/* Live Metric Meters */}
                    <div className="py-6 space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-medium mb-1">
                          <span className="text-slate-300">Voice Termination ASR (Direct CLI)</span>
                          <span className="text-emerald-400 font-mono font-bold">68.4%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" style={{ width: '68.4%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-medium mb-1">
                          <span className="text-slate-300">A2P SMS Gateway Throughput</span>
                          <span className="text-sky-400 font-mono font-bold">5,000 TPS</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-medium mb-1">
                          <span className="text-slate-300">Average Switching Latency</span>
                          <span className="text-cyan-300 font-mono font-bold">14.2 ms</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" style={{ width: '94%' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Protocol compatibility pills */}
                    <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700">SIP 2.0</span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700">SMPP v3.4</span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700">HTTP REST</span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700">WebRTC</span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700">G.711 / G.729</span>
                    </div>

                    {/* Quick Button */}
                    <div className="mt-5">
                      <Link
                        href="/contact"
                        className="w-full py-2.5 text-xs font-bold text-center block rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition shadow-md"
                      >
                        Interconnect With Mind Tree
                      </Link>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* STATS BANNER */}
        <section className="bg-white border-b border-slate-200 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-extrabold text-blue-900 font-mono">4.8B+</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Voice Minutes Terminated</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-extrabold text-blue-900 font-mono">12B+</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">A2P SMS Delivered</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-extrabold text-blue-900 font-mono">150+</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Direct Carrier Interconnects</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-extrabold text-blue-900 font-mono">99.999%</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">High Availability SLA</div>
              </div>
              <div className="col-span-2 lg:col-span-1 space-y-1">
                <div className="text-3xl lg:text-4xl font-extrabold text-blue-900 font-mono">&lt; 18ms</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Core Switching Latency</div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SOLUTIONS SECTION */}
        <section className="py-20 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full">
                End-to-End Telecom Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Complete Suite of Voice, SMS &amp; CPaaS Infrastructure
              </h2>
              <p className="text-base text-slate-600">
                Built to power enterprise communication, wholesale carrier bilateral trading, and scalable contact center operations worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreSolutions.map((sol) => {
                const Icon = sol.icon;
                return (
                  <div
                    key={sol.title}
                    className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sol.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                          {sol.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                        {sol.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {sol.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-400">{sol.tag}</span>
                      <Link
                        href={sol.href}
                        className="text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTERACTIVE ROUTE SEARCH MATRIX */}
        <section id="routes" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-100/70 px-3 py-1 rounded-full">
                Real-Time Telecom Marketplace
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Live Wholesale Routing Benchmarks
              </h2>
              <p className="text-base text-slate-600">
                Explore real-time QoS indicators, ASR percentages, and ACD averages across our most active international destinations.
              </p>
            </div>

            <RouteSearchWidget />
          </div>
        </section>

        {/* GLOBAL NETWORK POPS */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <NetworkPoPMap />
          </div>
        </section>

        {/* INDUSTRY VERTICALS */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-100/70 px-3 py-1 rounded-full">
                Industry Applications
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Engineered for High-Reliability Enterprise Verticals
              </h2>
              <p className="text-base text-slate-600">
                From fast-moving fintech authentication to global call center volume, our carrier platform is tailored for zero-downtime operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={ind.name}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{ind.name}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">{ind.desc}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> {ind.metric}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY MIND TREE COMMUNICATION (HONG KONG ADVANTAGE) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full">
                  The Mind Tree Edge
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Hong Kong Telecom Hub Advantage &amp; Direct Carrier Quality
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Headquartered in the global financial and telecommunication center of Hong Kong, Mind Tree Communication leverages superior subsea fiber density, bilateral carrier agreements, and carrier-neutral co-locations.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Anti-Fraud &amp; Firewall Shield</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Real-time AI detection against Wangiri attacks, SIM-box bypass, and illegal SMS grey routes to safeguard revenue.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Sub-Millisecond Dynamic Routing (LCR)</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Automated Least Cost Routing (LCR) combined with Quality-Based Routing (QBR) ensures optimal ASR and margins.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Dedicated Carrier Trading NOC</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Our Hong Kong engineering team operates 24/7/365 to handle rate deck updates, route testing, and bilateral swaps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#08182e] rounded-3xl p-8 text-white border border-slate-800 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <h4 className="text-lg font-bold">Hong Kong Corporate Entity</h4>
                    <p className="text-xs text-slate-400">Mind Tree Communication Limited</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-sky-300 border border-blue-400/30">
                    Compliant &amp; Licensed
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-1">Corporate HQ</span>
                    <span className="text-sm font-bold text-white block">Central, Hong Kong</span>
                    <span className="text-[11px] text-slate-400">Crawford House, Queen&apos;s Rd</span>
                  </div>

                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-1">Carrier Desk Email</span>
                    <a href="mailto:connect@mindtreecom.com" className="text-sm font-bold text-sky-400 block hover:underline">
                      connect@mindtreecom.com
                    </a>
                    <span className="text-[11px] text-slate-400">Response within 2h</span>
                  </div>

                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-1">Global Interconnects</span>
                    <span className="text-sm font-bold text-white block">150+ Direct Partners</span>
                    <span className="text-[11px] text-slate-400">Tier-1 &amp; Tier-2 Telcos</span>
                  </div>

                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-1">SLA Standard</span>
                    <span className="text-sm font-bold text-emerald-400 block">99.999% Guaranteed</span>
                    <span className="text-[11px] text-slate-400">Redundant Fiber Loops</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition flex items-center justify-center gap-2"
                  >
                    <span>Connect With Hong Kong Trading Desk</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEAD CAPTURE & CONTACT INTERCONNECT FORM */}
        <section className="py-20 bg-slate-100/70 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Get Started
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Begin Bilateral Interconnect or Request Custom Pricing
              </h2>
              <p className="text-sm text-slate-600">
                Our Hong Kong network engineering team will reach out with customized voice rate decks, SMS test credentials, or dialer setup within hours.
              </p>
            </div>

            <InteractiveContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
