import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Hero from '../components/home/Hero';
import FinancialSection from '../components/home/FinancialSection';
import CompaniesSection from '../components/home/CompaniesSection';
import ServicesOverview from '../components/home/ServicesOverview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactCta from '../components/home/ContactCta';

const HomePage: React.FC = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'ar' 
      ? 'الرئيسية | مجموعة قيمة بلاس' 
      : language === 'fr'
        ? 'Accueil | Groupe Value Plus'
        : 'Home | Value Plus Group';
  }, [language]);

  return (
    <div>
      <Hero />
      <FinancialSection />
      <CompaniesSection />
      <ServicesOverview />
      <TestimonialsSection />
      <ContactCta />
    </div>
  );
};

export default HomePage;