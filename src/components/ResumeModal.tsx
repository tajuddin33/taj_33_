import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, MapPin, Mail, Globe } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const resumeText = `TAJUDDIN — Staff UI/UX Designer & Design Systems Architect
Location: Bengaluru & Hyderabad, India • Remote Worldwide
Email: tajuddin.design@domain.com • WhatsApp: +91 7396613025
Portfolio: Index 2025 • v2025.4.0

SUMMARY:
Senior UI/UX Designer & Design Engineer bridging enterprise complexity, developer tooling, and consumer scale for high-velocity Indian tech unicorns, global capability centres (GCCs), and international engineering orgs. 8+ years experience, 18+ shipped products, 99.8% CSAT.

CORE SPECIALIZATIONS:
- Design Systems Architecture & Token Ops (W3C DTCG, Style Dictionary, CI/CD)
- Information Density & Keyboard Ergonomics (SRE consoles, distributed tracing, ⌘K search)
- Frictionless Fintech & UPI Rails (UPI Autopay, RuPay, Bharat QR, Biometric verification)
- Gen-AI Collaborative Workspaces (Infinite spatial canvas, node graphs, WebGL)
- WCAG 2.1 AAA Accessibility & Cross-Platform Alignment (Web, iOS, Android)`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-[#cbd5e1] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e8f0] bg-[#f8fafc]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#0051d5]" />
            <h3 className="font-display text-[1rem] font-bold text-[#0f172a]">
              Tajuddin_Staff_Designer_Resume_2025.pdf
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-[#64748b] hover:text-[#0f172a] hover:bg-[#e2e8f0] transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#64748b] hover:text-[#0f172a] hover:bg-[#e2e8f0] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6 text-[#1e293b] font-sans">
          {/* Header block */}
          <div className="border-b border-[#e2e8f0] pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-display text-[2rem] font-extrabold text-[#000000]">
                Tajuddin
              </h1>
              <span className="font-mono text-[0.875rem] text-[#0051d5] font-bold">
                STAFF UI/UX &amp; DESIGN SYSTEMS ARCHITECT
              </span>
            </div>

            <p className="text-[0.9375rem] text-[#475569]">
              Senior UI/UX Designer &amp; Design Engineer bridging enterprise complexity, developer tooling, and consumer scale for high-velocity Indian unicorns, GCC centres, and international engineering organizations.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-[0.8125rem] text-[#64748b] pt-1 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0051d5]" />
                Bengaluru &amp; Hyderabad, India • Remote
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#0051d5]" />
                tajuddin.design@domain.com
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#0051d5]" />
                Index 2025 Portfolio
              </span>
            </div>
          </div>

          {/* Key Competencies */}
          <div className="space-y-2">
            <h4 className="text-[0.75rem] font-mono uppercase tracking-wider text-[#0051d5] font-bold">
              CORE SPECIALIZATIONS &amp; ARCHITECTURAL MASTERY
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[0.8125rem]">
              <div className="bg-[#f8fafc] p-2.5 rounded border border-[#f1f5f9]">
                <strong>Design Token Pipelines:</strong> W3C DTCG schemas, Style Dictionary, automated CI/CD PR bots.
              </div>
              <div className="bg-[#f8fafc] p-2.5 rounded border border-[#f1f5f9]">
                <strong>Information Density:</strong> SRE telemetry consoles, micro-sparklines, keyboard-first ergonomics.
              </div>
              <div className="bg-[#f8fafc] p-2.5 rounded border border-[#f1f5f9]">
                <strong>Fintech &amp; UPI Rails:</strong> NPCI UPI Autopay, RuPay checkout, biometric authentication passkeys.
              </div>
              <div className="bg-[#f8fafc] p-2.5 rounded border border-[#f1f5f9]">
                <strong>Code &amp; Prototyping:</strong> React, Next.js, TypeScript, Tailwind CSS, WebGL, Flutter/RN alignment.
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="space-y-4 pt-2">
            <h4 className="text-[0.75rem] font-mono uppercase tracking-wider text-[#0051d5] font-bold">
              TRACK RECORD &amp; FLAGSHIP SYSTEMS
            </h4>

            {/* Role 1 */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h5 className="font-bold text-[0.9375rem] text-[#0f172a]">
                  Staff Design Engineer &amp; Systems Architect
                </h5>
                <span className="font-mono text-[0.75rem] text-[#64748b]">2022 — Present</span>
              </div>
              <p className="text-[0.8125rem] text-[#0051d5] font-medium">Enterprise Cloud Infrastructure &amp; Fintech Advisory</p>
              <ul className="list-disc list-inside text-[0.8125rem] text-[#475569] space-y-1 pt-1">
                <li>Architected <strong>Apex Cloud OS</strong>, cutting SRE incident triage duration by 42% across millions of active node clusters.</li>
                <li>Engineered <strong>Loomis Pay &amp; UPI Rails</strong> checkout experience, increasing completion rates by +31% across Indian and international payment methods.</li>
                <li>Spearheaded multi-brand token system <strong>Kinetix</strong> powering 14 squads and 450+ synchronized cross-platform components.</li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="space-y-1 pt-2">
              <div className="flex justify-between items-baseline">
                <h5 className="font-bold text-[0.9375rem] text-[#0f172a]">
                  Senior UI/UX Designer &amp; Design Engineer
                </h5>
                <span className="font-mono text-[0.75rem] text-[#64748b]">2019 — 2022</span>
              </div>
              <p className="text-[0.8125rem] text-[#0051d5] font-medium">SaaS Unicorns &amp; Global Capability Centres (GCC)</p>
              <ul className="list-disc list-inside text-[0.8125rem] text-[#475569] space-y-1 pt-1">
                <li>Designed high-throughput developer telemetry interfaces and distributed log aggregators.</li>
                <li>Standardized WCAG 2.1 AAA contrast guidelines and automated accessibility linting across pull requests.</li>
                <li>Achieved 99.8% CSAT rating across 18 shipped enterprise product releases.</li>
              </ul>
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="pt-2 border-t border-[#e2e8f0] flex flex-wrap justify-between gap-4 text-[0.8125rem] text-[#64748b]">
            <div>
              <strong>B.Tech in Computer Science &amp; Engineering</strong>
            </div>
            <div>
              <span className="font-mono">Active Timezone: UTC+05:30 (IST) • Open for Select Contracts &amp; Staff Roles</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 bg-[#f8fafc] border-t border-[#e2e8f0] flex items-center justify-between">
          <button
            onClick={handleCopyText}
            className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-[#475569] hover:text-[#0f172a] bg-white border border-[#cbd5e1] px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy Plaintext'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-white bg-[#0051d5] hover:bg-[#003ea8] px-4 py-2 rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Save / Print PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
