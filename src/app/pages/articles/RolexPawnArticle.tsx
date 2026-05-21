import { Helmet } from 'react-helmet-async';
import { Calendar, User, Share2, Facebook, MessageCircle, Copy, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

export function RolexPawnArticle() {
  const [copied, setCopied] = useState(false);

  const shareHandlers = {
    copyLink: () => {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    },
    facebook: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank'),
    line: () => window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}`, '_blank'),
    twitter: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=จำนำนาฬิกา Rolex อย่างไรให้ได้ราคาดี`, '_blank')
  };

  return (
    <>
      <Helmet>
        <title>จำนำนาฬิกา Rolex อย่างไรให้ได้ราคาดี | AURUM TRUST Blog</title>
        <meta name="description" content="ทุกอย่างที่ต้องรู้เกี่ยวกับการจำนำนาฬิกา Rolex จากการตรวจสอบความแท้ไปจนถึงการต่อรอง" />
      </Helmet>

      <div className="h-96 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1702865053958-71ec751c4118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600" alt="Rolex Watch" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(1, 22, 39, 0.4) 0%, rgba(1, 22, 39, 0.8) 100%)' }} />
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="inline-block px-4 py-2 rounded-full text-sm mb-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'var(--aurum-gold)' }}>แบรนด์เนม</div>

          <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--aurum-navy)' }}>จำนำนาฬิกา Rolex อย่างไรให้ได้ราคาดี</h1>

          <div className="flex items-center gap-6 text-sm text-gray-600 mb-6 pb-6 border-b">
            <span className="flex items-center gap-2"><Calendar size={16} />6 พฤษภาคม 2026</span>
            <span className="flex items-center gap-2"><User size={16} />AURUM TRUST Team</span>
            <span>อ่าน 7 นาที</span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-2"><Share2 size={18} />แชร์บทความ:</span>
            {[
              { icon: <Facebook size={18} style={{ color: '#1877F2' }} />, onClick: shareHandlers.facebook, color: '#1877F2' },
              { icon: <MessageCircle size={18} style={{ color: '#06C755' }} />, onClick: shareHandlers.line, color: '#06C755' },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DA1F2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>, onClick: shareHandlers.twitter, color: '#1DA1F2' }
            ].map((btn, i) => (
              <button key={i} onClick={btn.onClick} className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-blue-50" style={{ borderColor: btn.color }}>{btn.icon}</button>
            ))}
            <button onClick={shareHandlers.copyLink} className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-gray-50" style={{ borderColor: 'var(--aurum-gold)' }}>
              {copied ? <CheckCircle size={18} style={{ color: 'var(--aurum-gold)' }} /> : <Copy size={18} style={{ color: 'var(--aurum-gold)' }} />}
            </button>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Rolex เป็นหนึ่งในนาฬิกาหรูที่มีมูลค่าสูงและรักษามูลค่าได้ดีที่สุด การจำนำนาฬิกา Rolex จึงเป็นตัวเลือกที่ได้เงินก้อนโตในเวลารวดเร็ว แต่จะทำอย่างไรให้ได้ราคาสูงสุด?
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>ราคาจำนำ Rolex รุ่นยอดนิยม (2026)</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="font-semibold mb-3" style={{ color: 'var(--aurum-navy)' }}>Rolex Submariner</h4>
                <p className="text-sm text-gray-600 mb-2">รุ่นดำน้ำคลาสสิก ได้รับความนิยมสูงสุด</p>
                <p className="font-bold text-xl" style={{ color: 'var(--aurum-gold)' }}>280,000 - 450,000 บาท</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="font-semibold mb-3" style={{ color: 'var(--aurum-navy)' }}>Rolex Daytona</h4>
                <p className="text-sm text-gray-600 mb-2">นาฬิกาสปอร์ตหรู limited</p>
                <p className="font-bold text-xl" style={{ color: 'var(--aurum-gold)' }}>400,000 - 850,000 บาท</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="font-semibold mb-3" style={{ color: 'var(--aurum-navy)' }}>Rolex GMT-Master II</h4>
                <p className="text-sm text-gray-600 mb-2">นาฬิกา 2 เวลา สำหรับนักเดินทาง</p>
                <p className="font-bold text-xl" style={{ color: 'var(--aurum-gold)' }}>350,000 - 550,000 บาท</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="font-semibold mb-3" style={{ color: 'var(--aurum-navy)' }}>Rolex Datejust</h4>
                <p className="text-sm text-gray-600 mb-2">รุ่นคลาสสิกสุดหรู</p>
                <p className="font-bold text-xl" style={{ color: 'var(--aurum-gold)' }}>180,000 - 350,000 บาท</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>ปัจจัยที่ส่งผลต่อราคาจำนำ Rolex</h2>

            <div className="space-y-4 mb-6">
              {[
                { title: '1. ความแท้และเอกสารครบถ้วน', desc: 'ต้องมี Box, Papers, การ์ดรับประกัน และใบเสร็จ (ถ้ามี) ครบถ้วน เอกสารครบจะเพิ่มมูลค่าได้ 15-25%' },
                { title: '2. สภาพนาฬิกา', desc: 'นาฬิกาที่ไม่มีรอยขีดข่วน กระจกไม่แตก และกลไกทำงานสมบูรณ์จะได้ราคาสูงกว่า' },
                { title: '3. รุ่นและความหายาก', desc: 'รุ่น Limited Edition, Vintage หรือ Discontinued จะมีมูลค่าสูงกว่ารุ่นทั่วไป' },
                { title: '4. ปีที่ผลิต', desc: 'นาฬิกา Rolex รุ่นใหม่และ Vintage หายากมีราคาสูง ส่วนรุ่นกลางๆ อาจได้ราคาต่ำกว่า' }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-lg border-l-4" style={{ borderColor: 'var(--aurum-gold)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--aurum-navy)' }}>{item.title}</h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>5 เคล็ดลับเพิ่มมูลค่าจำนำ Rolex</h2>

            <ol className="space-y-3 mb-6 list-decimal list-inside text-gray-700">
              <li><strong>เตรียม Box และ Papers ให้ครบ</strong> - ค้นหาเอกสารทั้งหมดมาให้พร้อม</li>
              <li><strong>ทำความสะอาดนาฬิกา</strong> - เช็ดให้สะอาด ขัดเงา (ระวังอย่าขัดมากเกินไป)</li>
              <li><strong>เช็คการทำงาน</strong> - ตรวจสอบให้แน่ใจว่ากลไกทำงานปกติ</li>
              <li><strong>ถ่ายรูปเก็บหลักฐาน</strong> - ถ่ายภาพนาฬิกาทุกมุมก่อนส่งจำนำ</li>
              <li><strong>รู้ราคาตลาด</strong> - ศึกษาราคาตลาดปัจจุบันก่อนเจรจา</li>
            </ol>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 mb-8 border-2" style={{ borderColor: 'var(--aurum-gold)' }}>
              <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--aurum-navy)' }}>⚠️ วิธีตรวจสอบความแท้ของ Rolex</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ ตรวจสอบหมายเลข Serial Number ที่ตัวเรือนและการ์ด</li>
                <li>✓ ดูความละเอียดของ Dial และโลโก้</li>
                <li>✓ ตรวจเครื่องกลไกภายใน (เปิดฝาหลัง)</li>
                <li>✓ ทดสอบน้ำหนัก (Rolex แท้หนักกว่าของปลอม)</li>
                <li>✓ ใช้บริการตรวจสอบจากศูนย์ Rolex หรือผู้เชี่ยวชาญ</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>สรุป</h2>
            <p className="text-gray-700">
              การจำนำ Rolex สามารถให้เงินก้อนโตได้อย่างรวดเร็ว สิ่งสำคัญคือต้องเลือกร้านที่เชื่อถือได้ เตรียมเอกสารให้ครบ และศึกษาราคาตลาดก่อน เพื่อให้ได้ราคาที่ยุติธรรมและปลอดภัย
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--aurum-navy)' }}>ต้องการจำนำนาฬิกา Rolex?</h3>
          <p className="text-gray-600 mb-6">ประเมินราคาฟรี รับเงินได้ทันที ปลอดภัย มั่นใจ</p>
          <div className="flex gap-4 justify-center">
            <a href="/#contact" className="px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg" style={{ backgroundColor: 'var(--aurum-gold)', color: 'var(--aurum-navy)' }}>ติดต่อเรา</a>
            <a href="/#estimate" className="px-8 py-3 rounded-lg font-semibold border-2 transition-all hover:shadow-lg" style={{ borderColor: 'var(--aurum-gold)', color: 'var(--aurum-navy)' }}>ประเมินราคา</a>
          </div>
        </div>
      </article>
    </>
  );
}
