import { useState, useEffect } from 'react';
import { Clock, Zap, ArrowLeft } from 'lucide-react';
import { COMPANY_INFO, PROMO_CODE } from '../data/config';

export default function Offers() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      title: `خصم ${PROMO_CODE.discount}% على أول طلب`,
      description: `استخدم كود: ${PROMO_CODE.code}`,
      emoji: '🎉',
      gradient: 'from-empire-gold/30 to-orange-600/30',
      border: 'border-empire-gold/30',
    },
    {
      title: 'شحن مجاني',
      description: `على الطلبات فوق ${COMPANY_INFO.delivery.freeAbove.toLocaleString()} د.ج`,
      emoji: '🚚',
      gradient: 'from-green-600/30 to-teal-600/30',
      border: 'border-green-500/30',
    },
    {
      title: 'عطور أصلية 100%',
      description: 'ضمان الجودة والأصالة على جميع العطور',
      emoji: '✨',
      gradient: 'from-purple-600/30 to-pink-600/30',
      border: 'border-purple-500/30',
    },
  ];

  return (
    <section id="offers" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-empire-dark via-empire-gray/50 to-empire-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-empire-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-empire-gold text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
            <Zap className="w-4 h-4" />
            عروض لا تُفوّت
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">العروض الحصرية</h2>
          <div className="w-20 h-1 gold-gradient rounded-full mx-auto mt-4" />
        </div>

        {/* Countdown Banner */}
        <div className="glass-effect rounded-3xl p-8 sm:p-12 mb-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-empire-gold/5 via-transparent to-empire-gold/5" />
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-empire-gold" />
              <span className="text-empire-gold font-semibold">عرض محدود - ينتهي خلال</span>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              {[
                { value: timeLeft.hours, label: 'ساعة' },
                { value: timeLeft.minutes, label: 'دقيقة' },
                { value: timeLeft.seconds, label: 'ثانية' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl gold-gradient flex items-center justify-center text-empire-dark text-3xl sm:text-4xl font-black shadow-lg shadow-empire-gold/20">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <span className="text-xs text-gray-400 mt-2">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 mt-6 text-lg">
              خصم يصل إلى <span className="text-empire-gold font-bold text-2xl">50%</span> على عطور مختارة!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <a href="#products" className="inline-flex items-center justify-center gap-2 px-8 py-3 gold-gradient text-empire-dark font-bold rounded-2xl hover:shadow-xl hover:shadow-empire-gold/30 transition-all hover:scale-105">
                تسوق العروض
                <ArrowLeft className="w-4 h-4" />
              </a>
              <a href={COMPANY_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-500 transition-all">
                💬 اطلب الآن واتساب
              </a>
            </div>
          </div>
        </div>

        {/* Offer Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <div
              key={i}
              className={`rounded-3xl p-8 bg-gradient-to-br ${offer.gradient} border ${offer.border} hover:scale-105 transition-all duration-300 cursor-pointer group`}
            >
              <div className="text-5xl mb-4">{offer.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-empire-gold transition-colors">{offer.title}</h3>
              <p className="text-gray-400 text-sm">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
