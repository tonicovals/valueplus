import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo size={36} variant="white" />
              <span className="font-bold text-xl ml-2 rtl:mr-2 rtl:ml-0">
                {language === 'ar' ? 'قيمة بلاس' : 'Value Plus'}
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              {language === 'ar' 
                ? 'مجموعة من الشركات المتخصصة في تقديم خدمات متكاملة في مجالات الموارد البشرية، الاستثمار، والمقاولات'
                : 'A group of companies specialized in providing integrated services in HR, investment, and contracting sectors'}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a 
                href="https://facebook.com/valueplus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com/valueplus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com/valueplus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/valueplus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'ar' ? 'الرئيسية' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'ar' ? 'من نحن' : 'About'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'ar' ? 'خدماتنا' : 'Services'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'ar' ? 'اتصل بنا' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === 'ar' ? 'شركاتنا' : 'Our Companies'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/company/nadara-contracting" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'ar' ? 'نظارة' : 'Nadara'}
                </Link>
              </li>
              <li>
                <Link to="/company/rakeeza-plus" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'ar' ? 'ركيزة' : 'Rakeeza'}
                </Link>
              </li>
              <li>
                <Link to="/company/khuzam-najd" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'ar' ? 'خزام' : 'Khuzam'}
                </Link>
              </li>
              <li>
                <Link to="/company/ejaba-hr" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'ar' ? 'إجابة' : 'Ejaba'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-500 mt-1 mr-2 rtl:ml-2 rtl:mr-0" />
                <span className="text-gray-400">
                  {language === 'ar' 
                    ? 'الرياض، المملكة العربية السعودية، طريق الملك فهد'
                    : 'Riyadh, Saudi Arabia, King Fahd Road'}
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-500 mr-2 rtl:ml-2 rtl:mr-0" />
                <a 
                  href="tel:+966111234567" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +966 11 123 4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-500 mr-2 rtl:ml-2 rtl:mr-0" />
                <a 
                  href="mailto:info@valueplus.sa" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@valueplus.sa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Value Plus Group. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
          </p>
          <div className="flex space-x-4 rtl:space-x-reverse text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors">
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              {language === 'ar' ? 'شروط الاستخدام' : 'Terms of Service'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;