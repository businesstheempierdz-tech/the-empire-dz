import { ArrowLeft, MapPin, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/config';
import EmpireLogo from './EmpireLogo';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(212,175,55,0.18),transparent_34%),linear-gradient(135deg,#050505_0%,#0A0A0A_46%,#161622_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-empire-gold/50 to-transparent" />
        <div className="absolute -left-28 top-32 h-80 w-80 rounded-full bg-empire-gold/10 blur-3xl animate-float" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-empire-gold/5 blur-3xl animate-float" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8 text-center lg:text-right animate-slide-up">
            <div className="flex justify-center lg:justify-start">
              <EmpireLogo variant="full" className="origin-center scale-90 sm:scale-100 lg:origin-right" />
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-[0.35em] text-empire-gold/80">
                SKIKDA • ALGERIA
              </p>
              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                متجر إلكتروني فاخر، واضح، وسهل الطلب
              </h1>
              <p className="mx-auto max-w-xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
                The Empire DZ يجمع بين العطور، الإكسسوارات، والمنتجات المنزلية المختارة بعناية. الطلب يكون ببساطة عبر واتساب مع توصيل لجميع ولايات الجزائر.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl gold-gradient px-8 py-4 text-base font-bold text-empire-dark transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-empire-gold/30"
              >
                استكشف الأقسام
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-2" />
              </a>
              <a
                href={COMPANY_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-empire-gold/30 px-8 py-4 text-base font-bold text-empire-gold transition-all duration-300 hover:bg-empire-gold/10"
              >
                <MessageCircle className="h-5 w-5" />
                اطلب عبر واتساب
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-sm text-gray-400 lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-empire-gold" />
                {COMPANY_INFO.city}، {COMPANY_INFO.country}
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-empire-gold/50 sm:block" />
              <span dir="ltr">{COMPANY_INFO.phoneFormatted}</span>
              <span className="hidden h-1 w-1 rounded-full bg-empire-gold/50 sm:block" />
              <span>{COMPANY_INFO.businessHours.summary}</span>
            </div>
          </div>

          <div className="relative flex min-h-[360px] items-center justify-center animate-fade-in">
            <div className="absolute h-[360px] w-[360px] rounded-full border border-empire-gold/15 lg:h-[460px] lg:w-[460px]" />
            <div className="absolute h-[250px] w-[250px] rounded-full border border-empire-gold/10 lg:h-[340px] lg:w-[340px]" />
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-black/45 shadow-2xl shadow-empire-gold/10 ring-1 ring-empire-gold/20 lg:h-96 lg:w-96">
              <EmpireLogo variant="mark" className="h-52 w-52 lg:h-72 lg:w-72" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}