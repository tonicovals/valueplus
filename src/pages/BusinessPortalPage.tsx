import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Users, LineChart, Briefcase, Lock, Globe, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessPortalPage: React.FC = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'ar' 
      ? 'بوابة الأعمال | مجموعة قيمة بلاس' 
      : language === 'fr'
        ? 'Portail Entreprise | Groupe Value Plus'
        : 'Business Portal | Value Plus Group';
  }, [language]);

  const features = [
    {
      icon: <Shield className="w-12 h-12 text-primary-600" />,
      title: language === 'ar' ? 'أمان متقدم' : language === 'fr' ? 'Sécurité Avancée' : 'Advanced Security',
      description: language === 'ar'
        ? 'حماية متقدمة لبياناتك وأصولك الرقمية'
        : language === 'fr'
          ? 'Protection avancée de vos données et actifs numériques'
          : 'Advanced protection for your data and digital assets'
    },
    {
      icon: <Users className="w-12 h-12 text-primary-600" />,
      title: language === 'ar' ? 'إدارة المستخدمين' : language === 'fr' ? 'Gestion des Utilisateurs' : 'User Management',
      description: language === 'ar'
        ? 'تحكم كامل في صلاحيات وأدوار المستخدمين'
        : language === 'fr'
          ? 'Contrôle complet des autorisations et des rôles des utilisateurs'
          : 'Complete control over user permissions and roles'
    },
    {
      icon: <LineChart className="w-12 h-12 text-primary-600" />,
      title: language === 'ar' ? 'تقارير تحليلية' : language === 'fr' ? 'Rapports Analytiques' : 'Analytics Reports',
      description: language === 'ar'
        ? 'رؤى وتحليلات متقدمة لأداء أعمالك'
        : language === 'fr'
          ? 'Insights et analyses avancées de la performance de votre entreprise'
          : 'Advanced insights and analytics for your business performance'
    },
    {
      icon: <Globe className="w-12 h-12 text-primary-600" />,
      title: language === 'ar' ? 'وصول عالمي' : language === 'fr' ? 'Accès Global' : 'Global Access',
      description: language === 'ar'
        ? 'وصول آمن من أي مكان وفي أي وقت'
        : language === 'fr'
          ? 'Accès sécurisé de n\'importe où et à tout moment'
          : 'Secure access from anywhere, anytime'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: language === 'ar' ? 'كفاءة محسنة' : language === 'fr' ? 'Efficacité Améliorée' : 'Enhanced Efficiency',
      description: language === 'ar'
        ? 'أتمتة العمليات وتحسين سير العمل'
        : language === 'fr'
          ? 'Automatisation des processus et optimisation du flux de travail'
          : 'Process automation and workflow optimization'
    },
    {
      icon: <Lock className="w-8 h-8 text-primary-600" />,
      title: language === 'ar' ? 'حماية البيانات' : language === 'fr' ? 'Protection des Données' : 'Data Protection',
      description: language === 'ar'
        ? 'تشفير متقدم وحماية شاملة للبيانات'
        : language === 'fr'
          ? 'Cryptage avancé et protection complète des données'
          : 'Advanced encryption and comprehensive data protection'
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: language === 'ar' ? 'توفير الوقت' : language === 'fr' ? 'Gain de Temps' : 'Time Saving',
      description: language === 'ar'
        ? 'إدارة أكثر كفاءة للمهام والموارد'
        : language === 'fr'
          ? 'Gestion plus efficace des tâches et des ressources'
          : 'More efficient management of tasks and resources'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {language === 'ar' 
                ? 'بوابة الأعمال المتكاملة'
                : language === 'fr'
                  ? 'Portail d\'Entreprise Intégré'
                  : 'Integrated Business Portal'}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {language === 'ar'
                ? 'منصة متكاملة لإدارة أعمالك بكفاءة وأمان'
                : language === 'fr'
                  ? 'Une plateforme intégrée pour gérer votre entreprise efficacement et en toute sécurité'
                  : 'An integrated platform to manage your business efficiently and securely'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="btn bg-white text-primary-900 hover:bg-gray-100"
              >
                {language === 'ar' ? 'ابدأ الآن' : language === 'fr' ? 'Commencer' : 'Get Started'}
              </Link>
              <a
                href="#features"
                className="btn border-2 border-white text-white hover:bg-white/10"
              >
                {language === 'ar' ? 'تعرف على المزيد' : language === 'fr' ? 'En Savoir Plus' : 'Learn More'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {language === 'ar' ? 'مميزات البوابة' : language === 'fr' ? 'Caractéristiques du Portail' : 'Portal Features'}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {language === 'ar'
                ? 'اكتشف المميزات المتقدمة التي تجعل بوابتنا الخيار الأمثل لإدارة أعمالك'
                : language === 'fr'
                  ? 'Découvrez les fonctionnalités avancées qui font de notre portail le choix idéal pour gérer votre entreprise'
                  : 'Discover the advanced features that make our portal the ideal choice for managing your business'}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-6 flex justify-center"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'ar' ? 'فوائد استخدام البوابة' : language === 'fr' ? 'Avantages du Portail' : 'Portal Benefits'}
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
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
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Business Portal Dashboard"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-900 text-white">
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
                  ? 'ابدأ رحلتك مع بوابة الأعمال اليوم'
                  : language === 'fr'
                    ? 'Commencez Votre Voyage avec le Portail Entreprise Aujourd\'hui'
                    : 'Start Your Journey with Business Portal Today'}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {language === 'ar'
                  ? 'انضم إلى آلاف الشركات التي تثق في بوابتنا لإدارة أعمالها'
                  : language === 'fr'
                    ? 'Rejoignez des milliers d\'entreprises qui font confiance à notre portail pour gérer leurs activités'
                    : 'Join thousands of companies who trust our portal to manage their business'}
              </p>
              <Link 
                to="/contact"
                className="btn bg-white text-primary-900 hover:bg-gray-100 text-lg px-8 py-4"
              >
                {language === 'ar' ? 'تواصل معنا' : language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPortalPage;