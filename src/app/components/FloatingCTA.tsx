import { MessageCircle, Phone, Calculator } from 'lucide-react';
import { useState } from 'react';

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLineContact = () => {
    window.open('https://lin.ee/RF3sNle', '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:0827172250';
  };

  const scrollToEstimate = () => {
    document.getElementById('estimate')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Action Menu */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 space-y-3 mb-2">
            {/* Estimate Button */}
            <button
              onClick={scrollToEstimate}
              className="flex items-center gap-3 px-4 py-3 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 bg-white group"
              style={{ borderColor: 'var(--aurum-gold)' }}
            >
              <span className="text-sm font-medium whitespace-nowrap" style={{ color: 'var(--aurum-navy)' }}>
                ประเมินราคา
              </span>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{
                backgroundColor: 'var(--aurum-gold)'
              }}>
                <Calculator size={20} style={{ color: 'var(--aurum-navy)' }} />
              </div>
            </button>

            {/* Phone Button */}
            <button
              onClick={handlePhoneCall}
              className="flex items-center gap-3 px-4 py-3 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 bg-white group"
            >
              <span className="text-sm font-medium whitespace-nowrap" style={{ color: 'var(--aurum-navy)' }}>
                โทรหาเรา
              </span>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{
                backgroundColor: 'var(--aurum-teal)'
              }}>
                <Phone size={20} className="text-white" />
              </div>
            </button>

            {/* LINE Button */}
            <button
              onClick={handleLineContact}
              className="flex items-center gap-3 px-4 py-3 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 bg-white group"
            >
              <span className="text-sm font-medium whitespace-nowrap" style={{ color: 'var(--aurum-navy)' }}>
                แชท LINE
              </span>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#06C755]">
                <MessageCircle size={20} className="text-white" />
              </div>
            </button>
          </div>
        )}

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center"
          style={{
            background: isOpen
              ? 'linear-gradient(135deg, var(--aurum-navy) 0%, var(--aurum-dark-navy) 100%)'
              : 'linear-gradient(135deg, var(--aurum-gold) 0%, #C4A030 100%)'
          }}
        >
          {isOpen ? (
            <div className="text-white text-2xl">×</div>
          ) : (
            <MessageCircle size={28} style={{ color: 'var(--aurum-navy)' }} />
          )}
        </button>
      </div>
    </>
  );
}
