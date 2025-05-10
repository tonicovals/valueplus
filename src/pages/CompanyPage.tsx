import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Star, Check, Award, Users, Building2, TrendingUp, Shield, Globe, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getCompanyById } from '../data/companies';
import * as LucideIcons from 'lucide-react';
import CountUp from 'react-countup';

const CompanyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, dir, t } = useLanguage();
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const company = id ? getCompanyById(id) : null;

  useEffect(() => {
    if (company) {
      document.title = language === 'ar' 
        ? `${t(company.nameKey)} | مجموعة قيمة بلاس`
        : language === 'fr'
          ? `${t(company.nameKey)} | Groupe Value Plus`
          : `${t(company.nameKey)} | Value Plus Group`;
    }
  }, [company, language, t]);

  if (!company) {
    return <Navigate to="/404" />;
  }

  const getIcon = (iconName: string, size: number = 24) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={size} /> : null;
  };

  const achievements = [
    {
      icon: <Award className="w-12 h-12 text-primary-600" />,
      title: language === 'ar' ? 'التميز في الخدمة' : language === 'fr' ? 'Excellence du Service' : 'Service Excellence',
      description: language === 'ar' 
        ? 'حائزون على جوائز التميز في تقديم الخدمات المتكاملة'
        : language === 'fr'
          ? 'Récompensés pour l\'excellence dans la prestation de services intégrés'
          : 'Award-winning excellence in integrated service delivery'
    },
    {
      icon: <Users className="w-12 h-12 text-primary-600" />,
      title: language === 'ar' ? 'فريق محترف' : language === 'fr' ? 'Équipe Professionnelle' : 'Professional Team',
      description: language === 'ar'
        ? 'خبراء متخصصون في مجالاتهم مع خبرة تتجاوز 15 عاماً'
        : language === 'fr'
          ? 'Experts spécialisés dans leurs domaines avec plus de 15 ans d\'expérience'
          : 'Domain specialists with over 15 years of experience'
    },
    {
      icon: <Shield className="w-12 h-12 text-primary-600" />,
      title: language === 'ar' ? 'موثوقية تامة' : language === 'fr' ? 'Fiabilité Totale' : 'Complete Reliability',
      description: language === 'ar'
        ? 'نلتزم بأعلى معايير الجودة والأمان في جميع خدماتنا'
        : language === 'fr'
          ? 'Nous adhérons aux plus hautes normes de qualité et de sécurité dans tous nos services'
          : 'We adhere to the highest standards of quality and safety in all our services'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className={`relative min-h-[90vh] flex items-center ${company.gradientClass} text-white overflow-hidden`}>
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <img 
            src={company.heroImage} 
            alt={t(company.nameKey)} 
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        
        <div className="relative container z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className={`w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-lg flex items-center justify-center`}>
                {getIcon(company.logoIcon, 40)}
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t(company.nameKey)}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              {t(company.descriptionKey)}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4"
              >
                {language === 'ar' ? 'استكشف خدماتنا' : language === 'fr' ? 'Découvrir Nos Services' : 'Explore Our Services'}
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                {language === 'ar' ? 'تواصل معنا' : language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Animated Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {company.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <CountUp
                      end={parseInt(stat.number)}
                      suffix="+"
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <div className="text-lg text-white/80">{t(stat.labelKey)}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'لماذا نحن مميزون' : language === 'fr' ? 'Pourquoi Nous Sommes Uniques' : 'Why Choose Us'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-6"
                >
                  {achievement.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Animation */}
      <section id="services" className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'خدماتنا المتميزة' : language === 'fr' ? 'Nos Services Distingués' : 'Our Distinguished Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar'
                ? 'نقدم مجموعة شاملة من الخدمات المتخصصة لتلبية احتياجاتكم وتحقيق تطلعاتكم'
                : language === 'fr'
                  ? 'Nous offrons une gamme complète de services spécialisés pour répondre à vos besoins et réaliser vos aspirations'
                  : 'We offer a comprehensive range of specialized services to meet your needs and achieve your aspirations'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {company.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-lg flex items-center justify-center mb-6`}
                  >
                    {getIcon(service.icon, 32)}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t(service.titleKey)}</h3>
                  <p className="text-white/90 transform opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t(service.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'ar' ? 'ما يميزنا' : language === 'fr' ? 'Ce Qui Nous Distingue' : 'What Sets Us Apart'}
              </h2>
              <div className="space-y-6">
                {company.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-${company.color}-100 text-${company.color}-600 flex items-center justify-center flex-shrink-0`}>
                      {getIcon(feature.icon, 24)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t(feature.titleKey)}</h3>
                      <p className="text-gray-600">{t(feature.descriptionKey)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {company.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white p-6 rounded-xl shadow-md border-t-4 border-${company.color}-500`}
                  >
                    <div className={`text-${company.color}-600 mb-4`}>
                      {getIcon(stat.icon, 32)}
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-gray-600">{t(stat.labelKey)}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Enhanced Animation */}
      {company.testimonials && (
        <section className="section bg-gray-50 overflow-hidden">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === 'ar' ? 'ماذا يقول عملاؤنا' : language === 'fr' ? 'Ce Que Disent Nos Clients' : 'What Our Clients Say'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {company.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <motion.img
                      src={testimonial.image}
                      alt={t(testimonial.authorKey)}
                      className="w-16 h-16 rounded-full object-cover mr-4 rtl:ml-4 rtl:mr-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                    <div>
                      <h3 className="font-bold text-lg">{t(testimonial.authorKey)}</h3>
                      <p className="text-gray-600">{t(testimonial.roleKey)}</p>
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
                  <p className="text-gray-700 italic leading-relaxed">
                    "{t(testimonial.contentKey)}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section with Enhanced Animation */}
      {(company.projects || company.successStories) && (
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {company.projects 
                  ? (language === 'ar' ? 'مشاريعنا المميزة' : language === 'fr' ? 'Nos Projets Remarquables' : 'Our Featured Projects')
                  : (language === 'ar' ? 'قصص النجاح' : language === 'fr' ? 'Histoires de Réussite' : 'Success Stories')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(company.projects || company.successStories || []).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    className="aspect-video overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={item.image}
                      alt={t(item.titleKey)}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-sm font-medium text-white/80 mb-2">{item.category}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{t(item.titleKey)}</h3>
                    <p className="text-white/90">{t(item.descriptionKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section id="contact" className={`section ${company.gradientClass} text-white`}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'ar' 
                  ? 'هل أنت مستعد للبدء؟'
                  : language === 'fr'
                    ? 'Prêt à Commencer?'
                    : 'Ready to Get Started?'}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {language === 'ar'
                  ? 'تواصل معنا اليوم لمناقشة كيف يمكننا مساعدتك في تحقيق أهدافك'
                  : language === 'fr'
                    ? 'Contactez-nous aujourd\'hui pour discuter de la façon dont nous pouvons vous aider à atteindre vos objectifs'
                    : 'Contact us today to discuss how we can help you achieve your goals'}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn bg-white text-gray-900 hover:bg-gray-100"
                >
                  {language === 'ar' ? 'تواصل معنا' : language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
                </motion.a>
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn border-2 border-white text-white hover:bg-white/10"
                >
                  {language === 'ar' ? 'اكتشف المزيد' : language === 'fr' ? 'En Savoir Plus' : 'Learn More'}
                  <Arrow size={18} className="ml-2 rtl:mr-2 rtl:ml-0" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;