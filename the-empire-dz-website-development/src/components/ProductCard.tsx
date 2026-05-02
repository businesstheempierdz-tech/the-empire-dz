import { Star, ShoppingCart, MessageCircle } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;
  const displayPrice = product.priceLabel ?? `${product.price.toLocaleString()} د.ج`;

  return (
    <div className="group relative glass-effect rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-empire-gold/10 transition-all duration-500 hover:-translate-y-2">
      {/* Image / Emoji Area */}
      <div className="relative h-56 bg-gradient-to-br from-empire-gray to-empire-gray-light flex items-center justify-center overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <span className="text-7xl group-hover:scale-125 transition-transform duration-500">{product.emoji}</span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-empire-darker/70 via-transparent to-transparent" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 right-4 px-3 py-1.5 gold-gradient text-empire-dark text-xs font-bold rounded-full shadow-lg">
            {product.badge}
          </div>
        )}

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full">
            -{discount}%
          </div>
        )}

        <div className="absolute bottom-4 right-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="rounded-2xl bg-black/55 backdrop-blur-md px-4 py-3 text-xs text-white border border-white/10">
            {product.adCopy ?? product.description}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-empire-gold bg-empire-gold/10 px-2 py-1 rounded-full">{product.category}</span>
        </div>

        <h3 className="font-bold text-white text-base leading-snug line-clamp-2 group-hover:text-empire-gold transition-colors">
          {product.name}
        </h3>

        <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>

        {product.highlights && (
          <div className="flex flex-wrap gap-1.5">
            {product.highlights.slice(0, 2).map((highlight) => (
              <span key={highlight} className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-gray-400">
                {highlight}
              </span>
            ))}
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-empire-gold text-empire-gold' : 'text-gray-600'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price & Cart */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-lg font-black text-empire-gold">{displayPrice}</span>
            {product.oldPrice && product.price > 0 && (
              <span className="text-sm text-gray-500 line-through">{product.oldPrice.toLocaleString()} د.ج</span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="w-11 h-11 rounded-2xl gold-gradient flex items-center justify-center text-empire-dark hover:shadow-lg hover:shadow-empire-gold/30 hover:scale-110 transition-all active:scale-95"
            title="إضافة للطلب"
          >
            {product.price > 0 ? <ShoppingCart className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
