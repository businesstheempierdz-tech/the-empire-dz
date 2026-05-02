import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, Camera } from 'lucide-react';
import { COMPANY_INFO } from '../data/config';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showHoursDetails, setShowHoursDetails] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // فتح واتساب مع الرسالة
    const message = `مرحباً The Empire DZ 👋\n\nالاسم: ${formData.name}\nالهاتف: ${formData.phone}\nالإيميل: ${formData.email}\n\nالرسالة:\n${formData.message}`;
    window.open(`https://wa.me/${COMPANY_INFO.phoneInternational}?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactItems = [
    { icon: Phone, title: 'اتصل بنا', info: COMPANY_INFO.phoneFormatted, sub: `متاح ${COMPANY_INFO.businessHours.summary}`, link: `tel:${COMPANY_INFO.phone}` },
    { icon: MessageCircle, title: 'واتساب', info: 'راسلنا مباشرة', sub: 'رد سريع خلال ساعات العمل', link: COMPANY_INFO.social.whatsapp },
    { icon: Mail, title: 'البريد الإلكتروني', info: COMPANY_INFO.email, sub: 'نرد خلال 24 ساعة', link: `mailto:${COMPANY_INFO.email}` },
    { icon: MapPin, title: 'الموقع', info: COMPANY_INFO.city, sub: `${COMPANY_INFO.country} - نوصل لـ 58 ولاية`, link: '#' },
    { icon: Clock, title: 'ساعات العمل', info: COMPANY_INFO.businessHours.summary, sub: 'اضغط لمعرفة التفاصيل', link: '#hours' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-empire-gray/30 to-empire-dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-empire-gold text-sm font-semibold tracking-widest uppercase">نحن هنا لمساعدتك</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">تواصل معنا</h2>
          <div className="w-20 h-1 gold-gradient rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const isHours = item.title === 'ساعات العمل';
              const className = "glass-effect rounded-2xl p-5 flex items-start gap-4 hover:scale-[1.02] transition-all group block text-right w-full";
              const content = (
                <>
                  <div className="w-12 h-12 rounded-2xl bg-empire-gold/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-empire-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <p className="text-empire-gold text-sm font-medium">{item.info}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                  </div>
                </>
              );

              if (isHours) {
                return (
                  <div key={i}>
                    <button type="button" onClick={() => setShowHoursDetails(prev => !prev)} className={className}>
                      {content}
                    </button>
                    {showHoursDetails && (
                      <div className="mt-3 mr-4 border-r-2 border-empire-gold/30 pr-4 space-y-2 animate-slide-up">
                        {COMPANY_INFO.businessHours.details.map((detail) => (
                          <p key={detail} className="text-sm text-gray-400">{detail}</p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={i}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={className}
                >
                  {content}
                </a>
              );
            })}

            {/* Social */}
            <div className="glass-effect rounded-2xl p-5">
              <h4 className="font-bold text-white text-sm mb-4">تابعنا على</h4>
              <div className="flex gap-3">
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
                  title="Facebook"
                >
                  <Globe className="w-5 h-5" />
                </a>
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-all"
                  title="Instagram"
                >
                  <Camera className="w-5 h-5" />
                </a>
                <a
                  href={COMPANY_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-all"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 space-y-5">
              <h3 className="text-xl font-bold text-white mb-2">أرسل لنا رسالة</h3>
              <p className="text-gray-400 text-sm mb-4">سيتم إرسال رسالتك عبر واتساب للرد السريع</p>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">الاسم الكامل *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-empire-gold/50 focus:ring-1 focus:ring-empire-gold/30 transition-all text-sm"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">رقم الهاتف *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-empire-gold/50 focus:ring-1 focus:ring-empire-gold/30 transition-all text-sm"
                    placeholder="0698 XX XX XX"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">البريد الإلكتروني (اختياري)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-empire-gold/50 focus:ring-1 focus:ring-empire-gold/30 transition-all text-sm"
                  placeholder="example@email.com"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">رسالتك *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-empire-gold/50 focus:ring-1 focus:ring-empire-gold/30 transition-all text-sm resize-none"
                  placeholder="اكتب رسالتك هنا... (استفسار عن منتج، طلب، اقتراح...)"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 gold-gradient text-empire-dark font-bold rounded-xl hover:shadow-xl hover:shadow-empire-gold/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
              >
                {submitted ? (
                  <>✅ جاري فتح واتساب...</>
                ) : (
                  <>
                    إرسال عبر واتساب
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
