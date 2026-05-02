import { Target, Eye, Users, TrendingUp, MapPin, Award, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/config';
import EmpireLogo from './EmpireLogo';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative glass-effect rounded-3xl p-8 sm:p-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center rounded-3xl bg-black/40 p-5 shadow-2xl shadow-empire-gold/20 border border-empire-gold/15">
                  <EmpireLogo variant="full" className="scale-75 sm:scale-90" />
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-empire-gold" />
                  <span>{COMPANY_INFO.city}، {COMPANY_INFO.country}</span>
                </div>
                <p className="text-gray-400">منذ {COMPANY_INFO.founded} ونحن نسعى لتقديم الأفضل</p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: Users, value: '+1,000', label: 'عميل سعيد' },
                    { icon: TrendingUp, value: '+2,000', label: 'طلب مكتمل' },
                    { icon: Award, value: '100%', label: 'منتجات أصلية' },
                    { icon: Heart, value: '58', label: 'ولاية نوصلها' },
                  ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div key={i} className="bg-white/5 rounded-2xl p-4 text-center">
                        <Icon className="w-5 h-5 text-empire-gold mx-auto mb-2" />
                        <div className="text-xl font-black text-empire-gold">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-empire-gold/20 rounded-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-empire-gold/20 rounded-3xl" />
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-empire-gold text-sm font-semibold tracking-widest uppercase">تعرف علينا</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">من نحن؟</h2>
              <div className="w-20 h-1 gold-gradient rounded-full mt-4" />
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              <span className="text-empire-gold font-bold">The Empire DZ</span> هي شركة جزائرية ناشئة في مجال التجارة الإلكترونية، انطلقت من ولاية <span className="text-white font-semibold">{COMPANY_INFO.city}</span> بهدف توفير أفضل المنتجات بأسعار تنافسية لجميع الجزائريين.
            </p>

            <p className="text-gray-400 leading-relaxed">
              نتخصص في <span className="text-empire-gold">العطور</span> و<span className="text-empire-gold">الإكسسوارات</span> و<span className="text-empire-gold">المنتجات المنزلية</span> المختارة بعناية. نؤمن بأن كل جزائري يستحق منتجات عملية وأنيقة بأسعار عادلة، لذلك نحرص على اختيار منتجاتنا بعناية فائقة.
            </p>

            <div className="space-y-4">
              {[
                { icon: Target, title: 'مهمتنا', desc: 'تقديم أفضل تجربة تسوق إلكتروني في الجزائر مع ضمان الجودة والسعر المناسب' },
                { icon: Eye, title: 'رؤيتنا', desc: 'أن نصبح الوجهة الأولى للتسوق الإلكتروني في الجزائر وشمال أفريقيا' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-empire-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-empire-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['✅ منتجات أصلية', '🚚 توصيل لـ 58 ولاية', '💰 دفع عند الاستلام', '🔄 إرجاع مجاني'].map((badge) => (
                <span key={badge} className="px-3 py-1.5 text-xs font-medium bg-white/5 rounded-full text-gray-300 border border-white/10">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
