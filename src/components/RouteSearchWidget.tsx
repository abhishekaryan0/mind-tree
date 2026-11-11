'use client';

import { useState } from 'react';
import { Search, PhoneCall, MessageSquare, Zap, Shield, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface RouteData {
  country: string;
  code: string;
  service: 'Voice CLI' | 'Voice CC' | 'A2P SMS' | 'OTP High-Priority' | 'DID Number';
  asr: string;
  acd: string;
  latency: string;
  tps: string;
  status: 'Direct Tier-1' | 'Direct Gateway' | 'Premium CLI';
}

const SAMPLE_ROUTES: RouteData[] = [
  { country: 'Hong Kong (HQ Hub)', code: '+852', service: 'Voice CLI', asr: '68.5%', acd: '5.2m', latency: '< 12ms', tps: '1,500/s', status: 'Direct Tier-1' },
  { country: 'Hong Kong (HQ Hub)', code: '+852', service: 'A2P SMS', asr: '99.4%', acd: 'N/A', latency: '< 2.1s', tps: '2,000/s', status: 'Direct Tier-1' },
  { country: 'United States', code: '+1', service: 'Voice CLI', asr: '65.2%', acd: '4.8m', latency: '< 24ms', tps: '3,000/s', status: 'Direct Tier-1' },
  { country: 'United States', code: '+1', service: 'A2P SMS', asr: '99.8%', acd: 'N/A', latency: '< 1.8s', tps: '5,000/s', status: 'Direct Tier-1' },
  { country: 'United Kingdom', code: '+44', service: 'Voice CLI', asr: '64.1%', acd: '4.4m', latency: '< 32ms', tps: '2,000/s', status: 'Direct Tier-1' },
  { country: 'United Kingdom', code: '+44', service: 'A2P SMS', asr: '99.2%', acd: 'N/A', latency: '< 2.4s', tps: '2,500/s', status: 'Direct Tier-1' },
  { country: 'Singapore', code: '+65', service: 'Voice CLI', asr: '67.0%', acd: '5.0m', latency: '< 18ms', tps: '2,000/s', status: 'Direct Tier-1' },
  { country: 'Singapore', code: '+65', service: 'OTP High-Priority', asr: '99.9%', acd: 'N/A', latency: '< 1.5s', tps: '3,000/s', status: 'Direct Tier-1' },
  { country: 'United Arab Emirates', code: '+971', service: 'Voice CLI', asr: '61.4%', acd: '4.1m', latency: '< 45ms', tps: '1,200/s', status: 'Premium CLI' },
  { country: 'United Arab Emirates', code: '+971', service: 'A2P SMS', asr: '98.8%', acd: 'N/A', latency: '< 3.0s', tps: '1,800/s', status: 'Direct Gateway' },
  { country: 'India', code: '+91', service: 'Voice CC', asr: '59.8%', acd: '3.9m', latency: '< 48ms', tps: '5,000/s', status: 'Direct Gateway' },
  { country: 'India', code: '+91', service: 'OTP High-Priority', asr: '99.5%', acd: 'N/A', latency: '< 2.0s', tps: '4,500/s', status: 'Direct Tier-1' },
  { country: 'Germany', code: '+49', service: 'Voice CLI', asr: '66.3%', acd: '4.7m', latency: '< 30ms', tps: '2,000/s', status: 'Direct Tier-1' },
  { country: 'Philippines', code: '+63', service: 'Voice CC', asr: '58.9%', acd: '4.0m', latency: '< 35ms', tps: '1,500/s', status: 'Direct Gateway' },
  { country: 'Australia', code: '+61', service: 'Voice CLI', asr: '65.8%', acd: '4.6m', latency: '< 38ms', tps: '1,800/s', status: 'Direct Tier-1' },
  { country: 'Saudi Arabia', code: '+966', service: 'A2P SMS', asr: '98.2%', acd: 'N/A', latency: '< 3.2s', tps: '1,500/s', status: 'Direct Gateway' },
  { country: 'Brazil', code: '+55', service: 'Voice CC', asr: '56.7%', acd: '3.6m', latency: '< 65ms', tps: '1,200/s', status: 'Direct Gateway' },
  { country: 'Japan', code: '+81', service: 'Voice CLI', asr: '68.2%', acd: '5.1m', latency: '< 22ms', tps: '2,200/s', status: 'Direct Tier-1' }
];

export default function RouteSearchWidget() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<'All' | 'Voice' | 'SMS'>('All');

  const filteredRoutes = SAMPLE_ROUTES.filter((r) => {
    const matchesSearch = 
      r.country.toLowerCase().includes(searchTerm.toLowerCase()) || 
      r.code.includes(searchTerm);
    
    if (selectedService === 'All') return matchesSearch;
    if (selectedService === 'Voice') return matchesSearch && r.service.includes('Voice');
    if (selectedService === 'SMS') return matchesSearch && (r.service.includes('SMS') || r.service.includes('OTP'));
    return matchesSearch;
  });

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-[#091b36] p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-sky-300 text-xs font-semibold mb-2 border border-blue-400/30">
            <Zap className="w-3.5 h-3.5" /> Live Carrier Routing Matrix
          </div>
          <h3 className="text-xl font-bold">Search Live Voice & SMS Destination Routes</h3>
          <p className="text-sm text-slate-300 mt-1">
            Check real-time CLI status, benchmark ASR, ACD, and request automated testing credentials.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 text-white text-sm font-semibold hover:from-blue-500 hover:to-sky-500 transition shadow-md whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Request Full Rate Deck</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center gap-3">
        <div className="relative w-full sm:flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search destination country (e.g., Hong Kong, USA, UK, Singapore) or code (+852)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        {/* Segmented Filter */}
        <div className="flex items-center bg-slate-200/70 p-1 rounded-xl w-full sm:w-auto">
          {(['All', 'Voice', 'SMS'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedService(filter)}
              className={`flex-1 sm:flex-initial px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedService === filter
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100/80 text-slate-700 text-xs font-semibold uppercase tracking-wider border-b border-slate-200">
            <tr>
              <th className="py-3.5 px-6">Destination</th>
              <th className="py-3.5 px-4">Service Type</th>
              <th className="py-3.5 px-4">Avg ASR</th>
              <th className="py-3.5 px-4">Avg ACD</th>
              <th className="py-3.5 px-4">Latency / Delivery</th>
              <th className="py-3.5 px-4">Route Tier</th>
              <th className="py-3.5 px-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredRoutes.slice(0, 7).map((r, i) => (
              <tr key={i} className="hover:bg-blue-50/40 transition-colors group">
                <td className="py-3.5 px-6 font-medium text-slate-900">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>{r.country}</span>
                    <span className="text-xs text-slate-400 font-mono">({r.code})</span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold ${
                    r.service.includes('Voice') 
                      ? 'bg-blue-50 text-blue-700 border border-blue-100' 
                      : 'bg-sky-50 text-sky-700 border border-sky-100'
                  }`}>
                    {r.service.includes('Voice') ? <PhoneCall className="w-3 h-3" /> : <MessageSquare className="w-3 h-3" />}
                    {r.service}
                  </span>
                </td>
                <td className="py-3.5 px-4 font-semibold text-slate-800 font-mono">{r.asr}</td>
                <td className="py-3.5 px-4 text-slate-600 font-mono">{r.acd}</td>
                <td className="py-3.5 px-4 text-slate-600 font-mono">{r.latency}</td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <Shield className="w-3 h-3" /> {r.status}
                  </span>
                </td>
                <td className="py-3.5 px-6 text-right">
                  <Link
                    href={`/contact?service=${encodeURIComponent(r.service)}&country=${encodeURIComponent(r.country)}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition"
                  >
                    Test Route
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>Active bilateral routes updated hourly via Mind Tree Hong Kong Switching Core.</span>
        </div>
        <div className="text-slate-600">
          Direct carrier inquiries: <a href="mailto:connect@mindtreecom.com" className="font-semibold text-blue-600 hover:underline">connect@mindtreecom.com</a>
        </div>
      </div>
    </div>
  );
}
