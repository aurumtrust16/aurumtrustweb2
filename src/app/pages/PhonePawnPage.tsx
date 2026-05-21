import { Helmet } from 'react-helmet-async';
import { Smartphone, TrendingUp, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

export function PhonePawnPage() {
  const navigate = useNavigate();

  const phoneModels = [
    {
      brand: 'iPhone',
      models: [
        { name: 'iPhone 15 Pro Max', storage: '256GB', price: '฿30,000 - ฿35,000' },
        { name: 'iPhone 15 Pro', storage: '256GB', price: '฿25,000 - ฿30,000' },
        { name: 'iPhone 14 Pro Max', storage: '256GB', price: '฿22,000 - ฿27,000' },
        { name: 'iPhone 13', storage: '128GB', price: '฿12,000 - ฿15,000' },
      ]
    },
    {
      brand: 'Samsung',
      models: [
        { name: 'Galaxy S24 Ultra', storage: '256GB', price: '฿20,000 - ฿25,000' },
        { name: 'Galaxy S23 Ultra', storage: '256GB', price: '฿15,000 - ฿20,000' },
        { name: 'Galaxy Z Fold 5', storage: '256GB', price: '฿25,000 - ฿30,000' },
        { name: 'Galaxy S22', storage: '128GB', price: '฿8,000 - ฿12,000' },
      ]
    }
  ];

  const faqs = [
    {
      q: 'iPhone รุ่นไหนจำนำได้ราคาดีสุด?',
      a: 'iPhone รุ่นใหม่ล่าสุด (15 Pro Max, 15 Pro) ได้ราคาดีที่สุด แต่ iPhone 13-14 ก็ยังได้ราคาดี ขึ้นอยู่กับสภาพและความจุ'
    },
    {
      q: 'มือถือต้องปลดล็อค iCloud หรือไม่?',
      a: 'ใช่ครับ สำหรับผลิตภัณฑ์ Apple ทุกชนิด (iPhone, iPad, Macbook, Apple Watch) ต้องปลดล็อค iCloud และปิด Find My ก่อนจำนำทุกครั้ง มิฉะนั้นจะไม่สามารถรับจำนำได้'
    },
    {
      q: 'เครื่องมีรอยขีดข่วนจำนำได้ไหม?',
      a: 'จำนำได้ แต่ราคาจะต่ำกว่าเครื่องสภาพดี แนะนำติดฟิล์มกันรอยไว้ตั้งแต่ซื้อมา'
    },
    {
      q: 'ต้องนำกล่องและอุปกรณ์มาด้วยไหม?',
      a: 'ไม่จำเป็น แต่ถ้ามีครบจะได้ราคาดีกว่า'
    },
    {
      q: 'จำนำมือถือที่ซื้อผ่อนได้ไหม?',
      a: 'ไม่รับครับ เราไม่รับจำนำมือถือที่ยังผ่อนอยู่ หรือมีภาระผูกพัน รับเฉพาะเครื่องที่ชำระเงินครบแล้วเท่านั้น'
    },
  ];

  return (
    <>
      <Helmet>
        <title>รับจำนำมือถือ iPhone Samsung ราคาสูง 2026 | AURUM TRUST</title>
        <meta name="description" content="รับจำนำมือถือ iPhone, Samsung, Android ทุกรุ่น ให้ราคาสูงกว่าที่อื่น ต้องปลดล็อค iCloud ก่อน ไม่รับเครื่องผ่อน ตรวจสอบสภาพฟรี รับเงินไว 15 นาที" />
        <meta name="keywords" content="รับจำนำมือถือ, จำนำ iPhone, จำนำ Samsung, ปลดล็อค iCloud, จำนำโทรศัพท์" />
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
              📱 iPhone • Samsung • Android ทุกรุ่น
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
            รับจำนำมือถือ<br />
            <span style={{ color: 'var(--aurum-gold)' }}>ให้ราคาสูงกว่าที่อื่น</span>
          </h1>

          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            iPhone ทุกรุ่น • Android ทุกแบรนด์ • ตรวจสอบสภาพฟรี<br />
            รับเงินภายใน 15 นาที
          </p>

          <div className="max-w-xl mx-auto mb-8 p-4 rounded-lg border-2" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'var(--aurum-gold)'
          }}>
            <p className="text-sm text-white">
              <strong style={{ color: 'var(--aurum-gold)' }}>⚠️ สำคัญ:</strong> ผลิตภัณฑ์ Apple ต้องปลดล็อค iCloud ก่อน • ไม่รับเครื่องผ่อน
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/#estimate')}
              className="px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl"
              style={{
                backgroundColor: 'var(--aurum-gold)',
                color: 'var(--aurum-navy)'
              }}
            >
              ประเมินราคามือถือ
            </button>
          </div>
        </div>
      </section>

      {/* Price Tables */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: 'var(--aurum-navy)' }}>
            ตารางราคาจำนำมือถือ
          </h2>
          <p className="text-center text-gray-600 mb-12">
            ราคาอ้างอิง อัปเดต พ.ค. 2026 (ขึ้นอยู่กับสภาพจริง)
          </p>

          <div className="space-y-12">
            {phoneModels.map((brand, brandIndex) => (
              <div key={brandIndex}>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3" style={{ color: 'var(--aurum-navy)' }}>
                  <Smartphone size={28} style={{ color: 'var(--aurum-gold)' }} />
                  {brand.brand}
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {brand.models.map((model, modelIndex) => (
                    <div key={modelIndex} className="p-6 rounded-xl border-2 hover:shadow-lg transition-all" style={{
                      borderColor: 'rgba(212, 175, 55, 0.3)'
                    }}>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{
                          backgroundColor: 'rgba(212, 175, 55, 0.1)'
                        }}>
                          <Smartphone size={24} style={{ color: 'var(--aurum-gold)' }} />
                        </div>
                        <h4 className="font-semibold mb-1" style={{ color: 'var(--aurum-navy)' }}>
                          {model.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">{model.storage}</p>
                        <div className="p-3 rounded-lg" style={{
                          backgroundColor: 'rgba(212, 175, 55, 0.1)'
                        }}>
                          <p className="text-sm text-gray-600 mb-1">ราคาจำนำ</p>
                          <p className="text-lg font-bold" style={{ color: 'var(--aurum-gold)' }}>
                            {model.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--aurum-navy)' }}>
            ปัจจัยที่ทำให้ได้ราคาดี
          </h2>

          <div className="space-y-4">
            {[
              { title: 'รุ่นและปีที่ออก', desc: 'รุ่นใหม่ล่าสุดได้ราคาสูงสุด', important: false },
              { title: 'ความจุ (Storage)', desc: '256GB, 512GB ได้ราคาดีกว่า 64GB, 128GB', important: false },
              { title: 'สภาพเครื่อง', desc: 'ไม่มีรอยขีดข่วน, หน้าจอไม่แตก, ไม่เคยซ่อม', important: false },
              { title: 'อุปกรณ์ครบชุด', desc: 'กล่อง, สาย, ปลั๊ก, คู่มือ', important: false },
              { title: 'สถานะเครื่อง (สำคัญมาก!)', desc: 'ต้องปลดล็อค iCloud, ไม่ติด Blacklist, ไม่ผ่อนอยู่', important: true },
              { title: 'แบตเตอรี่', desc: 'Battery Health สูง (>85%) สำหรับ iPhone', important: false },
            ].map((factor, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border-2" style={{
                borderColor: factor.important ? 'var(--aurum-gold)' : 'transparent'
              }}>
                <TrendingUp size={24} className="flex-shrink-0 mt-1" style={{ color: 'var(--aurum-gold)' }} />
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: 'var(--aurum-navy)' }}>
                    {factor.title}
                  </h3>
                  <p className="text-sm text-gray-600">{factor.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl border-2" style={{
            backgroundColor: 'rgba(220, 38, 38, 0.05)',
            borderColor: '#dc2626'
          }}>
            <h3 className="font-bold mb-3 flex items-center gap-2 text-red-600">
              <span>❌</span>
              <span>เราไม่รับจำนำ</span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• มือถือที่ยังผ่อนอยู่ หรือมีภาระผูกพัน</li>
              <li>• เครื่อง Apple ที่ไม่ได้ปลดล็อค iCloud</li>
              <li>• เครื่องติด Blacklist หรือถูกรายงานหาย</li>
              <li>• เครื่องเปิดไม่ติด หรือมีปัญหาทางเทคนิค</li>
              <li>• หน้าจอแตก ตัวเครื่องบุบ หรือชำรุดรุนแรง</li>
              <li>• เครื่องปลอม หรือของไม่แท้</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--aurum-navy)' }}>
            วิธีเตรียมมือถือก่อนจำนำ
          </h2>

          {/* Apple Products Warning */}
          <div className="mb-8 p-6 rounded-xl border-2" style={{
            backgroundColor: 'rgba(212, 175, 55, 0.05)',
            borderColor: 'var(--aurum-gold)'
          }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{
                backgroundColor: 'var(--aurum-gold)'
              }}>
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-lg" style={{ color: 'var(--aurum-navy)' }}>
                  สำคัญมาก! สำหรับผลิตภัณฑ์ Apple
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>iPhone, iPad, Macbook, Apple Watch</strong> ทุกรุ่น <strong className="text-red-600">ต้องปลดล็อค iCloud ก่อนเท่านั้น</strong> มิฉะนั้นจะไม่สามารถรับจำนำได้
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>✓ ต้องปิด <strong>Find My iPhone / Find My iPad / Find My Mac</strong></p>
                  <p>✓ ต้องลบ Apple ID ออกจากเครื่อง</p>
                  <p>✓ ต้อง Sign Out จาก iCloud ทั้งหมด</p>
                  <p className="text-red-600 font-semibold mt-3">
                    ⚠️ หากไม่ปลดล็อค iCloud เราไม่สามารถรับจำนำได้ในทุกกรณี
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* General Tips */}
          <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--aurum-navy)' }}>
            ขั้นตอนการเตรียมมือถือ
          </h3>

          <div className="space-y-4">
            {[
              {
                title: '1. สำรองข้อมูล (Backup)',
                desc: 'Backup รูปภาพ, วิดีโอ, ข้อความ, ผู้ติดต่อ ไปยัง iCloud หรือ Google Drive ก่อนลบข้อมูล'
              },
              {
                title: '2. ปลดล็อค iCloud (สำหรับ Apple เท่านั้น - สำคัญที่สุด!)',
                desc: 'iPhone/iPad: Settings → [Your Name] → Find My → ปิด Find My iPhone → Sign Out จาก Apple ID\nMacbook: System Settings → Apple ID → Sign Out → ปิด Find My Mac'
              },
              {
                title: '3. ถอด Google Account (สำหรับ Android)',
                desc: 'Settings → Accounts → ลบ Google Account ออกทั้งหมด'
              },
              {
                title: '4. Factory Reset (รีเซ็ตเครื่อง)',
                desc: 'ลบข้อมูลในเครื่องออกทั้งหมดกลับสู่สภาพเริ่มต้น (หลังจากปลดล็อค iCloud แล้ว)'
              },
              {
                title: '5. ทำความสะอาดเครื่อง',
                desc: 'เช็ดหน้าจอ ตัวเครื่อง ให้สะอาด ไม่มีรอยนิ้วมือหรือคราบสกปรก'
              },
              {
                title: '6. ถอด SIM Card และ Memory Card',
                desc: 'ถอดซิมการ์ด และ SD Card (ถ้ามี) ออกจากเครื่อง'
              },
              {
                title: '7. ตรวจสอบสภาพเครื่อง',
                desc: 'ตรวจสอบการทำงาน: หน้าจอสัมผัส, กล้อง, ลำโพง, ปุ่มต่างๆ, Face ID/Touch ID'
              },
              {
                title: '8. เตรียมอุปกรณ์และเอกสาร',
                desc: 'นำกล่อง, สายชาร์จ, หัวชาร์จ, คู่มือ (ถ้ามี) และบัตรประชาชนมาด้วย'
              },
            ].map((tip, index) => (
              <div key={index} className="p-5 rounded-lg border-2 hover:shadow-md transition-all" style={{
                borderColor: index === 1 ? 'var(--aurum-gold)' : 'rgba(212, 175, 55, 0.2)',
                backgroundColor: index === 1 ? 'rgba(212, 175, 55, 0.03)' : 'white'
              }}>
                <div className="flex items-start gap-4">
                  <CheckCircle
                    size={24}
                    className="flex-shrink-0 mt-1"
                    style={{ color: 'var(--aurum-gold)' }}
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2" style={{
                      color: 'var(--aurum-navy)',
                      fontSize: index === 1 ? '1.1rem' : '1rem'
                    }}>
                      {tip.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info for Macbook */}
          <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: '#f9fafb' }}>
            <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--aurum-navy)' }}>
              <span>💻</span>
              <span>สำหรับ Macbook / iMac / Mac mini</span>
            </h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• ต้องลบ Apple ID และปิด Find My Mac ก่อนเสมอ</p>
              <p>• ลบ FileVault encryption (ถ้าเปิดใช้งาน)</p>
              <p>• Erase และติดตั้ง macOS ใหม่</p>
              <p>• ถอดรหัสผ่าน Firmware Password (ถ้ามี)</p>
              <p>• นำอุปกรณ์: สายชาร์จ, Adapter, กล่อง (ถ้ามี)</p>
            </div>
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
            พร้อมจำนำมือถือแล้วหรือยัง?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            ประเมินราคาฟรี รับเงินไว ภายใน 15 นาที
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
