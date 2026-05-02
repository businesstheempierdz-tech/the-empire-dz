import { Truck, Shield, Headphones, CreditCard, RotateCcw, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/config';

const features = [
  {
    icon: Truck,
    title: 'توصيل لـ 58 ولاية',
    desc: `توصيل سريع لجميع ولايات الجزائر خلال ${COMPANY_INFO.delivery.time}`,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Shield,
    title: 'دفع آمن',
    desc: 'الدفع عند الاستلام أو عبر CCP / BaridiMob',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: Headphones,
    title: 'دعم واتساب سريع',
    desc: 'فريق دعم متجاوب للرد على استفساراتك',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: RotateCcw,
    title: 'إرجاع مجاني',
    desc: 'إمكانية إرجاع المنتج خلال 7 أيام',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    icon: CreditCard,
    title: 'أسعار منافسة',
    desc: 'أفضل الأسعار في السوق الجزائري',
    color: 'text-empire-gold',
    bg: 'bg-empire-gold/10',
  },
  {
    icon: Award,
    title: 'منتجات أصلية 100%',
    desc: 'نضمن أصالة وجودة جميع منتجاتنا',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
  },
];

export default function Features() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-empire-gold text-sm font-semibold tracking-widest uppercase">لماذا تختارنا؟</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">مميزاتنا الحصرية</h2>
          <div className="w-20 h-1 gold-gradient rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-300 group cursor-default"
              >
                <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${f.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-empire-gold transition-colors">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Delivery Info */}
        <div className="mt-12 glass-effect rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">🚚 معلومات التوصيل</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl mb-2">📦</div>
              <div className="text-empire-gold font-bold">{COMPANY_INFO.delivery.cost} د.ج</div>
              <div className="text-sm text-gray-400">تكلفة التوصيل</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🎁</div>
              <div className="text-empire-gold font-bold">شحن مجاني</div>
              <div className="text-sm text-gray-400">للطلبات فوق {COMPANY_INFO.delivery.freeAbove.toLocaleString()} د.ج</div>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-empire-gold font-bold">{COMPANY_INFO.delivery.time}</div>
              <div className="text-sm text-gray-400">مدة التوصيل</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
