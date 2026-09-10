import { Helmet } from 'react-helmet-async';
import { CheckCircle, Smartphone } from 'lucide-react';

export function BuyPhonePage() {
  return (
    <>
      <Helmet>
        <title>รับซื้อ iPhone และมือถือมือสอง ประเมินราคาฟรี | AURUM TRUST</title>
        <meta name="description" content="รับซื้อ-ขาย iPhone, Samsung และมือถือมือสอง ประเมินตามรุ่น ความจุ สภาพ แบตเตอรี่ และอุปกรณ์ รู้ราคาก่อนตัดสินใจขาย" />
        <meta name="keywords" content="รับซื้อ iPhone, รับซื้อมือถือมือสอง, ขาย iPhone, ขายมือถือ, ประเมินราคามือถือ" />
        <link rel="canonical" href="https://aurumtrustco.com/services/phone" />
      </Helmet>
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Smartphone size={52} className="mx-auto mb-5" style={{ color: 'var(--aurum-gold)' }} />
            <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: 'var(--aurum-navy)' }}>รับซื้อ iPhone และมือถือมือสอง</h1>
            <p className="text-lg text-gray-600">บริการรับซื้อ-ขายสินค้า รู้ราคาก่อนตัดสินใจและไม่มีข้อผูกมัดจนกว่าจะยืนยันการซื้อขาย</p>
          </div>
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-5" style={{ color: 'var(--aurum-navy)' }}>ปัจจัยที่ใช้ประเมินราคา</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {['รุ่นและความจุของเครื่อง', 'สภาพตัวเครื่องและหน้าจอ', 'สุขภาพแบตเตอรี่และการทำงาน', 'กล่อง อุปกรณ์ และหลักฐานการซื้อ', 'สถานะ iCloud หรือบัญชีที่ผูกกับเครื่อง', 'ราคาตลาดมือสอง ณ วันที่ตรวจสินค้า'].map((item) => (
                <div key={item} className="flex gap-3"><CheckCircle size={20} style={{ color: 'var(--aurum-gold)' }} /><span>{item}</span></div>
              ))}
            </div>
          </section>
          <section className="rounded-2xl p-8 text-white" style={{ backgroundColor: 'var(--aurum-navy)' }}>
            <h2 className="text-2xl font-bold mb-3">เตรียมเครื่องก่อนประเมิน</h2>
            <p className="text-gray-300 mb-6">สำรองข้อมูล ออกจากระบบบัญชีส่วนตัว และปิด Find My หลังตกลงขายเท่านั้น โปรดลบข้อมูลส่วนตัวก่อนส่งมอบเครื่อง</p>
            <a href="/#estimate" className="inline-block px-7 py-3 rounded-lg font-semibold" style={{ backgroundColor: 'var(--aurum-gold)', color: 'var(--aurum-navy)' }}>ประเมินราคาเบื้องต้น</a>
          </section>
        </div>
      </main>
    </>
  );
}
