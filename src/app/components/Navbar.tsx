import { Phone, Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import logoImage from '../../imports/AURUMTRUST_LOGO_NO_BG.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{
      backgroundColor: 'var(--aurum-navy)',
      borderColor: 'rgba(212, 175, 55, 0.2)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoImage}
              alt="AURUM TRUST"
              className="h-16 w-auto"
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="text-white hover:text-[var(--aurum-gold)] transition-colors flex items-center gap-1">
                บริการ
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all" style={{
                backgroundColor: 'var(--aurum-navy)'
              }}>
                <Link to="/services/phone" className="block px-4 py-3 text-white hover:bg-white/10 transition-colors">รับจำนำมือถือ</Link>
                <Link to="/services/luxury" className="block px-4 py-3 text-white hover:bg-white/10 transition-colors">รับจำนำแบรนด์เนม</Link>
              </div>
            </div>
            <a href="/#estimate" className="text-white hover:text-[var(--aurum-gold)] transition-colors">ประเมินราคา</a>
            <Link to="/blog" className="text-white hover:text-[var(--aurum-gold)] transition-colors">บทความ</Link>
            <a href="/#about" className="text-white hover:text-[var(--aurum-gold)] transition-colors">เกี่ยวกับเรา</a>
            <a href="/#contact" className="flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all hover:shadow-lg" style={{
              backgroundColor: 'var(--aurum-gold)',
              color: 'var(--aurum-navy)'
            }}>
              <Phone size={18} />
              <span>ติดต่อเรา</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left text-white hover:text-[var(--aurum-gold)] py-2 flex items-center justify-between"
              >
                บริการ
                <ChevronDown size={16} className={isServicesOpen ? 'rotate-180' : ''} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/services/phone" className="block text-gray-300 hover:text-[var(--aurum-gold)] py-1">รับจำนำมือถือ</Link>
                  <Link to="/services/luxury" className="block text-gray-300 hover:text-[var(--aurum-gold)] py-1">รับจำนำแบรนด์เนม</Link>
                </div>
              )}
            </div>
            <a href="/#estimate" className="block text-white hover:text-[var(--aurum-gold)] py-2">ประเมินราคา</a>
            <Link to="/blog" className="block text-white hover:text-[var(--aurum-gold)] py-2">บทความ</Link>
            <a href="/#about" className="block text-white hover:text-[var(--aurum-gold)] py-2">เกี่ยวกับเรา</a>
            <a href="tel:0827172250" className="block text-white hover:text-[var(--aurum-gold)] py-2">ติดต่อเรา</a>
          </div>
        )}
      </div>
    </nav>
  );
}
