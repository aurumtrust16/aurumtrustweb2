import { Helmet } from 'react-helmet-async';
import { BadgeCheck, CheckCircle2, Clock3, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';

const FACEBOOK_INBOX_URL = 'https://m.me/61589267054204';
const LINE_URL = 'https://lin.ee/RF3sNle';

const services = [
  'โทรศัพท์มือถือและแท็บเล็ต',
  'นาฬิกาและเครื่องประดับ',
  'กระเป๋าและสินค้าแบรนด์เนม',
];

const steps = [
  ['ส่งข้อมูลสินค้า', 'ส่งรูป รุ่น สภาพ อุปกรณ์ และพื้นที่นัดหมายผ่าน LINE หรือ Facebook'],
  ['รับการประเมินเบื้องต้น', 'ทีมงานตรวจข้อมูลและแจ้งวงเงิน เงื่อนไข และค่าใช้จ่ายให้ทราบก่อน'],
  ['ตรวจสินค้าและทำสัญญา', 'ยืนยันตัวตน ตรวจสอบกรรมสิทธิ์ และตัดสินใจหลังอ่านรายละเอียดครบถ้วน'],
];

export function AdPawnLandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>รับจำนำสินค้า กรุงเทพฯ และสมุทรปราการ | AURUM TRUST</title>
        <meta
          name="description"
          content="ประเมินเบื้องต้นสำหรับมือถือ นาฬิกา และสินค้าแบรนด์เนมในกรุงเทพฯ และสมุทรปราการ ติดต่อ AURUM TRUST ผ่าน LINE หรือ Facebook"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.2),transparent_45%)]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-xl font-bold tracking-[0.18em] text-amber-300">AURUM TRUST</p>
              <p className="mt-1 text-xs text-slate-400">บริการรับจำนำโดยมีหลักฐานและข้อตกลงเป็นลายลักษณ์อักษร</p>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm text-amber-200 sm:flex">
              <BadgeCheck size={18} /> ใบอนุญาตเลขที่ 0001144
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10">
                <MapPin size={17} className="text-amber-300" /> กรุงเทพฯ และสมุทรปราการ
              </div>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                รับจำนำมือถือ นาฬิกา<br />
                <span className="text-amber-300">และสินค้าแบรนด์เนม</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                เลือกวงเงินตามความต้องการและมีสิทธิ์ไถ่ถอนตามสัญญา ส่งข้อมูลเพื่อประเมินเบื้องต้นได้โดยไม่มีข้อผูกมัดก่อนตกลงทำรายการ
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-tracking-placement="ad-landing-hero"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#06C755] px-6 py-4 font-bold text-white transition hover:brightness-110"
                >
                  <MessageCircle size={21} /> เพิ่ม LINE @aurumtrust
                </a>
                <a
                  href={FACEBOOK_INBOX_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-tracking-placement="ad-landing-hero"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#1877F2] px-6 py-4 font-bold text-white transition hover:brightness-110"
                >
                  <MessageCircle size={21} /> ทัก Facebook Inbox
                </a>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <Clock3 size={16} /> มีทีมงานตอบเกือบตลอดวัน ยกเว้น 01:00–04:00 น.
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur sm:p-8">
              <h2 className="text-xl font-bold text-amber-300">สินค้าที่รับประเมิน</h2>
              <ul className="mt-5 space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 size={20} className="shrink-0 text-amber-300" /> {service}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-slate-900/80 p-4 text-sm leading-6 text-slate-300 ring-1 ring-white/10">
                กรุณาเตรียมบัตรประชาชน หลักฐานความเป็นเจ้าของ และสินค้าที่ไม่มีภาระผูกพัน การอนุมัติวงเงินจริงขึ้นอยู่กับการตรวจสภาพและเอกสาร
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 text-slate-900 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <section
            aria-labelledby="pawn-terms-heading"
            className="mb-14 overflow-hidden rounded-3xl border-2 border-amber-300 bg-amber-50 shadow-lg"
          >
            <div className="bg-slate-950 px-6 py-5 text-white sm:px-8">
              <p className="text-sm font-semibold text-amber-300">ข้อมูลที่ต้องทราบก่อนตัดสินใจ</p>
              <h2 id="pawn-terms-heading" className="mt-1 text-2xl font-bold">
                ระยะเวลา อัตราดอกเบี้ย และตัวอย่างค่าใช้จ่าย
              </h2>
            </div>
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold text-slate-950">เงื่อนไขบริการ</h3>
                <dl className="mt-4 space-y-4 text-base leading-7 text-slate-700">
                  <div>
                    <dt className="font-semibold text-slate-950">ระยะเวลาขั้นต่ำ–สูงสุด</dt>
                    <dd>61–150 วัน</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-950">อัตราดอกเบี้ย</dt>
                    <dd>เงินต้นไม่เกิน 2,000 บาท: 2% ต่อเดือน</dd>
                    <dd>เงินต้นส่วนที่เกิน 2,000 บาท: 1.25% ต่อเดือน</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-950">APR สูงสุด</dt>
                    <dd>ไม่เกิน 24% ต่อปี กรณีวงเงินไม่เกิน 2,000 บาท</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-950">ค่าธรรมเนียมอื่น</dt>
                    <dd>ไม่มีค่าบริการหรือค่าใช้จ่ายอื่นนอกเหนือจากดอกเบี้ยข้างต้น</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl bg-white p-5 ring-1 ring-amber-200 sm:p-6">
                <h3 className="text-lg font-bold text-slate-950">ตัวอย่างค่าใช้จ่าย</h3>
                <p className="mt-3 leading-7 text-slate-700">
                  รับเงินต้น 2,000 บาท ระยะเวลา 90 วัน ดอกเบี้ย 2% ต่อเดือน เป็นเวลา 3 เดือน
                </p>
                <div className="mt-5 space-y-2 border-t border-slate-200 pt-4 text-base text-slate-700">
                  <p className="flex justify-between gap-4"><span>เงินต้น</span><strong>2,000 บาท</strong></p>
                  <p className="flex justify-between gap-4"><span>ดอกเบี้ยรวม</span><strong>120 บาท</strong></p>
                  <p className="flex justify-between gap-4 text-lg text-slate-950"><span>ยอดไถ่ถอนรวม</span><strong>2,120 บาท</strong></p>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  กรณีระยะเวลาไม่ครบเดือน: ไม่เกิน 15 วันคิดครึ่งเดือน และเกิน 15 วันคิดหนึ่งเดือน
                </p>
              </div>
            </div>
            <div className="border-t border-amber-200 bg-white px-6 py-5 text-sm leading-6 text-slate-700 sm:px-8">
              <strong className="text-slate-950">สถานที่ประกอบการ:</strong>{' '}
              1/8 หมู่ 13 ตำบลบางพึ่ง อำเภอพระประแดง จังหวัดสมุทรปราการ 10130
            </div>
          </section>

          <div className="text-center">
            <p className="font-semibold text-amber-700">ขั้นตอนชัดเจน</p>
            <h2 className="mt-2 text-3xl font-bold">ประเมินก่อน ตัดสินใจเมื่อทราบเงื่อนไขครบ</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map(([title, description], index) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">{index + 1}</div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-slate-100 p-6">
              <h2 className="flex items-center gap-2 text-lg font-bold"><ShieldCheck className="text-amber-700" /> ข้อมูลสำคัญก่อนทำรายการ</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>• วงเงินจริงพิจารณาจากประเภท รุ่น สภาพ อุปกรณ์ และผลการตรวจสินค้า</li>
                <li>• ระยะเวลา อัตราดอกเบี้ย และตัวอย่างค่าใช้จ่ายแสดงไว้บนหน้านี้ก่อนส่งคำขอ</li>
                <li>• สิทธิ์และหน้าที่ของแต่ละฝ่ายเป็นไปตามสัญญาและกฎหมายที่เกี่ยวข้อง</li>
                <li>• ข้อมูลที่ส่งใช้เพื่อประเมินสินค้าและติดต่อกลับเกี่ยวกับคำขอนี้เท่านั้น</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <h2 className="text-lg font-bold text-amber-300">ติดต่อเพื่อประเมินเบื้องต้น</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">ส่งรูปสินค้า รุ่น สภาพ อุปกรณ์ และพื้นที่นัดหมาย ทีมงานจะตรวจข้อมูลและตอบกลับทางช่องทางที่คุณเลือก</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href={LINE_URL} target="_blank" rel="noreferrer" data-tracking-placement="ad-landing-footer" className="rounded-lg bg-[#06C755] px-5 py-3 text-center font-bold">LINE</a>
                <a href={FACEBOOK_INBOX_URL} target="_blank" rel="noreferrer" data-tracking-placement="ad-landing-footer" className="rounded-lg bg-[#1877F2] px-5 py-3 text-center font-bold">Facebook Inbox</a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs leading-6 text-slate-500">
            <p>เลขที่ใบอนุญาตประกอบกิจการรับจำนำ 0001144 · เลขที่ใบทะเบียนพาณิชย์ 1100369000051</p>
            <p>1/8 หมู่ 13 ตำบลบางพึ่ง อำเภอพระประแดง จังหวัดสมุทรปราการ 10130</p>
            <p>© 2026 AURUM TRUST</p>
          </div>
        </div>
      </section>
    </main>
  );
}
