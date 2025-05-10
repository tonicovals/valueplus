import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Language = 'ar' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'rtl' | 'ltr';
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  ar: {
    'home.hero.welcome': 'مرحباً بكم في مجموعة قيمة بلاس',
    'home.hero.title': 'نحو مستقبل أفضل مع حلول متكاملة للأعمال',
    'home.hero.subtitle': 'شريكك الموثوق في تحقيق النجاح عبر خدمات الموارد البشرية، الاستثمار، والمقاولات',
    'home.hero.cta': 'اكتشف إمكانياتنا',
    'home.hero.features.contracting': 'حلول المقاولات المتكاملة',
    'home.hero.features.contractingDesc': 'نقدم خدمات إنشائية متميزة وحلول مبتكرة تلبي تطلعاتكم',
    'home.hero.features.hr': 'خدمات الموارد البشرية',
    'home.hero.features.hrDesc': 'نطور الكفاءات ونبني فرق عمل احترافية لتحقيق أهدافكم',
    'home.hero.features.investment': 'الحلول الاستثمارية',
    'home.hero.features.investmentDesc': 'نستثمر في مستقبلكم ونحقق عوائد مستدامة لنموكم',
    'stats.years': 'سنوات من الخبرة',
    'stats.clients': 'عميل راضٍ',
    'stats.projects': 'مشروع ناجح',
    'companies.subtitle': 'شركاتنا المتخصصة',
    'companies.title': 'مجموعة قيمة بلاس - ٤٠ عاماً من التميز والإنجاز',
    'companies.description': 'منذ عام ١٩٨٣، نقدم حلولاً متكاملة في مجالات الموارد البشرية والاستثمار والمقاولات، مع التزامنا بالجودة والابتكار في كل ما نقدمه',
    'companies.globalPresence': 'تواجدنا العالمي',
    'companies.globalPresenceDesc': 'نمتد بخدماتنا عبر المملكة العربية السعودية والشرق الأوسط وشمال أفريقيا',
    'companies.viewAll': 'عرض جميع الشركات',
    'nav.contact': 'تواصل معنا',
    // ... existing translations
  },
  en: {
    'home.hero.welcome': 'Welcome to Value Plus Group',
    'home.hero.title': 'Building Tomorrow\'s Success Today',
    'home.hero.subtitle': 'Your trusted partner in HR solutions, strategic investments, and innovative contracting services',
    'home.hero.cta': 'Discover Our Potential',
    'home.hero.features.contracting': 'Integrated Contracting',
    'home.hero.features.contractingDesc': 'Delivering excellence in construction with innovative solutions',
    'home.hero.features.hr': 'HR Excellence',
    'home.hero.features.hrDesc': 'Building professional teams and developing competencies',
    'home.hero.features.investment': 'Strategic Investments',
    'home.hero.features.investmentDesc': 'Creating sustainable growth through smart investments',
    'stats.years': 'Years of Experience',
    'stats.clients': 'Satisfied Clients',
    'stats.projects': 'Successful Projects',
    'companies.subtitle': 'Our Specialized Companies',
    'companies.title': 'Value Plus Group - 40 Years of Excellence',
    'companies.description': 'Since 1983, we\'ve been providing integrated solutions in HR, investment, and contracting, with an unwavering commitment to quality and innovation in everything we do',
    'companies.globalPresence': 'Global Presence',
    'companies.globalPresenceDesc': 'Our services extend across Saudi Arabia, the Middle East, and North Africa',
    'companies.viewAll': 'View All Companies',
    'nav.contact': 'Contact Us',
    // ... existing translations
  },
  fr: {
    'home.hero.welcome': 'Bienvenue chez Value Plus Group',
    'home.hero.title': 'Construire le Succès de Demain',
    'home.hero.subtitle': 'Votre partenaire de confiance en solutions RH, investissements stratégiques et services de construction',
    'home.hero.cta': 'Découvrez Notre Potentiel',
    'home.hero.features.contracting': 'Construction Intégrée',
    'home.hero.features.contractingDesc': 'Excellence dans la construction avec des solutions innovantes',
    'home.hero.features.hr': 'Excellence RH',
    'home.hero.features.hrDesc': 'Construction d\'équipes professionnelles et développement des compétences',
    'home.hero.features.investment': 'Investissements Stratégiques',
    'home.hero.features.investmentDesc': 'Créer une croissance durable par des investissements intelligents',
    'stats.years': 'Années d\'Expérience',
    'stats.clients': 'Clients Satisfaits',
    'stats.projects': 'Projets Réussis',
    'companies.subtitle': 'Nos Entreprises Spécialisées',
    'companies.title': 'Value Plus Group - 40 Ans d\'Excellence',
    'companies.description': 'Depuis 1983, nous fournissons des solutions intégrées en RH, investissement et construction, avec un engagement constant envers la qualité et l\'innovation dans tout ce que nous faisons',
    'companies.globalPresence': 'Présence Mondiale',
    'companies.globalPresenceDesc': 'Nos services s\'étendent à travers l\'Arabie Saoudite, le Moyen-Orient et l\'Afrique du Nord',
    'companies.viewAll': 'Voir Toutes les Entreprises',
    'nav.contact': 'Contactez-nous',
    // ... existing translations
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ar');
  const [dir, setDir] = useState<'rtl' | 'ltr'>('rtl');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language | null;
    if (savedLanguage && ['ar', 'en', 'fr'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    const direction = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    setDir(direction);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};