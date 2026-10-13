import React, { useState, useEffect } from 'react';
import { MessageSquare, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onScheduleClick: () => void;
  onWhatsAppClick: () => void;
  onArchitectureClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onScheduleClick,
  onWhatsAppClick,
  onArchitectureClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeIST, setTimeIST] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const istString = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date());
        setTimeIST(`${istString} IST`);
      } catch {
        setTimeIST('09:01 IST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f7f9fb]/90 backdrop-blur-xl border-b border-[#e2e8f0]/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-4">
        {/* Brand & Availability Status */}
        <div className="flex items-center gap-4 lg:gap-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col focus:outline-none"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-display text-[1.25rem] font-bold text-[#000000] tracking-tight group-hover:text-[#0051d5] transition-colors">
                Tajuddin
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051d5]"></span>
            </div>
            <span className="text-[0.75rem] text-[#45474a] font-normal tracking-normal -mt-0.5">
              Staff Design Engineer
            </span>
          </a>

          {/* Availability Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#eceef0] border border-[#e0e3e5] text-[0.75rem] text-[#191c1e]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0051d5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0051d5]"></span>
            </span>
            <span className="font-medium text-[#45474a]">
              Available: <span className="text-[#191c1e] font-semibold">Staff Roles / GCC Advisory</span> (BLR • HYD • Remote)
            </span>
          </div>
        </div>

        {/* Navigation & Action Buttons */}
        <div className="flex items-center gap-4 lg:gap-8">
          <nav className="hidden md:flex items-center gap-6 text-[0.875rem]">
            <button
              onClick={() => scrollToSection('work')}
              className="text-[#191c1e] font-semibold hover:text-[#0051d5] transition-colors py-1 cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('approach')}
              className="text-[#45474a] hover:text-[#191c1e] transition-colors py-1 cursor-pointer"
            >
              Approach
            </button>
            <button
              onClick={() => scrollToSection('systems-lab')}
              className="text-[#45474a] hover:text-[#191c1e] transition-colors py-1 flex items-center gap-1 cursor-pointer"
            >
              Systems Lab
              <span className="text-[0.625rem] font-mono px-1.5 py-0.2 bg-[#dbe1ff] text-[#00174b] rounded font-semibold">
                v1.8
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#45474a] hover:text-[#191c1e] transition-colors py-1 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={onScheduleClick}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 text-[0.875rem] font-medium text-white bg-[#000000] hover:bg-[#0051d5] px-4 py-2 rounded-lg transition-colors duration-150 shadow-sm cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule Intro</span>
            </button>

            <button
              onClick={onWhatsAppClick}
              className="inline-flex items-center justify-center gap-1.5 text-[0.875rem] font-medium text-[#047857] bg-[#ecfdf5] hover:bg-[#d1fae5] border border-[#a7f3d0] px-3.5 py-2 rounded-lg transition-colors duration-150 cursor-pointer"
              title="Chat on WhatsApp (+91 7396613025)"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#059669]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#45474a] hover:text-[#000000] rounded-lg hover:bg-[#eceef0] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-5 py-4 bg-[#f7f9fb] border-b border-[#e2e8f0] flex flex-col gap-3 animate-in slide-in-from-top-2">
          <div className="flex items-center justify-between pb-2 border-b border-[#eceef0] text-[0.75rem] text-[#45474a]">
            <span>Active Timezone: UTC+5:30</span>
            <span className="font-mono font-semibold text-[#0051d5]">{timeIST}</span>
          </div>
          <button
            onClick={() => scrollToSection('work')}
            className="text-left py-2 font-medium text-[#191c1e] hover:text-[#0051d5]"
          >
            01 / Curated Portfolio
          </button>
          <button
            onClick={() => scrollToSection('approach')}
            className="text-left py-2 font-medium text-[#45474a] hover:text-[#191c1e]"
          >
            02 / Approach & Specialties
          </button>
          <button
            onClick={() => scrollToSection('systems-lab')}
            className="text-left py-2 font-medium text-[#45474a] hover:text-[#191c1e] flex items-center justify-between"
          >
            <span>03 / Interactive Systems Lab</span>
            <span className="text-[0.625rem] font-mono px-1.5 py-0.5 bg-[#dbe1ff] text-[#00174b] rounded">v1.8</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-left py-2 font-medium text-[#45474a] hover:text-[#191c1e]"
          >
            04 / Contact & Consultation
          </button>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScheduleClick();
              }}
              className="w-full py-2.5 bg-[#000000] text-white rounded-lg font-medium text-[0.875rem] text-center"
            >
              Schedule 30-Min Intro
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onArchitectureClick();
              }}
              className="w-full py-2 bg-[#eceef0] text-[#191c1e] rounded-lg font-medium text-[0.875rem] text-center flex items-center justify-center gap-1.5"
            >
              <span>View Architecture Specs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
