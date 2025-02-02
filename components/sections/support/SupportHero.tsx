'use client';
import HeroCard from '../HeroCard';
import useLanguageStore from '@/store/useLanguageStore';
import { supportPageTranslate } from '@/app/utils/translate';
import { useEffect } from 'react';

const SupportHero = () => {
  const { translation, detectUserLanguage } = useLanguageStore();
  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);
  return (
    <div className="w-full relative">
      <HeroCard
        backgroundUrl="images/pic9.jpg"
        firstTextClassName="md:text-5xl lg:text-6xl text-4xl italic font-bold max-w-md py-20 text-center md:text-left"
        secondTextClassName=""
        firstText={
          supportPageTranslate.supportHeroSection[translation]?.header ||
          supportPageTranslate.supportHeroSection.uk.header
        }
        secondText=""
      />
    </div>
  );
};

export default SupportHero;
