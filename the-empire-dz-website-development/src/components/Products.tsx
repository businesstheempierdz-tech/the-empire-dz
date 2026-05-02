import { useState } from 'react';
import { Filter, MessageCircle, PackageOpen } from 'lucide-react';
import { products, productCategories, Product } from '../data/products';
import ProductCard from './ProductCard';
import { COMPANY_INFO } from '../data/config';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export default function Products({ onAddToCart }: ProductsProps) {
  const [activeFilter, setActiveFilter] = useState('الكل');
  const [showAll, setShowAll] = useState(false);

  const filtered = activeFilter === 'الكل'
    ? products
    : products.filter(p => p.category === activeFilter);

  const displayed = showAll ? filtered : filtered.slice(0, 8);

  return (
    <section id="products" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-empire-gray/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-empire-gold text-sm font-semibold tracking-widest uppercase">اكتشف مجموعتنا</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">أحدث المنتجات</h2>
          <div className="w-20 h-1 gold-gradient rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            منتجاتك الأولى أصبحت جاهزة للعرض. الأسعار تؤكد عبر واتساب حسب التوفر والكمية.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-3 scrollbar-hide">
          <div className="flex items-center gap-2 text-gray-400 shrink-0">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">تصفية:</span>
          </div>
          {productCategories.map((f) => (
            <button
              key={f}
              onClick={() => { setActiveFilter(f); setShowAll(false); }}
              className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? 'gold-gradient text-empire-dark shadow-lg shadow-empire-gold/20'
                  : 'glass-effect text-gray-400 hover:text-white hover:border-empire-gold/30'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {displayed.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayed.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center glass-effect rounded-3xl p-8 sm:p-12">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-empire-gold/10 flex items-center justify-center mb-5">
              <PackageOpen className="w-8 h-8 text-empire-gold" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3">المنتجات قيد التحضير</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              لا توجد منتجات في هذا التصنيف حالياً. سيتم إضافة المزيد قريباً.
            </p>
            <a
              href={COMPANY_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-500 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              استفسر عبر واتساب
            </a>
          </div>
        )}

        {/* Show More */}
        {filtered.length > 8 && !showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-10 py-4 border-2 border-empire-gold/30 text-empire-gold font-bold rounded-2xl hover:bg-empire-gold/10 transition-all duration-300"
            >
              عرض جميع المنتجات ({filtered.length})
            </button>
          </div>
        )}

        {/* Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            الأسعار والتوفر يتم تأكيدهما عبر واتساب قبل إتمام الطلب.
          </p>
        </div>
      </div>
    </section>
  );
}
