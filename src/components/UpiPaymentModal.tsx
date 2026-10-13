import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, Fingerprint, ArrowRight, RotateCcw, Download } from 'lucide-react';

interface UpiPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpiPaymentModal: React.FC<UpiPaymentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'checkout' | 'pin' | 'processing' | 'success'>('checkout');
  const [pin, setPin] = useState<string>('');
  const [refId, setRefId] = useState<string>('');

  if (!isOpen) return null;

  const handleStartPayment = () => {
    setStep('pin');
  };

  const handlePinSubmit = () => {
    setStep('processing');
    const generatedRef = `NPCI-${Math.floor(1000000000 + Math.random() * 9000000000)}`;
    setRefId(generatedRef);
    setTimeout(() => {
      setStep('success');
    }, 1200);
  };

  const handleReset = () => {
    setStep('checkout');
    setPin('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#cbd5e1] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#f1f5f9] bg-[#f8fafc]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
            <span className="font-display text-[0.875rem] font-bold text-[#0f172a]">
              TAJUDDIN • UPI PAY
            </span>
            <span className="text-[0.6875rem] font-mono font-semibold bg-[#eff6ff] text-[#0051d5] px-2 py-0.5 rounded">
              Interactive Prototype
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#64748b] hover:text-[#0f172a] hover:bg-[#e2e8f0] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content based on step */}
        <div className="p-6">
          {step === 'checkout' && (
            <div className="space-y-4">
              {/* Amount Display */}
              <div className="text-center py-4 bg-[#f8fafc] rounded-2xl border border-[#f1f5f9]">
                <span className="text-[0.75rem] text-[#64748b] uppercase tracking-wider font-semibold">
                  Amount to Pay
                </span>
                <div className="font-display text-[2.25rem] font-extrabold text-[#0f172a] tracking-tight">
                  ₹38,450.00
                </div>
                <div className="inline-flex items-center gap-1.5 text-[0.75rem] text-[#059669] font-medium mt-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>UPI Rail: tajuddin@upi • Verified Merchant</span>
                </div>
              </div>

              {/* Summary Table */}
              <div className="space-y-2 text-[0.8125rem] text-[#475569] bg-[#ffffff] p-3 rounded-xl border border-[#f1f5f9]">
                <div className="flex justify-between">
                  <span>Recipient</span>
                  <span className="font-semibold text-[#0f172a]">Tajuddin UX &amp; System Lab</span>
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
                <div className="flex justify-between font-bold text-[#0f172a] pt-2 border-t border-[#f1f5f9] text-[0.9375rem]">
                  <span>Total Payable</span>
                  <span className="text-[#0051d5]">₹38,450.00</span>
                </div>
              </div>

              {/* Payment Rail Card */}
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#0051d5] bg-[#eff6ff]/70">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-6 bg-[#0051d5] rounded flex items-center justify-center text-white text-[0.7rem] font-bold">
                    RuPay
                  </div>
                  <div>
                    <p className="text-[0.8125rem] font-bold text-[#0f172a]">RuPay Platinum Debit</p>
                    <p className="text-[0.7rem] text-[#64748b]">•••• 8399 (Autopay Active)</p>
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[#0051d5]" />
              </div>

              {/* Biometric Prompt */}
              <div className="text-center text-[0.75rem] text-[#64748b] py-1">
                Biometric Verification Enabled • NPCI 2.0 Compliant
              </div>

              {/* Action Button */}
              <button
                onClick={handleStartPayment}
                className="w-full py-3.5 bg-[#0f172a] hover:bg-[#0051d5] text-white rounded-xl text-[0.9375rem] font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <Lock className="w-4 h-4" />
                <span>Confirm Payment of ₹38,450.00</span>
              </button>
            </div>
          )}

          {step === 'pin' && (
            <div className="space-y-6 py-2">
              <div className="text-center space-y-1">
                <div className="w-12 h-12 rounded-full bg-[#eff6ff] text-[#0051d5] flex items-center justify-center mx-auto mb-2">
                  <Fingerprint className="w-6 h-6" />
                </div>
                <h3 className="font-display text-[1.25rem] font-bold text-[#0f172a]">
                  Authorize ₹38,450.00
                </h3>
                <p className="text-[0.8125rem] text-[#64748b]">
                  Touch biometric scanner or enter 4-digit UPI MPIN
                </p>
              </div>

              {/* PIN input placeholder circles */}
              <div className="flex justify-center gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center font-mono font-bold text-[1.25rem] ${
                      pin.length > i
                        ? 'border-[#0051d5] bg-[#eff6ff] text-[#0051d5]'
                        : 'border-[#cbd5e1] bg-white'
                    }`}
                  >
                    {pin.length > i ? '•' : ''}
                  </div>
                ))}
              </div>

              {/* Keypad */}
              <div className="grid grid-cols-3 gap-2.5 max-w-[260px] mx-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, 'OK'].map((keyVal) => (
                  <button
                    key={keyVal}
                    onClick={() => {
                      if (keyVal === 'C') {
                        setPin((prev) => prev.slice(0, -1));
                      } else if (keyVal === 'OK') {
                        handlePinSubmit();
                      } else if (pin.length < 4) {
                        const newPin = pin + keyVal;
                        setPin(newPin);
                        if (newPin.length === 4) {
                          setTimeout(handlePinSubmit, 200);
                        }
                      }
                    }}
                    className="h-11 rounded-xl bg-[#f8fafc] hover:bg-[#e2e8f0] font-mono font-bold text-[1rem] text-[#0f172a] transition-colors cursor-pointer flex items-center justify-center"
                  >
                    {keyVal}
                  </button>
                ))}
              </div>

              {/* One tap touch biometric bypass */}
              <button
                onClick={handlePinSubmit}
                className="w-full py-2.5 bg-[#eff6ff] hover:bg-[#dbeafe] text-[#0051d5] rounded-xl text-[0.8125rem] font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Fingerprint className="w-4 h-4" />
                <span>Simulate Touch ID Auth (1-Tap)</span>
              </button>
            </div>
          )}

          {step === 'processing' && (
            <div className="py-12 flex flex-col items-center justify-center gap-4 text-center">
              <div className="w-12 h-12 rounded-full border-4 border-[#0051d5] border-t-transparent animate-spin"></div>
              <div>
                <p className="font-display text-[1.125rem] font-bold text-[#0f172a]">
                  Authenticating with NPCI Rails...
                </p>
                <p className="text-[0.8125rem] text-[#64748b]">
                  Sub-second zero-retry settlement in progress
                </p>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="py-4 space-y-5 text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-[#ecfdf5] border-2 border-[#10b981] text-[#059669] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-[1.5rem] font-bold text-[#0f172a]">
                  Payment Successful!
                </h3>
                <p className="text-[0.8125rem] text-[#059669] font-medium">
                  ₹38,450.00 transferred instantly via RuPay Autopay
                </p>
              </div>

              {/* Transaction Receipt Card */}
              <div className="bg-[#f8fafc] p-4 rounded-xl border border-[#e2e8f0] text-left text-[0.8125rem] space-y-2 font-mono">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Ref ID:</span>
                  <span className="font-bold text-[#0f172a]">{refId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Recipient:</span>
                  <span className="text-[#0f172a]">Tajuddin UX &amp; System Lab</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Latency:</span>
                  <span className="text-[#059669] font-bold">0.82s (P95 Rail)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Timestamp:</span>
                  <span className="text-[#0f172a]">{new Date().toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="flex gap-2.5 pt-2">
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a] rounded-xl text-[0.8125rem] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Try Again</span>
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 bg-[#0051d5] hover:bg-[#003ea8] text-white rounded-xl text-[0.8125rem] font-semibold transition-colors cursor-pointer"
                >
                  Close Prototype
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
