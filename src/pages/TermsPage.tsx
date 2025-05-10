import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Scale, FileText, AlertCircle, Handshake } from 'lucide-react';

const TermsPage: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Scale className="w-8 h-8 text-primary-600" />,
      title: language === 'ar' ? 'القبول بالشروط' : 'Acceptance of Terms',
      content: language === 'ar'
        ? 'باستخدام موقعنا وخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا.'
        : 'By using our website and services, you agree to comply with these terms and conditions. If you do not agree to any part of these terms, please do not use our services.'
    },
    {
      icon: <FileText className="w-8 h-8 text-primary-600" />,
      title: language === 'ar' ? 'استخدام الخدمات' : 'Use of Services',
      content: language === 'ar'
        ? 'تلتزم باستخدام خدماتنا بشكل قانوني وأخلاقي، وعدم انتهاك حقوق الآخرين أو القوانين المعمول بها.'
        : 'You agree to use our services legally and ethically, without violating the rights of others or applicable laws.'
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-primary-600" />,
      title: language === 'ar' ? 'المسؤولية القانونية' : 'Legal Liability',
      content: language === 'ar'
        ? 'لا نتحمل المسؤولية عن أي أضرار مباشرة أو غير مباشرة تنتج عن استخدام خدماتنا. نحتفظ بالحق في تعديل أو إنهاء الخدمات في أي وقت.'
        : 'We are not liable for any direct or indirect damages resulting from the use of our services. We reserve the right to modify or terminate services at any time.'
    },
    {
      icon: <Handshake className="w-8 h-8 text-primary-600" />,
      title: language === 'ar' ? 'حقوق الملكية الفكرية' : 'Intellectual Property Rights',
      content: language === 'ar'
        ? 'جميع المحتوى والمواد المنشورة على موقعنا محمية بموجب حقوق الملكية الفكرية. لا يجوز نسخ أو استخدام هذه المواد دون إذن كتابي.'
        : 'All content and materials published on our website are protected by intellectual property rights. These materials may not be copied or used without written permission.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>
          {language === 'ar' ? 'الشروط والأحكام | مجموعة قيمة بلاس' : 'Terms and Conditions | Value Plus Group'}
        </title>
        <meta
          name="description"
          content={language === 'ar'
            ? 'الشروط والأحكام لمجموعة قيمة بلاس - تعرف على شروط استخدام خدماتنا وحقوقك ومسؤولياتك'
            : 'Terms and Conditions for Value Plus Group - Learn about our service terms, your rights and responsibilities'}
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
                {language === 'ar' ? 'الشروط والأحكام' : 'Terms and Conditions'}
              </h1>
              <p className="text-xl text-gray-200">
                {language === 'ar'
                  ? 'تعرف على شروط استخدام خدماتنا وحقوقك ومسؤولياتك'
                  : 'Learn about our service terms, your rights and responsibilities'}
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
                  ? 'إذا كان لديك أي أسئلة حول الشروط والأحكام، يرجى التواصل معنا:'
                  : 'If you have any questions about our terms and conditions, please contact us:'}
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  {language === 'ar' ? 'البريد الإلكتروني: ' : 'Email: '}
                  <a href="mailto:legal@valueplus.sa" className="text-primary-600 hover:underline">
                    legal@valueplus.sa
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

export default TermsPage;