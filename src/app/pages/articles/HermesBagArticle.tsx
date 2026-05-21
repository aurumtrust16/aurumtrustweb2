import { Helmet } from 'react-helmet-async';
import { Calendar, User, Share2, Facebook, MessageCircle, Copy, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

export function HermesBagArticle() {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <Helmet>
        <title>คู่มือจำนำกระเป๋า Hermès ฉบับสมบูรณ์ | AURUM TRUST Blog</title>
        <meta name="description" content="ราคาจำนำกระเป๋า Hermès แต่ละรุ่น วิธีตรวจสอบความแท้ และเคล็ดลับเพิ่มมูลค่า" />
      </Helmet>

      <div className="h-96 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1604208032420-8595afeb49b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600" alt="Hermes Bag" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(1, 22, 39, 0.4) 0%, rgba(1, 22, 39, 0.8) 100%)' }} />
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="inline-block px-4 py-2 rounded-full text-sm mb-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'var(--aurum-gold)' }}>แบรนด์เนม</div>

          <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--aurum-navy)' }}>คู่มือจำนำกระเป๋า Hermès ฉบับสมบูรณ์</h1>

          <div className="flex items-center gap-6 text-sm text-gray-600 mb-6 pb-6 border-b">
            <span className="flex items-center gap-2"><Calendar size={16} />4 พฤษภาคม 2026</span>
            <span className="flex items-center gap-2"><User size={16} />AURUM TRUST Team</span>
            <span>อ่าน 8 นาที</span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-2"><Share2 size={18} />แชร์บทความ:</span>
            {[
              { icon: <Facebook size={18} style={{ color: '#1877F2' }} />, onClick: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank'), color: '#1877F2' },
              { icon: <MessageCircle size={18} style={{ color: '#06C755' }} />, onClick: () => window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}`, '_blank'), color: '#06C755' },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DA1F2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>, onClick: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank'), color: '#1DA1F2' }
            ].map((btn, i) => (
              <button key={i} onClick={btn.onClick} className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-blue-50" style={{ borderColor: btn.color }}>{btn.icon}</button>
            ))}
            <button onClick={() => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-gray-50" style={{ borderColor: 'var(--aurum-gold)' }}>
              {copied ? <CheckCircle size={18} style={{ color: 'var(--aurum-gold)' }} /> : <Copy size={18} style={{ color: 'var(--aurum-gold)' }} />}
            </button>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              กระเป๋า Hermès ไม่เพียงแค่เป็นแฟชั่นไอเท็ม แต่ยังเป็นการลงทุนที่มีมูลค่าสูงและคงตัว การจำนำกระเป๋า Hermès จึงเป็นวิธีที่ได้เงินก้อนโตโดยยังเก็บสินทรัพย์ไว้ได้ในอนาคต
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>ราคาจำนำกระเป๋า Hermès รุ่นยอดนิยม</h2>

            <div className="space-y-4 mb-6">
              {[
                { name: 'Hermès Birkin 25/30/35', desc: 'กระเป๋าไอคอนิก limited สูงสุด', price: '300,000 - 2,500,000 บาท', color: 'ขึ้นกับหนัง สี และ hardware' },
                { name: 'Hermès Kelly 25/28/32', desc: 'กระเป๋าคลาสสิกสุดหรู', price: '250,000 - 1,800,000 บาท', color: 'สีหายากและ exotic leather ราคาสูงกว่า' },
                { name: 'Hermès Constance 18/24', desc: 'กระเป๋าสะพายข้างสไตล์ชิค', price: '150,000 - 600,000 บาท', color: 'ได้รับความนิยมสูง' },
                { name: 'Hermès Evelyne PM/GM/TPM', desc: 'กระเป๋าลำลองใช้ง่าย', price: '80,000 - 200,000 บาท', color: 'ราคาเข้าถึงได้มากกว่า' }
              ].map((bag, i) => (
                <div key={i} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2" style={{ borderColor: i === 0 ? 'var(--aurum-gold)' : '#e5e7eb' }}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-lg" style={{ color: 'var(--aurum-navy)' }}>{bag.name}</h4>
                      <p className="text-sm text-gray-600">{bag.desc}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="font-bold text-xl" style={{ color: 'var(--aurum-gold)' }}>{bag.price}</p>
                    <p className="text-xs text-gray-500 mt-1">{bag.color}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>ปัจจัยที่ส่งผลต่อราคาจำนำ</h2>

            <div className="space-y-4 mb-6">
              {[
                { title: '1. รุ่นและขนาด', desc: 'Birkin และ Kelly ได้ราคาสูงสุด โดยเฉพาะขนาด 25 และ 30 ที่มีความต้องการสูง' },
                { title: '2. วัสดุหนัง (Leather)', desc: 'Exotic leather เช่น Crocodile, Alligator, Lizard มีราคาสูงกว่าหนังธรรมดาหลายเท่า' },
                { title: '3. สีกระเป๋า', desc: 'สีคลาสสิก (Black, Gold, Etoupe) และสีหายาก (Rose Sakura, Blue Paon) มีมูลค่าสูง' },
                { title: '4. Hardware', desc: 'Gold Hardware (GHW) และ Palladium Hardware (PHW) ได้รับความนิยม' },
                { title: '5. ความครบถ้วน', desc: 'มี Box, Dustbag, Receipt, Authenticity Card ครบจะเพิ่มมูลค่า 15-20%' },
                { title: '6. สภาพกระเป๋า', desc: 'กระเป๋าที่ไม่มีรอยขีดข่วน มุมไม่ลอก หนังไม่แตกจะได้ราคาดีกว่า' }
              ].map((factor, i) => (
                <div key={i} className="p-5 rounded-lg border-l-4" style={{ borderColor: 'var(--aurum-gold)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--aurum-navy)' }}>{factor.title}</h4>
                  <p className="text-gray-700 text-sm">{factor.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>วิธีตรวจสอบความแท้กระเป๋า Hermès</h2>

            <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 mb-6">
              <h4 className="font-semibold mb-4" style={{ color: 'var(--aurum-navy)' }}>จุดตรวจสอบสำคัญ:</h4>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li><strong>Stamp ภายใน</strong> - ตรวจสอบตัวหนังสือ Hermès Paris Made in France ต้องชัดเจน</li>
                <li><strong>Blind Stamp</strong> - สัญลักษณ์และตัวอักษรบอกปีที่ผลิต</li>
                <li><strong>การเย็บ</strong> - เย็บด้วยมือ เส้นตรง ระยะห่างเท่ากัน</li>
                <li><strong>Hardware</strong> - น้ำหนักหนัก ชุบอย่างดี ไม่ลอก</li>
                <li><strong>กลิ่นหนัง</strong> - หนังแท้มีกลิ่นเฉพาะ ไม่ฉุน</li>
                <li><strong>ซิป</strong> - ใช้ซิปแบรนด์คุณภาพ มี logo Hermès</li>
                <li><strong>Dustbag และ Box</strong> - มีคุณภาพดี สีส้มเข้มไม่จาง</li>
              </ol>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
              <h4 className="font-semibold mb-3 text-red-700">⚠️ สัญญาณของกระเป๋าปลอม</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>× Stamp และ Blind Stamp ไม่ชัด หรือตำแหน่งผิด</li>
                <li>× การเย็บไม่สม่ำเสมอ มีเส้นเฉียง</li>
                <li>× Hardware เบาเกินไป ชุบไม่ดี</li>
                <li>× หนังมีกลิ่นแปลกหรือเคมี</li>
                <li>× ราคาถูกผิดปกติ (ถูกกว่าตลาดมาก)</li>
                <li>× ไม่มีเอกสารหรือ Box, Dustbag คุณภาพต่ำ</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>เคล็ดลับเพิ่มมูลค่าจำนำ Hermès</h2>

            <ol className="space-y-3 mb-6 list-decimal list-inside text-gray-700">
              <li><strong>เก็บรักษาให้ดี</strong> - ใส่ Dustbag เก็บในที่แห้ง ไม่โดนแสงแดด</li>
              <li><strong>ทำความสะอาดเบา ๆ</strong> - เช็ดด้วยผ้านุ่ม ไม่ใช้น้ำยาเคมี</li>
              <li><strong>เตรียมเอกสารครบ</strong> - ค้นหา Box, Receipt, Card ให้ครบ</li>
              <li><strong>ถ่ายรูปก่อนส่ง</strong> - เก็บหลักฐานสภาพกระเป๋าก่อนจำนำ</li>
              <li><strong>เลือกร้านที่เชี่ยวชาญ</strong> - ร้านที่เข้าใจ Hermès จะให้ราคาดีกว่า</li>
            </ol>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border-2" style={{ borderColor: 'var(--aurum-gold)' }}>
              <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--aurum-navy)' }}>
                💎 ทำไมกระเป๋า Hermès ถึงเป็นการลงทุนที่ดี?
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ มูลค่าคงที่หรือเพิ่มขึ้นเรื่อย ๆ (บางรุ่นขึ้นราคา 10-15% ต่อปี)</li>
                <li>✓ มีคนต้องการซื้อมากกว่าปริมาณที่ผลิต (Supply น้อยกว่า Demand)</li>
                <li>✓ คุณภาพดีเยี่ยม ทนทาน ใช้ได้นาน</li>
                <li>✓ แบรนด์มีชื่อเสียงระดับโลก</li>
                <li>✓ Resale value สูง ขายง่าย</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--aurum-navy)' }}>สรุป</h2>
            <p className="text-gray-700">
              การจำนำกระเป๋า Hermès เป็นวิธีการใช้เงินจากสินทรัพย์ที่มีอยู่โดยไม่ต้องขาย สิ่งสำคัญคือต้องเลือกร้านที่เชี่ยวชาญและเข้าใจมูลค่าของ Hermès จริง ๆ เพื่อให้ได้ราคาที่ยุติธรรมและปลอดภัย
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--aurum-navy)' }}>ต้องการจำนำกระเป๋า Hermès?</h3>
          <p className="text-gray-600 mb-6">ผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและประเมินราคาอย่างยุติธรรม</p>
          <div className="flex gap-4 justify-center">
            <a href="/#contact" className="px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg" style={{ backgroundColor: 'var(--aurum-gold)', color: 'var(--aurum-navy)' }}>ติดต่อเรา</a>
            <a href="/#estimate" className="px-8 py-3 rounded-lg font-semibold border-2 transition-all hover:shadow-lg" style={{ borderColor: 'var(--aurum-gold)', color: 'var(--aurum-navy)' }}>ประเมินราคา</a>
          </div>
        </div>
      </article>
    </>
  );
}
