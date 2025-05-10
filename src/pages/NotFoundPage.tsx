import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const NotFoundPage: React.FC = () => {
  const { language, dir } = useLanguage();
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;
  
  useEffect(() => {
    document.title = language === 'ar' 
      ? 'صفحة غير موجودة | مجموعة قيمة بلاس' 
      : language === 'fr'
        ? 'Page Non Trouvée | Groupe Value Plus'
        : 'Page Not Found | Value Plus Group';
  }, [language]);

  return (
    <div className="section bg-gray-50 py-32 md:py-40">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-error-100 rounded-full flex items-center justify-center">
              <AlertTriangle size={40} className="text-error-600" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {language === 'ar' ? 'الصفحة غير موجودة' : language === 'fr' ? 'Page Non Trouvée' : 'Page Not Found'}
          </h2>
          <p className="text-gray-600 mb-8">
            {language === 'ar'
              ? 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها'
              : language === 'fr'
                ? 'La page que vous recherchez n\'existe pas, a été déplacée ou supprimée'
                : 'The page you are looking for doesn\'t exist, has been moved or deleted'}
          </p>
          
          <Link to="/" className="btn btn-primary inline-flex items-center group">
            <Arrow size={20} className="transform rotate-180 mr-2 rtl:ml-2 rtl:mr-0 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform" />
            <span>
              {language === 'ar' ? 'العودة إلى الصفحة الرئيسية' : language === 'fr' ? 'Retour à la Page d\'Accueil' : 'Back to Homepage'}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;