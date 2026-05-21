import { Search, FileText, Banknote, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'ประเมินราคาออนไลน์',
      description: 'กรอกข้อมูลทรัพย์สินของคุณ รับราคาประมาณการทันที ไม่มีค่าใช้จ่าย'
    },
    {
      icon: FileText,
      number: '02',
      title: 'นำทรัพย์สินมาตรวจสอบ',
      description: 'นำทรัพย์สินมาที่ร้าน ผู้เชี่ยวชาญตรวจสอบและประเมินราคาจริง'
    },
    {
      icon: Banknote,
      number: '03',
      title: 'รับเงินสดทันที',
      description: 'ตกลงราคาและเงื่อนไข รับเงินสดภายใน 15 นาที พร้อมใบสัญญา'
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'ไถ่คืนได้ตลอด',
      description: 'ชำระดอกเบี้ยและเงินต้นเมื่อไหร่ก็ได้ รับทรัพย์สินคืนทันที'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--aurum-navy)' }}>
            ขั้นตอนการจำนำ
          </h2>
          <p className="text-lg text-gray-600">
            เพียง 4 ขั้นตอนง่ายๆ รับเงินสดไว ภายใน 15 นาที
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[var(--aurum-gold)] to-transparent" />
                )}

                <div className="text-center relative z-10">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 border-2" style={{
                    borderColor: 'var(--aurum-gold)',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    color: 'var(--aurum-gold)'
                  }}>
                    <span className="font-bold">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-xl" style={{
                      backgroundColor: 'rgba(212, 175, 55, 0.1)'
                    }}>
                      <Icon size={32} style={{ color: 'var(--aurum-gold)' }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--aurum-navy)' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="p-8 md:p-12 rounded-2xl border-2" style={{
          borderColor: 'var(--aurum-gold)',
          background: 'linear-gradient(135deg, var(--aurum-dark-navy) 0%, var(--aurum-navy) 100%)'
        }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">
                ทำไมต้อง AURUM TRUST?
              </h3>
              <p className="text-gray-300 mb-6">
                เราไม่ใช่แค่ร้านรับจำนำทั่วไป เราคือพันธมิตรทางการเงินที่คุณไว้วางใจได้
              </p>
              <div className="space-y-4">
                {[
                  'ประเมินราคายุติธรรม ไม่กดราคา',
                  'มีใบอนุญาตถูกต้อง ตามกฎหมาย',
                  'ทรัพย์สินมีประกันภัย 100%',
                  'ดอกเบี้ยต่ำ โปร่งใส ไม่มีค่าธรรมเนียมแอบแฝง',
                  'บริการโดยผู้เชี่ยวชาญมากประสบการณ์',
                  'ความเป็นส่วนตัว รักษาข้อมูลลูกค้าอย่างเคร่งครัด'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle size={20} style={{ color: 'var(--aurum-gold)' }} />
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {/* Stats Cards */}
              <div className="p-6 rounded-xl backdrop-blur-sm border" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(212, 175, 55, 0.3)'
              }}>
                <p className="text-5xl font-bold mb-2" style={{ color: 'var(--aurum-gold)' }}>
                  10+
                </p>
                <p className="text-white">ปีประสบการณ์</p>
              </div>

              <div className="p-6 rounded-xl backdrop-blur-sm border" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(212, 175, 55, 0.3)'
              }}>
                <p className="text-5xl font-bold mb-2" style={{ color: 'var(--aurum-gold)' }}>
                  15k+
                </p>
                <p className="text-white">ลูกค้าที่ไว้วางใจ</p>
              </div>

              <div className="p-6 rounded-xl backdrop-blur-sm border" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(212, 175, 55, 0.3)'
              }}>
                <p className="text-5xl font-bold mb-2" style={{ color: 'var(--aurum-gold)' }}>
                  4.9/5
                </p>
                <p className="text-white">คะแนนความพึงพอใจ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
