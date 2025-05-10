import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowLeft, Building2, Users, TrendingUp, Award, Globe, Shield, ChevronDown, Briefcase, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import CountUp from 'react-countup';

const Hero: React.FC = () => {
  const { t, dir } = useLanguage();
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '50%']);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const features = [
    {
      icon: <Building2 className="w-12 h-12 text-white" />,
      title: t('home.hero.features.contracting'),
      description: t('home.hero.features.contractingDesc')
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: t('home.hero.features.hr'),
      description: t('home.hero.features.hrDesc')
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      title: t('home.hero.features.investment'),
      description: t('home.hero.features.investmentDesc')
    }
  ];

  const stats = [
    { end: 15, suffix: '+', text: t('stats.years'), icon: <Award className="w-8 h-8 text-primary-400" /> },
    { end: 500, suffix: '+', text: t('stats.clients'), icon: <Globe className="w-8 h-8 text-primary-400" /> },
    { end: 100, suffix: '+', text: t('stats.projects'), icon: <Shield className="w-8 h-8 text-primary-400" /> }
  ];

  const highlights = [
    {
      icon: <Briefcase className="w-10 h-10 text-primary-500" />,
      title: t('home.highlights.expertise'),
      description: t('home.highlights.expertiseDesc')
    },
    {
      icon: <Target className="w-10 h-10 text-primary-500" />,
      title: t('home.highlights.innovation'),
      description: t('home.highlights.innovationDesc')
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-primary-500" />,
      title: t('home.highlights.quality'),
      description: t('home.highlights.qualityDesc')
    }
  ];

  const scrollToContent = () => {
    const contentSection = document.getElementById('content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center pt-16">
      {/* Enhanced Background with Parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: backgroundY }}
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg"
            alt="Modern skyscraper"
            className="w-full h-full object-cover brightness-50"
            loading="eager"
          />
        </motion.div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95"
          style={{ opacity }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-transparent to-primary-900/40"
          style={{ opacity }}
        />
        
        {/* Enhanced Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: 0
              }}
              animate={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </motion.div>
      
      <div className="container relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-primary-400 text-lg font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('home.hero.welcome')}
          </motion.span>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t('home.hero.title')}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {t('home.hero.subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link 
              to="/about" 
              className="btn btn-primary group text-lg px-8 py-4 relative overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10 flex items-center justify-center">
                {t('home.hero.cta')}
                <Arrow size={20} className="ml-2 rtl:mr-2 rtl:ml-0 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <Link 
              to="/contact" 
              className="btn bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 text-lg px-8 py-4 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300"
            >
              {t('nav.contact')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <motion.div 
                className="mb-6 transform group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Stats with Counter Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <motion.div className="mb-4">
                {stat.icon}
              </motion.div>
              <motion.div 
                className="text-5xl font-bold text-primary-400 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <CountUp
                  end={stat.end}
                  suffix={stat.suffix}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </motion.div>
              <div className="text-xl text-gray-200">{stat.text}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <motion.div 
                className="mb-6 transform hover:rotate-12 transition-transform duration-300"
              >
                {highlight.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {highlight.title}
              </h3>
              <p className="text-gray-300">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={scrollToContent}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </div>
      
      {/* Enhanced Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="w-full h-auto"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.path 
            fill="#f9fafb" 
            fillOpacity="1" 
            d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,112C672,107,768,149,864,149.3C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default Hero;