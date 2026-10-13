import React from 'react';
import { GitBranch, LayoutGrid, MousePointerClick, BarChart3, Check } from 'lucide-react';
import { METHODOLOGY_PILLARS } from '../data/portfolioData';

export const Methodology: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GitBranch className="w-5 h-5" />;
      case 1:
        return <LayoutGrid className="w-5 h-5" />;
      case 2:
        return <MousePointerClick className="w-5 h-5" />;
      case 3:
      default:
        return <BarChart3 className="w-5 h-5" />;
    }
  };

  return (
    <section id="approach" className="w-full bg-[#ffffff] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-12">
        {/* Section Header & Quote */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-[#eceef0]">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[0.75rem] font-mono uppercase tracking-widest text-[#0051d5] font-semibold">
              03 / METHODOLOGY &amp; CRAFT
            </span>
            <h2 className="font-display text-[2.25rem] sm:text-[2.75rem] font-bold text-[#000000] tracking-tight">
              Approach &amp; Specialties
            </h2>
            <p className="text-[1rem] text-[#45474a] leading-relaxed">
              A systems-first philosophy grounded in rigorous architecture. I bridge technical feasibility with tactile, intentional interaction design.
            </p>
          </div>

          {/* Principle Callout */}
          <div className="max-w-md bg-[#f2f4f6] p-4 sm:p-5 rounded-xl border border-[#e2e8f0]">
            <p className="text-[0.875rem] text-[#191c1e] italic leading-relaxed">
              "Great software looks simple because its complexity has been thoughtfully absorbed by the designer, not discarded."
            </p>
            <div className="mt-2 flex items-center justify-between text-[0.75rem]">
              <span className="text-[#76777b] font-medium">— Tajuddin Product Principle</span>
              <span className="text-[#0051d5] font-mono font-semibold">Staff Archetype</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {METHODOLOGY_PILLARS.map((pillar, index) => (
            <div
              key={pillar.pillarNumber}
              className="bg-[#f2f4f6] p-6 rounded-xl flex flex-col justify-between gap-6 group hover:bg-[#eceef0] hover:shadow-xs border border-[#e2e8f0]/80 transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#ffffff] border border-[#e2e8f0] flex items-center justify-center text-[#191c1e] group-hover:bg-[#000000] group-hover:text-white transition-colors shadow-2xs">
                  {getIcon(index)}
                </div>

                <div className="space-y-1">
                  <span className="text-[0.6875rem] font-mono text-[#0051d5] font-semibold uppercase tracking-wider">
                    {pillar.pillarNumber}
                  </span>
                  <h3 className="font-display text-[1.125rem] font-bold text-[#000000] leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-[0.8125rem] text-[#45474a] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#e2e8f0] flex flex-wrap gap-1.5">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.6875rem] bg-[#ffffff] border border-[#e2e8f0] px-2 py-0.5 rounded text-[#45474a] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Partnership Strip */}
        <div className="bg-[#f7f9fb] rounded-2xl border border-[#e2e8f0] p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-[0.75rem] font-mono uppercase tracking-widest text-[#0051d5] font-semibold">
              ENGINEERING PARTNERSHIP
            </span>
            <h3 className="font-display text-[1.75rem] font-bold text-[#000000] tracking-tight">
              Design that respects engineering reality.
            </h3>
            <p className="text-[0.9375rem] text-[#45474a] leading-relaxed">
              I write clean front-end code, comprehend technical constraints natively, and collaborate with engineers as peers—eliminating back-and-forth friction before the first line is committed.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['React / Next.js', 'Design Tokens JSON', 'Tailwind CSS', 'Git Workflows'].map((spec) => (
                <div
                  key={spec}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#e2e8f0] rounded-md font-mono text-[0.75rem] text-[#191c1e]"
                >
                  <Check className="w-3.5 h-3.5 text-[#0051d5]" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inline Visual Tech Spec Diagram */}
          <div className="w-full lg:w-[400px] bg-[#0f172a] rounded-xl p-5 border border-[#334155] shadow-sm flex flex-col gap-3 font-mono text-[0.75rem] text-[#e2e8f0]">
            <div className="flex items-center justify-between border-b border-[#1e293b] pb-2 text-[#94a3b8]">
              <span>pipeline.spec.json</span>
              <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
            </div>

            <div className="space-y-1 bg-[#0b1120] p-3 rounded-lg border border-[#1e293b] text-[#38bdf8]">
              <p><span className="text-[#c084fc]">const</span> tokenGraph = {'{'}</p>
              <p className="pl-4">mode: <span className="text-[#34d399]">"multi-platform"</span>,</p>
              <p className="pl-4">syncRate: <span className="text-[#34d399]">"sub-second"</span>,</p>
              <p className="pl-4">wcagContrast: <span className="text-[#34d399]">"7.1:1 (AAA)"</span>,</p>
              <p className="pl-4">coverage: <span className="text-[#34d399]">"100%"</span></p>
              <p>{'}'};</p>
            </div>

            <div className="flex items-center justify-between text-[#94a3b8] pt-1">
              <span>Automated CI token tests</span>
              <span className="text-[#34d399] font-semibold">Passed • 0.18s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
