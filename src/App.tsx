import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CuratedPortfolio } from './components/CuratedPortfolio';
import { SystemsLab } from './components/SystemsLab';
import { Methodology } from './components/Methodology';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { UpiPaymentModal } from './components/UpiPaymentModal';
import { ScheduleModal } from './components/ScheduleModal';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { CaseStudy, CASE_STUDIES } from './data/portfolioData';

export default function App() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [upiModalOpen, setUpiModalOpen] = useState(false);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global shortcut for Command Palette (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hi Tajuddin, I reviewed your design systems & product architecture portfolio. Interested in discussing an engagement.'
    );
    window.open(`https://wa.me/917396613025?text=${text}`, '_blank');
  };

  const handleOpenArchitectureSpecs = () => {
    // Open Kinetix design system or Apex Cloud OS specs
    const kinetix = CASE_STUDIES.find((s) => s.id === 'kinetix-design-system');
    if (kinetix) {
      setSelectedStudy(kinetix);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col font-sans selection:bg-[#dbe1ff] selection:text-[#00174b]">
      {/* Top Fixed Header */}
      <Header
        onScheduleClick={() => setScheduleModalOpen(true)}
        onWhatsAppClick={handleWhatsApp}
        onArchitectureClick={handleOpenArchitectureSpecs}
      />

      {/* Main Page Layout */}
      <main className="flex-1 w-full pt-20">
        {/* Hero Section */}
        <Hero
          onArchitectureClick={handleOpenArchitectureSpecs}
          onBookingClick={() => setScheduleModalOpen(true)}
        />

        {/* 01 / Curated Portfolio & Case Studies */}
        <CuratedPortfolio
          onSelectCaseStudy={(study) => setSelectedStudy(study)}
          onOpenUpiSimulator={() => setUpiModalOpen(true)}
        />

        {/* 02 / Interactive Systems Lab (Live Token Playground) */}
        <SystemsLab
          onTriggerCommandPalette={() => setCommandPaletteOpen(true)}
        />

        {/* 03 / Approach & Specialties */}
        <Methodology />

        {/* Bottom Consultation & Engagement Call-To-Action */}
        <ContactCta
          onScheduleClick={() => setScheduleModalOpen(true)}
          onWhatsAppClick={handleWhatsApp}
          onResumeClick={() => setResumeModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onWhatsAppClick={handleWhatsApp}
        onResumeClick={() => setResumeModalOpen(true)}
      />

      {/* Interactive Modals */}
      <CaseStudyModal
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
        onOpenUpiSimulator={() => {
          setSelectedStudy(null);
          setUpiModalOpen(true);
        }}
      />

      <UpiPaymentModal
        isOpen={upiModalOpen}
        onClose={() => setUpiModalOpen(false)}
      />

      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectCaseStudy={(study) => setSelectedStudy(study)}
        onScheduleClick={() => setScheduleModalOpen(true)}
        onWhatsAppClick={handleWhatsApp}
        onResumeClick={() => setResumeModalOpen(true)}
      />
    </div>
  );
}
