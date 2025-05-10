import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  useEffect(() => {
    document.title = language === 'ar' 
      ? 'اتصل بنا | مجموعة قيمة بلاس' 
      : language === 'fr'
        ? 'Contactez-nous | Groupe Value Plus'
        : 'Contact Us | Value Plus Group';
  }, [language]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white py-24 md:py-32">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl max-w-3xl text-white/90">
            {t('contact.subtitle')}
          </p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">
                {language === 'ar' ? 'أرسل لنا رسالة' : language === 'fr' ? 'Envoyez-nous un message' : 'Send Us a Message'}
              </h2>
              
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-success-50 border border-success-200 rounded-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center">
                      <Check size={30} className="text-success-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-success-700 mb-2">
                    {language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : language === 'fr' ? 'Votre message a été envoyé avec succès!' : 'Your message has been sent successfully!'}
                  </h3>
                  <p className="text-success-600">
                    {language === 'ar' ? 'سنقوم بالرد عليك في أقرب وقت ممكن.' : language === 'fr' ? 'Nous vous répondrons dès que possible.' : 'We will get back to you as soon as possible.'}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'ar' ? 'الاسم بالكامل' : language === 'fr' ? 'Nom complet' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder={language === 'ar' ? 'أدخل اسمك' : language === 'fr' ? 'Entrez votre nom' : 'Enter your name'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'ar' ? 'البريد الإلكتروني' : language === 'fr' ? 'Email' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : language === 'fr' ? 'Entrez votre email' : 'Enter your email'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'ar' ? 'رقم الهاتف' : language === 'fr' ? 'Numéro de téléphone' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input"
                      placeholder={language === 'ar' ? 'أدخل رقم هاتفك' : language === 'fr' ? 'Entrez votre numéro de téléphone' : 'Enter your phone number'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'ar' ? 'الرسالة' : language === 'fr' ? 'Message' : 'Message'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input"
                      placeholder={language === 'ar' ? 'اكتب رسالتك هنا' : language === 'fr' ? 'Écrivez votre message ici' : 'Write your message here'}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2">
                    <Send size={18} />
                    <span>
                      {language === 'ar' ? 'إرسال الرسالة' : language === 'fr' ? 'Envoyer le message' : 'Send Message'}
                    </span>
                  </button>
                </form>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">
                {language === 'ar' ? 'معلومات التواصل' : language === 'fr' ? 'Informations de contact' : 'Contact Information'}
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-3 mr-4 rtl:ml-4 rtl:mr-0">
                    <MapPin size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      {language === 'ar' ? 'العنوان' : language === 'fr' ? 'Adresse' : 'Address'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'ar' 
                        ? 'الرياض، المملكة العربية السعودية، طريق الملك فهد، برج الأعمال، الطابق 15'
                        : language === 'fr'
                          ? 'Riyad, Arabie Saoudite, Route du Roi Fahd, Tour d\'affaires, 15ème étage'
                          : 'Riyadh, Saudi Arabia, King Fahd Road, Business Tower, 15th Floor'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-3 mr-4 rtl:ml-4 rtl:mr-0">
                    <Phone size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      {language === 'ar' ? 'الهاتف' : language === 'fr' ? 'Téléphone' : 'Phone'}
                    </h3>
                    <p className="text-gray-600">+966 11 123 4567</p>
                    <p className="text-gray-600">+966 55 987 6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-3 mr-4 rtl:ml-4 rtl:mr-0">
                    <Mail size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      {language === 'ar' ? 'البريد الإلكتروني' : language === 'fr' ? 'Email' : 'Email'}
                    </h3>
                    <p className="text-gray-600">info@valueplus.sa</p>
                    <p className="text-gray-600">careers@valueplus.sa</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden h-64 shadow-lg">
                {/* This would be an embedded Google Map in a real implementation */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">
                    {language === 'ar' ? 'خريطة الموقع' : language === 'fr' ? 'Carte du site' : 'Location Map'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;