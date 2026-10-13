import React from 'react';

interface FooterProps {
  onWhatsAppClick: () => void;
  onResumeClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onWhatsAppClick, onResumeClick }) => {
  return (
    <footer className="w-full bg-[#f2f4f6] border-t border-[#e2e8f0] py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-[#e2e8f0]">
          <div className="space-y-1.5 max-w-md">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-[1.25rem] font-bold text-[#000000]">
                Tajuddin
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051d5]"></span>
            </div>
            <p className="text-[0.875rem] text-[#45474a] leading-relaxed">
              Engineering disciplined, high-order digital product design systems, resilient telemetry consoles, and tactile interfaces for ambitious companies.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-5 text-[0.875rem] font-medium text-[#45474a]">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0051d5] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://read.cv"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0051d5] transition-colors"
            >
              Read.cv
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0051d5] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0051d5] transition-colors"
            >
              Dribbble
            </a>
            <a
              href="https://figma.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0051d5] transition-colors"
            >
              Figma
            </a>
            <button
              onClick={onWhatsAppClick}
              className="hover:text-[#059669] transition-colors cursor-pointer"
            >
              WhatsApp
            </button>
            <button
              onClick={onResumeClick}
              className="text-[#0051d5] hover:underline cursor-pointer font-semibold"
            >
              Resume CV
            </button>
          </div>
        </div>

        {/* Bottom copyright & timezone */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[0.8125rem] text-[#76777b]">
          <p>© 2025 Tajuddin. Designed with precision and intent.</p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ea]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
            <span className="font-mono text-[0.75rem] text-[#45474a]">
              UTC+05:30 • Bengaluru, IN • Remote Worldwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
