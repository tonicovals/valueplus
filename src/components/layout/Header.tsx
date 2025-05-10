import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ExternalLink, Building2, Anchor, Briefcase } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../common/Logo';
import ThemeToggle from '../common/ThemeToggle';
import { cn } from '../../utils/cn';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { 
      to: '/', 
      label: {
        ar: 'الرئيسية',
        en: 'Home',
        fr: 'Accueil'
      }
    },
    { 
      to: '/about', 
      label: {
        ar: 'من نحن',
        en: 'About',
        fr: 'À Propos'
      }
    },
    { 
      to: '/services', 
      label: {
        ar: 'خدماتنا',
        en: 'Services',
        fr: 'Services'
      }
    },
    { 
      to: '/team', 
      label: {
        ar: 'فريق العمل',
        en: 'Our Team',
        fr: 'Notre Équipe'
      }
    },
    { 
      to: '/contact', 
      label: {
        ar: 'تواصل معنا',
        en: 'Contact Us',
        fr: 'Contactez-nous'
      }
    }
  ];

  const externalLinks = [
    {
      href: "https://ashhecvalueplus.netlify.app/",
      icon: <ExternalLink size={20} />,
      label: {
        ar: 'المنصة',
        en: 'Platform',
        fr: 'Plateforme'
      }
    },
    {
      href: "https://jycv89.netlify.app",
      icon: <Anchor size={20} />,
      label: {
        ar: 'نادي اليخوت',
        en: 'Yacht Club',
        fr: 'Club Nautique'
      }
    },
    {
      href: "https://ccg.sa",
      icon: <Building2 size={20} />,
      label: {
        ar: 'شركة الإنشاءات',
        en: 'Construction Co.',
        fr: 'Entreprise de Construction'
      }
    },
    {
      href: "https://business.valueplus.sa",
      icon: <Briefcase size={20} />,
      label: {
        ar: 'بوابة الأعمال',
        en: 'Business Portal',
        fr: 'Portail Entreprise'
      }
    }
  ];

  const handleLanguageChange = (lang: 'ar' | 'en' | 'fr') => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <Logo size={40} variant={isScrolled ? 'default' : 'white'} animated />
            <span className={cn(
              "font-bold text-xl ml-2 rtl:mr-2 rtl:ml-0 transition-colors",
              isScrolled ? "text-gray-900" : "text-white"
            )}>
              {language === 'ar' ? 'قيمة بلاس' : 'Value Plus'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => cn(
                  "text-base font-medium transition-all duration-200 hover:text-primary-500",
                  isActive 
                    ? "text-primary-600" 
                    : isScrolled 
                      ? "text-gray-700" 
                      : "text-white"
                )}
              >
                {link.label[language]}
              </NavLink>
            ))}

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <ThemeToggle />
              
              {externalLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center space-x-1 rtl:space-x-reverse px-4 py-2 rounded-lg transition-all duration-300",
                    isScrolled 
                      ? "text-gray-700 hover:bg-primary-50 hover:text-primary-600" 
                      : "text-white hover:bg-white/10"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  <span className="font-medium">
                    {link.label[language]}
                  </span>
                </motion.a>
              ))}

              <div className="relative">
                <button
                  className={cn(
                    "flex items-center space-x-1 rtl:space-x-reverse transition-colors",
                    isScrolled ? "text-gray-700 hover:text-primary-500" : "text-white hover:text-primary-200"
                  )}
                  onClick={toggleLanguageMenu}
                >
                  <Globe size={20} />
                  <span className="uppercase">{language}</span>
                </button>

                <AnimatePresence>
                  {isLanguageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 rtl:left-0 rtl:right-auto mt-2 bg-white rounded-lg shadow-lg py-2 w-40"
                    >
                      <button
                        className={cn(
                          "w-full text-left rtl:text-right px-4 py-2 hover:bg-gray-50 transition-colors",
                          language === 'ar' ? "text-primary-600 font-medium" : "text-gray-700"
                        )}
                        onClick={() => handleLanguageChange('ar')}
                      >
                        العربية
                      </button>
                      <button
                        className={cn(
                          "w-full text-left rtl:text-right px-4 py-2 hover:bg-gray-50 transition-colors",
                          language === 'en' ? "text-primary-600 font-medium" : "text-gray-700"
                        )}
                        onClick={() => handleLanguageChange('en')}
                      >
                        English
                      </button>
                      <button
                        className={cn(
                          "w-full text-left rtl:text-right px-4 py-2 hover:bg-gray-50 transition-colors",
                          language === 'fr' ? "text-primary-600 font-medium" : "text-gray-700"
                        )}
                        onClick={() => handleLanguageChange('fr')}
                      >
                        Français
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <ThemeToggle />
            
            {externalLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-lg transition-all duration-300",
                  isScrolled 
                    ? "text-gray-700 hover:bg-primary-50 hover:text-primary-600" 
                    : "text-white hover:bg-white/10"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}

            <button
              className={cn(
                "transition-colors",
                isScrolled ? "text-gray-700 hover:text-primary-500" : "text-white hover:text-primary-200"
              )}
              onClick={toggleLanguageMenu}
            >
              <Globe size={24} />
            </button>
            
            <button
              className={cn(
                "transition-colors",
                isScrolled ? "text-gray-700 hover:text-primary-500" : "text-white hover:text-primary-200"
              )}
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Language Menu */}
          <AnimatePresence>
            {isLanguageMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-4 rtl:left-4 rtl:right-auto mt-2 bg-white rounded-lg shadow-lg py-2 w-40 z-50 md:hidden"
              >
                <button
                  className={cn(
                    "w-full text-left rtl:text-right px-4 py-2 hover:bg-gray-50 transition-colors",
                    language === 'ar' ? "text-primary-600 font-medium" : "text-gray-700"
                  )}
                  onClick={() => handleLanguageChange('ar')}
                >
                  العربية
                </button>
                <button
                  className={cn(
                    "w-full text-left rtl:text-right px-4 py-2 hover:bg-gray-50 transition-colors",
                    language === 'en' ? "text-primary-600 font-medium" : "text-gray-700"
                  )}
                  onClick={() => handleLanguageChange('en')}
                >
                  English
                </button>
                <button
                  className={cn(
                    "w-full text-left rtl:text-right px-4 py-2 hover:bg-gray-50 transition-colors",
                    language === 'fr' ? "text-primary-600 font-medium" : "text-gray-700"
                  )}
                  onClick={() => handleLanguageChange('fr')}
                >
                  Français
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-40"
              >
                <nav className="container py-4 flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) => cn(
                        "text-base font-medium transition-colors hover:text-primary-500",
                        isActive ? "text-primary-600" : "text-gray-700"
                      )}
                      onClick={closeMenu}
                    >
                      {link.label[language]}
                    </NavLink>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;