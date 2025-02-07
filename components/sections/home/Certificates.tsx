'use client';
import { useEffect } from 'react';
import MarqueeCard from '@/components/MarqueeCard';
import useLanguageStore from '@/store/useLanguageStore';
import { homepageTranslate } from '@/app/utils/translate';

const Certificates = () => {
  const images = [
    '/images/certificates/accord.png',
    '/images/certificates/bci.png',
    '/images/certificates/better.png',
    '/images/certificates/global.png',
    '/images/certificates/oeko.png',
    '/images/certificates/rsg.png',
    '/images/certificates/sedex.png',
    '/images/certificates/textile.png',
    '/images/certificates/bsci.png',
  ];
  const { translation, detectUserLanguage } = useLanguageStore();

  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);

  return (
    <div className="flex justify-center items-center gap-7 w-full container mt-5">
      <div className="inset-0 overflow-hidden">
        <MarqueeCard
          images={images}
          text={
            homepageTranslate.certificateSection[translation]?.header ||
            homepageTranslate.certificateSection.uk.header
          }
        />
      </div>
    </div>
  );
};

export default Certificates;
