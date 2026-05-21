import { Helmet } from 'react-helmet-async';
import { Calendar, User, Share2, Facebook, MessageCircle, Copy, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

export function IphonePawnArticle() {
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
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=iPhone รุ่นไหนจำนำได้ราคาดีสุด ปี 2026`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>iPhone รุ่นไหนจำนำได้ราคาดีสุด ปี 2026 | AURUM TRUST Blog</title>
        <meta name="description" content="เปรียบเทียบราคาจำนำ iPhone ทุกรุ่น พร้อมเคล็ดลับเพิ่มมูลค่าก่อนนำไปจำนำ" />
      </Helmet>

      {/* Hero Image */}
      <div className="h-96 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1569532880013-e4aeb31c509d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
          alt="iPhone Pawn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(1, 22, 39, 0.4) 0%, rgba(1, 22, 39, 0.8) 100%)'
        }} />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="inline-block px-4 py-2 rounded-full text-sm mb-4" style={{
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            color: 'var(--aurum-gold)'
          }}>
            มือถือ
          </div>

          <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--aurum-navy)' }}>
            iPhone รุ่นไหนจำนำได้ราคาดีสุด ปี 2026
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-600 mb-6 pb-6 border-b">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              8 พฤษภาคม 2026
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              AURUM TRUST Team
            </span>
            <span>อ่าน 4 นาที</span>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Share2 size={18} />
              แชร์บทความ:
            </span>
            <button
              onClick={handleShareFacebook}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-blue-50"
              style={{ borderColor: '#1877F2' }}
            >
              <Facebook size={18} style={{ color: '#1877F2' }} />
            </button>
            <button
              onClick={handleShareLine}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-green-50"
              style={{ borderColor: '#06C755' }}
            >
              <MessageCircle size={18} style={{ color: '#06C755' }} />
            </button>
            <button
              onClick={handleShareTwitter}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-blue-50"
              style={{ borderColor: '#1DA1F2' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DA1F2">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </button>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-gray-50"
              style={{ borderColor: 'var(--aurum-gold)' }}
            >
              {copied ? (
                <CheckCircle size={18} style={{ color: 'var(--aurum-gold)' }} />
              ) : (
                <Copy size={18} style={{ color: 'var(--aurum-gold)' }} />
              )}
            </button>
          </div>

          {/* Article Body */}
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              การจำนำ iPhone เป็นตัวเลือกที่ได้รับความนิยมสูงสุดในตลาดจำนำมือถือ เนื่องจาก iPhone มีมูลค่าที่คงตัวและได้รับความต้องการสูง แต่รุ่นไหนที่จะให้ราคาจำนำที่ดีที่สุด? บทความนี้จะพาคุณไปดูรายละเอียดครบถ้วน
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>
              ราคาจำนำ iPhone แต่ละรุ่นในปี 2026
            </h2>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold mb-4" style={{ color: 'var(--aurum-navy)' }}>iPhone 16 Series</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• iPhone 16 Pro Max (1TB): <strong className="text-[var(--aurum-gold)]">45,000-50,000 บาท</strong></li>
                <li>• iPhone 16 Pro (512GB): <strong className="text-[var(--aurum-gold)]">38,000-42,000 บาท</strong></li>
                <li>• iPhone 16 Plus (256GB): <strong className="text-[var(--aurum-gold)]">28,000-32,000 บาท</strong></li>
                <li>• iPhone 16 (128GB): <strong className="text-[var(--aurum-gold)]">25,000-28,000 บาท</strong></li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold mb-4" style={{ color: 'var(--aurum-navy)' }}>iPhone 15 Series</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• iPhone 15 Pro Max (512GB): <strong className="text-[var(--aurum-gold)]">35,000-40,000 บาท</strong></li>
                <li>• iPhone 15 Pro (256GB): <strong className="text-[var(--aurum-gold)]">30,000-35,000 บาท</strong></li>
                <li>• iPhone 15 Plus (256GB): <strong className="text-[var(--aurum-gold)]">24,000-28,000 บาท</strong></li>
                <li>• iPhone 15 (128GB): <strong className="text-[var(--aurum-gold)]">20,000-24,000 บาท</strong></li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold mb-4" style={{ color: 'var(--aurum-navy)' }}>iPhone 14 Series</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• iPhone 14 Pro Max (256GB): <strong className="text-[var(--aurum-gold)]">28,000-32,000 บาท</strong></li>
                <li>• iPhone 14 Pro (256GB): <strong className="text-[var(--aurum-gold)]">24,000-28,000 บาท</strong></li>
                <li>• iPhone 14 Plus (128GB): <strong className="text-[var(--aurum-gold)]">18,000-22,000 บาท</strong></li>
                <li>• iPhone 14 (128GB): <strong className="text-[var(--aurum-gold)]">16,000-20,000 บาท</strong></li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>
              ปัจจัยที่ส่งผลต่อราคาจำนำ iPhone
            </h2>

            <div className="space-y-4 mb-6">
              <div className="p-5 rounded-lg border-l-4" style={{ borderColor: 'var(--aurum-gold)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--aurum-navy)' }}>1. ความจุหน่วยความจำ (Storage)</h4>
                <p className="text-gray-700">ยิ่งความจุสูง ราคาจำนำก็ยิ่งสูงตาม โดย iPhone ที่มี storage 512GB-1TB จะได้ราคาดีกว่ารุ่น 128GB อย่างเห็นได้ชัด</p>
              </div>

              <div className="p-5 rounded-lg border-l-4" style={{ borderColor: 'var(--aurum-gold)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--aurum-navy)' }}>2. สภาพเครื่อง</h4>
                <p className="text-gray-700">เครื่องที่ไม่มีรอยขีดข่วน หน้าจอไม่แตก และยังมีกล่องพร้อมอุปกรณ์ครบจะได้ราคาสูงกว่าถึง 20-30%</p>
              </div>

              <div className="p-5 rounded-lg border-l-4" style={{ borderColor: 'var(--aurum-gold)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--aurum-navy)' }}>3. สถานะ iCloud</h4>
                <p className="text-gray-700">
                  <strong className="text-red-600">ต้องปลดล็อค iCloud ก่อนเท่านั้น</strong> - ร้านจำนำไม่สามารถรับเครื่องที่ยัง lock iCloud อยู่ได้
                </p>
              </div>

              <div className="p-5 rounded-lg border-l-4" style={{ borderColor: 'var(--aurum-gold)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--aurum-navy)' }}>4. อายุการใช้งาน</h4>
                <p className="text-gray-700">iPhone รุ่นใหม่ (ออกมาไม่เกิน 1 ปี) จะได้ราคาดีกว่ารุ่นเก่าอย่างมาก</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>
              5 เคล็ดลับเพิ่มมูลค่าก่อนนำ iPhone ไปจำนำ
            </h2>

            <ol className="space-y-4 mb-6 list-decimal list-inside text-gray-700">
              <li className="leading-relaxed"><strong>ทำความสะอาดเครื่อง</strong> - เช็ดทำความสะอาดให้เครื่องดูใหม่และสะอาด</li>
              <li className="leading-relaxed"><strong>เตรียมกล่องและอุปกรณ์</strong> - นำกล่อง สายชาร์จ หัวชาร์จ มาด้วยจะเพิ่มมูลค่าได้</li>
              <li className="leading-relaxed"><strong>ปลดล็อค iCloud</strong> - ไปที่ Settings → Apple ID → Find My → ปิด Find My iPhone</li>
              <li className="leading-relaxed"><strong>ลบข้อมูลส่วนตัว</strong> - Backup ข้อมูลแล้ว Factory Reset เครื่อง</li>
              <li className="leading-relaxed"><strong>ตรวจเช็คสภาพแบตเตอรี่</strong> - แบตเตอรี่ที่เหลือ 85% ขึ้นไปจะได้ราคาดีกว่า</li>
            </ol>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border-2" style={{ borderColor: 'var(--aurum-gold)' }}>
              <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--aurum-navy)' }}>
                💡 เคล็ดลับพิเศษ
              </h3>
              <p className="text-gray-700">
                หากต้องการขายแทนการจำนำ iPhone รุ่นใหม่ๆ มักจะได้ราคาดีกว่า แต่ถ้าต้องการเก็บเครื่องไว้ใช้ต่อ การจำนำจะเป็นตัวเลือกที่ดีกว่า เพราะสามารถไถ่คืนได้ภายใน 3-6 เดือน
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>
              สรุป: iPhone รุ่นไหนคุ้มค่าที่สุด?
            </h2>

            <p className="text-gray-700 mb-4">
              หาก<strong>มี iPhone 16 Pro Max หรือ 16 Pro</strong> จะได้ราคาจำนำสูงสุด แต่ถ้าพิจารณาจากอัตราส่วนราคาจำนำต่อราคาซื้อ <strong>iPhone 15 Series</strong> กลับให้อัตราส่วนที่ดีกว่า เพราะราคาตลาดลดลงแล้ว แต่ยังได้ราคาจำนำที่ดี
            </p>

            <p className="text-gray-700">
              ไม่ว่าจะเป็นรุ่นไหน สิ่งสำคัญคือต้อง<strong>ปลดล็อค iCloud</strong>, เตรียมเครื่องให้พร้อม และเลือกร้านจำนำที่เชื่อถือได้เพื่อรับราคาที่ยุติธรรม
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--aurum-navy)' }}>
            ต้องการประเมินราคา iPhone ของคุณ?
          </h3>
          <p className="text-gray-600 mb-6">
            ติดต่อเราวันนี้เพื่อรับราคาประเมินฟรี ไม่มีค่าใช้จ่าย
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/#contact"
              className="px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
              style={{
                backgroundColor: 'var(--aurum-gold)',
                color: 'var(--aurum-navy)'
              }}
            >
              ติดต่อเรา
            </a>
            <a
              href="/#estimate"
              className="px-8 py-3 rounded-lg font-semibold border-2 transition-all hover:shadow-lg"
              style={{
                borderColor: 'var(--aurum-gold)',
                color: 'var(--aurum-navy)'
              }}
            >
              ประเมินราคาออนไลน์
            </a>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--aurum-navy)' }}>
            บทความที่เกี่ยวข้อง
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/how-to-choose-pawn-shop" className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
              <h4 className="font-semibold mb-2 group-hover:text-[var(--aurum-gold)]" style={{ color: 'var(--aurum-navy)' }}>
                5 วิธีเลือกร้านจำนำที่ไม่โดนกดราคา
              </h4>
              <p className="text-sm text-gray-600">สิ่งที่ต้องเช็คก่อนเลือกร้านจำนำ...</p>
            </Link>
            <Link to="/blog/rolex-pawn-authenticity-check" className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
              <h4 className="font-semibold mb-2 group-hover:text-[var(--aurum-gold)]" style={{ color: 'var(--aurum-navy)' }}>
                จำนำนาฬิกา Rolex อย่างไรให้ได้ราคาดี
              </h4>
              <p className="text-sm text-gray-600">ทุกอย่างที่ต้องรู้เกี่ยวกับการจำนำนาฬิกา Rolex...</p>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
