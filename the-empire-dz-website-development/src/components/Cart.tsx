import { useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';
import { COMPANY_INFO } from '../data/config';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) {
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    wilaya: '',
    commune: '',
    address: '',
    notes: '',
  });
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const hasQuoteItems = items.some((item) => item.product.price === 0);
  const deliveryCost = hasQuoteItems ? 0 : total >= COMPANY_INFO.delivery.freeAbove ? 0 : COMPANY_INFO.delivery.cost;

  const handleCheckout = (event: React.FormEvent) => {
    event.preventDefault();
    const itemsList = items.map(item => {
      const linePrice = item.product.price > 0
        ? `${(item.product.price * item.quantity).toLocaleString()} د.ج`
        : 'السعر عند الطلب';
      return `• ${item.product.name} (${item.quantity}x) - ${linePrice}`;
    }).join('\n');
    const summary = hasQuoteItems
      ? '💰 الأسعار: أرجو تأكيد السعر والتوفر'
      : `💰 المجموع: ${total.toLocaleString()} د.ج\n🚚 التوصيل: ${deliveryCost === 0 ? 'مجاني ✨' : deliveryCost + ' د.ج'}\n💵 الإجمالي: ${(total + deliveryCost).toLocaleString()} د.ج`;
    const customerInfo = `👤 معلومات الزبون:\nالاسم: ${customer.name}\nالهاتف: ${customer.phone}\nالولاية: ${customer.wilaya}\nالبلدية: ${customer.commune}\nالعنوان: ${customer.address || 'يحدد لاحقاً'}\nملاحظات: ${customer.notes || 'لا توجد'}`;
    const message = `مرحباً The Empire DZ 👑\n\nأريد تأكيد هذا الطلب:\n\n${customerInfo}\n\n🛒 المنتجات:\n${itemsList}\n\n${summary}\n\nطريقة الدفع: الدفع عند الاستلام\n\nأرجو تأكيد التوفر والسعر النهائي. شكراً!`;
    
    window.open(`https://wa.me/${COMPANY_INFO.phoneInternational}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Cart Panel */}
      <div className="absolute top-0 left-0 h-full w-full max-w-lg glass-effect shadow-2xl shadow-black/50 animate-slide-up flex flex-col"
        style={{ animation: 'slideInLeft 0.3s ease-out' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-empire-dark" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">سلة التسوق</h3>
              <p className="text-xs text-gray-400">{totalItems} منتج</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h4 className="text-xl font-bold text-white mb-2">السلة فارغة</h4>
              <p className="text-gray-400 text-sm">أضف بعض المنتجات لتبدأ التسوق!</p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-3 gold-gradient text-empire-dark font-bold rounded-xl hover:shadow-lg hover:shadow-empire-gold/20 transition-all"
              >
                تصفح المنتجات
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 p-4 bg-white/5 rounded-2xl group">
                <div className="w-16 h-16 rounded-xl bg-empire-gray flex items-center justify-center shrink-0 text-3xl overflow-hidden">
                  {item.product.imageUrl ? (
                    <img src={item.product.imageUrl} alt={item.product.name} className="h-full w-full object-cover" />
                  ) : (
                    item.product.emoji
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-white truncate">{item.product.name}</h4>
                  <p className="text-empire-gold font-bold text-sm mt-1">
                    {item.product.priceLabel ?? `${item.product.price.toLocaleString()} د.ج`}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-bold text-white w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => onRemove(item.product.id)}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-bold text-white">
                    {item.product.price > 0 ? `${(item.product.price * item.quantity).toLocaleString()} د.ج` : 'عند الطلب'}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <form onSubmit={handleCheckout} className="p-6 border-t border-white/10 space-y-4 bg-empire-darker/25">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">المجموع الفرعي</span>
                <span className="text-white font-medium">{hasQuoteItems ? 'يحدد عند التواصل' : `${total.toLocaleString()} د.ج`}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">التوصيل</span>
                <span className={`font-medium ${deliveryCost === 0 ? 'text-green-400' : 'text-white'}`}>
                  {hasQuoteItems ? 'حسب الولاية' : deliveryCost === 0 ? 'مجاني ✨' : `${deliveryCost} د.ج`}
                </span>
              </div>
              {!hasQuoteItems && total < COMPANY_INFO.delivery.freeAbove && (
                <p className="text-xs text-gray-500 text-center">
                  أضف {(COMPANY_INFO.delivery.freeAbove - total).toLocaleString()} د.ج للحصول على شحن مجاني
                </p>
              )}
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-white/10">
                <span className="text-white">المجموع الكلي</span>
                <span className="text-empire-gold">{hasQuoteItems ? 'يؤكد عبر واتساب' : `${(total + deliveryCost).toLocaleString()} د.ج`}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                required
                value={customer.name}
                onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                className="col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-empire-gold/50"
                placeholder="الاسم الكامل *"
              />
              <input
                required
                dir="ltr"
                value={customer.phone}
                onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                className="col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-empire-gold/50"
                placeholder="رقم الهاتف *"
              />
              <input
                required
                value={customer.wilaya}
                onChange={(e) => setCustomer({ ...customer, wilaya: e.target.value })}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-empire-gold/50"
                placeholder="الولاية *"
              />
              <input
                required
                value={customer.commune}
                onChange={(e) => setCustomer({ ...customer, commune: e.target.value })}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-empire-gold/50"
                placeholder="البلدية *"
              />
              <input
                value={customer.address}
                onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                className="col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-empire-gold/50"
                placeholder="العنوان أو نقطة التوصيل"
              />
              <textarea
                value={customer.notes}
                onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                rows={2}
                className="col-span-2 resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-empire-gold/50"
                placeholder="ملاحظات إضافية (اختياري)"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-green-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
            >
              💬 إتمام الطلب عبر واتساب
            </button>

            <p className="text-center text-xs text-gray-500">
              💰 الدفع عند الاستلام • 🚚 توصيل لـ 58 ولاية
            </p>
          </form>
        )}
      </div>

      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
