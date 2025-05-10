import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      name: language === 'ar' ? 'محمد العمري' : 'Mohammed Al-Amri',
      role: language === 'ar' ? 'المدير التنفيذي، شركة التطوير العقاري' : 'CEO, Real Estate Development Co.',
      content: language === 'ar' 
        ? 'تجربتنا مع مجموعة قيمة بلاس كانت استثنائية. فريقهم المحترف والتزامهم بالجودة جعل مشروعنا ناجحاً بكل المقاييس.'
        : 'Our experience with Value Plus Group was exceptional. Their professional team and commitment to quality made our project successful by all measures.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      rating: 5,
      company: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg'
    },
    {
      name: language === 'ar' ? 'سارة الخالدي' : 'Sarah Al-Khalidi',
      role: language === 'ar' ? 'مديرة الموارد البشرية، مجموعة الابتكار' : 'HR Director, Innovation Group',
      content: language === 'ar'
        ? 'خدمات التوظيف والتدريب التي قدمتها قيمة بلاس ساعدت في تطوير فريقنا وتحسين أداء الشركة بشكل ملحوظ.'
        : 'The recruitment and training services provided by Value Plus helped develop our team and significantly improve company performance.',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg',
      rating: 5,
      company: 'https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg'
    },
    {
      name: language === 'ar' ? 'أحمد السليمان' : 'Ahmed Al-Sulaiman',
      role: language === 'ar' ? 'مؤسس شركة ناشئة' : 'Startup Founder',
      content: language === 'ar'
        ? 'الاستشارات الاستثمارية من قيمة بلاس كانت حاسمة في نمو شركتنا الناشئة. خبرتهم وتوجيههم لا يقدر بثمن.'
        : 'Investment consulting from Value Plus was crucial in our startup\'s growth. Their expertise and guidance are invaluable.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      rating: 5,
      company: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg'
    },
    {
      name: language === 'ar' ? 'فيصل الدوسري' : 'Faisal Al-Dosari',
      role: language === 'ar' ? 'مدير المشاريع، شركة البناء المتقدمة' : 'Project Manager, Advanced Construction Co.',
      content: language === 'ar'
        ? 'التزام فريق قيمة بلاس بالمواعيد النهائية والجودة العالية في تنفيذ المشاريع يجعلهم شريكاً موثوقاً به.'
        : 'Value Plus team\'s commitment to deadlines and high quality in project execution makes them a trusted partner.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      rating: 5,
      company: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg'
    },
    {
      name: language === 'ar' ? 'نورة القحطاني' : 'Noura Al-Qahtani',
      role: language === 'ar' ? 'مديرة التسويق، شركة التقنية المتطورة' : 'Marketing Director, Advanced Tech Co.',
      content: language === 'ar'
        ? 'الحلول المبتكرة التي قدمها فريق قيمة بلاس ساعدت في تعزيز حضورنا في السوق وزيادة عائداتنا.'
        : 'The innovative solutions provided by Value Plus team helped enhance our market presence and increase our returns.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      rating: 5,
      company: 'https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg'
    },
    {
      name: language === 'ar' ? 'عبدالله المطيري' : 'Abdullah Al-Mutairi',
      role: language === 'ar' ? 'الرئيس التنفيذي، شركة الاستثمار الذكي' : 'CEO, Smart Investment Co.',
      content: language === 'ar'
        ? 'شراكتنا مع قيمة بلاس كانت نقطة تحول في نمو أعمالنا. خبرتهم في الاستثمار والتطوير لا مثيل لها.'
        : 'Our partnership with Value Plus was a turning point in our business growth. Their expertise in investment and development is unmatched.',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
      rating: 5,
      company: 'https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg'
    },
    {
      name: language === 'ar' ? 'ريم العتيبي' : 'Reem Al-Otaibi',
      role: language === 'ar' ? 'مديرة الموارد البشرية، شركة التطوير الرقمي' : 'HR Director, Digital Development Co.',
      content: language === 'ar'
        ? 'خدمات التوظيف والتدريب من قيمة بلاس ساهمت في بناء فريق عمل قوي ومتماسك.'
        : 'Value Plus\'s recruitment and training services helped build a strong and cohesive team.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      rating: 5,
      company: 'https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg'
    },
    {
      name: language === 'ar' ? 'طلال الشمري' : 'Talal Al-Shammari',
      role: language === 'ar' ? 'مدير المشاريع، شركة التطوير العمراني' : 'Project Manager, Urban Development Co.',
      content: language === 'ar'
        ? 'الاحترافية والدقة في تنفيذ المشاريع ميزة فريق قيمة بلاس. نتائجهم دائماً تتجاوز التوقعات.'
        : 'Professionalism and precision in project execution is Value Plus team\'s advantage. Their results always exceed expectations.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      rating: 5,
      company: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg'
    },
    {
      name: language === 'ar' ? 'منيرة السبيعي' : 'Munira Al-Subaie',
      role: language === 'ar' ? 'مديرة التسويق، شركة الحلول المتكاملة' : 'Marketing Director, Integrated Solutions Co.',
      content: language === 'ar'
        ? 'استراتيجيات التسويق المبتكرة من قيمة بلاس ساعدت في تعزيز مكانتنا في السوق.'
        : 'Value Plus\'s innovative marketing strategies helped strengthen our market position.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      rating: 5,
      company: 'https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg'
    },
    {
      name: language === 'ar' ? 'سلطان القرني' : 'Sultan Al-Qarni',
      role: language === 'ar' ? 'المدير المالي، شركة الاستثمار الرائدة' : 'CFO, Leading Investment Co.',
      content: language === 'ar'
        ? 'الخبرة المالية والاستثمارية لفريق قيمة بلاس ساهمت في تحقيق عوائد استثنائية لشركتنا.'
        : 'Value Plus team\'s financial and investment expertise contributed to achieving exceptional returns for our company.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      rating: 5,
      company: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg'
    },
    {
      name: language === 'ar' ? 'لمى الزهراني' : 'Lama Al-Zahrani',
      role: language === 'ar' ? 'مديرة العمليات، شركة التقنية المتقدمة' : 'Operations Director, Advanced Tech Co.',
      content: language === 'ar'
        ? 'كفاءة وفعالية فريق قيمة بلاس في إدارة المشاريع جعلت عملية التطوير سلسة وناجحة.'
        : 'Value Plus team\'s efficiency and effectiveness in project management made the development process smooth and successful.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      rating: 5,
      company: 'https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg'
    },
    {
      name: language === 'ar' ? 'فهد العنزي' : 'Fahad Al-Anazi',
      role: language === 'ar' ? 'مدير تطوير الأعمال، شركة الحلول الرقمية' : 'Business Development Director, Digital Solutions Co.',
      content: language === 'ar'
        ? 'رؤية وابتكار فريق قيمة بلاس ساهم في فتح آفاق جديدة لنمو أعمالنا.'
        : 'Value Plus team\'s vision and innovation helped open new horizons for our business growth.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      rating: 5,
      company: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {language === 'ar' ? 'آراء عملائنا' : 'Client Testimonials'}
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {language === 'ar'
              ? 'اكتشف ما يقوله عملاؤنا عن تجربتهم مع مجموعة قيمة بلاس'
              : 'Discover what our clients say about their experience with Value Plus Group'}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <motion.div 
                className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={testimonial.company}
                  alt="Company Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 rtl:ml-4 rtl:mr-0"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star size={20} className="text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;