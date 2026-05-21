import { Phone, Mail, MapPin, Facebook, MessageCircle, Clock } from 'lucide-react';
import { Link } from 'react-router';
import logoImage from '../../imports/AURUMTRUST_LOGO_NO_BG.png';

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--aurum-dark-navy)' }}>
      {/* Contact Section with Map and QR */}
      <div className="border-b" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">ติดต่อเรา</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Google Map */}
            <div className="rounded-xl overflow-hidden border-2" style={{ borderColor: 'var(--aurum-gold)' }}>
              <a
                href="https://maps.app.goo.gl/PpM78d5zVQyhvSn79"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
              >
                <iframe
                  src="https://www.google.com/maps?q=13.695733,100.518969&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AURUM TRUST Location"
                  className="pointer-events-none"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                  <div className="px-6 py-3 rounded-lg" style={{ backgroundColor: 'var(--aurum-gold)' }}>
                    <p className="font-semibold" style={{ color: 'var(--aurum-navy)' }}>
                      เปิดใน Google Maps
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Contact Info & LINE QR */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={20} style={{ color: 'var(--aurum-gold)' }} />
                  <a href="tel:0827172250" className="text-white hover:text-[var(--aurum-gold)] transition-colors">
                    082-717-2250
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} style={{ color: 'var(--aurum-gold)' }} />
                  <a href="mailto:aurumtrust16@gmail.com" className="text-white hover:text-[var(--aurum-gold)] transition-colors">
                    aurumtrust16@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3 pt-3 border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                  <Clock size={20} className="mt-0.5" style={{ color: 'var(--aurum-gold)' }} />
                  <div>
                    <p className="text-white mb-1 font-semibold">เวลาทำการ</p>
                    <p className="text-gray-400 text-sm">จันทร์ - ศุกร์: 09:00 - 18:00</p>
                    <p className="text-gray-400 text-sm">เสาร์ - อาทิตย์: 10:00 - 17:00</p>
                  </div>
                </div>
              </div>

              {/* LINE Contact */}
              <div className="pt-4 border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                <p className="text-white font-semibold mb-3 flex items-center gap-2">
                  <MessageCircle size={20} style={{ color: 'var(--aurum-gold)' }} />
                  <span>เพิ่มเพื่อน LINE</span>
                </p>
                <a
                  href="https://lin.ee/RF3sNle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:scale-105"
                  style={{
                    backgroundColor: '#06C755',
                    color: 'white'
                  }}
                >
                  <MessageCircle size={20} />
                  <span>เพิ่มเพื่อน LINE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={logoImage}
                alt="AURUM TRUST"
                className="h-20 w-auto"
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              ร้านรับจำนำมาตรฐานพรีเมียม ให้ราคาดี โปร่งใส ไว้วางใจได้
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61589267054204" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:bg-white/10" style={{ borderColor: 'var(--aurum-gold)' }}>
                <Facebook size={18} style={{ color: 'var(--aurum-gold)' }} />
              </a>
              <a href="https://lin.ee/RF3sNle" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:bg-white/10" style={{ borderColor: 'var(--aurum-gold)' }}>
                <MessageCircle size={18} style={{ color: 'var(--aurum-gold)' }} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">บริการของเรา</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services/phone" className="hover:text-[var(--aurum-gold)] transition-colors">รับจำนำมือถือ</Link></li>
              <li><Link to="/services/luxury" className="hover:text-[var(--aurum-gold)] transition-colors">รับจำนำนาฬิกา</Link></li>
              <li><Link to="/services/luxury" className="hover:text-[var(--aurum-gold)] transition-colors">รับจำนำแบรนด์เนม</Link></li>
              <li><a href="/#estimate" className="hover:text-[var(--aurum-gold)] transition-colors">ประเมินราคาออนไลน์</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">เกี่ยวกับเรา</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/#about" className="hover:text-[var(--aurum-gold)] transition-colors">เกี่ยวกับ AURUM TRUST</a></li>
              <li><a href="/#about" className="hover:text-[var(--aurum-gold)] transition-colors">ทำไมต้องเลือกเรา</a></li>
              <li><Link to="/blog" className="hover:text-[var(--aurum-gold)] transition-colors">บทความ & คู่มือ</Link></li>
              <li><a href="/#faq" className="hover:text-[var(--aurum-gold)] transition-colors">คำถามที่พบบ่อย</a></li>
              <li><a href="#" className="hover:text-[var(--aurum-gold)] transition-colors">นโยบายความเป็นส่วนตัว</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 AURUM TRUST. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--aurum-gold)] transition-colors">เงื่อนไขการใช้บริการ</a>
              <a href="#" className="hover:text-[var(--aurum-gold)] transition-colors">นโยบายความเป็นส่วนตัว</a>
              <a href="#" className="hover:text-[var(--aurum-gold)] transition-colors">คุกกี้</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
