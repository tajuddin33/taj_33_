import React from 'react';
import { X, Layers, Cpu, CheckCircle2, TrendingUp, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '../data/portfolioData';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onOpenUpiSimulator?: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  study,
  onClose,
  onOpenUpiSimulator,
}) => {
  if (!study) return null;

  const isLoomis = study.id === 'loomis-pay';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#ffffff] rounded-2xl shadow-2xl border border-[#cbd5e1] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e8f0] bg-[#f8fafc]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.75rem] font-bold text-[#0051d5] bg-[#eff6ff] px-2.5 py-1 rounded">
              {study.categoryTag}
            </span>
            <span className="text-[0.875rem] text-[#64748b] font-mono">{study.yearDuration}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#64748b] hover:text-[#0f172a] hover:bg-[#e2e8f0] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Title & Roles */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#0f172a] text-white text-[0.75rem] px-2.5 py-1 rounded font-medium">
                {study.roleBadge}
              </span>
              <span className="bg-[#0051d5] text-white text-[0.75rem] px-2.5 py-1 rounded font-medium">
                {study.domainBadge}
              </span>
            </div>

            <h2 className="font-display text-[2rem] sm:text-[2.5rem] font-extrabold text-[#0f172a] tracking-tight">
              {study.title}
            </h2>

            <p className="text-[1.125rem] text-[#475569] leading-relaxed">
              {study.summary}
            </p>
          </div>

          {/* Banner Image Preview */}
          <div className="relative rounded-xl overflow-hidden border border-[#e2e8f0] bg-[#0d0f12]">
            <img
              src={study.imageUrl}
              alt={study.imageAlt}
              className="w-full max-h-[420px] object-cover"
            />
            {isLoomis && onOpenUpiSimulator && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
                <button
                  onClick={onOpenUpiSimulator}
                  className="bg-white hover:bg-[#f1f5f9] text-[#0f172a] font-bold text-[0.875rem] px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
                >
                  <span>Launch Live UPI Flow Simulator</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0051d5]" />
                </button>
              </div>
            )}
          </div>

          {/* Metrics Grid */}
          <div className="space-y-3">
            <h4 className="text-[0.75rem] font-mono uppercase tracking-wider text-[#64748b] font-bold">
              VERIFIED BUSINESS &amp; TECHNICAL IMPACT
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {study.specs.metrics.map((m) => (
                <div key={m.label} className="bg-[#f8fafc] border border-[#e2e8f0] p-4 rounded-xl space-y-1">
                  <span className="text-[0.75rem] text-[#64748b]">{m.label}</span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-[1.5rem] font-bold text-[#0f172a]">{m.value}</span>
                    <span className="text-[0.75rem] font-mono font-bold text-[#059669] bg-[#ecfdf5] px-1.5 py-0.5 rounded">
                      {m.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem & Architecture Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-[#f8fafc] p-5 rounded-xl border border-[#e2e8f0] space-y-2">
              <div className="flex items-center gap-2 text-[#b91c1c] text-[0.8125rem] font-bold">
                <ShieldAlert className="w-4 h-4" />
                <span>The Core Architectural Challenge</span>
              </div>
              <p className="text-[0.875rem] text-[#475569] leading-relaxed">
                {study.specs.problemStatement}
              </p>
            </div>

            <div className="bg-[#f8fafc] p-5 rounded-xl border border-[#e2e8f0] space-y-2">
              <div className="flex items-center gap-2 text-[#0051d5] text-[0.8125rem] font-bold">
                <Layers className="w-4 h-4" />
                <span>Engineered Solution &amp; Topology</span>
              </div>
              <p className="text-[0.875rem] text-[#475569] leading-relaxed">
                {study.specs.architectureOverview}
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3">
            <h4 className="text-[0.75rem] font-mono uppercase tracking-wider text-[#64748b] font-bold">
              KEY DESIGN &amp; ENGINEERING DELIVERABLES
            </h4>
            <div className="space-y-2">
              {study.specs.keyDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-[#f8fafc] rounded-lg border border-[#f1f5f9]">
                  <CheckCircle2 className="w-4 h-4 text-[#0051d5] shrink-0 mt-0.5" />
                  <span className="text-[0.875rem] text-[#334155]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Specs & Token Inventory */}
          <div className="pt-4 border-t border-[#e2e8f0] flex flex-wrap items-center justify-between gap-4 text-[0.8125rem] text-[#64748b]">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#0051d5]" />
              <span>Token Inventory: <strong className="text-[#0f172a] font-mono">{study.specs.designTokensCount} Tokens</strong></span>
            </div>
            <div>
              <span>Target: <strong className="text-[#0f172a]">{study.specs.userSegments}</strong></span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#f8fafc] border-t border-[#e2e8f0] flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {study.techStack.map((tech) => (
              <span key={tech} className="font-mono text-[0.75rem] bg-[#e2e8f0] text-[#334155] px-2 py-0.5 rounded">
                {tech}
              </span>
            ))}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0f172a] hover:bg-[#0051d5] text-white text-[0.8125rem] font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};
