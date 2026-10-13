import React, { useState } from 'react';
import { Eye, ArrowRight, ShieldCheck, CheckCircle2, Lock, Smartphone } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';

interface CuratedPortfolioProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  onOpenUpiSimulator: () => void;
}

export const CuratedPortfolio: React.FC<CuratedPortfolioProps> = ({
  onSelectCaseStudy,
  onOpenUpiSimulator,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'systems' | 'fintech' | 'genai'>('all');

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (activeFilter === 'all') return true;
    return study.category === activeFilter;
  });

  return (
    <section id="work" className="w-full bg-[#ffffff] py-20 md:py-28 border-y border-[#e2e8f0]/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-12">
        {/* Section Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-[#eceef0]">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[0.75rem] font-mono uppercase tracking-widest text-[#0051d5] font-semibold">
              01 / CURATED PORTFOLIO
            </span>
            <h2 className="font-display text-[2.25rem] sm:text-[2.75rem] font-bold text-[#000000] tracking-tight">
              Selected Case Studies
            </h2>
            <p className="text-[1rem] text-[#45474a] leading-relaxed">
              High-order product architecture, ergonomic density, and verifiable business impact.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Work' },
              { id: 'systems', label: 'Systems & Infra' },
              { id: 'fintech', label: 'Fintech' },
              { id: 'genai', label: 'Generative AI & Tools' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`text-[0.8125rem] font-medium px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#000000] text-[#ffffff] shadow-sm'
                    : 'bg-[#f2f4f6] text-[#45474a] hover:bg-[#eceef0] hover:text-[#191c1e]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Stack */}
        <div className="flex flex-col gap-12">
          {filteredStudies.map((study, index) => {
            const isLoomis = study.id === 'loomis-pay';
            const isReversed = index % 2 === 1;

            return (
              <article
                key={study.id}
                className="bg-[#f2f4f6] rounded-2xl overflow-hidden border border-[#e2e8f0] group hover:border-[#c6c6ca] transition-all duration-300 flex flex-col lg:flex-row shadow-xs"
              >
                {/* Media Container or UPI Interactive Mockup */}
                <div
                  className={`lg:w-7/12 relative overflow-hidden bg-[#0d0f12] flex items-center justify-center min-h-[360px] lg:min-h-[460px] ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {isLoomis ? (
                    /* High-Fidelity UPI Phone Screen directly visible like in the screenshot! */
                    <div className="w-full h-full p-6 sm:p-8 flex items-center justify-center bg-gradient-to-br from-[#e2e8f0] to-[#f8fafc]">
                      <div className="w-full max-w-[340px] bg-white rounded-3xl shadow-xl border border-[#cbd5e1] p-5 flex flex-col gap-3.5 text-[#0f172a] transform transition-transform group-hover:scale-[1.02]">
                        {/* Phone Top Header */}
                        <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-2 text-[0.7rem] font-mono text-[#64748b]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                            <span className="font-semibold text-[#0f172a]">TAJUDDIN • UPI PAY</span>
                          </div>
                          <span className="text-[#0051d5] font-semibold bg-[#eff6ff] px-2 py-0.5 rounded">
                            ₹ INR Instant
                          </span>
                        </div>

                        {/* Amount Card */}
                        <div className="text-center py-2 bg-[#f8fafc] rounded-xl border border-[#f1f5f9]">
                          <span className="text-[0.6875rem] text-[#64748b] uppercase tracking-wider font-medium">
                            Amount to Pay
                          </span>
                          <div className="font-display text-[1.875rem] font-extrabold text-[#0f172a] tracking-tight">
                            ₹38,450.00
                          </div>
                          <div className="inline-flex items-center gap-1 text-[0.7rem] text-[#059669] font-medium mt-0.5">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>UPI Rail: tajuddin@upi • Verified Merchant</span>
                          </div>
                        </div>

                        {/* Breakdown */}
                        <div className="space-y-1 text-[0.75rem] text-[#475569] bg-[#ffffff] px-1 py-1">
                          <div className="flex justify-between">
                            <span>Recipient</span>
                            <span className="font-medium text-[#0f172a]">Tajuddin UX &amp; System Lab</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>₹37,500.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>GST (18% Input Tax)</span>
                            <span>₹675.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Platform / Protocol Fee</span>
                            <span>₹275.00</span>
                          </div>
                          <div className="flex justify-between font-bold text-[#0f172a] pt-1.5 border-t border-[#f1f5f9]">
                            <span>Total Payable</span>
                            <span className="text-[#0051d5]">₹38,450.00</span>
                          </div>
                        </div>

                        {/* Payment Method Selector */}
                        <div className="flex items-center justify-between p-2.5 rounded-xl border border-[#0051d5]/40 bg-[#eff6ff]/60">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-5 bg-[#0051d5] rounded flex items-center justify-center text-white text-[0.6rem] font-bold">
                              RuPay
                            </div>
                            <div className="text-left">
                              <p className="text-[0.75rem] font-semibold text-[#0f172a]">RuPay Platinum Debit</p>
                              <p className="text-[0.65rem] text-[#64748b]">•••• 8399 (Autopay Active)</p>
                            </div>
                          </div>
                          <CheckCircle2 className="w-4 h-4 text-[#0051d5]" />
                        </div>

                        {/* Biometric Prompt */}
                        <div className="text-center text-[0.6875rem] text-[#64748b]">
                          Biometric Verification Enabled<br />Verify with Touch ID or Device Passcode
                        </div>

                        {/* Action CTA */}
                        <button
                          onClick={onOpenUpiSimulator}
                          className="w-full py-2.5 bg-[#0f172a] hover:bg-[#0051d5] text-white rounded-xl text-[0.8125rem] font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Confirm Payment of ₹38,450.00</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img
                        src={study.imageUrl}
                        alt={study.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-[#000000]/80 backdrop-blur-md text-white text-[0.75rem] px-2.5 py-1 rounded font-medium">
                          {study.roleBadge}
                        </span>
                        <span className="bg-[#0051d5] text-white text-[0.75rem] px-2.5 py-1 rounded font-semibold">
                          {study.domainBadge}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Content Side */}
                <div
                  className={`lg:w-5/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.75rem] font-mono text-[#76777b]">
                        {study.yearDuration}
                      </span>
                      <span className="text-[0.75rem] font-mono text-[#0051d5] font-semibold tracking-wider">
                        {study.categoryTag}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-display text-[1.75rem] font-bold text-[#000000] tracking-tight">
                        {study.title}
                      </h3>
                      <p className="text-[0.9375rem] text-[#45474a] leading-relaxed">
                        {study.summary}
                      </p>
                    </div>

                    {/* Quantified Impact Banner */}
                    <div className="bg-[#ffffff] p-4 rounded-xl border border-[#e2e8f0] space-y-1">
                      <p className="text-[0.6875rem] font-mono text-[#0051d5] uppercase tracking-wider font-semibold">
                        {study.quantifiedImpactTitle}
                      </p>
                      <p className="font-display text-[1.25rem] font-bold text-[#000000]">
                        {study.quantifiedImpactMetric}
                      </p>
                      <p className="text-[0.8125rem] text-[#45474a]">
                        {study.quantifiedImpactDescription}
                      </p>
                    </div>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.75rem] bg-[#e6e8ea] text-[#191c1e] px-2.5 py-0.5 rounded font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[0.75rem] bg-[#dbe1ff]/60 text-[#00174b] px-2 py-0.5 rounded font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center gap-4">
                    <button
                      onClick={() => onSelectCaseStudy(study)}
                      className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-[#000000] hover:text-[#0051d5] bg-white border border-[#e2e8f0] px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-[#0051d5]" />
                      <span>Preview Prototype Specs</span>
                    </button>

                    <button
                      onClick={() => onSelectCaseStudy(study)}
                      className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-[#000000] group-hover:text-[#0051d5] transition-colors cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
