export interface Product {
  id: number;
  name: string;
  price: number;
  priceLabel?: string;
  oldPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  emoji: string;
  imageUrl?: string;
  description: string;
  highlights?: string[];
  adCopy?: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'عطر نسائي My Way Eau de Parfum',
    price: 0,
    priceLabel: 'السعر عند الطلب',
    category: 'عطور',
    rating: 4.9,
    reviews: 24,
    badge: 'رائحة أنثوية',
    emoji: '🧴',
    imageUrl: '/images/products/my-way-perfume.jpg',
    description: 'عطر نسائي ناعم بلمسة زهرية راقية يناسب الاستعمال اليومي والمناسبات.',
    highlights: ['نفحات زهرية ناعمة', 'مناسب للهدايا', 'تصميم أنيق وفاخر'],
    adCopy: 'تألقي بحضور ناعم وفخم مع عطر My Way. اختيار مثالي للمرأة التي تحب الرائحة الهادئة والأنيقة.',
    inStock: true,
  },
  {
    id: 2,
    name: 'عطر نسائي Paradoxe Pink Edition',
    price: 0,
    priceLabel: 'السعر عند الطلب',
    category: 'عطور',
    rating: 4.8,
    reviews: 19,
    badge: 'جديد',
    emoji: '✨',
    imageUrl: '/images/products/paradoxe-perfume.jpg',
    description: 'عطر نسائي عصري بزجاجة مثلثة مميزة ورائحة زهرية جذابة.',
    highlights: ['رائحة زهرية عصرية', 'شكل فاخر ومميز', 'مناسب للاستعمال اليومي'],
    adCopy: 'Paradoxe Pink Edition لمسة أنوثة عصرية في كل رشة. مناسب لمن تبحث عن عطر مميز وسهل الحب.',
    inStock: true,
  },
  {
    id: 3,
    name: 'مصباح خشبي صغير لاصق للأماكن المظلمة',
    price: 0,
    priceLabel: 'السعر عند الطلب',
    category: 'إكسسوارات',
    rating: 4.7,
    reviews: 31,
    badge: 'تصميم عصري',
    emoji: '💡',
    imageUrl: '/images/products/wooden-stick-light.jpg',
    description: 'مصباح خشبي صغير وأنيق يلتصق بسهولة في الأماكن التي لا يصلها النور مثل الخزانة، الأدراج، جانب السرير والممرات الضيقة.',
    highlights: ['حجم صغير', 'يلتصق بسهولة', 'إضاءة دافئة'],
    adCopy: 'حل صغير وعملي لكل زاوية مظلمة. مصباح خشبي لاصق بحجم مناسب، يضيف إضاءة دافئة بدون أسلاك أو تعقيد.',
    inStock: true,
  },
  {
    id: 4,
    name: 'ناموسية أطفال قابلة للطي',
    price: 0,
    priceLabel: 'السعر عند الطلب',
    category: 'منتجات منزلية',
    rating: 4.8,
    reviews: 17,
    badge: 'للأطفال',
    emoji: '👶',
    imageUrl: '/images/products/baby-mosquito-net.jpg',
    description: 'ناموسية خفيفة وعملية لحماية الطفل من الحشرات أثناء النوم والراحة.',
    highlights: ['شبك خفيف التهوية', 'قابلة للطي', 'مناسبة للمنزل والسفر'],
    adCopy: 'راحة وأمان لطفلك مع ناموسية عملية وسهلة الحمل. حماية يومية من الحشرات بلمسة ناعمة.',
    inStock: true,
  },
  {
    id: 5,
    name: 'مصباح زجاجي بيضاوي بقاعدة ذهبية',
    price: 0,
    priceLabel: 'السعر عند الطلب',
    category: 'منتجات منزلية',
    rating: 4.9,
    reviews: 22,
    badge: 'ديكور فاخر',
    emoji: '💎',
    imageUrl: '/images/products/oval-crystal-lamp.jpg',
    description: 'مصباح ديكور زجاجي بشكل بيضاوي مع لمسة ذهبية راقية، مناسب للطاولات وغرف النوم والصالون.',
    highlights: ['شكل بيضاوي فاخر', 'قاعدة ذهبية', 'إضاءة ديكور راقية'],
    adCopy: 'أضف لمسة فخامة واضحة لمنزلك مع مصباح زجاجي بيضاوي بقاعدة ذهبية وإضاءة ناعمة تخطف الأنظار.',
    inStock: true,
  },
];

// أقسام التصفية
export const productCategories = ['الكل', 'عطور', 'إكسسوارات', 'منتجات منزلية'];
