import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'أحمد بن عمر',
    location: 'الجزائر العاصمة',
    avatar: '👨‍💼',
    rating: 5,
    text: 'طلبت عطر من The Empire DZ ووصلني في ظرف يومين فقط! الجودة ممتازة والسعر معقول. أنصح الجميع بالتعامل معهم.',
  },
  {
    name: 'سارة محمدي',
    location: 'وهران',
    avatar: '👩‍💻',
    rating: 5,
    text: 'أفضل متجر إلكتروني تعاملت معه. خدمة العملاء ممتازة وسريعة الرد على الواتساب. شكراً The Empire!',
  },
  {
    name: 'كريم بوعلام',
    location: 'قسنطينة',
    avatar: '👨‍🎓',
    rating: 5,
    text: 'اشتريت ساعة ذكية والمنتج وصل مغلف بشكل احترافي. جودة عالية وسعر منافس جداً.',
  },
  {
    name: 'فاطمة الزهراء',
    location: 'سكيكدة',
    avatar: '👩‍🏫',
    rating: 5,
    text: 'سعيدة جداً بتجربتي! طلبت طقم عطور كهدية وكان التغليف راقي. أصحاب المحل ناس محترمين.',
  },
  {
    name: 'يوسف حداد',
    location: 'عنابة',
    avatar: '🧑‍💻',
    rating: 5,
    text: 'منتجات أصلية 100% وأسعار معقولة. التوصيل كان سريع لعنابة. سأطلب مرة أخرى بالتأكيد!',
  },
  {
    name: 'نسرين بلقاسم',
    location: 'باتنة',
    avatar: '👩‍🎨',
    rating: 5,
    text: 'طلبت سماعات بلوتوث ووصلت خلال 3 أيام. جودة صوت ممتازة. شكراً لكم The Empire DZ 👑',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-empire-dark via-empire-gray/30 to-empire-dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-empire-gold text-sm font-semibold tracking-widest uppercase">آراء العملاء</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">ماذا يقول عملاؤنا</h2>
          <div className="w-20 h-1 gold-gradient rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            نفتخر بثقة عملائنا في جميع ولايات الجزائر 🇩🇿
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-effect rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 group relative"
            >
              <Quote className="absolute top-4 left-4 w-8 h-8 text-empire-gold/10" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-2xl">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">📍 {t.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < t.rating ? 'fill-empire-gold text-empire-gold' : 'text-gray-600'}`}
                  />
                ))}
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 flex-wrap justify-center glass-effect rounded-2xl px-8 py-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <div className="text-right">
                <div className="text-lg font-bold text-white">4.9/5</div>
                <div className="text-xs text-gray-500">تقييم العملاء</div>
              </div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <div className="text-right">
                <div className="text-lg font-bold text-white">100%</div>
                <div className="text-xs text-gray-500">رضا العملاء</div>
              </div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚚</span>
              <div className="text-right">
                <div className="text-lg font-bold text-white">+2000</div>
                <div className="text-xs text-gray-500">طلب تم توصيله</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
