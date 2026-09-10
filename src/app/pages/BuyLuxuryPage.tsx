import { Helmet } from 'react-helmet-async';
import { CheckCircle, Watch } from 'lucide-react';

export function BuyLuxuryPage() {
  return (
    <>
      <Helmet>
        <title>รับซื้อนาฬิกาและกระเป๋าแบรนด์เนม | AURUM TRUST</title>
        <meta name="description" content="รับซื้อ-ขายนาฬิกา Rolex, Omega และกระเป๋าแบรนด์เนมของแท้ ประเมินจากรุ่น สภาพ อุปกรณ์ และราคาตลาด" />
        <meta name="keywords" content="รับซื้อ Rolex, รับซื้อนาฬิกาหรู, รับซื้อกระเป๋าแบรนด์เนม, ขาย Hermès, ขาย Chanel, ประเมินราคาแบรนด์เนม" />
        <link rel="canonical" href="https://aurumtrustco.com/services/luxury" />
      </Helmet>
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Watch size={52} className="mx-auto mb-5" style={{ color: 'var(--aurum-gold)' }} />
            <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: 'var(--aurum-navy)' }}>รับซื้อนาฬิกาและสินค้าแบรนด์เนม</h1>
            <p className="text-lg text-gray-600">ประเมินสินค้าของแท้ตามรายละเอียดและสภาพจริง พร้อมแจ้งราคาก่อนยืนยันการซื้อขาย</p>
          </div>
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-5" style={{ color: 'var(--aurum-navy)' }}>สิ่งที่ช่วยให้ประเมินได้แม่นยำ</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {['ชื่อแบรนด์ รุ่น และหมายเลขอ้างอิง', 'ภาพสินค้าในแสงธรรมชาติหลายมุม', 'สภาพการใช้งานและตำหนิ', 'กล่อง ใบรับประกัน และอุปกรณ์', 'หลักฐานที่ช่วยตรวจสอบแหล่งที่มา', 'ราคาซื้อขายของรุ่นนั้นในตลาดปัจจุบัน'].map((item) => (
                <div key={item} className="flex gap-3"><CheckCircle size={20} style={{ color: 'var(--aurum-gold)' }} /><span>{item}</span></div>
              ))}
            </div>
          </section>
          <section className="rounded-2xl p-8 text-white" style={{ backgroundColor: 'var(--aurum-navy)' }}>
            <h2 className="text-2xl font-bold mb-3">ส่งรูปเพื่อประเมินเบื้องต้น</h2>
            <p className="text-gray-300 mb-6">ราคาสุดท้ายยืนยันหลังตรวจสินค้าจริง คุณสามารถปฏิเสธราคาที่เสนอได้โดยไม่มีข้อผูกมัด</p>
            <a href="/#estimate" className="inline-block px-7 py-3 rounded-lg font-semibold" style={{ backgroundColor: 'var(--aurum-gold)', color: 'var(--aurum-navy)' }}>เริ่มประเมินราคา</a>
          </section>
        </div>
      </main>
    </>
  );
}
