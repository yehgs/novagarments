'use client';
import React, { useEffect } from 'react';
import HeroCard from '../HeroCard';
import useLanguageStore from '@/store/useLanguageStore';
import { homepageTranslate } from '@/app/utils/translate';

const CustomerFirst = () => {
  const { translation, detectUserLanguage } = useLanguageStore();

  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);
  return (
    <div className="h-[100vh] w-full 3xl:h-[50vh]">
      <HeroCard
        backgroundUrl="images/pic5.jpg"
        firstTextClassName="md:text-7xl text-5xl font-bold max-w-1/2 absolute top-32 left-0"
        secondTextClassName="md:text-5xl text-3xl italic font-semibold max-w-md absolute bottom-32 right-0"
        firstText={
          homepageTranslate.customerSection[translation]?.text ||
          homepageTranslate.customerSection.uk.text
        }
        secondText={
          homepageTranslate.customerSection[translation]?.subText ||
          homepageTranslate.customerSection.uk.subText
        }
      />
    </div>
  );
};

export default CustomerFirst;
