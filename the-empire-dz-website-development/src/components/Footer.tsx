import { ArrowUp, Heart, MapPin, Phone, Mail, MessageCircle, Globe, Camera } from 'lucide-react';
import { COMPANY_INFO } from '../data/config';
import EmpireLogo from './EmpireLogo';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-empire-darker border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <EmpireLogo variant="compact" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              متجرك الإلكتروني الموثوق في الجزائر. عطور، إكسسوارات، ومنتجات منزلية مختارة بعناية مع توصيل لجميع الولايات.
            </p>
            <div className="flex gap-2">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-600 transition-all"
                title="Facebook"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-pink-600 transition-all"
                title="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-green-600 transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { name: 'الرئيسية', href: '#hero' },
                { name: 'المنتجات', href: '#products' },
                { name: 'العروض', href: '#offers' },
                { name: 'من نحن', href: '#about' },
                { name: 'روابطنا', href: '#links' },
                { name: 'تواصل معنا', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-empire-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm">أقسامنا</h4>
            <ul className="space-y-3">
              {['عطور', 'إكسسوارات', 'منتجات منزلية'].map((cat) => (
                <li key={cat}>
                  <a href="#products" className="text-sm text-gray-500 hover:text-empire-gold transition-colors">{cat}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm">تواصل معنا</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 text-sm text-gray-500 hover:text-empire-gold transition-colors">
                  <Phone className="w-4 h-4 text-empire-gold shrink-0" />
                  <span dir="ltr">{COMPANY_INFO.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a href={COMPANY_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-500 hover:text-empire-gold transition-colors">
                  <MessageCircle className="w-4 h-4 text-empire-gold shrink-0" />
                  <span>واتساب</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 text-sm text-gray-500 hover:text-empire-gold transition-colors">
                  <Mail className="w-4 h-4 text-empire-gold shrink-0" />
                  <span className="truncate">{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <MapPin className="w-4 h-4 text-empire-gold shrink-0" />
                <span>{COMPANY_INFO.city}، {COMPANY_INFO.country} 🇩🇿</span>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5">
              <p className="text-xs text-gray-400 mb-2">طرق الدفع المتاحة</p>
              <div className="flex gap-2 text-sm">
                <span className="px-2 py-1 bg-white/5 rounded text-gray-400" title="الدفع عند الاستلام">💰 عند الاستلام</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-400" title="CCP">💳 CCP</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-400" title="BaridiMob">📱 BaridiMob</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 text-center sm:text-right">
            © {new Date().getFullYear()} The Empire DZ. جميع الحقوق محفوظة. صُنع بـ <Heart className="w-3 h-3 inline text-red-500 fill-red-500" /> في {COMPANY_INFO.city} 🇩🇿
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center text-empire-dark hover:shadow-lg hover:shadow-empire-gold/20 transition-all hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
