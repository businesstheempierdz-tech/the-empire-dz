import { Camera, Globe, MessageCircle, Phone, Share2, Store } from 'lucide-react';
import { COMPANY_INFO } from '../data/config';
import EmpireLogo from './EmpireLogo';

const quickLinks = [
  {
    title: 'تصفح المتجر',
    subtitle: 'المنتجات والأقسام',
    href: '#products',
    icon: Store,
    color: 'from-empire-gold/20 to-yellow-700/10',
  },
  {
    title: 'اطلب عبر واتساب',
    subtitle: COMPANY_INFO.phoneFormatted,
    href: COMPANY_INFO.social.whatsapp,
    icon: MessageCircle,
    color: 'from-green-500/20 to-green-700/10',
  },
  {
    title: 'صفحتنا على فيسبوك',
    subtitle: 'تابع العروض والتحديثات',
    href: COMPANY_INFO.social.facebook,
    icon: Globe,
    color: 'from-blue-500/20 to-blue-700/10',
  },
  {
    title: 'حساب إنستغرام',
    subtitle: '@theempiredz',
    href: COMPANY_INFO.social.instagram,
    icon: Camera,
    color: 'from-pink-500/20 to-purple-700/10',
  },
  {
    title: 'اتصال مباشر',
    subtitle: COMPANY_INFO.phoneFormatted,
    href: `tel:${COMPANY_INFO.phone}`,
    icon: Phone,
    color: 'from-white/10 to-white/5',
  },
];

export default function SocialHub() {
  const copyLink = async () => {
    const link = window.location.origin;
    await navigator.clipboard?.writeText(link);
  };

  return (
    <section id="links" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-empire-gray/20 to-transparent" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <EmpireLogo variant="compact" />
          </div>
          <span className="text-empire-gold text-sm font-semibold tracking-widest uppercase">رابط واحد لكل شيء</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">The Empire DZ على كل المنصات</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            بعد نشر الموقع، سيكون هذا هو الرابط الذي تضعه في فيسبوك، إنستغرام، واتساب، والبايو.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            const isExternal = link.href.startsWith('http');
            return (
              <a
                key={link.title}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={`group rounded-3xl border border-white/10 bg-gradient-to-br ${link.color} p-5 transition-all hover:-translate-y-1 hover:border-empire-gold/30`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-black/30 flex items-center justify-center text-empire-gold group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{link.title}</h3>
                    <p className="text-sm text-gray-400">{link.subtitle}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-6 glass-effect rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-right">
            <h3 className="font-bold text-white">رابط المتجر بعد النشر</h3>
            <p className="text-sm text-gray-400" dir="ltr">https://the-empire-dz.vercel.app</p>
          </div>
          <button
            type="button"
            onClick={copyLink}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl gold-gradient text-empire-dark font-bold hover:scale-105 transition-transform"
          >
            <Share2 className="w-5 h-5" />
            نسخ رابط الموقع
          </button>
        </div>
      </div>
    </section>
  );
}