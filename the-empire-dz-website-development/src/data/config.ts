// ================================
// معلومات شركة The Empire DZ
// ================================

export const COMPANY_INFO = {
  name: 'The Empire DZ',
  nameAr: 'ذا إمباير',
  slogan: 'إمبراطورية التسوق الذكي',
  founded: 2024,
  logoImage: '/images/the-empire-logo.jpg',
  
  // معلومات التواصل
  phone: '0698827008',
  phoneFormatted: '0698 82 70 08',
  phoneInternational: '+213698827008',
  email: 'businesstheempiredz@gmail.com',
  
  // الموقع
  address: 'سكيكدة، الجزائر',
  city: 'سكيكدة',
  country: 'الجزائر',
  
  // روابط السوشيال ميديا
  social: {
    facebook: 'https://www.facebook.com/share/1BPoTRu6WF/',
    instagram: 'https://www.instagram.com/theempiredz',
    whatsapp: 'https://wa.me/213698827008',
    tiktok: '', // سيتم إضافته لاحقاً
  },
  
  // معلومات التوصيل
  delivery: {
    areas: 'جميع ولايات الجزائر الـ 58',
    time: '24-72 ساعة',
    freeAbove: 5000, // شحن مجاني فوق 5000 د.ج
    cost: 400, // تكلفة التوصيل العادية
  },

  // ساعات العمل
  businessHours: {
    summary: 'من 9:00 إلى 18:00',
    details: [
      'من الأحد إلى الخميس: 9:00 صباحاً - 17:00 مساءً',
      'الجمعة: راحة',
      'السبت: 10:00 صباحاً - 15:00 مساءً',
    ],
  },
  
  // طرق الدفع
  paymentMethods: [
    'الدفع عند الاستلام',
    'CCP',
    'BaridiMob',
  ],
  
  // أقسام المنتجات
  categories: [
    'عطور',
    'إكسسوارات',
    'منتجات منزلية',
  ],
};

export const PROMO_CODE = {
  code: 'EMPIRE20',
  discount: 20,
  message: 'The Empire DZ | متجر جزائري من سكيكدة للعطور والإلكترونيات والمنتجات المختارة',
};
