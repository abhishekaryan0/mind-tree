import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Globe2, 
  PhoneCall, 
  MessageSquare, 
  Cpu, 
  Headphones, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#061124] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Company Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-lg overflow-hidden flex items-center justify-center p-0.5 bg-white shadow-md">
                <Image 
                  src="/logo.png" 
                  alt="Mind Tree Communication Logo" 
                  width={44} 
                  height={44} 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  Mind Tree
                </span>
                <span className="text-[10px] tracking-widest font-semibold uppercase text-sky-400 -mt-1">
                  COMMUNICATION
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Mind Tree Communication is an international VoIP trading and CPaaS leader headquartered in Hong Kong. We provide carrier-grade wholesale voice termination, A2P SMS messaging, cloud dialer infrastructure, and enterprise communication APIs with global reach.
            </p>

            {/* Hong Kong Office Address & Direct Email */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Hong Kong Global Headquarters:</span>
                  <span>Unit 1805, 18/F, Crawford House, 70 Queen&apos;s Road Central, Central, Hong Kong</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Direct Carrier Desk:</span>
                  <a 
                    href="mailto:connect@mindtreecom.com" 
                    className="text-sky-400 hover:text-sky-300 font-medium underline-offset-4 hover:underline"
                  >
                    connect@mindtreecom.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> ISO 27001 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300">
                <Globe2 className="w-3.5 h-3.5 text-sky-400" /> Tier-1 Interconnect
              </span>
            </div>
          </div>

          {/* Voice & SMS Trading Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              VoIP & Messaging
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/voice" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-blue-400" /> Wholesale Voice
                </Link>
              </li>
              <li>
                <Link href="/voice" className="hover:text-sky-400 transition-colors">
                  Direct CLI Termination
                </Link>
              </li>
              <li>
                <Link href="/messaging" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-sky-400" /> A2P & Wholesale SMS
                </Link>
              </li>
              <li>
                <Link href="/messaging" className="hover:text-sky-400 transition-colors">
                  OTP & Transactional SMS
                </Link>
              </li>
              <li>
                <Link href="/advance-sms-portal" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-teal-400" /> Bulk SMS CRM Portal
                </Link>
              </li>
              <li>
                <Link href="/virtual-numbers-did" className="hover:text-sky-400 transition-colors">
                  Global DID Numbers
                </Link>
              </li>
            </ul>
          </div>

          {/* CPaaS & Solutions */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Platforms & CPaaS
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/cpaas" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" /> CPaaS APIs
                </Link>
              </li>
              <li>
                <Link href="/dialer" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                  <Headphones className="w-3.5 h-3.5 text-cyan-400" /> Call Center Dialer
                </Link>
              </li>
              <li>
                <Link href="/dialer" className="hover:text-sky-400 transition-colors">
                  Predictive & WebRTC
                </Link>
              </li>
              <li>
                <Link href="/cpaas" className="hover:text-sky-400 transition-colors">
                  WhatsApp Business API
                </Link>
              </li>
              <li>
                <Link href="/cpaas" className="hover:text-sky-400 transition-colors">
                  RCS Business Messaging
                </Link>
              </li>
              <li>
                <Link href="/advance-sms-portal" className="hover:text-sky-400 transition-colors">
                  Campaign Segmentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-sky-400 transition-colors">
                  Telecom Insights Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400 transition-colors">
                  Interconnect & Carrier Desk
                </Link>
              </li>
              <li>
                <Link href="/security-and-compliance" className="hover:text-sky-400 transition-colors">
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-sky-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-sky-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Mind Tree Communication Limited (Hong Kong). All rights reserved.</p>
          <div className="flex items-center gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> 99.999% High Availability SLA
            </span>
            <span>Hong Kong Telecom Registry Compliant</span>
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
