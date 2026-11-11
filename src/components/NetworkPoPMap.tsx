'use client';

import { useState } from 'react';
import { Server, Activity, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface PoPNode {
  city: string;
  country: string;
  role: string;
  latency: string;
  capacity: string;
  datacenters: string;
  status: 'Operational' | 'Tier-1 Core';
  x: number; // percentage for map positioning
  y: number;
}

const POPS: PoPNode[] = [
  { city: 'Hong Kong', country: 'Hong Kong SAR (HQ)', role: 'Global Headquarters & APAC Primary Core', latency: '< 2ms', capacity: '100 Gbps Core', datacenters: 'Equinix HK1/HK2 & Mega-i', status: 'Tier-1 Core', x: 78, y: 48 },
  { city: 'Singapore', country: 'Singapore', role: 'Southeast Asia Switching Gateway', latency: '< 16ms', capacity: '80 Gbps Core', datacenters: 'Equinix SG1 & Global Switch', status: 'Operational', x: 74, y: 58 },
  { city: 'Tokyo', country: 'Japan', role: 'East Asia Low-Latency PoP', latency: '< 28ms', capacity: '50 Gbps Core', datacenters: 'Equinix TY2', status: 'Operational', x: 84, y: 40 },
  { city: 'Frankfurt', country: 'Germany', role: 'Continental Europe Telecom Hub', latency: '< 22ms', capacity: '80 Gbps Core', datacenters: 'DE-CIX & Equinix FR5', status: 'Operational', x: 51, y: 34 },
  { city: 'London', country: 'United Kingdom', role: 'UK & Transatlantic Gateway', latency: '< 24ms', capacity: '75 Gbps Core', datacenters: 'Telehouse North & Equinix LD4', status: 'Operational', x: 47, y: 32 },
  { city: 'New York', country: 'United States', role: 'North America Primary Switching Node', latency: '< 20ms', capacity: '100 Gbps Core', datacenters: '60 Hudson St & NYI', status: 'Tier-1 Core', x: 28, y: 36 },
  { city: 'Dubai', country: 'UAE', role: 'Middle East & GCC Gateway', latency: '< 38ms', capacity: '40 Gbps Core', datacenters: 'Datamena DX1', status: 'Operational', x: 62, y: 45 }
];

export default function NetworkPoPMap() {
  const [activePoP, setActivePoP] = useState<PoPNode>(POPS[0]);

  return (
    <div className="bg-[#071326] text-white rounded-3xl p-8 lg:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-sky-400 text-xs font-semibold mb-3 border border-blue-400/30">
            <Activity className="w-3.5 h-3.5 text-emerald-400" /> Distributed Telecom Switching Core
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Global High-Availability PoP Infrastructure
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Mind Tree Communication operates resilient carrier nodes anchored at our Hong Kong headquarters, interconnected directly with Tier-1 carriers worldwide to guarantee sub-millisecond local switching.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 text-xs font-bold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition flex items-center gap-1.5 shadow-md"
          >
            <span>Request SIP / SMPP Interconnect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Grid: Map visualization + Selected Node details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        
        {/* Interactive Visual Canvas */}
        <div className="lg:col-span-8 bg-[#0b1c36] rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between relative min-h-[360px] overflow-hidden">
          
          {/* Subtle world grid outline */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Live Global Carrier Routing Matrix
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              All 7 Global PoPs Active
            </span>
          </div>

          {/* Node selector buttons representing the map */}
          <div className="relative z-10 my-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {POPS.map((pop) => {
              const isSelected = activePoP.city === pop.city;
              return (
                <button
                  key={pop.city}
                  onClick={() => setActivePoP(pop)}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'bg-blue-600/30 border-sky-400 shadow-lg shadow-blue-500/20'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-sky-400 animate-pulse' : 'bg-emerald-400'}`}></span>
                      {pop.city}
                    </span>
                    <span className="text-[10px] text-sky-400 font-mono font-semibold">{pop.latency}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">{pop.capacity}</div>
                </button>
              );
            })}
          </div>

          <div className="relative z-10 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" /> BGP-4 Anycast Routing
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-emerald-400" /> Hardware Session Border Controllers (SBC)
              </span>
            </div>
            <span className="text-slate-500 font-mono">Protocol: SIP 2.0 / SMPP v3.4 / REST</span>
          </div>
        </div>

        {/* Selected Node Detailed Card */}
        <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 to-[#0c1f3d] rounded-2xl p-6 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-500/20 text-sky-300 border border-blue-400/30">
                {activePoP.status}
              </span>
              <span className="text-xs text-slate-400 font-mono">Node ID: MT-{activePoP.city.toUpperCase().slice(0, 3)}</span>
            </div>

            <h4 className="text-2xl font-bold text-white">{activePoP.city}</h4>
            <p className="text-xs text-sky-400 font-medium mt-0.5">{activePoP.country}</p>

            <div className="mt-6 space-y-4">
              <div>
                <span className="text-xs text-slate-400 block mb-1">PoP Role</span>
                <span className="text-sm font-semibold text-slate-200">{activePoP.role}</span>
              </div>

              <div>
                <span className="text-xs text-slate-400 block mb-1">Co-location Data Centers</span>
                <span className="text-sm font-semibold text-slate-200">{activePoP.datacenters}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Average Latency</span>
                  <span className="text-lg font-bold text-emerald-400 font-mono">{activePoP.latency}</span>
                </div>
                <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Core Switching</span>
                  <span className="text-lg font-bold text-sky-400 font-mono">{activePoP.capacity}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800">
            <Link
              href={`/contact?node=${encodeURIComponent(activePoP.city)}`}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition flex items-center justify-center gap-1.5 shadow-md"
            >
              <Server className="w-4 h-4" />
              <span>Interconnect at {activePoP.city}</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
