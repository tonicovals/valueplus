import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Lock, UserCheck, Eye } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: language === 'ar' ? 'جمع المعلومات' : 'Information Collection',
      content: language === 'ar'
        ? 'نجمع المعلومات الشخصية التي تقدمها لنا طواعية عند استخدام موقعنا أو خدماتنا. قد تشمل هذه المعلومات اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وأي معلومات أخرى تختار مشاركتها معنا.'
        : 'We collect personal information that you voluntarily provide to us when using our website or services. This may include your name, email address, phone number, and any other information you choose to share with us.'
    },
    {
      icon: <Lock className="w-8 h-8 text-primary-600" />,
      title: language === 'ar' ? 'حماية المعلومات' : 'Information Protection',
      content: language === 'ar'
        ? 'نتخذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف.'
        : 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-primary-600" />,
      title: language === 'ar' ? 'استخدام المعلومات' : 'Information Usage',
      content: language === 'ar'
        ? 'نستخدم معلوماتك الشخصية لتقديم خدماتنا وتحسينها، والتواصل معك، وتلبية طلباتك، وإرسال معلومات تسويقية إذا اخترت تلقيها.'
        : 'We use your personal information to provide and improve our services, communicate with you, fulfill your requests, and send marketing information if you choose to receive it.'
    },
    {
      icon: <Eye className="w-8 h-8 text-primary-600" />,
      title: language === 'ar' ? 'الشفافية والخصوصية' : 'Transparency and Privacy',
      content: language === 'ar'
        ? 'نلتزم بالشفافية في ممارسات الخصوصية لدينا ونحترم حقك في الخصوصية. يمكنك دائمًا الاختيار في كيفية استخدام معلوماتك.'
        : 'We are committed to transparency in our privacy practices and respect your right to privacy. You always have choices about how your information is used.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>
          {language === 'ar' ? 'سياسة الخصوصية | مجموعة قيمة بلاس' : 'Privacy Policy | Value Plus Group'}
        </title>
        <meta
          name="description"
          content={language === 'ar'
            ? 'سياسة الخصوصية لمجموعة قيمة بلاس - نلتزم بحماية خصوصيتك وأمان معلوماتك الشخصية'
            : 'Privacy Policy for Value Plus Group - We are committed to protecting your privacy and the security of your personal information'}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-primary-900 text-white py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </h1>
              <p className="text-xl text-gray-200">
                {language === 'ar'
                  ? 'نلتزم بحماية خصوصيتك وضمان أمان معلوماتك الشخصية'
                  : 'We are committed to protecting your privacy and ensuring the security of your personal information'}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-md"
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-primary-50 p-4 rounded-lg">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-white rounded-xl p-8 shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6">
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'ar'
                  ? 'إذا كان لديك أي أسئلة حول سياسة الخصوصية الخاصة بنا، يرجى التواصل معنا:'
                  : 'If you have any questions about our privacy policy, please contact us:'}
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  {language === 'ar' ? 'البريد الإلكتروني: ' : 'Email: '}
                  <a href="mailto:privacy@valueplus.sa" className="text-primary-600 hover:underline">
                    privacy@valueplus.sa
                  </a>
                </li>
                <li>
                  {language === 'ar' ? 'الهاتف: ' : 'Phone: '}
                  <a href="tel:+966111234567" className="text-primary-600 hover:underline">
                    +966 11 123 4567
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;