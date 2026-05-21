import { Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" style={{
      background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--aurum-navy)' }}>
            ติดต่อเรา
          </h2>
          <p className="text-lg text-gray-600">
            พร้อมให้คำปรึกษาและประเมินราคาฟรี
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden border-2 shadow-xl" style={{ borderColor: 'var(--aurum-gold)' }}>
            <a
              href="https://maps.app.goo.gl/PpM78d5zVQyhvSn79"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group h-full min-h-[400px]"
            >
              <iframe
                src="https://maps.google.com/maps?q=13.695733,100.518969&z=16&output=embed&hl=th"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AURUM TRUST Location"
                className="pointer-events-none"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                <div className="px-8 py-4 rounded-lg flex items-center gap-2" style={{ backgroundColor: 'var(--aurum-gold)' }}>
                  <MapPin size={20} style={{ color: 'var(--aurum-navy)' }} />
                  <p className="font-semibold" style={{ color: 'var(--aurum-navy)' }}>
                    เปิดใน Google Maps
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Contact Info & LINE QR */}
          <div className="space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
              <h3 className="font-semibold mb-6 text-xl" style={{ color: 'var(--aurum-navy)' }}>
                ช่องทางติดต่อ
              </h3>

              <div className="space-y-5">
                <a href="tel:0827172250" className="flex items-center gap-4 p-4 rounded-lg hover:shadow-md transition-all group" style={{
                  backgroundColor: 'rgba(212, 175, 55, 0.05)'
                }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
                    backgroundColor: 'var(--aurum-gold)'
                  }}>
                    <Phone size={20} style={{ color: 'var(--aurum-navy)' }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">โทรศัพท์</p>
                    <p className="font-semibold group-hover:text-[var(--aurum-gold)] transition-colors" style={{ color: 'var(--aurum-navy)' }}>
                      082-717-2250
                    </p>
                  </div>
                </a>

                <a href="mailto:aurumtrust16@gmail.com" className="flex items-center gap-4 p-4 rounded-lg hover:shadow-md transition-all group" style={{
                  backgroundColor: 'rgba(212, 175, 55, 0.05)'
                }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
                    backgroundColor: 'var(--aurum-gold)'
                  }}>
                    <Mail size={20} style={{ color: 'var(--aurum-navy)' }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">อีเมล</p>
                    <p className="font-semibold group-hover:text-[var(--aurum-gold)] transition-colors break-all" style={{ color: 'var(--aurum-navy)' }}>
                      aurumtrust16@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg" style={{
                  backgroundColor: 'rgba(212, 175, 55, 0.05)'
                }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{
                    backgroundColor: 'var(--aurum-gold)'
                  }}>
                    <Clock size={20} style={{ color: 'var(--aurum-navy)' }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">เวลาทำการ</p>
                    <p className="text-sm" style={{ color: 'var(--aurum-navy)' }}>
                      จันทร์ - ศุกร์: <strong>09:00 - 18:00</strong>
                    </p>
                    <p className="text-sm" style={{ color: 'var(--aurum-navy)' }}>
                      เสาร์ - อาทิตย์: <strong>10:00 - 17:00</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* LINE Contact Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 text-center" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <MessageCircle size={24} style={{ color: 'var(--aurum-gold)' }} />
                <h3 className="font-semibold text-xl" style={{ color: 'var(--aurum-navy)' }}>
                  เพิ่มเพื่อน LINE
                </h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                คลิกเพื่อเพิ่มเพื่อนและสอบถามข้อมูล
              </p>
              <a
                href="https://lin.ee/RF3sNle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:scale-105"
                style={{
                  backgroundColor: '#06C755',
                  color: 'white'
                }}
              >
                <MessageCircle size={28} />
                <span>เพิ่มเพื่อน LINE</span>
              </a>
              <p className="text-xs text-gray-500 mt-4">
                ตอบกลับรวดเร็ว พร้อมให้คำปรึกษา
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
