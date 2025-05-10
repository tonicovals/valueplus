import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, Building, ArrowRight, ArrowLeft, Zap, Share2, LineChart } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import companies from '../../data/companies';
import Logo from '../common/Logo';

// Fix Leaflet default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const CompaniesSection: React.FC = () => {
  const { t, dir } = useLanguage();
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Unique office buildings for each company
  const officeBuildings = [
    'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg', // Modern glass building
    'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg', // Futuristic architecture
    'https://images.pexels.com/photos/425000/pexels-photo-425000.jpeg', // Corporate tower
    'https://images.pexels.com/photos/3182530/pexels-photo-3182530.jpeg', // Business center
    'https://images.pexels.com/photos/2224861/pexels-photo-2224861.jpeg', // Contemporary office
    'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg'  // Modern complex
  ];

  // Global office locations
  const locations = [
    { position: [24.7136, 46.6753], name: 'Riyadh HQ', country: 'Saudi Arabia' },
    { position: [25.2048, 55.2708], name: 'Dubai Office', country: 'UAE' },
    { position: [30.0444, 31.2357], name: 'Cairo Office', country: 'Egypt' },
    { position: [51.5074, -0.1278], name: 'London Office', country: 'UK' },
    { position: [40.7128, -74.0060], name: 'New York Office', country: 'USA' }
  ];

  const customIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <section className="section bg-gray-50 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block text-primary-600 font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('companies.subtitle')}
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('companies.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('companies.description')}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              className="group relative"
              variants={itemVariants}
            >
              <div className="card overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={officeBuildings[index % officeBuildings.length]}
                    alt={t(company.nameKey)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  />
                  <div className={`absolute inset-0 ${company.gradientClass} opacity-90`}></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-6 left-6">
                    <Logo company={company.id} size={32} variant="white" animated />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{t(company.nameKey)}</h3>
                    <p className="text-white/90 text-lg line-clamp-2">{t(company.descriptionKey)}</p>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <div className="space-y-6 mb-8">
                    {company.services.slice(0, 2).map((service, sIndex) => (
                      <div key={sIndex} className="flex items-center text-gray-700 group-hover:text-primary-600 transition-colors duration-300">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary-50 transition-colors duration-300">
                          {getIcon(service.icon, 20)}
                        </div>
                        <span className="ml-4 rtl:mr-4 rtl:ml-0 text-lg">{t(service.titleKey)}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={`/company/${company.id}`}
                    className={`inline-flex items-center text-lg font-medium text-${company.color}-600 hover:text-${company.color}-700 group-hover:underline`}
                  >
                    {t('common.learnMore')}
                    <Arrow size={20} className="ml-2 rtl:mr-2 rtl:ml-0 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Presence Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              {t('companies.globalPresence')}
            </h3>
            <p className="text-xl text-gray-600">
              {t('companies.globalPresenceDesc')}
            </p>
          </div>
          <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
            <MapContainer
              center={[25, 45]}
              zoom={3}
              className="h-full w-full"
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locations.map((location, index) => (
                <Marker
                  key={index}
                  position={location.position as [number, number]}
                  icon={customIcon}
                >
                  <Popup>
                    <div className="text-center">
                      <h4 className="font-bold">{location.name}</h4>
                      <p className="text-gray-600">{location.country}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/about"
            className="btn btn-primary inline-flex items-center group text-lg px-8 py-4"
          >
            {t('companies.viewAll')}
            <Arrow size={20} className="ml-2 rtl:mr-2 rtl:ml-0 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const getIcon = (iconName: string, size: number = 40) => {
  switch (iconName) {
    case 'Users': return <Users size={size} />;
    case 'TrendingUp': return <TrendingUp size={size} />;
    case 'Building': return <Building size={size} />;
    case 'Zap': return <Zap size={size} />;
    case 'Share2': return <Share2 size={size} />;
    case 'LineChart': return <LineChart size={size} />;
    default: return <Building size={size} />;
  }
};

export default CompaniesSection;