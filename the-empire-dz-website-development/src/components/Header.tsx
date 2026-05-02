import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, ChevronDown, Phone } from 'lucide-react';
import { COMPANY_INFO, PROMO_CODE } from '../data/config';
import EmpireLogo from './EmpireLogo';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    {
      name: 'المنتجات', href: '#products',
      submenu: [
        { name: 'عطور', href: '#products' },
        { name: 'إكسسوارات', href: '#products' },
        { name: 'منتجات منزلية', href: '#products' },
      ]
    },
    { name: 'العروض', href: '#offers' },
    { name: 'من نحن', href: '#about' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-effect shadow-2xl shadow-black/50' : 'bg-transparent'}`}>
      {/* Top bar */}
      <div className="bg-empire-gold text-empire-dark text-xs py-1.5 text-center font-semibold tracking-wide">
        {PROMO_CODE.message}
      </div>

      {/* Contact bar */}
      <div className="bg-empire-darker/80 border-b border-white/5 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1.5 text-gray-400 hover:text-empire-gold transition-colors">
              <Phone className="w-3 h-3" />
              <span dir="ltr">{COMPANY_INFO.phoneFormatted}</span>
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">📍 {COMPANY_INFO.city}، {COMPANY_INFO.country}</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">Facebook</a>
            <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <EmpireLogo variant="compact" className="transition-transform duration-300 group-hover:scale-105" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-empire-gold transition-colors duration-300 rounded-lg hover:bg-white/5"
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="w-3.5 h-3.5" />}
                </a>
                {link.submenu && activeDropdown === link.name && (
                  <div className="absolute top-full right-0 mt-1 w-48 glass-effect rounded-xl overflow-hidden shadow-2xl shadow-black/50 animate-fade-in">
                    {link.submenu.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-empire-gold hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCartClick}
              className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-gray-300 hover:text-empire-gold"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-empire-gold text-empire-dark text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse-glow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-gray-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-effect border-t border-empire-gold/10 animate-slide-up">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            {/* Mobile Contact Info */}
            <div className="flex items-center justify-center gap-4 pb-4 mb-4 border-b border-white/10">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1.5 text-empire-gold text-sm">
                <Phone className="w-4 h-4" />
                <span dir="ltr">{COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>
            
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-empire-gold hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
                {link.submenu && (
                  <div className="mr-4 border-r-2 border-empire-gold/30 pr-4">
                    {link.submenu.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-empire-gold transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Social Links Mobile */}
            <div className="flex items-center justify-center gap-4 pt-4 mt-4 border-t border-white/10">
              <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Facebook</a>
              <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors text-sm">Instagram</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
