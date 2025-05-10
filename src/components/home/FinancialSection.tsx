import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, TrendingDown, Building2, DollarSign, LineChart } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface StockData {
  symbol: string;
  price: number;
  change: number;
  currency: string;
}

const FinancialSection: React.FC = () => {
  const { language } = useLanguage();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const [stocks, setStocks] = useState<StockData[]>([
    { symbol: 'TASI', price: 12456.78, change: 1.23, currency: 'SAR' },
    { symbol: 'ARAMCO', price: 34.56, change: -0.45, currency: 'SAR' },
    { symbol: 'SABIC', price: 89.67, change: 2.34, currency: 'SAR' },
    { symbol: 'SNB', price: 45.23, change: 0.78, currency: 'SAR' },
    { symbol: 'STC', price: 156.78, change: -1.23, currency: 'SAR' },
    { symbol: 'DOW', price: 34567.89, change: 0.89, currency: 'USD' },
    { symbol: 'FTSE', price: 7456.23, change: -0.34, currency: 'GBP' },
    { symbol: 'DAX', price: 15678.45, change: 1.45, currency: 'EUR' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prevStocks => 
        prevStocks.map(stock => ({
          ...stock,
          price: stock.price + (Math.random() - 0.5) * 2,
          change: stock.change + (Math.random() - 0.5)
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const buildings = [
    {
      height: '400px',
      image: 'https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg',
      delay: 0
    },
    {
      height: '500px',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
      delay: 0.2
    },
    {
      height: '450px',
      image: 'https://images.pexels.com/photos/2079436/pexels-photo-2079436.jpeg',
      delay: 0.4
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
      {/* Animated Buildings */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex justify-center gap-4 h-full">
          {buildings.map((building, index) => (
            <motion.div
              key={index}
              style={{ y }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 0.3, y: 0 }}
              transition={{ duration: 1, delay: building.delay }}
              className="relative w-1/3"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${building.image})`,
                  height: building.height
                }}
              />
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            {language === 'ar' ? 'مركز المال والأعمال' : 'Financial Hub'}
          </h2>
          <p className="text-xl text-gray-300">
            {language === 'ar' 
              ? 'تابع أحدث تحركات الأسواق المالية العالمية والمحلية'
              : 'Track the latest movements in global and local financial markets'}
          </p>
        </motion.div>

        {/* Stock Ticker */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-12 overflow-hidden">
          <div className="flex animate-[scroll_40s_linear_infinite]">
            {stocks.concat(stocks).map((stock, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 rtl:space-x-reverse px-6 border-r border-gray-700 last:border-0"
              >
                <span className="font-bold whitespace-nowrap">{stock.symbol}</span>
                <span className="whitespace-nowrap">
                  {stock.price.toFixed(2)} {stock.currency}
                </span>
                <div className={`flex items-center ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {stock.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span className="ml-1 rtl:mr-1 rtl:ml-0 whitespace-nowrap">
                    {Math.abs(stock.change).toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mr-4">
                <Building2 className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold">
                {language === 'ar' ? 'المشاريع المالية' : 'Financial Projects'}
              </h3>
            </div>
            <p className="text-4xl font-bold text-primary-400 mb-2">150+</p>
            <p className="text-gray-400">
              {language === 'ar' ? 'مشروع مالي ناجح' : 'Successful financial projects'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold">
                {language === 'ar' ? 'حجم الاستثمارات' : 'Investment Volume'}
              </h3>
            </div>
            <p className="text-4xl font-bold text-green-400 mb-2">5B+</p>
            <p className="text-gray-400">
              {language === 'ar' ? 'ريال سعودي' : 'Saudi Riyals'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                <LineChart className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">
                {language === 'ar' ? 'معدل النمو' : 'Growth Rate'}
              </h3>
            </div>
            <p className="text-4xl font-bold text-blue-400 mb-2">25%</p>
            <p className="text-gray-400">
              {language === 'ar' ? 'نمو سنوي' : 'Annual growth'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSection;