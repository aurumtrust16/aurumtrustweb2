import { useState } from 'react';
import { Calculator, TrendingUp, MessageCircle } from 'lucide-react';

type AssetType = 'gold' | 'phone' | 'watch' | 'brandname';
type Condition = 'new' | 'good' | 'fair';

interface PriceRange {
  min: number;
  max: number;
}

export function PriceEstimator() {
  const [assetType, setAssetType] = useState<AssetType | ''>('');
  const [condition, setCondition] = useState<Condition>('good');
  const [details, setDetails] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState<PriceRange | null>(null);
  const [showResult, setShowResult] = useState(false);

  const assetTypes = [
    { id: 'phone', label: 'มือถือ', icon: '📱', baseMin: 5000, baseMax: 35000 },
    { id: 'watch', label: 'นาฬิกา', icon: '⌚', baseMin: 10000, baseMax: 200000 },
    { id: 'brandname', label: 'แบรนด์เนม', icon: '👜', baseMin: 15000, baseMax: 150000 },
  ];

  const conditions = [
    { id: 'new', label: 'ใหม่/สภาพดีมาก', multiplier: 1.0 },
    { id: 'good', label: 'สภาพดี', multiplier: 0.8 },
    { id: 'fair', label: 'สภาพใช้งานได้', multiplier: 0.6 },
  ];

  const calculatePrice = () => {
    if (!assetType) return;

    const asset = assetTypes.find(a => a.id === assetType);
    if (!asset) return;

    const conditionData = conditions.find(c => c.id === condition);
    if (!conditionData) return;

    const min = Math.round(asset.baseMin * conditionData.multiplier);
    const max = Math.round(asset.baseMax * conditionData.multiplier);

    setEstimatedPrice({ min, max });
    setShowResult(true);
  };

  const handleReset = () => {
    setAssetType('');
    setCondition('good');
    setDetails('');
    setEstimatedPrice(null);
    setShowResult(false);
  };

  const handleLineContact = () => {
    window.open('https://lin.ee/RF3sNle', '_blank');
  };

  return (
    <section id="estimate" className="py-20 px-4 sm:px-6 lg:px-8" style={{
      background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)'
    }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Calculator size={32} style={{ color: 'var(--aurum-gold)' }} />
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--aurum-navy)' }}>
            ประเมินราคาออนไลน์
          </h2>
          <p className="text-lg text-gray-600">
            รู้ราคาประมาณก่อนเข้าร้าน ไม่ต้องกังวลเรื่องราคา
          </p>
        </div>

        {/* Estimator Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border" style={{
          borderColor: 'rgba(212, 175, 55, 0.2)'
        }}>
          {!showResult ? (
            <div className="space-y-6">
              {/* Asset Type Selection */}
              <div>
                <label className="block mb-3 font-semibold" style={{ color: 'var(--aurum-navy)' }}>
                  ประเภททรัพย์สิน
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {assetTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setAssetType(type.id as AssetType)}
                      className="p-4 rounded-lg border-2 transition-all hover:shadow-md"
                      style={{
                        borderColor: assetType === type.id ? 'var(--aurum-gold)' : '#e5e7eb',
                        backgroundColor: assetType === type.id ? 'rgba(212, 175, 55, 0.1)' : 'white'
                      }}
                    >
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <div className="text-sm font-medium" style={{
                        color: assetType === type.id ? 'var(--aurum-gold)' : 'var(--aurum-navy)'
                      }}>
                        {type.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Condition Selection */}
              <div>
                <label className="block mb-3 font-semibold" style={{ color: 'var(--aurum-navy)' }}>
                  สภาพสินค้า
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {conditions.map((cond) => (
                    <button
                      key={cond.id}
                      onClick={() => setCondition(cond.id as Condition)}
                      className="p-4 rounded-lg border-2 transition-all hover:shadow-md text-left"
                      style={{
                        borderColor: condition === cond.id ? 'var(--aurum-gold)' : '#e5e7eb',
                        backgroundColor: condition === cond.id ? 'rgba(212, 175, 55, 0.1)' : 'white'
                      }}
                    >
                      <div className="font-medium" style={{
                        color: condition === cond.id ? 'var(--aurum-gold)' : 'var(--aurum-navy)'
                      }}>
                        {cond.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Details Input */}
              <div>
                <label className="block mb-3 font-semibold" style={{ color: 'var(--aurum-navy)' }}>
                  รายละเอียดเพิ่มเติม (ถ้ามี)
                </label>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="เช่น รุ่น, น้ำหนัก, ยี่ห้อ..."
                  className="w-full p-4 rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{
                    borderColor: '#e5e7eb',
                    backgroundColor: 'white'
                  }}
                  rows={3}
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={calculatePrice}
                disabled={!assetType}
                className="w-full py-4 rounded-lg font-semibold transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'var(--aurum-gold)',
                  color: 'var(--aurum-navy)'
                }}
              >
                <Calculator size={20} />
                <span>คำนวณราคา</span>
              </button>
            </div>
          ) : (
            <div className="text-center space-y-6">
              {/* Result */}
              <div className="p-8 rounded-xl" style={{
                background: 'linear-gradient(135deg, var(--aurum-navy) 0%, var(--aurum-dark-navy) 100%)'
              }}>
                <div className="flex justify-center mb-4">
                  <TrendingUp size={48} style={{ color: 'var(--aurum-gold)' }} />
                </div>
                <p className="text-white text-lg mb-4">ราคาประเมินเบื้องต้น</p>
                <div className="text-5xl font-bold mb-2" style={{ color: 'var(--aurum-gold)' }}>
                  ฿{estimatedPrice?.min.toLocaleString()} - ฿{estimatedPrice?.max.toLocaleString()}
                </div>
                <p className="text-gray-300 text-sm">*ราคาอาจแตกต่างจากการประเมินจริง</p>
              </div>

              {/* Call to Action */}
              <div className="p-6 rounded-lg bg-gray-50 border-2 border-dashed" style={{
                borderColor: 'var(--aurum-gold)'
              }}>
                <p className="mb-4" style={{ color: 'var(--aurum-navy)' }}>
                  ต้องการรับราคาที่แน่นอน?
                </p>
                <button
                  onClick={handleLineContact}
                  className="px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2 mx-auto"
                  style={{
                    backgroundColor: '#06C755',
                    color: 'white'
                  }}
                >
                  <MessageCircle size={20} />
                  <span>แอด LINE รับราคาจริง</span>
                </button>
              </div>

              {/* Reset Button */}
              <button
                onClick={handleReset}
                className="text-gray-600 hover:text-gray-900 underline"
              >
                ประเมินใหม่
              </button>
            </div>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: '✓', title: 'ประเมินฟรี', desc: 'ไม่มีค่าใช้จ่าย' },
            { icon: '⚡', title: 'รวดเร็ว', desc: 'ได้คำตอบทันที' },
            { icon: '🔒', title: 'ปลอดภัย', desc: 'ข้อมูลเป็นความลับ' },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 rounded-lg bg-white shadow-md">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-semibold mb-1" style={{ color: 'var(--aurum-navy)' }}>
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
