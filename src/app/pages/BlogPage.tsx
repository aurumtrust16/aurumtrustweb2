import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

export function BlogPage() {
  const articles = [
    {
      slug: 'iphone-pawn-which-model-best-price',
      title: 'iPhone รุ่นไหนจำนำได้ราคาดีสุด ปี 2026',
      excerpt: 'เปรียบเทียบราคาจำนำ iPhone ทุกรุ่น พร้อมเคล็ดลับเพิ่มมูลค่าก่อนนำไปจำนำ',
      category: 'มือถือ',
      date: '8 พ.ค. 2026',
      readTime: '4 นาที',
      image: 'https://images.unsplash.com/photo-1569532880013-e4aeb31c509d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      slug: 'how-to-choose-pawn-shop',
      title: '5 วิธีเลือกร้านจำนำที่ไม่โดนกดราคา',
      excerpt: 'สิ่งที่ต้องเช็คก่อนเลือกร้านจำนำ เพื่อให้ได้ราคายุติธรรมและปลอดภัย',
      category: 'คำแนะนำ',
      date: '7 พ.ค. 2026',
      readTime: '6 นาที',
      image: 'https://images.unsplash.com/photo-1633144427937-e108eeb92421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      slug: 'rolex-pawn-authenticity-check',
      title: 'จำนำนาฬิกา Rolex อย่างไรให้ได้ราคาดี',
      excerpt: 'ทุกอย่างที่ต้องรู้เกี่ยวกับการจำนำนาฬิกา Rolex จากการตรวจสอบความแท้ไปจนถึงการต่อรอง',
      category: 'แบรนด์เนม',
      date: '6 พ.ค. 2026',
      readTime: '7 นาที',
      image: 'https://images.unsplash.com/photo-1702865053958-71ec751c4118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      slug: 'hermes-bag-pawn-guide',
      title: 'คู่มือจำนำกระเป๋า Hermès ฉบับสมบูรณ์',
      excerpt: 'ราคาจำนำกระเป๋า Hermès แต่ละรุ่น วิธีตรวจสอบความแท้ และเคล็ดลับเพิ่มมูลค่า',
      category: 'แบรนด์เนม',
      date: '4 พ.ค. 2026',
      readTime: '8 นาที',
      image: 'https://images.unsplash.com/photo-1604208032420-8595afeb49b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
  ];

  const categories = ['ทั้งหมด', 'มือถือ', 'แบรนด์เนม', 'คำแนะนำ'];

  return (
    <>
      <Helmet>
        <title>บทความและคู่มือจำนำ | AURUM TRUST Blog</title>
        <meta name="description" content="บทความ คู่มือ และเคล็ดลับเกี่ยวกับการจำนำมือถือ แบรนด์เนม จากผู้เชี่ยวชาญ อัปเดตใหม่ทุกสัปดาห์" />
        <meta name="keywords" content="บทความจำนำ, ราคาจำนำมือถือ, จำนำแบรนด์เนม, จำนำนาฬิกา" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8" style={{
        background: 'linear-gradient(135deg, var(--aurum-dark-navy) 0%, var(--aurum-navy) 100%)'
      }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            บทความและคู่มือ
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ความรู้ เคล็ดลับ และข้อมูลอัปเดตเกี่ยวกับการจำนำจากผู้เชี่ยวชาญ
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border-2 transition-all hover:shadow-md"
                style={{
                  borderColor: index === 0 ? 'var(--aurum-gold)' : '#e5e7eb',
                  backgroundColor: index === 0 ? 'rgba(212, 175, 55, 0.1)' : 'white',
                  color: index === 0 ? 'var(--aurum-gold)' : 'var(--aurum-navy)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link
                key={index}
                to={`/blog/${article.slug}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="inline-block px-3 py-1 rounded-full text-xs mb-3" style={{
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    color: 'var(--aurum-gold)'
                  }}>
                    {article.category}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold mb-3 line-clamp-2 group-hover:text-[var(--aurum-gold)] transition-colors" style={{
                    color: 'var(--aurum-navy)',
                    fontSize: '1.125rem'
                  }}>
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {article.date}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" style={{
                      color: 'var(--aurum-gold)'
                    }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-lg border-2 font-semibold transition-all hover:shadow-lg" style={{
              borderColor: 'var(--aurum-gold)',
              color: 'var(--aurum-navy)'
            }}>
              โหลดบทความเพิ่มเติม
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{
        backgroundColor: 'var(--aurum-dark-navy)'
      }}>
        <div className="max-w-2xl mx-auto text-center">
          <TrendingUp size={48} className="mx-auto mb-6" style={{ color: 'var(--aurum-gold)' }} />
          <h2 className="text-3xl font-bold mb-4 text-white">
            รับข่าวสารและบทความใหม่
          </h2>
          <p className="text-gray-300 mb-8">
            อัปเดตราคา เคล็ดลับ และข้อมูลดีๆ ส่งตรงถึงคุณทุกสัปดาห์
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="อีเมลของคุณ"
              className="flex-1 px-4 py-3 rounded-lg border-2"
              style={{ borderColor: 'var(--aurum-gold)' }}
            />
            <button className="px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg whitespace-nowrap" style={{
              backgroundColor: 'var(--aurum-gold)',
              color: 'var(--aurum-navy)'
            }}>
              สมัครรับข่าวสาร
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
