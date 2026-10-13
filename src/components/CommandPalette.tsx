import React, { useState, useEffect } from 'react';
import { Search, X, Layers, Calendar, MessageSquare, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
  onScheduleClick: () => void;
  onWhatsAppClick: () => void;
  onResumeClick: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectCaseStudy,
  onScheduleClick,
  onWhatsAppClick,
  onResumeClick,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredStudies = CASE_STUDIES.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.summary.toLowerCase().includes(query.toLowerCase()) ||
      s.categoryTag.toLowerCase().includes(query.toLowerCase())
  );

  const scrollTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#cbd5e1] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#e2e8f0] gap-3">
          <Search className="w-5 h-5 text-[#64748b]" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search systems (e.g. Apex, UPI, Tokens)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-[0.9375rem] text-[#0f172a] focus:outline-none placeholder:text-[#94a3b8]"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-[#94a3b8] hover:text-[#0f172a] hover:bg-[#f1f5f9]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {/* Case Studies */}
          <div className="px-3 py-1.5 text-[0.6875rem] font-mono uppercase tracking-wider text-[#94a3b8] font-bold">
            Flagship Case Studies
          </div>
          {filteredStudies.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                onClose();
                onSelectCaseStudy(s);
              }}
              className="w-full px-3 py-2.5 rounded-xl hover:bg-[#f8fafc] text-left flex items-center justify-between group transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#eff6ff] text-[#0051d5] flex items-center justify-center font-bold text-[0.75rem]">
                  {s.title.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[0.875rem] text-[#0f172a] group-hover:text-[#0051d5]">
                    {s.title}
                  </p>
                  <p className="text-[0.75rem] text-[#64748b] line-clamp-1">{s.summary}</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#0051d5] group-hover:translate-x-0.5 transition-transform" />
            </button>
          ))}

          {/* Quick Actions */}
          <div className="px-3 pt-3 pb-1.5 text-[0.6875rem] font-mono uppercase tracking-wider text-[#94a3b8] font-bold">
            Quick Actions
          </div>
          <button
            onClick={() => {
              onClose();
              onScheduleClick();
            }}
            className="w-full px-3 py-2 rounded-xl hover:bg-[#f8fafc] text-left flex items-center gap-3 transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0051d5]" />
            <span className="text-[0.8125rem] text-[#334155] font-medium">Schedule 30-Min Discovery Intro</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onWhatsAppClick();
            }}
            className="w-full px-3 py-2 rounded-xl hover:bg-[#f8fafc] text-left flex items-center gap-3 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#059669]" />
            <span className="text-[0.8125rem] text-[#334155] font-medium">Connect on WhatsApp (+91 7396613025)</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onResumeClick();
            }}
            className="w-full px-3 py-2 rounded-xl hover:bg-[#f8fafc] text-left flex items-center gap-3 transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#475569]" />
            <span className="text-[0.8125rem] text-[#334155] font-medium">View &amp; Download Resume (PDF)</span>
          </button>

          <button
            onClick={() => scrollTo('systems-lab')}
            className="w-full px-3 py-2 rounded-xl hover:bg-[#f8fafc] text-left flex items-center gap-3 transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#c084fc]" />
            <span className="text-[0.8125rem] text-[#334155] font-medium">Jump to Interactive Design Token Lab</span>
          </button>
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-[#f8fafc] border-t border-[#e2e8f0] flex items-center justify-between text-[0.6875rem] text-[#94a3b8] font-mono">
          <span>Use ⌘K / Ctrl+K anytime</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
