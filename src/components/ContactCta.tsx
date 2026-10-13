import React, { useState } from 'react';
import { Mail, MessageSquare, FileText, Check, Copy, MapPin, Clock, ArrowRight } from 'lucide-react';

interface ContactCtaProps {
  onScheduleClick: () => void;
  onWhatsAppClick: () => void;
  onResumeClick: () => void;
}

export const ContactCta: React.FC<ContactCtaProps> = ({
  onScheduleClick,
  onWhatsAppClick,
  onResumeClick,
}) => {
  const [selectedFocus, setSelectedFocus] = useState<string>('Design System');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const focusOptions = ['Design System', 'Staff Advisory', 'SaaS Redesign', '0 - 1 Product'];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tajuddin.design@domain.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-24">
      <div className="bg-[#000000] text-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#1e293b] shadow-2xl flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-14">
        {/* Left Side: Statement & Direct Coordinates */}
        <div className="flex-1 flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1c1f] border border-[#2d3133] text-[0.75rem] text-[#838488]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0051d5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0051d5]"></span>
              </span>
              <span className="text-[#eff1f3] font-medium">Q2 / Q3 2025 Calendar Open</span>
            </div>

            <h2 className="font-display text-[2.25rem] sm:text-[3rem] font-bold tracking-tight leading-[1.1]">
              Have a high-stakes product or design challenge?
            </h2>

            <p className="text-[1rem] text-[#838488] leading-relaxed max-w-xl">
              Currently reserving staff design engineering roles, design systems overhauls, and principal UI/UX advisory for high-velocity Indian unicorns, GCC centres in Bengaluru / Hyderabad / NCR, and international tech companies.
            </p>
          </div>

          {/* Coordinates Box */}
          <div className="space-y-3 pt-4 border-t border-[#1a1c1f]">
            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-[#0b0d10] border border-[#1e293b]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0051d5]" />
                <span className="font-mono text-[0.875rem] text-white select-all">
                  tajuddin.design@domain.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[0.6875rem] text-[#838488]">Response within 24h</span>
                <button
                  onClick={handleCopyEmail}
                  className="text-[0.75rem] font-mono font-medium text-[#0051d5] hover:text-white bg-[#0051d5]/10 hover:bg-[#0051d5]/30 px-2 py-0.5 rounded transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-[#10b981]" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : '[Click to copy]'}</span>
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 text-[0.8125rem] text-[#838488]">
              <MapPin className="w-4 h-4 text-[#76777b] shrink-0" />
              <span>
                Location: <strong className="text-white font-medium">Bengaluru &amp; Hyderabad, India</strong> • Available Globally (IST / UTC+05:30 &amp; Async)
              </span>
            </div>

            {/* WhatsApp Direct */}
            <div className="flex items-center justify-between px-3 py-1.5 text-[0.8125rem] text-[#838488]">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>WhatsApp: <strong className="text-white font-mono font-medium">+91 7396613025</strong></span>
              </div>
              <button
                onClick={onWhatsAppClick}
                className="font-mono text-[0.75rem] text-[#10b981] hover:underline cursor-pointer"
              >
                [Connect Direct]
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Consultation Inquiry Form */}
        <div className="w-full lg:w-[380px] bg-[#0d1117] border border-[#21262d] rounded-2xl p-6 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#21262d]">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#94a3b8] font-semibold">
                CONSULTATION INQUIRY
              </span>
              <span className="text-[0.6875rem] font-mono text-[#38bdf8] bg-[#0284c7]/20 px-2 py-0.5 rounded">
                30 Min Intro
              </span>
            </div>

            <div>
              <label className="text-[0.75rem] font-mono uppercase tracking-wider text-[#838488] block mb-2">
                Select project focus area:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {focusOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedFocus(opt)}
                    className={`py-2 px-3 rounded-lg text-[0.75rem] font-medium text-center transition-all cursor-pointer ${
                      selectedFocus === opt
                        ? 'bg-[#0051d5] text-white shadow-sm font-semibold'
                        : 'bg-[#161b22] text-[#838488] hover:text-white hover:bg-[#21262d]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col gap-2.5 pt-2">
            <button
              onClick={onScheduleClick}
              className="w-full py-3 bg-[#ffffff] hover:bg-[#0051d5] text-[#000000] hover:text-white rounded-xl text-[0.875rem] font-bold tracking-tight transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Initiate Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onWhatsAppClick}
              className="w-full py-2.5 bg-[#059669] hover:bg-[#047857] text-white rounded-xl text-[0.8125rem] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 7396613025)</span>
            </button>

            <button
              onClick={onResumeClick}
              className="w-full py-2.5 bg-[#161b22] hover:bg-[#21262d] text-[#e2e8f0] border border-[#30363d] rounded-xl text-[0.8125rem] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#94a3b8]" />
              <span>Download Resume (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
