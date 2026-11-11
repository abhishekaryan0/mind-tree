'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  PhoneCall, 
  MessageSquare, 
  Cpu, 
  Headphones, 
  Globe, 
  Layers, 
  Menu, 
  X, 
  ChevronDown, 
  Mail, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Server
} from 'lucide-react';

interface NavbarProps {
  onOpenQuote?: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  const services = [
    {
      title: 'Wholesale Voice',
      desc: 'Tier-1 direct CLI & non-CLI routes, low latency SIP termination.',
      href: '/voice',
      icon: PhoneCall,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'SMS & Messaging',
      desc: 'High-throughput A2P, OTP verification & enterprise messaging.',
      href: '/messaging',
      icon: MessageSquare,
      color: 'text-sky-600 bg-sky-50'
    },
    {
      title: 'CPaaS & APIs',
      desc: 'Programmable Voice, SMS, WhatsApp Business API & Webhooks.',
      href: '/cpaas',
      icon: Cpu,
      color: 'text-indigo-600 bg-indigo-50'
    },
    {
      title: 'Call Center Solutions & Dialer',
      desc: 'Cloud predictive dialers, CRM integration & WebRTC agents.',
      href: '/dialer',
      icon: Headphones,
      color: 'text-cyan-600 bg-cyan-50'
    },
    {
      title: 'Bulk SMS CRM Portal',
      desc: 'Web-based messaging portal, dynamic sender IDs & segmentation.',
      href: '/advance-sms-portal',
      icon: Layers,
      color: 'text-teal-600 bg-teal-50'
    },
    {
      title: 'Virtual Numbers (DID)',
      desc: 'Global DIDs & toll-free numbers in 140+ countries with 2-way SMS.',
      href: '/virtual-numbers-did',
      icon: Globe,
      color: 'text-blue-700 bg-blue-50'
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-xs">
      {/* Top Banner */}
      <div className="bg-[#08182b] text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Tier-1 Telecom Interconnection & CPaaS Platform
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Hong Kong Headquarters
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href="mailto:connect@mindtreecom.com" 
              className="inline-flex items-center gap-1.5 hover:text-sky-300 transition-colors font-medium text-sky-400"
            >
              <Mail className="w-3.5 h-3.5" />
              connect@mindtreecom.com
            </a>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="text-emerald-400 font-medium hidden sm:inline-flex items-center gap-1">
              <Server className="w-3 h-3" /> 99.999% SLA
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center p-0.5 bg-slate-50 border border-slate-100 shadow-xs">
            <Image 
              src="/logo.png" 
              alt="Mind Tree Communication Logo" 
              width={48} 
              height={48} 
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#08182b] group-hover:text-blue-600 transition-colors">
              Mind Tree
            </span>
            <span className="text-[10px] tracking-widest font-semibold uppercase text-sky-600 -mt-1">
              COMMUNICATION
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link 
            href="/" 
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>

          {/* Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button 
              className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-2 focus:outline-hidden"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            >
              Solutions
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full -left-20 w-[640px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                {services.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className={`p-2.5 rounded-xl ${item.color} group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-500 leading-snug mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  );
                })}
                <div className="col-span-2 mt-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> Guaranteed CLI & High ASR/ACD Routes
                  </span>
                  <Link href="/voice" className="text-blue-600 hover:underline font-semibold flex items-center gap-1">
                    Carrier Interconnect <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link 
            href="/voice" 
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            Voice
          </Link>

          <Link 
            href="/messaging" 
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            SMS
          </Link>

          <Link 
            href="/cpaas" 
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            CPaaS
          </Link>

          <Link 
            href="/dialer" 
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            Call Center
          </Link>

          {/* Company Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setCompanyDropdownOpen(true)}
            onMouseLeave={() => setCompanyDropdownOpen(false)}
          >
            <button 
              className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-2 focus:outline-hidden"
              onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
            >
              Company
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${companyDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {companyDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                <Link
                  href="/about"
                  className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                  onClick={() => setCompanyDropdownOpen(false)}
                >
                  About Mind Tree
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                  onClick={() => setCompanyDropdownOpen(false)}
                >
                  Telecom Insights & Blog
                </Link>
                <Link
                  href="/security-and-compliance"
                  className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                  onClick={() => setCompanyDropdownOpen(false)}
                >
                  Security & Compliance
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                  onClick={() => setCompanyDropdownOpen(false)}
                >
                  Global Carrier Desk
                </Link>
              </div>
            )}
          </div>

          <Link 
            href="/contact" 
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-md hover:shadow-lg hover:from-blue-700 hover:to-sky-700 transition-all flex items-center gap-2 group"
          >
            <span>Request Rate Deck</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-4">
          <div className="flex flex-col space-y-2">
            <Link 
              href="/" 
              className="px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
              Solutions & Services
            </div>
            {services.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className={`p-1.5 rounded-md ${item.color}`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <span>{item.title}</span>
              </Link>
            ))}

            <div className="px-3 pt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              Company
            </div>
            <Link 
              href="/about" 
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Mind Tree
            </Link>
            <Link 
              href="/blog" 
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Telecom Blog & Insights
            </Link>
            <Link 
              href="/security-and-compliance" 
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Security & Compliance
            </Link>
            <Link 
              href="/contact" 
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact & Interconnect
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              <Mail className="w-4 h-4 text-sky-600 shrink-0" />
              <span>connect@mindtreecom.com</span>
            </div>
            <Link
              href="/contact"
              className="w-full text-center py-3 text-sm font-bold rounded-xl bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Rate Deck
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
