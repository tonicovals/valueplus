import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Linkedin, Twitter, Mail, Award, Star, Users } from 'lucide-react';

const TeamPage: React.FC = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'ar' 
      ? 'فريق العمل | مجموعة قيمة بلاس' 
      : language === 'fr'
        ? 'Notre Équipe | Groupe Value Plus'
        : 'Our Team | Value Plus Group';
  }, [language]);

  const executives = [
    {
      name: language === 'ar' ? 'محمد العمري' : language === 'fr' ? 'Mohammed Al-Amri' : 'Mohammed Al-Amri',
      role: language === 'ar' ? 'الرئيس التنفيذي' : language === 'fr' ? 'Directeur Général' : 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: language === 'ar'
        ? 'خبير في مجال الأعمال مع أكثر من 20 عاماً من الخبرة في قيادة الشركات الكبرى'
        : language === 'fr'
          ? 'Expert en affaires avec plus de 20 ans d\'expérience dans la direction de grandes entreprises'
          : 'Business expert with over 20 years of experience leading major corporations',
      linkedin: 'https://linkedin.com/in/mohammed-al-amri',
      twitter: 'https://twitter.com/mohammed_alamri',
      email: 'mohammed@valueplus.sa'
    },
    {
      name: language === 'ar' ? 'سارة الخالدي' : language === 'fr' ? 'Sarah Al-Khalidi' : 'Sarah Al-Khalidi',
      role: language === 'ar' ? 'رئيس العمليات' : language === 'fr' ? 'Directrice des Opérations' : 'Chief Operations Officer',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg',
      bio: language === 'ar'
        ? 'متخصصة في تطوير الأعمال والاستراتيجيات مع خبرة واسعة في إدارة العمليات'
        : language === 'fr'
          ? 'Spécialiste du développement commercial et de la stratégie avec une vaste expérience en gestion des opérations'
          : 'Business development and strategy specialist with extensive operations management experience',
      linkedin: 'https://linkedin.com/in/sarah-al-khalidi',
      twitter: 'https://twitter.com/sarah_alkhalidi',
      email: 'sarah@valueplus.sa'
    }
  ];

  const departments = [
    {
      name: language === 'ar' ? 'الموارد البشرية' : language === 'fr' ? 'Ressources Humaines' : 'Human Resources',
      icon: <Users className="w-8 h-8 text-primary-600" />,
      members: [
        {
          name: language === 'ar' ? 'فهد المالكي' : language === 'fr' ? 'Fahad Al-Malki' : 'Fahad Al-Malki',
          role: language === 'ar' ? 'مدير الموارد البشرية' : language === 'fr' ? 'Directeur RH' : 'HR Director',
          image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
        },
        {
          name: language === 'ar' ? 'نورة السعيد' : language === 'fr' ? 'Noura Al-Saeed' : 'Noura Al-Saeed',
          role: language === 'ar' ? 'أخصائية التوظيف' : language === 'fr' ? 'Spécialiste du Recrutement' : 'Recruitment Specialist',
          image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg'
        }
      ]
    },
    {
      name: language === 'ar' ? 'التطوير المؤسسي' : language === 'fr' ? 'Développement Organisationnel' : 'Organizational Development',
      icon: <Star className="w-8 h-8 text-primary-600" />,
      members: [
        {
          name: language === 'ar' ? 'عبدالله الشمري' : language === 'fr' ? 'Abdullah Al-Shammari' : 'Abdullah Al-Shammari',
          role: language === 'ar' ? 'مدير التطوير' : language === 'fr' ? 'Directeur du Développement' : 'Development Director',
          image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
        }
      ]
    },
    {
      name: language === 'ar' ? 'الجودة والتميز' : language === 'fr' ? 'Qualité et Excellence' : 'Quality & Excellence',
      icon: <Award className="w-8 h-8 text-primary-600" />,
      members: [
        {
          name: language === 'ar' ? 'ريم العتيبي' : language === 'fr' ? 'Reem Al-Otaibi' : 'Reem Al-Otaibi',
          role: language === 'ar' ? 'مديرة الجودة' : language === 'fr' ? 'Directrice de la Qualité' : 'Quality Director',
          image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'ar' ? 'فريق العمل' : language === 'fr' ? 'Notre Équipe' : 'Our Team'}
            </h1>
            <p className="text-xl text-white/90">
              {language === 'ar'
                ? 'تعرف على فريقنا المتميز من الخبراء والمتخصصين'
                : language === 'fr'
                  ? 'Découvrez notre équipe exceptionnelle d\'experts et de spécialistes'
                  : 'Meet our exceptional team of experts and specialists'}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Executive Team Section */}
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
              {language === 'ar' ? 'الإدارة التنفيذية' : language === 'fr' ? 'Direction Exécutive' : 'Executive Leadership'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar'
                ? 'قيادة ملهمة تقود مجموعتنا نحو النجاح والتميز'
                : language === 'fr'
                  ? 'Un leadership inspirant qui guide notre groupe vers le succès et l\'excellence'
                  : 'Inspiring leadership guiding our group towards success and excellence'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {executives.map((executive, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={executive.image}
                    alt={executive.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{executive.name}</h3>
                    <p className="text-white/90 text-lg">{executive.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{executive.bio}</p>
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <a
                      href={executive.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={executive.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href={`mailto:${executive.email}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'فرق العمل' : language === 'fr' ? 'Nos Équipes' : 'Our Teams'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar'
                ? 'تعرف على الفرق المتخصصة التي تقود عملياتنا اليومية'
                : language === 'fr'
                  ? 'Découvrez les équipes spécialisées qui dirigent nos opérations quotidiennes'
                  : 'Meet the specialized teams that drive our daily operations'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary-50 p-3 rounded-lg">
                      {department.icon}
                    </div>
                    <h3 className="text-xl font-bold">{department.name}</h3>
                  </div>
                  <div className="space-y-4">
                    {department.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="flex items-center gap-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium">{member.name}</h4>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;