import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

export function SellVsPawnArticle() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'ขายขาดกับจำนำต่างกันอย่างไร เลือกแบบไหนให้เหมาะกับคุณ',
    description: 'เปรียบเทียบข้อดี ข้อควรระวัง และสิทธิในทรัพย์สินระหว่างการขายขาดกับการจำนำ',
    author: { '@type': 'Organization', name: 'AURUM TRUST' },
    publisher: { '@type': 'Organization', name: 'AURUM TRUST' },
    mainEntityOfPage: 'https://aurumtrustco.com/blog/sell-vs-pawn-differences',
  };

  return (
    <>
      <Helmet>
        <title>ขายขาดกับจำนำต่างกันอย่างไร? ข้อดีและข้อควรรู้ | AURUM TRUST</title>
        <meta name="description" content="ขายขาดหรือจำนำดี? เข้าใจข้อดีของการจำนำ การเลือกวงเงิน สิทธิไถ่ถอน ต้นทุนและความเสี่ยง พร้อมเปรียบเทียบกับการขายสินค้าแบบขาด" />
        <meta name="keywords" content="ขายขาดหรือจำนำ, จำนำคืออะไร, ข้อดีของการจำนำ, ไถ่ถอนสินค้า, ขายของมือสอง, เลือกวงเงินจำนำ" />
        <link rel="canonical" href="https://aurumtrustco.com/blog/sell-vs-pawn-differences" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ขายขาดกับจำนำต่างกันอย่างไร?" />
        <meta property="og:description" content="เปรียบเทียบสิทธิในทรัพย์ วงเงิน ต้นทุน และความเสี่ยงก่อนตัดสินใจ" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-7 md:p-12">
          <p className="text-sm mb-4" style={{ color: 'var(--aurum-gold)' }}>คู่มือประกอบการตัดสินใจ</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--aurum-navy)' }}>
            ขายขาดกับจำนำต่างกันอย่างไร เลือกแบบไหนให้เหมาะกับคุณ
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            ทั้งสองทางช่วยเปลี่ยนสินทรัพย์เป็นเงิน แต่สิทธิในสินค้า ภาระค่าใช้จ่าย และความเสี่ยงต่างกัน จึงควรดูมากกว่าเพียงจำนวนเงินที่ได้รับในวันแรก
          </p>

          <div className="p-5 rounded-xl border mb-10 bg-amber-50 border-amber-200 text-amber-950">
            <strong>ขอบเขตบริการของ AURUM TRUST:</strong> เว็บไซต์นี้เสนอการประเมินและรับซื้อ-ขายสินค้า บทความนี้เป็นข้อมูลทั่วไปเกี่ยวกับทางเลือกในตลาด ไม่ใช่ข้อเสนอสินเชื่อหรือบริการรับจำนำ
          </div>

          <section className="space-y-4 mb-10">
            <h2 className="text-3xl font-bold" style={{ color: 'var(--aurum-navy)' }}>การขายขาดคืออะไร</h2>
            <p className="text-gray-700 leading-8">ผู้ขายโอนกรรมสิทธิ์สินค้าให้ผู้ซื้อเมื่อรับเงินแล้ว ไม่มีเงินต้น ดอกเบี้ย หรือภาระชำระคืนภายหลัง โดยทั่วไปจึงเหมาะกับสินค้าที่ไม่ต้องการเก็บไว้แล้ว หรือผู้ที่ต้องการจบธุรกรรมในครั้งเดียว</p>
            <ul className="list-disc pl-6 text-gray-700 leading-8">
              <li>ไม่มีดอกเบี้ยและกำหนดชำระคืน</li>
              <li>มักได้รับข้อเสนอที่สะท้อนราคาซื้อขายต่อของสินค้า</li>
              <li>เมื่อขายเสร็จแล้ว ผู้ขายไม่มีสิทธิไถ่คืน เว้นแต่ทำข้อตกลงซื้อขายใหม่</li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-3xl font-bold" style={{ color: 'var(--aurum-navy)' }}>ข้อดีของการจำนำ</h2>
            <p className="text-gray-700 leading-8">การจำนำคือการส่งมอบสังหาริมทรัพย์เป็นหลักประกันเพื่อรับเงิน ผู้จำนำยังมีโอกาสได้สินค้าคืนเมื่อชำระเงินต้นและค่าใช้จ่ายตามสัญญาภายในกำหนด จุดเด่นที่ผู้บริโภคมักพิจารณามีดังนี้</p>
            <ul className="list-disc pl-6 text-gray-700 leading-8">
              <li><strong>รักษาโอกาสได้สินค้าคืน:</strong> เหมาะกับของที่มีคุณค่าทางใจหรืออยากใช้งานต่อ</li>
              <li><strong>เลือกขอวงเงินต่ำกว่ามูลค่าประเมินได้:</strong> การรับเงินเท่าที่จำเป็นอาจช่วยจำกัดเงินต้นและต้นทุน แต่ต้องตรวจเงื่อนไขของผู้ให้บริการ</li>
              <li><strong>ใช้สินทรัพย์ที่มีอยู่เป็นหลักประกัน:</strong> หลักเกณฑ์อนุมัติแตกต่างจากสินเชื่อที่ไม่มีหลักประกัน</li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-3xl font-bold" style={{ color: 'var(--aurum-navy)' }}>ข้อควรระวังก่อนจำนำ</h2>
            <p className="text-gray-700 leading-8">การจำนำยังเป็นภาระทางการเงิน ไม่ใช่วิธีซื้อสินค้าของตนกลับมาในราคาถูก เพราะต้องชำระเงินต้นพร้อมดอกเบี้ยและค่าธรรมเนียมที่ชอบด้วยกฎหมาย หากไม่ไถ่ถอนตามกำหนด อาจเสียสิทธิในทรัพย์นั้น</p>
            <ul className="list-disc pl-6 text-gray-700 leading-8">
              <li>ตรวจใบอนุญาตของผู้ประกอบการและชื่อคู่สัญญา</li>
              <li>ขอตารางดอกเบี้ย ค่าธรรมเนียม วันครบกำหนด และยอดไถ่ถอนทั้งหมดเป็นลายลักษณ์อักษร</li>
              <li>เปรียบเทียบต้นทุนรวม ไม่พิจารณาเฉพาะเงินที่ได้รับ</li>
              <li>รับตั๋วจำนำหรือสัญญาและถ่ายภาพสภาพสินค้าก่อนส่งมอบ</li>
            </ul>
          </section>

          <section className="mb-10 overflow-x-auto">
            <h2 className="text-3xl font-bold mb-5" style={{ color: 'var(--aurum-navy)' }}>เปรียบเทียบแบบย่อ</h2>
            <table className="w-full border-collapse text-left">
              <thead><tr className="bg-gray-100"><th className="p-4 border">หัวข้อ</th><th className="p-4 border">ขายขาด</th><th className="p-4 border">จำนำ</th></tr></thead>
              <tbody>
                <tr><td className="p-4 border">กรรมสิทธิ์</td><td className="p-4 border">โอนให้ผู้ซื้อ</td><td className="p-4 border">มีโอกาสรับคืนเมื่อไถ่ถอนตามสัญญา</td></tr>
                <tr><td className="p-4 border">ภาระชำระคืน</td><td className="p-4 border">ไม่มี</td><td className="p-4 border">มีเงินต้น ดอกเบี้ย และค่าใช้จ่ายตามสัญญา</td></tr>
                <tr><td className="p-4 border">วงเงิน</td><td className="p-4 border">ราคาซื้อขายที่ตกลง</td><td className="p-4 border">อาจเลือกต่ำกว่าวงเงินประเมินได้</td></tr>
                <tr><td className="p-4 border">ความเสี่ยงหลัก</td><td className="p-4 border">ไม่ได้สินค้าเดิมคืน</td><td className="p-4 border">เสียทรัพย์หากไม่ไถ่ถอนตามกำหนด</td></tr>
              </tbody>
            </table>
          </section>

          <section className="p-7 rounded-xl" style={{ backgroundColor: 'var(--aurum-navy)' }}>
            <h2 className="text-2xl font-bold text-white mb-3">ถ้าต้องการขายขาด</h2>
            <p className="text-gray-300 mb-5">AURUM TRUST รับประเมินมือถือ นาฬิกา และสินค้าแบรนด์เนมเบื้องต้นฟรี คุณตัดสินใจได้หลังทราบราคา</p>
            <Link to="/#estimate" className="inline-block px-6 py-3 rounded-lg font-semibold" style={{ backgroundColor: 'var(--aurum-gold)', color: 'var(--aurum-navy)' }}>ประเมินราคาขาย</Link>
          </section>
        </article>
      </main>
    </>
  );
}
