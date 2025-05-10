import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesOverview: React.FC = () => {
  const { language } = useLanguage();

  const services = [
    {
      title: language === 'ar' ? 'الفعاليات والضيافة' : language === 'fr' ? 'Événements et Hospitalité' : 'Events & Hospitality',
      items: [
        language === 'ar' ? 'تنظيم الفعاليات والمؤتمرات' : language === 'fr' ? 'Organisation d\'événements et de conférences' : 'Event & Conference Organization',
        language === 'ar' ? 'خدمات السياحة والسفر' : language === 'fr' ? 'Services de tourisme et de voyage' : 'Tourism & Travel Services',
        language === 'ar' ? 'إدارة المطاعم والضيافة' : language === 'fr' ? 'Gestion de restaurants et restauration' : 'Restaurant & Catering Management',
        language === 'ar' ? 'خدمات الضيافة المتكاملة' : language === 'fr' ? 'Services d\'accueil intégrés' : 'Integrated Hospitality Services',
      ],
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg'
    },
    {
      title: language === 'ar' ? 'الفنون والترميم' : language === 'fr' ? 'Arts et Restauration' : 'Arts & Restoration',
      items: [
        language === 'ar' ? 'أعمال النقش والزخرفة' : language === 'fr' ? 'Travaux de gravure et décoration' : 'Engraving & Decoration Works',
        language === 'ar' ? 'ترميم القطع الأثرية' : language === 'fr' ? 'Restauration d\'antiquités' : 'Artifact Restoration',
        language === 'ar' ? 'الأعمال الفنية المتخصصة' : language === 'fr' ? 'Œuvres d\'art spécialisées' : 'Specialized Artistic Works',
        language === 'ar' ? 'الحفاظ على التراث' : language === 'fr' ? 'Conservation du patrimoine' : 'Heritage Preservation',
      ],
      image: 'https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg'
    },
    {
      title: language === 'ar' ? 'البنية التحتية' : language === 'fr' ? 'Infrastructure' : 'Infrastructure',
      items: [
        language === 'ar' ? 'إنشاء وتعبيد الطرق' : language === 'fr' ? 'Construction et pavage de routes' : 'Road Construction & Paving',
        language === 'ar' ? 'مشاريع البنية التحتية' : language === 'fr' ? 'Projets d\'infrastructure' : 'Infrastructure Projects',
        language === 'ar' ? 'تمديدات المسافات الطويلة' : language === 'fr' ? 'Extensions longue distance' : 'Long Distance Extensions',
        language === 'ar' ? 'صيانة وتطوير الطرق' : language === 'fr' ? 'Maintenance et développement routier' : 'Road Maintenance & Development',
      ],
      image: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg'
    },
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

  const checkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block text-primary-600 font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {language === 'ar' ? 'خدماتنا المتميزة' : language === 'fr' ? 'Nos Services Distingués' : 'Our Distinguished Services'}
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {language === 'ar' ? 'نظرة عامة على خدماتنا' : language === 'fr' ? 'Aperçu de Nos Services' : 'Our Services Overview'}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {language === 'ar' 
              ? 'مجموعة متكاملة من الخدمات المتميزة لتلبية كافة احتياجاتكم'
              : language === 'fr'
                ? 'Une gamme complète de services distingués pour répondre à tous vos besoins'
                : 'A comprehensive range of distinguished services to meet all your needs'}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <motion.h3 
                  className="absolute bottom-4 left-6 right-6 text-2xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      className="flex items-start"
                      variants={itemVariants}
                      custom={itemIndex}
                    >
                      <motion.div
                        variants={checkVariants}
                        className="flex-shrink-0 mt-1"
                      >
                        <CheckCircle size={20} className="text-primary-500" />
                      </motion.div>
                      <span className="ml-3 rtl:mr-3 rtl:ml-0">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                className="absolute inset-0 border-4 border-primary-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;