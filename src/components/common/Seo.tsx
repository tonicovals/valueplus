import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../contexts/LanguageContext';

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  image = 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
  url = 'https://valueplus.sa'
}) => {
  const { language } = useLanguage();
  const siteName = language === 'ar' ? 'مجموعة قيمة بلاس' : 'Value Plus Group';

  return (
    <Helmet>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Seo;