import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/config';

export default function Newsletter() {
  const [phone, setPhone] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // فتح واتساب للتسجيل
    const message = `مرحباً The Empire DZ 👑\n\nأريد الاشتراك في قائمة العروض الحصرية.\n\nرقم هاتفي: ${phone}\n\nشكراً!`;
    window.open(`https://wa.me/${COMPANY_INFO.phoneInternational}?text=${encodeURIComponent(message)}`, '_blank');
    setSubscribed(true);
    setPhone('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-effect rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-empire-gold/5 via-transparent to-empire-gold/5" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-empire-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-empire-gold/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-empire-gold/10 text-empire-gold text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>انضم لعائلة The Empire</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              احصل على العروض الحصرية
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              سجل رقمك واحصل على إشعارات فورية بأحدث العروض والمنتجات الجديدة
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">📱</span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full pr-12 pl-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-empire-gold/50 focus:ring-1 focus:ring-empire-gold/30 transition-all"
                  placeholder="0698 XX XX XX"
                  dir="ltr"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 gold-gradient text-empire-dark font-bold rounded-xl hover:shadow-xl hover:shadow-empire-gold/30 transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                {subscribed ? '✅ تم!' : 'اشترك الآن'}
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              🔒 لن نشارك رقمك مع أي طرف آخر
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
