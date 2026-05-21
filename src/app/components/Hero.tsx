import { ArrowRight, Shield, TrendingUp, Clock } from 'lucide-react';

export function Hero() {
  const scrollToEstimate = () => {
    document.getElementById('estimate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center" style={{
      background: `linear-gradient(135deg, var(--aurum-dark-navy) 0%, var(--aurum-navy) 100%)`
    }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--aurum-gold) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full border" style={{
              borderColor: 'var(--aurum-gold)',
              backgroundColor: 'rgba(212, 175, 55, 0.1)'
            }}>
              <span className="text-sm" style={{ color: 'var(--aurum-gold)' }}>
                มาตรฐานสูง • โปร่งใส • ไว้ใจได้
              </span>
            </div>

            <h1 className="leading-tight" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'white',
              fontWeight: '700'
            }}>
              รับจำนำ<br />
              <span style={{ color: 'var(--aurum-gold)' }}>ให้ราคาดี</span><br />
              โปร่งใส
            </h1>

            <p className="text-lg text-gray-300 max-w-xl">
              ประเมินราคามือถือ นาฬิกา แบรนด์เนมของคุณได้ทันที<br />
              ด้วยระบบออนไลน์ที่แม่นยำ รับเงินสดไว บริการมืออาชีพ
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToEstimate}
                className="px-8 py-4 rounded-lg transition-all hover:shadow-xl flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'var(--aurum-gold)',
                  color: 'var(--aurum-navy)'
                }}
              >
                <span className="font-semibold">ประเมินราคาฟรี</span>
                <ArrowRight size={20} />
              </button>

              <button className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-white/5 flex items-center justify-center gap-2 text-white"
                style={{ borderColor: 'var(--aurum-gold)' }}
              >
                <span className="font-semibold">เรียนรู้เพิ่มเติม</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
              <div className="text-center">
                <div className="flex justify-center mb-2" style={{ color: 'var(--aurum-gold)' }}>
                  <Shield size={24} />
                </div>
                <p className="font-bold text-white text-2xl">100%</p>
                <p className="text-sm text-gray-400">ปลอดภัย</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2" style={{ color: 'var(--aurum-gold)' }}>
                  <TrendingUp size={24} />
                </div>
                <p className="font-bold text-white text-2xl">15k+</p>
                <p className="text-sm text-gray-400">ลูกค้าไว้วางใจ</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2" style={{ color: 'var(--aurum-gold)' }}>
                  <Clock size={24} />
                </div>
                <p className="font-bold text-white text-2xl">15 นาที</p>
                <p className="text-sm text-gray-400">รับเงินไว</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl p-8 backdrop-blur-sm border" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(212, 175, 55, 0.3)'
            }}>
              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-3xl opacity-50" style={{
                backgroundColor: 'var(--aurum-gold)'
              }} />

              <div className="space-y-6">
                <div className="text-center py-8 border-b" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                  <p className="text-gray-400 mb-2">ช่วงราคาจำนำ</p>
                  <p className="text-4xl font-bold" style={{ color: 'var(--aurum-gold)' }}>
                    ฿5k - ฿200k
                  </p>
                  <p className="text-sm text-gray-400 mt-1">ตามสภาพและรุ่น</p>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'iPhone', value: '฿8,000 - ฿35,000' },
                    { label: 'นาฬิกา', value: '฿15,000 - ฿200,000' },
                    { label: 'แบรนด์เนม', value: '฿15,000 - ฿150,000' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 rounded-lg" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }}>
                      <span className="text-white">{item.label}</span>
                      <span className="font-semibold" style={{ color: 'var(--aurum-gold)' }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2" style={{
          borderColor: 'var(--aurum-gold)'
        }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--aurum-gold)' }} />
        </div>
      </div>
    </section>
  );
}
