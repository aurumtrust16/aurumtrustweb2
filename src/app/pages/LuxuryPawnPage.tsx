import { Helmet } from 'react-helmet-async';
import { ShoppingBag, Watch, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

export function LuxuryPawnPage() {
  const navigate = useNavigate();

  const categories = [
    {
      icon: '👜',
      title: 'กระเป๋าแบรนด์เนม',
      brands: 'Hermès, Chanel, Louis Vuitton, Gucci',
      price: '฿20,000 - ฿150,000',
      note: ''
    },
    {
      icon: '⌚',
      title: 'นาฬิกาหรู',
      brands: 'Rolex, Omega, Patek Philippe, Apple Watch',
      price: '฿15,000 - ฿200,000',
      note: 'Apple Watch ต้องปลดล็อค iCloud'
    },
    {
      icon: '💎',
      title: 'เครื่องประดับ',
      brands: 'Cartier, Tiffany & Co., Bulgari',
      price: '฿10,000 - ฿100,000',
      note: ''
    },
    {
      icon: '👟',
      title: 'รองเท้าหรู',
      brands: 'Christian Louboutin, Balenciaga, Yeezy',
      price: '฿5,000 - ฿30,000',
      note: ''
    },
  ];

  const authenticity = [
    'ตรวจสอบ Serial Number',
    'วิเคราะห์วัสดุและงานฝีมือ',
    'ตรวจ Hologram และป้ายกำกับ',
    'เปรียบเทียบกับของแท้',
    'ใช้เครื่องมือตรวจสอบพิเศษ',
    'ผู้เชี่ยวชาญที่ผ่านการฝึกอบรม',
  ];

  const faqs = [
    {
      q: 'รับจำนำแบรนด์เนมปลอมไหม?',
      a: 'ไม่รับ เรารับแต่ของแท้เท่านั้น มีผู้เชี่ยวชาญตรวจสอบความแท้อย่างละเอียดทุกชิ้น'
    },
    {
      q: 'Apple Watch ต้องปลดล็อค iCloud หรือไม่?',
      a: 'ใช่ครับ Apple Watch ทุกรุ่นต้องปลดล็อค iCloud และปิด Find My ก่อนจำนำ มิฉะนั้นจะไม่สามารถรับจำนำได้ (เช่นเดียวกับ iPhone, iPad, Macbook)'
    },
    {
      q: 'กระเป๋าที่ไม่มี Receipt จำนำได้ไหม?',
      a: 'จำนำได้ แต่ต้องผ่านการตรวจสอบความแท้อย่างละเอียด ถ้ามี Receipt จะได้ราคาดีกว่า'
    },
    {
      q: 'นาฬิกา Rolex Vintage จำนำได้ไหม?',
      a: 'จำนำได้ เราต้องการผู้เชี่ยวชาญเฉพาะทางตรวจสอบ อาจใช้เวลาประเมินนานกว่าปกติ'
    },
    {
      q: 'สภาพกระเป๋าต้องสมบูรณ์แค่ไหน?',
      a: 'ยอมรับสภาพที่ใช้งานมาแล้ว แต่ไม่มีความเสียหายรุนแรง เช่น แตก ขาด หรือคราบสกปรกมาก'
    },
  ];

  return (
    <>
      <Helmet>
        <title>รับจำนำแบรนด์เนม กระเป๋า นาฬิกาหรู ราคาดี | AURUM TRUST</title>
        <meta name="description" content="รับจำนำกระเป๋า Hermès, Chanel, LV, นาฬิกา Rolex, Omega, Apple Watch ของแท้เท่านั้น Apple Watch ต้องปลดล็อค iCloud ตรวจสอบโดยผู้เชี่ยวชาญ" />
        <meta name="keywords" content="รับจำนำกระเป๋าแบรนด์เนม, จำนำ Hermès, จำนำ Rolex, จำนำ Chanel, จำนำ Apple Watch, ปลดล็อค iCloud" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{
        background: 'linear-gradient(135deg, var(--aurum-dark-navy) 0%, var(--aurum-navy) 100%)'
      }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full border mb-6" style={{
            borderColor: 'var(--aurum-gold)',
            backgroundColor: 'rgba(212, 175, 55, 0.1)'
          }}>
            <span className="text-sm" style={{ color: 'var(--aurum-gold)' }}>
              👜 Hermès • Chanel • Rolex • LV
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
            รับจำนำแบรนด์เนม<br />
            <span style={{ color: 'var(--aurum-gold)' }}>รับแต่ของแท้</span>
          </h1>

          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            กระเป๋า • นาฬิกา • เครื่องประดับ • รองเท้าหรู<br />
            ตรวจสอบความแท้โดยผู้เชี่ยวชาญ
          </p>

          <div className="max-w-xl mx-auto mb-8 p-4 rounded-lg border-2" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'var(--aurum-gold)'
          }}>
            <p className="text-sm text-white">
              <strong style={{ color: 'var(--aurum-gold)' }}>⚠️ สำคัญ:</strong> Apple Watch ต้องปลดล็อค iCloud ก่อน • รับแต่ของแท้เท่านั้น
            </p>
          </div>

          <button
            onClick={() => navigate('/#estimate')}
            className="px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl"
            style={{
              backgroundColor: 'var(--aurum-gold)',
              color: 'var(--aurum-navy)'
            }}
          >
            ประเมินราคาแบรนด์เนม
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: 'var(--aurum-navy)' }}>
            สินค้าที่เรารับจำนำ
          </h2>
          <p className="text-center text-gray-600 mb-12">
            แบรนด์ชั้นนำระดับโลก ของแท้เท่านั้น
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <div key={index} className="p-6 rounded-xl border-2 hover:shadow-lg transition-all" style={{
                borderColor: cat.note ? 'var(--aurum-gold)' : 'rgba(212, 175, 55, 0.3)'
              }}>
                <div className="text-center">
                  <div className="text-5xl mb-4">{cat.icon}</div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--aurum-navy)' }}>
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 min-h-[48px]">
                    {cat.brands}
                  </p>
                  {cat.note && (
                    <div className="mb-3 p-2 rounded text-xs" style={{
                      backgroundColor: 'rgba(212, 175, 55, 0.15)',
                      color: 'var(--aurum-navy)'
                    }}>
                      ⚠️ {cat.note}
                    </div>
                  )}
                  <div className="p-3 rounded-lg" style={{
                    backgroundColor: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <p className="text-sm text-gray-600 mb-1">ช่วงราคา</p>
                    <p className="font-bold" style={{ color: 'var(--aurum-gold)' }}>
                      {cat.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authenticity Check */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--aurum-navy)' }}>
                วิธีตรวจสอบความแท้
              </h2>
              <p className="text-gray-600 mb-8">
                เรามีมาตรฐานการตรวจสอบที่เข้มงวด เพื่อให้มั่นใจว่ารับแต่ของแท้เท่านั้น
                ปกป้องทั้งคุณและเรา
              </p>

              <div className="space-y-4">
                {authenticity.map((method, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle size={24} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--aurum-gold)' }} />
                    <p className="text-gray-700">{method}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl border-2" style={{
              borderColor: 'var(--aurum-gold)',
              background: 'linear-gradient(135deg, var(--aurum-dark-navy) 0%, var(--aurum-navy) 100%)'
            }}>
              <h3 className="text-2xl font-bold mb-6 text-white">
                ทำไมต้องเลือกเรา?
              </h3>

              <div className="space-y-4">
                {[
                  { icon: '🎓', text: 'ผู้เชี่ยวชาญผ่านการฝึกอบรมจากแบรนด์' },
                  { icon: '🔬', text: 'เครื่องมือตรวจสอบระดับมืออาชีพ' },
                  { icon: '💰', text: 'ราคายุติธรรม ไม่กดราคา' },
                  { icon: '🔒', text: 'เก็บรักษาอย่างปลอดภัย มีประกันภัย' },
                  { icon: '⚡', text: 'กระบวนการรวดเร็ว รับเงินใน 15 นาที' },
                  { icon: '🤝', text: 'ลูกค้า VIP กว่า 5,000 ราย' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg backdrop-blur-sm" style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}>
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-white">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--aurum-navy)' }}>
            แบรนด์ยอดนิยม
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Hermès', 'Chanel', 'Louis Vuitton', 'Gucci', 'Rolex', 'Omega', 'Cartier', 'Tiffany', 'Prada', 'Dior', 'Patek Philippe', 'Bulgari'].map((brand, index) => (
              <div key={index} className="p-6 rounded-xl border-2 text-center hover:shadow-lg transition-all" style={{
                borderColor: 'rgba(212, 175, 55, 0.2)'
              }}>
                <ShoppingBag size={32} className="mx-auto mb-3" style={{ color: 'var(--aurum-gold)' }} />
                <p className="font-semibold" style={{ color: 'var(--aurum-navy)' }}>
                  {brand}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{
        backgroundColor: 'var(--aurum-dark-navy)'
      }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            คำถามที่พบบ่อย
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group p-6 rounded-xl border backdrop-blur-sm" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(212, 175, 55, 0.2)'
              }}>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-semibold text-white">{faq.q}</h3>
                  <span className="text-2xl transition-transform group-open:rotate-45" style={{ color: 'var(--aurum-gold)' }}>+</span>
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--aurum-navy)' }}>
            พร้อมจำนำแบรนด์เนมแล้วหรือยัง?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            มาให้ผู้เชี่ยวชาญประเมินความแท้และราคาฟรี
          </p>
          <button
            onClick={() => navigate('/#estimate')}
            className="px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl"
            style={{
              backgroundColor: 'var(--aurum-gold)',
              color: 'var(--aurum-navy)'
            }}
          >
            ประเมินราคาฟรีกับ AURUM TRUST
          </button>
        </div>
      </section>
    </>
  );
}
