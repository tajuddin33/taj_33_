import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Mail, Globe, ArrowRight } from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM IST');
  const [selectedDate, setSelectedDate] = useState('Thursday, Oct 16');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [focus, setFocus] = useState('Staff Design Engineering / GCC Advisory');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const dates = [
    'Thursday, Oct 16',
    'Friday, Oct 17',
    'Monday, Oct 20',
    'Tuesday, Oct 21',
  ];

  const slots = [
    '10:30 AM IST (01:00 AM EDT)',
    '11:00 AM IST (01:30 AM EDT)',
    '02:30 PM IST (05:00 AM EDT)',
    '04:00 PM IST (06:30 AM EDT)',
    '07:30 PM IST (10:00 AM EDT)',
    '09:00 PM IST (11:30 AM EDT)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#cbd5e1] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e8f0] bg-[#f8fafc]">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-[#0051d5]" />
            <div>
              <h3 className="font-display text-[1rem] font-bold text-[#0f172a]">
                Schedule 30-Min Discovery Session
              </h3>
              <p className="text-[0.75rem] text-[#64748b]">Tajuddin • Staff Design Engineer</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#64748b] hover:text-[#0f172a] hover:bg-[#e2e8f0] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {!isBooked ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Date selection */}
              <div>
                <label className="text-[0.75rem] font-mono uppercase tracking-wider text-[#64748b] font-bold block mb-1.5">
                  1. Select Available Date
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {dates.map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`p-2.5 rounded-lg text-[0.8125rem] font-medium text-left border transition-all cursor-pointer ${
                        selectedDate === d
                          ? 'border-[#0051d5] bg-[#eff6ff] text-[#0051d5] font-semibold'
                          : 'border-[#e2e8f0] bg-white text-[#475569] hover:bg-[#f8fafc]'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slot selection */}
              <div>
                <label className="text-[0.75rem] font-mono uppercase tracking-wider text-[#64748b] font-bold block mb-1.5">
                  2. Select Time Slot
                </label>
                <div className="grid grid-cols-1 gap-1.5 max-h-[140px] overflow-y-auto pr-1">
                  {slots.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setSelectedSlot(s)}
                      className={`p-2 rounded-lg text-[0.75rem] font-mono text-left border transition-all cursor-pointer ${
                        selectedSlot === s
                          ? 'border-[#0051d5] bg-[#eff6ff] text-[#0051d5] font-bold'
                          : 'border-[#e2e8f0] bg-white text-[#475569] hover:bg-[#f8fafc]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Focus area */}
              <div>
                <label className="text-[0.75rem] font-mono uppercase tracking-wider text-[#64748b] font-bold block mb-1.5">
                  3. Engagement Focus
                </label>
                <select
                  value={focus}
                  onChange={(e) => setFocus(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#cbd5e1] text-[0.8125rem] text-[#0f172a] bg-white focus:outline-none focus:border-[#0051d5]"
                >
                  <option>Staff Design Engineering / GCC Advisory</option>
                  <option>Design Systems Overhaul &amp; Token Ops</option>
                  <option>Enterprise SaaS Redesign &amp; Information Density</option>
                  <option>0 to 1 Generative AI &amp; Fintech Tooling</option>
                </select>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="text-[0.75rem] text-[#64748b] font-medium block mb-1">Your Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#94a3b8] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="e.g. Maya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#cbd5e1] text-[0.8125rem] text-[#0f172a] focus:outline-none focus:border-[#0051d5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[0.75rem] text-[#64748b] font-medium block mb-1">Work Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#94a3b8] absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="maya@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#cbd5e1] text-[0.8125rem] text-[#0f172a] focus:outline-none focus:border-[#0051d5]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#000000] hover:bg-[#0051d5] text-white rounded-xl text-[0.875rem] font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Confirm Calendar Invite</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 space-y-4 text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-[#ecfdf5] border-2 border-[#10b981] text-[#059669] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <h4 className="font-display text-[1.375rem] font-bold text-[#0f172a]">
                  Meeting Confirmed!
                </h4>
                <p className="text-[0.875rem] text-[#475569]">
                  Calendar invitation sent to <strong className="text-[#0f172a]">{email || 'your email'}</strong>
                </p>
              </div>

              <div className="bg-[#f8fafc] p-4 rounded-xl border border-[#e2e8f0] text-left text-[0.8125rem] space-y-1.5 font-mono">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Slot:</span>
                  <span className="font-semibold text-[#0f172a]">{selectedDate} • {selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Host:</span>
                  <span className="text-[#0f172a]">Tajuddin (Staff Design Engineer)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Channel:</span>
                  <span className="text-[#0051d5] font-semibold">Google Meet (Link generated)</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="w-full py-2.5 bg-[#0f172a] hover:bg-[#0051d5] text-white rounded-xl text-[0.8125rem] font-semibold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
