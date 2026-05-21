import { Gem, Smartphone, Watch, ShoppingBag, TrendingUp, Shield, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function Services() {
  const services = [
    {
      icon: Smartphone,
      title: 'รับจำนำมือถือ',
      description: 'iPhone, Samsung ทุกรุ่น ให้ราคาสูงกว่าที่อื่น',
      range: '฿5,000 - ฿35,000',
      features: ['iPhone ราคาดี', 'Android ทุกยี่ห้อ', 'ตรวจสอบสภาพฟรี'],
      link: '/services/phone'
    },
    {
      icon: Watch,
      title: 'รับจำนำนาฬิกา',
      description: 'Rolex, Omega, TAG Heuer และแบรนด์ชั้นนำ มีผู้เชี่ยวชาญตรวจสอบ',
      range: '฿10,000 - ฿200,000',
      features: ['ตรวจสอบความแท้', 'ประเมินโดยผู้เชี่ยวชาญ', 'รับแบรนด์ดัง'],
      link: '/services/luxury'
    },
    {
      icon: ShoppingBag,
      title: 'รับจำนำแบรนด์เนม',
      description: 'กระเป๋า, เครื่องประดับ, แฟชั่นไอเท็ม จาก Chanel, LV, Hermès',
      range: '฿15,000 - ฿150,000',
      features: ['รับของแท้เท่านั้น', 'ตรวจสอบอย่างละเอียด', 'ราคายุติธรรม'],
      link: '/services/luxury'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'ราคาสูงสุด',
      description: 'ประเมินราคายุติธรรม ไม่กดราคา'
    },
    {
      icon: Shield,
      title: 'ปลอดภัย 100%',
      description: 'มีใบอนุญาต ทรัพย์สินมีประกันภัย'
    },
    {
      icon: Clock,
      title: 'รวดเร็ว 15 นาที',
      description: 'ประเมิน อนุมัติ รับเงินทันที'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8" style={{
      backgroundColor: 'var(--aurum-dark-navy)'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            บริการของเรา
          </h2>
          <p className="text-lg text-gray-300">
            รับจำนำทรัพย์สินหลากหลายประเภท ด้วยมาตรฐานระดับพรีเมียม
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="group p-6 rounded-xl border backdrop-blur-sm transition-all hover:shadow-2xl hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(212, 175, 55, 0.2)'
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg" style={{
                    backgroundColor: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Icon size={32} style={{ color: 'var(--aurum-gold)' }} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-center text-white">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4 text-center">
                  {service.description}
                </p>

                <div className="text-center mb-4 py-3 rounded-lg" style={{
                  backgroundColor: 'rgba(212, 175, 55, 0.1)'
                }}>
                  <p className="text-sm text-gray-400 mb-1">ช่วงราคา</p>
                  <p className="font-bold" style={{ color: 'var(--aurum-gold)' }}>
                    {service.range}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full" style={{
                        backgroundColor: 'var(--aurum-gold)'
                      }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all" style={{ color: 'var(--aurum-gold)' }}>
                  <span>ดูรายละเอียด</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full border-2" style={{
                    borderColor: 'var(--aurum-gold)',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Icon size={28} style={{ color: 'var(--aurum-gold)' }} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
