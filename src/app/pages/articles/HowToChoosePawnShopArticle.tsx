import { Helmet } from 'react-helmet-async';
import { Calendar, User, Share2, Facebook, MessageCircle, Copy, CheckCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

export function HowToChoosePawnShopArticle() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const handleShareLine = () => {
    window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=5 วิธีเลือกร้านจำนำที่ไม่โดนกดราคา`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>5 วิธีเลือกร้านจำนำที่ไม่โดนกดราคา | AURUM TRUST Blog</title>
        <meta name="description" content="สิ่งที่ต้องเช็คก่อนเลือกร้านจำนำ เพื่อให้ได้ราคายุติธรรมและปลอดภัย" />
      </Helmet>

      <div className="h-96 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1633144427937-e108eeb92421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
          alt="Pawn Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(1, 22, 39, 0.4) 0%, rgba(1, 22, 39, 0.8) 100%)'
        }} />
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="inline-block px-4 py-2 rounded-full text-sm mb-4" style={{
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            color: 'var(--aurum-gold)'
          }}>
            คำแนะนำ
          </div>

          <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--aurum-navy)' }}>
            5 วิธีเลือกร้านจำนำที่ไม่โดนกดราคา
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-600 mb-6 pb-6 border-b">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              7 พฤษภาคม 2026
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              AURUM TRUST Team
            </span>
            <span>อ่าน 6 นาที</span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Share2 size={18} />
              แชร์บทความ:
            </span>
            <button onClick={handleShareFacebook} className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-blue-50" style={{ borderColor: '#1877F2' }}>
              <Facebook size={18} style={{ color: '#1877F2' }} />
            </button>
            <button onClick={handleShareLine} className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-green-50" style={{ borderColor: '#06C755' }}>
              <MessageCircle size={18} style={{ color: '#06C755' }} />
            </button>
            <button onClick={handleShareTwitter} className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-blue-50" style={{ borderColor: '#1DA1F2' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DA1F2">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </button>
            <button onClick={handleCopyLink} className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-gray-50" style={{ borderColor: 'var(--aurum-gold)' }}>
              {copied ? <CheckCircle size={18} style={{ color: 'var(--aurum-gold)' }} /> : <Copy size={18} style={{ color: 'var(--aurum-gold)' }} />}
            </button>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              การเลือกร้านจำนำที่ดีไม่ใช่แค่เรื่องของราคา แต่ยังรวมถึงความปลอดภัย ความโปร่งใส และการบริการที่เป็นธรรม บทความนี้จะแนะนำ 5 วิธีง่ายๆ ในการเลือกร้านจำนำที่เชื่อถือได้
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
              <div className="flex gap-3">
                <ShieldCheck className="flex-shrink-0 mt-1" size={24} style={{ color: 'var(--aurum-gold)' }} />
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--aurum-navy)' }}>⚠️ สิ่งที่ควรระวัง</h4>
                  <p className="text-gray-700 text-sm">
                    ร้านจำนำบางแห่งอาจกดราคาต่ำกว่าราคาตลาดถึง 30-40% หรือมีค่าธรรมเนียมแอบแฝง การเลือกร้านที่ถูกต้องจะช่วยให้คุณได้ราคายุติธรรมและปลอดภัย
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>
              1. ตรวจสอบใบอนุญาตและความถูกต้องตามกฎหมาย
            </h2>

            <p className="text-gray-700 mb-4">
              ร้านจำนำที่ถูกต้องตามกฎหมายต้องมี<strong>ใบอนุญาตประกอบกิจการจำนำ</strong>จากกรมพัฒนาธุรกิจการค้า กระทรวงพาณิชย์
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold mb-3" style={{ color: 'var(--aurum-navy)' }}>สิ่งที่ต้องเช็ค:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ ใบอนุญาตแสดงไว้หน้าร้านอย่างชัดเจน</li>
                <li>✓ ชื่อร้านตรงกับในใบอนุญาต</li>
                <li>✓ ใบอนุญาตยังไม่หมดอายุ</li>
                <li>✓ มีเลขทะเบียนนิติบุคคล (ถ้าเป็นบริษัท)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>
              2. เปรียบเทียบราคาจาก 3-5 ร้าน
            </h2>

            <p className="text-gray-700 mb-4">
              อย่าเพิ่งตัดสินใจจำนำที่ร้านแรก แต่ควร<strong>สอบถามราคาจากหลายร้าน</strong>เพื่อเปรียบเทียบ
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--aurum-navy)' }}>✅ สิ่งที่ดี</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• โทรสอบถามราคาล่วงหน้า</li>
                  <li>• ขอใบเสนอราคาเป็นลายลักษณ์อักษร</li>
                  <li>• ถามเงื่อนไขและดอกเบี้ยอย่างละเอียด</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-red-50">
                <h4 className="font-semibold mb-2 text-red-700">❌ สิ่งที่ควรหลีกเลี่ยง</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ร้านที่ไม่ยอมบอกราคาทางโทรศัพท์</li>
                  <li>• กดดันให้ตัดสินใจเร็วเกินไป</li>
                  <li>• ไม่ให้ใบเสนอราคา</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>
              3. อ่านสัญญาให้ละเอียดก่อนเซ็น
            </h2>

            <p className="text-gray-700 mb-4">
              <strong className="text-red-600">ห้ามเซ็นสัญญาก่อนอ่าน!</strong> สัญญาจำนำเป็นเอกสารสำคัญที่มีผลผูกพันทางกฎหมาย
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-6 border-2" style={{ borderColor: 'var(--aurum-gold)' }}>
              <h4 className="font-semibold mb-3" style={{ color: 'var(--aurum-navy)' }}>รายละเอียดที่ต้องมีในสัญญา:</h4>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>จำนวนเงินที่ได้รับจริง (ชัดเจน ไม่หักค่าธรรมเนียมซ่อนเร้น)</li>
                <li>อัตราดอกเบี้ยต่อเดือน (ต้องไม่เกิน 1% ต่อเดือน)</li>
                <li>ระยะเวลาจำนำ และกำหนดไถ่คืน</li>
                <li>รายละเอียดของทรัพย์สินที่จำนำ (ครบถ้วน)</li>
                <li>เงื่อนไขการไถ่คืนและการขายทอดตลาด</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>
              4. ตรวจสอบรีวิวและชื่อเสียง
            </h2>

            <p className="text-gray-700 mb-4">
              ในยุคดิจิทัล การหารีวิวจากลูกค้าจริงไม่ยาก ลองเช็คจาก:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl">⭐</span>
                <div>
                  <strong className="text-gray-900">Google Review & Facebook</strong>
                  <p className="text-sm text-gray-600">ดูคะแนนและความคิดเห็นจากลูกค้าจริง</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl">💬</span>
                <div>
                  <strong className="text-gray-900">Pantip / กระทู้ออนไลน์</strong>
                  <p className="text-sm text-gray-600">ค้นหาประสบการณ์ของคนอื่นๆ</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl">👥</span>
                <div>
                  <strong className="text-gray-900">คำแนะนำจากคนรู้จัก</strong>
                  <p className="text-sm text-gray-600">ถามเพื่อนหรือคนรู้จักที่เคยใช้บริการ</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>
              5. ดูจากการบริการและความโปร่งใส
            </h2>

            <p className="text-gray-700 mb-4">
              ร้านจำนำที่ดีจะให้บริการอย่างโปร่งใส ไม่ปิดบังข้อมูล และพร้อมตอบคำถามทุกข้อ
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold mb-3 text-green-900">สัญญาณของร้านจำนำที่ดี:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ พนักงานอธิบายเงื่อนไขอย่างละเอียด ไม่รีบร้อน</li>
                <li>✓ บอกราคาประเมินและเหตุผลได้ชัดเจน</li>
                <li>✓ มีระบบการจัดเก็บทรัพย์สินที่ปลอดภัย (ตู้เซฟ กล้อง CCTV)</li>
                <li>✓ ออกใบเสร็จและเอกสารครบถ้วน</li>
                <li>✓ มีช่องทางติดต่อหลายช่องทาง (โทรศัพท์ LINE เว็บไซต์)</li>
                <li>✓ ให้คำแนะนำเรื่องการไถ่คืนอย่างเป็นมิตร</li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
              <h4 className="font-semibold mb-3 text-red-700">🚨 สัญญาณเตือน - ร้านที่ควรหลีกเลี่ยง:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>× ไม่มีใบอนุญาตหรือไม่ยอมแสดง</li>
                <li>× กดราคาต่ำกว่าตลาดมากผิดปกติ</li>
                <li>× มีค่าธรรมเนียมแอบแฝงหลายรายการ</li>
                <li>× บีบให้เซ็นสัญญาทันที ไม่ให้เวลาอ่าน</li>
                <li>× ไม่ออกใบเสร็จหรือเอกสารไม่ครบ</li>
                <li>× พนักงานหลีกเลี่ยงคำถามหรือพูดไม่ชัด</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>
              สรุป: Checklist ก่อนเลือกร้านจำนำ
            </h2>

            <div className="bg-white border-2 rounded-xl p-6 mb-6" style={{ borderColor: 'var(--aurum-gold)' }}>
              <div className="space-y-2 text-gray-700">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>ตรวจสอบใบอนุญาตและความถูกต้องตามกฎหมายแล้ว</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>เปรียบเทียบราคาจากอย่างน้อย 3 ร้านแล้ว</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>อ่านสัญญาและเงื่อนไขอย่างละเอียดแล้ว</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>เช็ครีวิวและชื่อเสียงของร้านแล้ว</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>ประทับใจกับการบริการและความโปร่งใสของร้าน</span>
                </label>
              </div>
            </div>

            <p className="text-gray-700 font-medium">
              การเลือกร้านจำนำที่ดีไม่ใช่เรื่องยาก เพียงแค่ใช้เวลาสักครู่ในการตรวจสอบ คุณก็จะได้ราคายุติธรรมและความมั่นใจว่าทรัพย์สินของคุณอยู่ในมือที่ปลอดภัย
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--aurum-navy)' }}>
            AURUM TRUST - ร้านจำนำมาตรฐานพรีเมียม
          </h3>
          <p className="text-gray-600 mb-6">
            ใบอนุญาตถูกต้อง โปร่งใส ให้ราคายุติธรรม พร้อมรีวิวจากลูกค้าจริง
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/#contact" className="px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg" style={{ backgroundColor: 'var(--aurum-gold)', color: 'var(--aurum-navy)' }}>
              ติดต่อเรา
            </a>
            <a href="/#estimate" className="px-8 py-3 rounded-lg font-semibold border-2 transition-all hover:shadow-lg" style={{ borderColor: 'var(--aurum-gold)', color: 'var(--aurum-navy)' }}>
              ประเมินราคาออนไลน์
            </a>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--aurum-navy)' }}>บทความที่เกี่ยวข้อง</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/hermes-bag-pawn-guide" className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
              <h4 className="font-semibold mb-2 group-hover:text-[var(--aurum-gold)]" style={{ color: 'var(--aurum-navy)' }}>
                คู่มือจำนำกระเป๋า Hermès
              </h4>
              <p className="text-sm text-gray-600">ราคาจำนำกระเป๋า Hermès แต่ละรุ่น...</p>
            </Link>
            <Link to="/blog/iphone-pawn-which-model-best-price" className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
              <h4 className="font-semibold mb-2 group-hover:text-[var(--aurum-gold)]" style={{ color: 'var(--aurum-navy)' }}>
                iPhone รุ่นไหนจำนำได้ราคาดีสุด
              </h4>
              <p className="text-sm text-gray-600">เปรียบเทียบราคาจำนำ iPhone ทุกรุ่น...</p>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
