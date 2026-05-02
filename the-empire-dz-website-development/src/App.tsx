import { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Offers from './components/Offers';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Newsletter from './components/Newsletter';
import SocialHub from './components/SocialHub';
import Contact from './components/Contact';
import Cart, { CartItem } from './components/Cart';
import Footer from './components/Footer';
import { Product } from './data/products';
import { COMPANY_INFO } from './data/config';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2500);
  };

  const addToCart = useCallback((product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        showNotification(`تمت زيادة كمية "${product.name}" ✅`);
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      showNotification(`تمت إضافة "${product.name}" إلى السلة 🛒`);
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.product.id !== productId));
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-empire-dark text-white" dir="rtl">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <Categories />
      <Products onAddToCart={addToCart} />
      <Offers />
      <Features />
      <Testimonials />
      <About />
      <SocialHub />
      <Newsletter />
      <Contact />
      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-24 right-6 z-[200] animate-slide-up">
          <div className="glass-effect rounded-2xl px-6 py-4 shadow-2xl shadow-empire-gold/20 border border-empire-gold/30 flex items-center gap-3 max-w-sm">
            <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-empire-dark text-sm font-bold shrink-0">
              ✓
            </div>
            <p className="text-sm font-medium text-white">{notification}</p>
          </div>
        </div>
      )}

      {/* WhatsApp FAB */}
      <a
        href={COMPANY_INFO.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 group"
        title="تواصل معنا عبر واتساب"
      >
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-xl shadow-green-500/30 group-hover:scale-110 transition-all group-hover:shadow-2xl group-hover:shadow-green-500/40">
            <span className="text-2xl">💬</span>
          </div>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-empire-gold rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-empire-gold rounded-full" />
        </div>
        <div className="absolute bottom-full left-0 mb-2 px-3 py-1.5 bg-white text-empire-dark text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          راسلنا واتساب 👋
        </div>
      </a>

      {/* Call FAB */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gold-gradient flex items-center justify-center text-empire-dark shadow-xl shadow-empire-gold/30 hover:scale-110 transition-all hover:shadow-2xl hover:shadow-empire-gold/40"
        title="اتصل بنا"
      >
        <span className="text-2xl">📞</span>
      </a>
    </div>
  );
}
