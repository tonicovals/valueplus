import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PhoneOutgoing } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactCta: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="section bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' 
                ? 'هل تحتاج إلى مساعدة؟ تواصل معنا الآن'
                : 'Need assistance? Contact us now'}
            </h2>
            <p className="text-lg text-white/80">
              {language === 'ar'
                ? 'فريقنا من الخبراء جاهز لمساعدتك وتقديم الحلول المناسبة لاحتياجاتك'
                : 'Our team of experts is ready to help you and provide suitable solutions for your needs'}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/contact"
              className="btn bg-white text-primary-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <PhoneOutgoing size={20} />
              <span>
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;