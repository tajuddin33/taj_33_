import React, { useState } from 'react';
import { Copy, Check, Terminal, Cpu, Play, RefreshCw, AlertCircle } from 'lucide-react';
import { THEME_PRESETS } from '../data/portfolioData';

interface SystemsLabProps {
  onTriggerCommandPalette?: () => void;
}

export const SystemsLab: React.FC<SystemsLabProps> = ({ onTriggerCommandPalette }) => {
  const [density, setDensity] = useState<'relaxed' | 'compact'>('relaxed');
  const [selectedTheme, setSelectedTheme] = useState(THEME_PRESETS[0]);
  const [copied, setCopied] = useState(false);
  const [actionFeedback, setActionFeedback] = useState<string>('Idle • Awaiting user input');
  const [nodeLatency, setNodeLatency] = useState<number>(14);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Reactive JSON output reflecting current state
  const generatedTokens = {
    color: {
      brand: { value: selectedTheme.colorHex, type: 'color' },
      surface: { value: '#f7f9fb', type: 'color' },
      container: { value: selectedTheme.bgHex, type: 'color' },
    },
    spacing: {
      density: {
        value: density === 'relaxed' ? 'comfortable' : 'high-density',
        padding: density === 'relaxed' ? '1.5rem (24px)' : '0.875rem (14px)',
        gap: density === 'relaxed' ? '1rem' : '0.5rem',
      },
    },
    typography: {
      family: 'Plus Jakarta Sans & Inter',
      scale: 'W3C Grade AAA (Contrast 8.4:1)',
    },
    stateEngine: {
      latencyIndex: `${nodeLatency}ms`,
      clusterState: 'SYNCHRONIZED',
      schemaCompliance: 'W3C-DTCG-2024.1',
    },
  };

  const jsonString = JSON.stringify(generatedTokens, null, 2);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCommitIngress = () => {
    setIsProcessing(true);
    setActionFeedback('Executing Ingress Commit...');
    setTimeout(() => {
      setNodeLatency(Math.floor(10 + Math.random() * 8));
      setActionFeedback(`Ingress Committed • Payload syncd at ${new Date().toLocaleTimeString()}`);
      setIsProcessing(false);
    }, 600);
  };

  const handleInspectTrace = () => {
    setActionFeedback(`Distributed Trace: Trace-ID #${Math.floor(100000 + Math.random() * 900000)} active across 16 nodes`);
  };

  const handlePurgeCache = () => {
    setIsProcessing(true);
    setActionFeedback('Flushing edge Redis cache...');
    setTimeout(() => {
      setActionFeedback('Cache flushed • 0 stale keys remaining');
      setIsProcessing(false);
    }, 450);
  };

  return (
    <section id="systems-lab" className="w-full bg-[#f2f4f6] py-20 md:py-28 border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[0.75rem] font-mono uppercase tracking-widest text-[#0051d5] font-semibold">
              02 / INTERACTIVE SYSTEMS LAB
            </span>
            <h2 className="font-display text-[2.25rem] sm:text-[2.75rem] font-bold text-[#000000] tracking-tight">
              Design Token &amp; State Engine
            </h2>
            <p className="text-[1rem] text-[#45474a] leading-relaxed">
              Interact with live design tokens below. Toggle layout densities, switch color palettes, and observe real-time JSON token propagation and component ergonomics.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ea] border border-[#d8dadc] text-[0.75rem] font-mono text-[#191c1e] self-start lg:self-auto">
            <Cpu className="w-3.5 h-3.5 text-[#0051d5]" />
            <span>Live Playground v1.8</span>
          </div>
        </div>

        {/* Interactive Lab Main Container */}
        <div className="bg-[#ffffff] rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden flex flex-col">
          {/* Controls Bar */}
          <div className="p-4 sm:p-5 bg-[#f7f9fb] border-b border-[#e2e8f0] flex flex-wrap items-center justify-between gap-4">
            {/* Density Selector */}
            <div className="flex items-center gap-3">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#76777b] font-semibold">
                DENSITY:
              </span>
              <div className="inline-flex p-0.5 bg-[#eceef0] rounded-lg">
                <button
                  onClick={() => setDensity('relaxed')}
                  className={`text-[0.75rem] font-medium px-3 py-1 rounded-md transition-all cursor-pointer ${
                    density === 'relaxed'
                      ? 'bg-[#000000] text-white shadow-xs font-semibold'
                      : 'text-[#45474a] hover:text-[#000000]'
                  }`}
                >
                  Relaxed
                </button>
                <button
                  onClick={() => setDensity('compact')}
                  className={`text-[0.75rem] font-medium px-3 py-1 rounded-md transition-all cursor-pointer ${
                    density === 'compact'
                      ? 'bg-[#000000] text-white shadow-xs font-semibold'
                      : 'text-[#45474a] hover:text-[#000000]'
                  }`}
                >
                  Compact
                </button>
              </div>
            </div>

            {/* Theme Color Dots */}
            <div className="flex items-center gap-3">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#76777b] font-semibold">
                THEME:
              </span>
              <div className="flex items-center gap-2">
                {THEME_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setSelectedTheme(preset)}
                    style={{ backgroundColor: preset.colorHex }}
                    className={`w-6 h-6 rounded-full transition-transform cursor-pointer ${
                      selectedTheme.id === preset.id
                        ? 'ring-2 ring-offset-2 ring-[#000000] scale-110'
                        : 'hover:scale-105 opacity-80 hover:opacity-100'
                    }`}
                    title={preset.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#e2e8f0]">
            {/* Left Side: Live Dynamic Component Sandbox */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between gap-8">
              <div
                className={`rounded-xl border transition-all duration-300 ${
                  density === 'relaxed' ? 'p-6 sm:p-8 space-y-6' : 'p-4 sm:p-5 space-y-4'
                }`}
                style={{
                  backgroundColor: selectedTheme.bgHex,
                  borderColor: selectedTheme.borderHex,
                }}
              >
                {/* Node Title & Status Badge */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full animate-pulse"
                      style={{ backgroundColor: selectedTheme.colorHex }}
                    ></span>
                    <h4 className="font-display font-bold text-[#000000] text-[1.125rem]">
                      Transaction Node Alpha
                    </h4>
                  </div>
                  <span
                    className="text-[0.6875rem] font-mono px-2 py-0.5 rounded font-semibold tracking-wider"
                    style={{
                      backgroundColor: selectedTheme.colorHex,
                      color: '#ffffff',
                    }}
                  >
                    READY • STATE_OK
                  </span>
                </div>

                {/* Description */}
                <p className="text-[0.875rem] text-[#45474a] leading-relaxed">
                  Telemetry cluster synchronized with secondary failover array in San Jose datacenter. Latency index calibrated at{' '}
                  <strong className="text-[#000000] font-mono">{nodeLatency}ms</strong>.
                </p>

                {/* Interactive Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <button
                    onClick={handleCommitIngress}
                    disabled={isProcessing}
                    style={{
                      backgroundColor: selectedTheme.colorHex,
                    }}
                    className="text-white text-[0.8125rem] font-medium px-4 py-2 rounded-lg transition-opacity hover:opacity-90 flex items-center gap-1.5 cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Commit Ingress [⌘ + K]</span>
                  </button>

                  <button
                    onClick={handleInspectTrace}
                    className="bg-white hover:bg-[#f2f4f6] text-[#191c1e] border border-[#cbd5e1] text-[0.8125rem] font-medium px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    Inspect Trace
                  </button>

                  <button
                    onClick={handlePurgeCache}
                    className="bg-white hover:bg-[#f2f4f6] text-[#76777b] hover:text-[#ba1a1a] border border-[#cbd5e1] text-[0.8125rem] font-medium px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    Purge Cache
                  </button>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="pt-4 border-t border-[#f2f4f6] flex flex-col sm:flex-row sm:items-center justify-between text-[0.75rem] text-[#76777b] gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                  <span>Component status: <span className="text-[#191c1e] font-medium">{actionFeedback}</span></span>
                </div>
                <span className="font-mono text-[#0051d5] font-semibold">
                  Design tokens zero-latency
                </span>
              </div>
            </div>

            {/* Right Side: Token JSON Inspector */}
            <div className="lg:col-span-6 bg-[#0f172a] text-[#e2e8f0] p-6 sm:p-8 flex flex-col justify-between gap-4 font-mono text-[0.8125rem]">
              <div className="flex items-center justify-between pb-3 border-b border-[#334155]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#38bdf8]" />
                  <span className="text-[#94a3b8] font-semibold">{'{ }'} tokens.runtime.json</span>
                </div>
                <span className="text-[0.6875rem] uppercase tracking-wider text-[#38bdf8] bg-[#0284c7]/20 border border-[#0284c7]/40 px-2 py-0.5 rounded">
                  W3C Compliant
                </span>
              </div>

              {/* Code viewer */}
              <div className="bg-[#0b1120] rounded-xl p-4 overflow-x-auto max-h-[320px] text-[0.75rem] leading-relaxed border border-[#1e293b]">
                <pre className="text-[#38bdf8]">
                  <code>{jsonString}</code>
                </pre>
              </div>

              {/* Bottom bar */}
              <div className="pt-3 border-t border-[#334155] flex items-center justify-between">
                <span className="text-[0.75rem] text-[#94a3b8]">
                  Auto-compiled for Web &amp; Swift
                </span>
                <button
                  onClick={handleCopyJson}
                  className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium text-white bg-[#1e293b] hover:bg-[#334155] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10b981]" />
                      <span className="text-[#10b981]">Token Tree Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#94a3b8]" />
                      <span>Copy Token Tree</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
