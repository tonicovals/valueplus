import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'ar' 
      ? 'من نحن | مجموعة قيمة بلاس' 
      : language === 'fr'
        ? 'À Propos | Groupe Value Plus'
        : 'About Us | Value Plus Group';
  }, [language]);

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const values = [
    {
      icon: <Award size={40} className="text-primary-500" />,
      title: language === 'ar' ? 'التميز' : 'Excellence',
      description: language === 'ar' 
        ? 'نحن نسعى دائمًا لتحقيق أعلى مستويات الجودة في كل ما نقدمه من خدمات' 
        : 'We constantly strive to achieve the highest levels of quality in all the services we provide'
    },
    {
      icon: <Target size={40} className="text-primary-500" />,
      title: language === 'ar' ? 'الالتزام' : 'Commitment',
      description: language === 'ar' 
        ? 'نلتزم بتحقيق أهداف عملائنا وتجاوز توقعاتهم في جميع المشاريع' 
        : 'We are committed to achieving our clients\' goals and exceeding their expectations in all projects'
    },
    {
      icon: <Users size={40} className="text-primary-500" />,
      title: language === 'ar' ? 'التعاون' : 'Collaboration',
      description: language === 'ar' 
        ? 'نؤمن بقوة العمل الجماعي والشراكات الاستراتيجية لتحقيق النجاح المشترك' 
        : 'We believe in the power of teamwork and strategic partnerships to achieve mutual success'
    },
    {
      icon: <Globe size={40} className="text-primary-500" />,
      title: language === 'ar' ? 'الابتكار' : 'Innovation',
      description: language === 'ar' 
        ? 'نستثمر في الأفكار المبتكرة والتقنيات المتطورة لتقديم حلول مستدامة ومتميزة' 
        : 'We invest in innovative ideas and advanced technologies to provide sustainable and distinguished solutions'
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white py-24 md:py-32">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'ar' ? 'من نحن' : language === 'fr' ? 'À Propos de Nous' : 'About Us'}
          </h1>
          <p className="text-xl max-w-3xl text-white/90">
            {language === 'ar'
              ? 'تعرف على مجموعة قيمة بلاس، رحلتنا، قيمنا، ورؤيتنا المستقبلية في عالم الأعمال'
              : language === 'fr'
                ? 'Découvrez le Groupe Value Plus, notre parcours, nos valeurs et notre vision future dans le monde des affaires'
                : 'Learn about Value Plus Group, our journey, values, and future vision in the business world'}
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team meeting" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                {language === 'ar' 
                  ? 'قصتنا ورحلتنا'
                  : language === 'fr'
                    ? 'Notre Histoire et Parcours'
                    : 'Our Story and Journey'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'ar'
                  ? 'تأسست مجموعة قيمة بلاس بهدف تقديم حلول متكاملة تلبي احتياجات العملاء المتنوعة. بدأنا كشركة متخصصة في خدمات الموارد البشرية، ومع مرور الوقت توسعت أعمالنا لتشمل الاستثمار والمقاولات.'
                  : language === 'fr'
                    ? 'Le Groupe Value Plus a été fondé dans le but de fournir des solutions intégrées répondant aux divers besoins des clients. Nous avons commencé comme une entreprise spécialisée dans les services RH, et au fil du temps, nos activités se sont élargies pour inclure l\'investissement et les contrats.'
                    : 'Value Plus Group was founded with the aim of providing integrated solutions that meet the diverse needs of clients. We started as a company specialized in HR services, and over time, our business expanded to include investment and contracting.'}
              </p>
              <p className="text-gray-600 mb-6">
                {language === 'ar'
                  ? 'اليوم، نفخر بأن نكون واحدة من المجموعات الرائدة في المنطقة، حيث نجمع بين الخبرة العميقة والابتكار المستمر لتقديم خدمات استثنائية تسهم في نجاح عملائنا وتطوير المجتمع ككل.'
                  : language === 'fr'
                    ? 'Aujourd\'hui, nous sommes fiers d\'être l\'un des groupes leaders de la région, combinant une expertise approfondie et une innovation continue pour fournir des services exceptionnels qui contribuent au succès de nos clients et au développement de la société dans son ensemble.'
                    : 'Today, we are proud to be one of the leading groups in the region, combining deep expertise and continuous innovation to provide exceptional services that contribute to our clients\' success and the development of society as a whole.'}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">10+</div>
                  <div className="text-gray-600">
                    {language === 'ar' ? 'سنوات من الخبرة' : language === 'fr' ? 'Années d\'expérience' : 'Years of Experience'}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">100+</div>
                  <div className="text-gray-600">
                    {language === 'ar' ? 'مشروع منجز' : language === 'fr' ? 'Projets réalisés' : 'Completed Projects'}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {language === 'ar' ? 'قيمنا ومبادئنا' : language === 'fr' ? 'Nos Valeurs et Principes' : 'Our Values and Principles'}
            </h2>
            <p className="section-subtitle">
              {language === 'ar'
                ? 'المبادئ التي توجه عملنا وتحدد هويتنا كمجموعة شركات متميزة'
                : language === 'fr'
                  ? 'Les principes qui guident notre travail et définissent notre identité en tant que groupe d\'entreprises distingué'
                  : 'The principles that guide our work and define our identity as a distinguished group of companies'}
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-primary-50 p-8 rounded-lg border-l-4 rtl:border-r-4 rtl:border-l-0 border-primary-500"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-700">
                {language === 'ar' ? 'رؤيتنا' : language === 'fr' ? 'Notre Vision' : 'Our Vision'}
              </h3>
              <p className="text-gray-700">
                {language === 'ar'
                  ? 'أن نكون الرائدين إقليمياً في تقديم الحلول المتكاملة في مجالات الموارد البشرية والاستثمار والمقاولات، مع التركيز على الابتكار والاستدامة لبناء مستقبل أفضل.'
                  : language === 'fr'
                    ? 'Être leader régional dans la fourniture de solutions intégrées dans les domaines des ressources humaines, de l\'investissement et des contrats, en mettant l\'accent sur l\'innovation et la durabilité pour construire un avenir meilleur.'
                    : 'To be the regional leader in providing integrated solutions in the fields of human resources, investment, and contracting, with a focus on innovation and sustainability to build a better future.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary-50 p-8 rounded-lg border-l-4 rtl:border-r-4 rtl:border-l-0 border-secondary-500"
            >
              <h3 className="text-2xl font-bold mb-4 text-secondary-700">
                {language === 'ar' ? 'رسالتنا' : language === 'fr' ? 'Notre Mission' : 'Our Mission'}
              </h3>
              <p className="text-gray-700">
                {language === 'ar'
                  ? 'تمكين عملائنا من النجاح والنمو من خلال تقديم خدمات عالية الجودة ومبتكرة، والعمل كشريك استراتيجي يسهم في تحقيق أهدافهم وتجاوز توقعاتهم.'
                  : language === 'fr'
                    ? 'Permettre à nos clients de réussir et de se développer en fournissant des services de haute qualité et innovants, et en agissant en tant que partenaire stratégique qui contribue à la réalisation de leurs objectifs et au dépassement de leurs attentes.'
                    : 'Empowering our clients to succeed and grow by providing high-quality and innovative services, and acting as a strategic partner that contributes to achieving their goals and exceeding their expectations.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;