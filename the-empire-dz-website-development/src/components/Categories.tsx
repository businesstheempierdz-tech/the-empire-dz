import { Home, Sparkles, Gem } from 'lucide-react';

const categories = [
  { name: 'عطور', icon: Sparkles, color: 'from-purple-500/20 to-pink-600/20', border: 'border-purple-500/30', text: 'text-purple-400', emoji: '🧴' },
  { name: 'إكسسوارات', icon: Gem, color: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-500/30', text: 'text-blue-400', emoji: '💡' },
  { name: 'منتجات منزلية', icon: Home, color: 'from-indigo-500/20 to-indigo-600/20', border: 'border-indigo-500/30', text: 'text-indigo-400', emoji: '🏠' },
];

export default function Categories() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-empire-gold text-sm font-semibold tracking-widest uppercase">تصفح حسب</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">الأقسام الرئيسية</h2>
          <div className="w-20 h-1 gold-gradient rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            منتجات مصنفة بوضوح حتى يصل الزبون لما يريده بسرعة.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.name}
                href="#products"
                className={`group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${cat.color} border ${cat.border} hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="text-4xl mb-1">{cat.emoji}</div>
                  <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform ${cat.text}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white text-sm sm:text-base">{cat.name}</h3>
                  <span className="text-xs text-gray-400">منتجات مختارة بعناية</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
