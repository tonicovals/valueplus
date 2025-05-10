import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import * as LucideIcons from 'lucide-react';

const ServicesPage: React.FC = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'ar' 
      ? 'خدماتنا | مجموعة قيمة بلاس' 
      : language === 'fr'
        ? 'Nos Services | Groupe Value Plus'
        : 'Our Services | Value Plus Group';
  }, [language]);

  interface ServiceCategory {
    title: string;
    icon: string;
    color: string;
    services: {
      name: string;
      description: string;
      icon: string;
    }[];
  }

  const serviceCategories: ServiceCategory[] = [
    {
      title: language === 'ar' ? 'خدمات الموارد البشرية' : language === 'fr' ? 'Services RH' : 'HR Services',
      icon: 'Users',
      color: 'hrValue',
      services: [
        {
          name: language === 'ar' ? 'التوظيف وإدارة المواهب' : language === 'fr' ? 'Recrutement et Gestion des Talents' : 'Recruitment & Talent Management',
          description: language === 'ar' 
            ? 'خدمات توظيف شاملة لجذب أفضل المواهب وتطويرها للمساهمة في نجاح مؤسستك'
            : language === 'fr'
              ? 'Services de recrutement complets pour attirer les meilleurs talents et les développer pour contribuer au succès de votre organisation'
              : 'Comprehensive recruitment services to attract the best talents and develop them to contribute to your organization\'s success',
          icon: 'UserPlus'
        },
        {
          name: language === 'ar' ? 'تعهيد الموارد البشرية' : language === 'fr' ? 'Externalisation RH' : 'HR Outsourcing',
          description: language === 'ar'
            ? 'حلول تعهيد مرنة تتيح لك التركيز على عملك الأساسي بينما نهتم بإدارة مواردك البشرية'
            : language === 'fr'
              ? 'Solutions d\'externalisation flexibles qui vous permettent de vous concentrer sur votre activité principale pendant que nous gérons vos ressources humaines'
              : 'Flexible outsourcing solutions that allow you to focus on your core business while we take care of your human resources management',
          icon: 'Share2'
        },
        {
          name: language === 'ar' ? 'التدريب وتطوير المهارات' : language === 'fr' ? 'Formation et Développement des Compétences' : 'Training & Skill Development',
          description: language === 'ar'
            ? 'برامج تدريبية مخصصة لتطوير مهارات موظفيك وتعزيز أدائهم وإنتاجيتهم'
            : language === 'fr'
              ? 'Programmes de formation personnalisés pour développer les compétences de vos employés et améliorer leurs performances et leur productivité'
              : 'Customized training programs to develop your employees\' skills and enhance their performance and productivity',
          icon: 'GraduationCap'
        },
        {
          name: language === 'ar' ? 'إدارة الرواتب والتعويضات' : language === 'fr' ? 'Gestion de la Paie et des Compensations' : 'Payroll & Compensation',
          description: language === 'ar'
            ? 'خدمات إدارة رواتب دقيقة وفعالة تضمن دفع رواتب موظفيك في الوقت المناسب وبشكل صحيح'
            : language === 'fr'
              ? 'Services de gestion de paie précis et efficaces qui garantissent que vos employés sont payés correctement et à temps'
              : 'Accurate and efficient payroll management services ensuring your employees are paid correctly and on time',
          icon: 'CircleDollarSign'
        }
      ]
    },
    {
      title: language === 'ar' ? 'الحلول الاستثمارية' : language === 'fr' ? 'Solutions d\'Investissement' : 'Investment Solutions',
      icon: 'TrendingUp',
      color: 'investment',
      services: [
        {
          name: language === 'ar' ? 'استشارات استثمارية' : language === 'fr' ? 'Conseils en Investissement' : 'Investment Consulting',
          description: language === 'ar'
            ? 'استشارات مالية واستثمارية متخصصة لمساعدتك في اتخاذ قرارات استثمارية مدروسة'
            : language === 'fr'
              ? 'Conseils financiers et d\'investissement spécialisés pour vous aider à prendre des décisions d\'investissement éclairées'
              : 'Specialized financial and investment consulting to help you make informed investment decisions',
          icon: 'LineChart'
        },
        {
          name: language === 'ar' ? 'تطوير المشاريع الناشئة' : language === 'fr' ? 'Développement de Startups' : 'Startup Development',
          description: language === 'ar'
            ? 'دعم شامل للشركات الناشئة والمبتكرين، من مرحلة الفكرة إلى النمو والتوسع'
            : language === 'fr'
              ? 'Soutien complet aux startups et aux innovateurs, de l\'idée à la croissance et à l\'expansion'
              : 'Comprehensive support for startups and innovators, from idea stage to growth and expansion',
          icon: 'Rocket'
        },
        {
          name: language === 'ar' ? 'دعم التحول الرقمي' : language === 'fr' ? 'Support à la Transformation Digitale' : 'Digital Transformation',
          description: language === 'ar'
            ? 'استراتيجيات وحلول للمساعدة في تحويل أعمالك رقمياً وزيادة كفاءتها وتنافسيتها'
            : language === 'fr'
              ? 'Stratégies et solutions pour aider à transformer numériquement votre entreprise et augmenter son efficacité et sa compétitivité'
              : 'Strategies and solutions to help digitally transform your business and increase its efficiency and competitiveness',
          icon: 'Monitor'
        },
        {
          name: language === 'ar' ? 'تحليل وذكاء الأعمال' : language === 'fr' ? 'Analyse et Intelligence d\'Affaires' : 'Business Intelligence',
          description: language === 'ar'
            ? 'أدوات وحلول تحليلية متقدمة لمساعدتك في فهم بياناتك واتخاذ قرارات أعمال أفضل'
            : language === 'fr'
              ? 'Outils et solutions analytiques avancés pour vous aider à comprendre vos données et à prendre de meilleures décisions commerciales'
              : 'Advanced analytical tools and solutions to help you understand your data and make better business decisions',
          icon: 'BarChart'
        }
      ]
    },
    {
      title: language === 'ar' ? 'خدمات المقاولات' : language === 'fr' ? 'Services de Contrats' : 'Contracting Services',
      icon: 'Building',
      color: 'contracting',
      services: [
        {
          name: language === 'ar' ? 'التصميمات المعمارية' : language === 'fr' ? 'Conceptions Architecturales' : 'Architectural Designs',
          description: language === 'ar'
            ? 'تصميمات معمارية إبداعية وعملية تجمع بين الجمال والوظيفة وتلبي احتياجاتك الخاصة'
            : language === 'fr'
              ? 'Conceptions architecturales créatives et pratiques qui combinent beauté et fonctionnalité et répondent à vos besoins spécifiques'
              : 'Creative and practical architectural designs that combine beauty and functionality and meet your specific needs',
          icon: 'Pencil'
        },
        {
          name: language === 'ar' ? 'المشاريع الإنشائية' : language === 'fr' ? 'Projets de Construction' : 'Construction Projects',
          description: language === 'ar'
            ? 'خدمات إنشاء متكاملة للمباني السكنية والتجارية والمؤسسية بأعلى معايير الجودة'
            : language === 'fr'
              ? 'Services de construction intégrés pour les bâtiments résidentiels, commerciaux et institutionnels aux normes de qualité les plus élevées'
              : 'Integrated construction services for residential, commercial, and institutional buildings with the highest quality standards',
          icon: 'Building2'
        },
        {
          name: language === 'ar' ? 'أعمال المقاولات العامة' : language === 'fr' ? 'Travaux Généraux de Contrats' : 'General Contracting',
          description: language === 'ar'
            ? 'خدمات مقاولات عامة شاملة لمشاريع البناء والتجديد والصيانة بجميع أحجامها'
            : language === 'fr'
              ? 'Services complets de contractant général pour les projets de construction, de rénovation et de maintenance de toutes tailles'
              : 'Comprehensive general contracting services for construction, renovation, and maintenance projects of all sizes',
          icon: 'Hammer'
        },
        {
          name: language === 'ar' ? 'تطوير البنية التحتية' : language === 'fr' ? 'Développement d\'Infrastructure' : 'Infrastructure Development',
          description: language === 'ar'
            ? 'تخطيط وتنفيذ مشاريع البنية التحتية الحيوية التي تدعم النمو والتنمية المستدامة'
            : language === 'fr'
              ? 'Planification et mise en œuvre de projets d\'infrastructure vitaux qui soutiennent la croissance et le développement durable'
              : 'Planning and implementing vital infrastructure projects that support growth and sustainable development',
          icon: 'LayoutGrid'
        }
      ]
    }
  ];

  const getIcon = (iconName: string, size: number = 24) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={size} /> : null;
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white py-24 md:py-32">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'ar' ? 'خدماتنا' : language === 'fr' ? 'Nos Services' : 'Our Services'}
          </h1>
          <p className="text-xl max-w-3xl text-white/90">
            {language === 'ar'
              ? 'مجموعة شاملة من الخدمات المتخصصة عبر قطاعات الموارد البشرية، الاستثمار، والمقاولات'
              : language === 'fr'
                ? 'Une gamme complète de services spécialisés dans les secteurs des RH, de l\'investissement et des contrats'
                : 'A comprehensive range of specialized services across HR, investment, and contracting sectors'}
          </p>
        </div>
      </div>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`section ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container">
            <div className="flex items-center mb-16">
              <div className={`w-16 h-16 rounded-lg bg-${category.color}-500 text-white flex items-center justify-center mr-6 rtl:ml-6 rtl:mr-0`}>
                {getIcon(category.icon, 32)}
              </div>
              <h2 className="text-3xl font-bold">{category.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4"
                  style={{ borderColor: `var(--tw-color-${category.color}-500)` }}
                >
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-full bg-${category.color}-100 text-${category.color}-600 flex items-center justify-center mr-4 rtl:ml-4 rtl:mr-0 flex-shrink-0`}>
                      {getIcon(service.icon, 24)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="section bg-primary-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {language === 'ar' ? 'كيف نعمل' : language === 'fr' ? 'Comment Nous Travaillons' : 'How We Work'}
            </h2>
            <p className="section-subtitle">
              {language === 'ar'
                ? 'نهجنا المنظم في تقديم الخدمات لضمان نتائج متميزة ورضا العملاء'
                : language === 'fr'
                  ? 'Notre approche organisée de la prestation de services pour garantir des résultats exceptionnels et la satisfaction des clients'
                  : 'Our organized approach to service delivery to ensure outstanding results and customer satisfaction'}
            </p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {[
                {
                  number: '01',
                  title: language === 'ar' ? 'الاستشارة الأولية' : language === 'fr' ? 'Consultation Initiale' : 'Initial Consultation',
                  description: language === 'ar'
                    ? 'نبدأ بفهم احتياجاتك وأهدافك لتقديم الحلول المناسبة'
                    : language === 'fr'
                      ? 'Nous commençons par comprendre vos besoins et vos objectifs pour fournir les solutions appropriées'
                      : 'We begin by understanding your needs and goals to provide the appropriate solutions'
                },
                {
                  number: '02',
                  title: language === 'ar' ? 'تطوير الاستراتيجية' : language === 'fr' ? 'Développement de la Stratégie' : 'Strategy Development',
                  description: language === 'ar'
                    ? 'نضع خطة عمل مفصلة مع جدول زمني واضح لتنفيذ الحل'
                    : language === 'fr'
                      ? 'Nous établissons un plan d\'action détaillé avec un calendrier clair pour la mise en œuvre de la solution'
                      : 'We establish a detailed action plan with a clear timeline for implementing the solution'
                },
                {
                  number: '03',
                  title: language === 'ar' ? 'التنفيذ والمتابعة' : language === 'fr' ? 'Mise en Œuvre et Suivi' : 'Implementation & Monitoring',
                  description: language === 'ar'
                    ? 'ننفذ الحلول بكفاءة مع مراقبة مستمرة للتقدم والنتائج'
                    : language === 'fr'
                      ? 'Nous mettons en œuvre des solutions efficacement avec une surveillance continue des progrès et des résultats'
                      : 'We implement solutions efficiently with continuous monitoring of progress and results'
                },
                {
                  number: '04',
                  title: language === 'ar' ? 'التقييم والتحسين' : language === 'fr' ? 'Évaluation et Amélioration' : 'Evaluation & Improvement',
                  description: language === 'ar'
                    ? 'نراجع ونقيم النتائج ونقدم التعديلات اللازمة لتحسين الأداء'
                    : language === 'fr'
                      ? 'Nous examinons et évaluons les résultats et apportons les ajustements nécessaires pour améliorer les performances'
                      : 'We review and evaluate results and provide necessary adjustments to improve performance'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:w-1/2 p-6">
                    <div className={`${index % 2 === 0 ? 'md:text-right rtl:md:text-left' : 'md:text-left rtl:md:text-right'}`}>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white text-xl font-bold mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center w-0">
                    <div className="w-4 h-4 rounded-full bg-primary-600 relative z-10"></div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;