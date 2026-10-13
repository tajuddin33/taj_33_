import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Globe, Terminal, Layers } from 'lucide-react';

interface HeroProps {
  onArchitectureClick: () => void;
  onBookingClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onArchitectureClick,
  onBookingClick,
}) => {
  const [timeIST, setTimeIST] = useState('09:01 IST');

  useEffect(() => {
    const updateTime = () => {
      try {
        const ist = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setTimeIST(`${ist} IST`);
      } catch {
        setTimeIST('09:01:00 IST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="flex flex-col gap-10">
        {/* Top Status & Spec Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e2e8f0] pb-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[0.75rem] font-semibold tracking-wider text-[#45474a] uppercase">
              STAFF UI/UX &amp; DESIGN SYSTEMS ARCHITECT
            </span>
            <span className="w-1 h-1 rounded-full bg-[#c6c6ca]"></span>
            <span className="font-mono text-[0.75rem] text-[#0051d5] font-semibold bg-[#dbe1ff]/60 px-1.5 py-0.5 rounded">
              v2025.4.0
            </span>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              onClick={onBookingClick}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eceef0] hover:bg-[#e0e3e5] text-[0.75rem] text-[#191c1e] font-medium transition-colors cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0051d5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0051d5]"></span>
              </span>
              <span>Booking Q2/Q3</span>
            </button>

            <button
              onClick={onArchitectureClick}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ffffff] hover:bg-[#eceef0] border border-[#e2e8f0] text-[0.75rem] text-[#45474a] hover:text-[#191c1e] font-medium transition-colors cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-[#0051d5]" />
              <span>Architecture Specs</span>
            </button>
          </div>
        </div>

        {/* Main Headline & Identity */}
        <div className="flex flex-col gap-6 max-w-5xl">
          <div className="flex items-center gap-2 text-[#0051d5] text-[0.8125rem] font-semibold tracking-widest uppercase">
            <Terminal className="w-4 h-4" />
            <span>TAJUDDIN — DESIGN SYSTEMS &amp; PRODUCT ENGINEER</span>
          </div>

          <h1 className="font-display text-[2.75rem] sm:text-[3.5rem] lg:text-[4.25rem] font-bold text-[#000000] tracking-tight leading-[1.06]">
            Designing intuitive experiences at scale.
          </h1>

          <p className="font-sans text-[1.125rem] sm:text-[1.25rem] text-[#45474a] font-normal leading-relaxed max-w-4xl">
            Senior UI/UX Designer &amp; Design Engineer bridging enterprise complexity, developer tooling, and consumer scale for high-velocity Indian tech unicorns, global capability centres (GCCs), and international engineering orgs.
          </p>
        </div>

        {/* 3 Key Metadata Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {/* Card 1: Experience */}
          <div className="bg-[#f2f4f6] p-6 rounded-xl flex flex-col justify-between gap-5 group hover:bg-[#eceef0] hover:shadow-sm border border-[#e2e8f0]/60 transition-all duration-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#45474a] font-semibold">
                  EXPERIENCE
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#0051d5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-[0.9375rem] text-[#191c1e] font-medium leading-relaxed">
                Senior UI/UX Designer &amp; Design Engineer bridging enterprise complexity, developer tooling, and consumer scale for high-velocity Indian tech unicorns, global capability centres (GCCs), and international engineering orgs.
              </p>
              <p className="text-[0.8125rem] text-[#76777b]">
                SaaS enterprise, cloud telemetry &amp; fintech infrastructures.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e0e3e5] flex items-center justify-between text-[0.8125rem]">
              <span className="font-bold text-[#000000]">18+ Shipped Products</span>
              <span className="font-semibold text-[#0051d5]">99.8% CSAT</span>
            </div>
          </div>

          {/* Card 2: Specialization */}
          <div className="bg-[#f2f4f6] p-6 rounded-xl flex flex-col justify-between gap-5 group hover:bg-[#eceef0] hover:shadow-sm border border-[#e2e8f0]/60 transition-all duration-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#45474a] font-semibold">
                  SPECIALIZATION
                </span>
                <Sparkles className="w-4 h-4 text-[#0051d5]" />
              </div>
              <p className="text-[0.9375rem] text-[#191c1e] font-medium leading-relaxed">
                Senior UI/UX Designer &amp; Design Engineer bridging enterprise complexity, developer tooling, and consumer scale for high-velocity Indian tech unicorns, global capability centres (GCCs), and international engineering orgs.
              </p>
              <p className="text-[0.8125rem] text-[#76777b]">
                Token pipelines, ergonomics &amp; high information density.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e0e3e5] flex items-center justify-between text-[0.8125rem]">
              <span className="font-bold text-[#000000]">WCAG AAA Compliant</span>
              <span className="font-semibold text-[#0051d5]">Multi-brand Sync</span>
            </div>
          </div>

          {/* Card 3: Availability & Base */}
          <div className="bg-[#f2f4f6] p-6 rounded-xl flex flex-col justify-between gap-5 group hover:bg-[#eceef0] hover:shadow-sm border border-[#e2e8f0]/60 transition-all duration-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#45474a] font-semibold">
                  AVAILABILITY &amp; BASE
                </span>
                <Globe className="w-4 h-4 text-[#0051d5]" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-[1.5rem] font-bold text-[#000000]">
                    BLR / HYD / Remote
                  </h3>
                  <span className="text-[0.6875rem] font-medium px-2 py-0.5 rounded bg-[#dbe1ff] text-[#00174b]">
                    India &amp; Global
                  </span>
                </div>
                <p className="text-[0.875rem] text-[#45474a] mt-2 leading-relaxed">
                  Serving fast-growth Indian tech unicorns, Global GCC captives &amp; international teams.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e0e3e5] flex items-center justify-between text-[0.8125rem]">
              <span className="text-[#76777b]">Active Timezone</span>
              <span className="font-mono font-bold text-[#0051d5]">{timeIST}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
