import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: 'คุณสมชาย ว.',
      rating: 5,
      comment: 'ให้ราคาทองสูงกว่าที่อื่นมาก พนักงานบริการดีมาก ประทับใจครับ จะกลับมาใช้บริการอีกแน่นอน',
      service: 'จำนำทองคำ',
      location: 'กรุงเทพฯ'
    },
    {
      name: 'คุณนิภา ส.',
      rating: 5,
      comment: 'จำนำ iPhone ได้ราคาดีเกินคาด ใช้เวลาไม่ถึง 15 นาทีก็ได้เงินแล้ว สะดวกมากค่ะ',
      service: 'จำนำมือถือ',
      location: 'นนทบุรี'
    },
    {
      name: 'คุณวิชัย ท.',
      rating: 5,
      comment: 'มีผู้เชี่ยวชาญตรวจสอบนาฬิกา Rolex อย่างละเอียด ให้ราคายุติธรรม ไว้ใจได้ครับ',
      service: 'จำนำนาฬิกา',
      location: 'สมุทรปราการ'
    },
    {
      name: 'คุณพิมพ์ใจ ก.',
      rating: 5,
      comment: 'จำนำกระเป๋า Chanel ได้ราคาดีมาก บริการมืออาชีพ ร้านสะอาด สวยงาม รู้สึกปลอดภัย',
      service: 'จำนำแบรนด์เนม',
      location: 'ปทุมธานี'
    }
  ];

  const stats = [
    { number: '15,000+', label: 'ลูกค้าพึงพอใจ' },
    { number: '4.9/5', label: 'คะแนนรีวิว' },
    { number: '98%', label: 'กลับมาใช้บริการซ้ำ' },
    { number: '10+', label: 'ปีประสบการณ์' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md border" style={{
              borderColor: 'rgba(212, 175, 55, 0.2)'
            }}>
              <p className="text-3xl font-bold mb-1" style={{ color: 'var(--aurum-gold)' }}>
                {stat.number}
              </p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--aurum-navy)' }}>
            ลูกค้าพูดถึงเรา
          </h2>
          <p className="text-lg text-gray-600">
            ความไว้วางใจจากลูกค้ากว่า 15,000 ราย
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border"
              style={{
                borderColor: 'rgba(212, 175, 55, 0.1)'
              }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote size={24} style={{ color: 'var(--aurum-gold)', opacity: 0.3 }} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="var(--aurum-gold)"
                    stroke="var(--aurum-gold)"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm text-gray-700 mb-4 line-clamp-4">
                "{review.comment}"
              </p>

              {/* Service Tag */}
              <div className="inline-block px-3 py-1 rounded-full text-xs mb-3" style={{
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                color: 'var(--aurum-gold)'
              }}>
                {review.service}
              </div>

              {/* Author */}
              <div className="border-t pt-3" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                <p className="font-semibold text-sm" style={{ color: 'var(--aurum-navy)' }}>
                  {review.name}
                </p>
                <p className="text-xs text-gray-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 p-8 rounded-2xl border-2 border-dashed" style={{
          borderColor: 'var(--aurum-gold)',
          backgroundColor: 'rgba(212, 175, 55, 0.05)'
        }}>
          <p className="text-lg mb-4" style={{ color: 'var(--aurum-navy)' }}>
            มาเป็นส่วนหนึ่งของครอบครัว AURUM TRUST
          </p>
          <button className="px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg" style={{
            backgroundColor: 'var(--aurum-gold)',
            color: 'var(--aurum-navy)'
          }}>
            เริ่มต้นใช้บริการ
          </button>
        </div>
      </div>
    </section>
  );
}
