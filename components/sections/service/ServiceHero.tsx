'use client';
import HeroCard from '../HeroCard';
import useLanguageStore from '@/store/useLanguageStore';
import { servicePageTranslate } from '@/app/utils/translate';
import { useEffect } from 'react';

const ServiceHero = () => {
  const { translation, detectUserLanguage } = useLanguageStore();

  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);
  return (
    <div>
      <HeroCard
        backgroundUrl="images/pic2.jpg"
        firstTextClassName=""
        secondTextClassName="md:text-7xl text-4xl italic font-bold max-w-md py-20 text-center md:text-left"
        firstText=""
        secondText={
          servicePageTranslate.serviceHeroSection[translation]?.text ||
          servicePageTranslate.serviceHeroSection.uk.text
        }
      />
    </div>
  );
};

export default ServiceHero;
