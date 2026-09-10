import { Helmet } from 'react-helmet-async';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router';

export function BlogPage() {
  return (
    <>
      <Helmet>
        <title>บทความขายสินค้าและความรู้เรื่องจำนำ | AURUM TRUST</title>
        <meta name="description" content="ความรู้สำหรับผู้ที่กำลังตัดสินใจขายขาดหรือจำนำสินค้า เปรียบเทียบสิทธิในทรัพย์ วงเงิน ต้นทุน และความเสี่ยงอย่างเป็นกลาง" />
        <meta name="keywords" content="ขายขาดหรือจำนำ, ข้อดีของการจำนำ, ขายของมือสอง, รับซื้อสินค้าแบรนด์เนม, ความรู้ก่อนขายสินค้า" />
        <link rel="canonical" href="https://aurumtrustco.com/blog" />
      </Helmet>
      <main>
        <section className="pt-32 pb-14 px-4" style={{ background: 'linear-gradient(135deg, var(--aurum-dark-navy), var(--aurum-navy))' }}>
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen size={48} className="mx-auto mb-5" style={{ color: 'var(--aurum-gold)' }} />
            <h1 className="text-5xl font-bold mb-5 text-white">บทความและคู่มือ</h1>
            <p className="text-xl text-gray-300">ข้อมูลเพื่อช่วยเปรียบเทียบทางเลือกก่อนขายหรือใช้ทรัพย์สินเป็นหลักประกัน</p>
          </div>
        </section>
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog/sell-vs-pawn-differences" className="block bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <span className="inline-block px-3 py-1 rounded-full text-sm mb-4" style={{ backgroundColor: 'rgba(212,175,55,.12)', color: 'var(--aurum-gold)' }}>คู่มือการตัดสินใจ</span>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--aurum-navy)' }}>ขายขาดกับจำนำต่างกันอย่างไร เลือกแบบไหนให้เหมาะกับคุณ</h2>
              <p className="text-gray-600 leading-7 mb-6">ทำความเข้าใจข้อดีของการเลือกวงเงินและสิทธิไถ่ถอน พร้อมต้นทุนและความเสี่ยงที่ต้องตรวจสอบก่อนจำนำ เปรียบเทียบกับการขายขาดที่ไม่มีภาระชำระคืน</p>
              <span className="inline-flex items-center gap-2 font-semibold" style={{ color: 'var(--aurum-gold)' }}>อ่านบทความ <ArrowRight size={18} /></span>
            </Link>
            <p className="text-sm text-gray-500 mt-6 text-center">บทความเป็นข้อมูลทั่วไป AURUM TRUST ให้บริการรับซื้อ-ขายสินค้า ไม่ได้เสนอสินเชื่อผ่านเว็บไซต์นี้</p>
          </div>
        </section>
      </main>
    </>
  );
}
