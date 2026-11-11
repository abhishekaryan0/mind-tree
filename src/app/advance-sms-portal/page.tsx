import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveContactForm from '@/components/InteractiveContactForm';
import { 
  Layers, 
  MessageSquare, 
  Users, 
  UploadCloud, 
  Calendar, 
  BarChart2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sliders
} from 'lucide-react';

export const metadata = {
  title: 'Bulk SMS CRM Portal & Campaign Management | Mind Tree Communication',
  description: 'Manage high-volume SMS campaigns, dynamic sender IDs, contact segmentation, and sub-account reseller hierarchies with Mind Tree Bulk SMS Portal.'
};

export default function AdvanceSmsPortalPage() {
  const portalFeatures = [
    {
      title: 'Smart Contact List Segmentation',
      desc: 'Import millions of contacts via CSV, Excel, or API. Segment audiences by geographic region, past campaign engagement, tags, and customer lifecycle stage.',
      icon: Users,
      highlight: 'Unlimited Contact Lists'
    },
    {
      title: 'Dynamic Personalized Placeholders',
      desc: 'Send hyper-personalized messages using merge tags like {FirstName}, {AccountBalance}, {AppointmentDate}, and unique tracking URLs.',
      icon: MessageSquare,
      highlight: 'Dynamic Variable Merge'
    },
    {
      title: 'Scheduled & Recurring Campaigns',
      desc: 'Set up time-zone intelligent campaign dispatches. Schedule automated weekly reminders, payment notices, or birthday greetings effortlessly.',
      icon: Calendar,
      highlight: 'Timezone-Aware Delivery'
    },
    {
      title: 'Automated DND & Compliance Filter',
      desc: 'Automatic scrub against National Do Not Disturb (DND) registries, opt-out keywords (STOP, CANCEL), and invalid MSISDN numbers to protect your brand.',
      icon: ShieldCheck,
      highlight: 'Auto-DND Scrubbing'
    },
    {
      title: 'Multi-Tier Reseller & Sub-Accounts',
      desc: 'White-label capabilities for telecom brokers and marketing agencies. Create sub-accounts, allocate SMS credit balances, and restrict permissions.',
      icon: Sliders,
      highlight: 'White-Label Reseller Mode'
    },
    {
      title: 'Deep Analytics & Conversion Tracking',
      desc: 'Real-time interactive dashboard displaying delivered vs failed ratios, click-through rates on shortened links, and operator breakdown.',
      icon: BarChart2,
      highlight: 'Real-time DLR Telemetry'
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-semibold">
                <Layers className="w-3.5 h-3.5" /> Enterprise Self-Service SMS Platform
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Advance Bulk SMS Portal &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-400 to-blue-400">
                  Omnichannel Campaign CRM
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                A modern web-based bulk messaging command center designed for marketing teams, telecom aggregators, and enterprises. Upload contacts, launch multi-channel campaigns, and track real-time delivery with zero coding required.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#portal-quote"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 via-sky-600 to-blue-600 text-white font-bold text-sm shadow-lg shadow-teal-500/25 hover:from-teal-600 hover:to-blue-700 transition flex items-center gap-2"
                >
                  <span>Request Portal Demo Account</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/messaging"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition"
                >
                  View Wholesale SMS Routes
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
                <div className="text-3xl font-extrabold text-teal-900 font-mono">1,000,000+</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Campaign Contacts Per Blast</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-teal-900 font-mono">99.8%</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Delivery Verification</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-teal-900 font-mono">Instant</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Sender ID Approval</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-extrabold text-teal-900 font-mono">Multi-User</div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase">Role-Based Access</div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTAL FEATURES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
                Powerful CRM Tools
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Engineered for High-Impact Messaging Operations
              </h2>
              <p className="text-sm text-slate-600">
                Everything your business needs to launch, automate, and optimize SMS campaigns globally with high deliverability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portalFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{f.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-teal-700 font-mono">
                      {f.highlight}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INQUIRY FORM */}
        <section id="portal-quote" className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Get Started with Mind Tree Bulk SMS Portal
              </h2>
              <p className="text-sm text-slate-600">
                Contact our Hong Kong portal team to set up your enterprise admin account and test balance.
              </p>
            </div>

            <InteractiveContactForm defaultService="Bulk SMS CRM Portal" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
