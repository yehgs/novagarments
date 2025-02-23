'use client';
import { useEffect } from 'react';
import ProductionCard from '@/components/ProductionCard';
import useLanguageStore from '@/store/useLanguageStore';
import { homepageTranslate } from '@/app/utils/translate';

const Production = () => {
  const { translation, detectUserLanguage } = useLanguageStore();

  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);
  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1">
          <ProductionCard
            text={
              homepageTranslate.productionSection[translation]?.sportTxt ||
              homepageTranslate.productionSection.uk.sportTxt
            }
            btnTxt={
              homepageTranslate.productionSection[translation]?.btnTxt ||
              homepageTranslate.productionSection.uk.btnTxt
            }
            path="/market"
            url="/images/pics1.jpg"
            cardColor="#004F88"
            buttonColor="white"
            buttonTextColor="black"
            textColor="white"
          />
        </div>
        <div className="flex-1">
          <ProductionCard
            text={
              homepageTranslate.productionSection[translation]?.promoTxt ||
              homepageTranslate.productionSection.uk.promoTxt
            }
            btnTxt={
              homepageTranslate.productionSection[translation]?.btnTxt ||
              homepageTranslate.productionSection.uk.btnTxt
            }
            path="/market"
            url="/images/pics2.jpg"
            cardColor="white"
            buttonColor="#004F88"
            buttonTextColor="white"
            textColor="black"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1">
          <ProductionCard
            text={
              homepageTranslate.productionSection[translation]?.beachTxt ||
              homepageTranslate.productionSection.uk.beachTxt
            }
            btnTxt={
              homepageTranslate.productionSection[translation]?.btnTxt ||
              homepageTranslate.productionSection.uk.btnTxt
            }
            path="/market"
            url="/images/pic29.jpg"
            cardColor="transparent"
            buttonColor="white"
            buttonTextColor="black"
            textColor="black"
          />
        </div>
        <div className="flex-1">
          <ProductionCard
            text={
              homepageTranslate.productionSection[translation]?.underwearTxt ||
              homepageTranslate.productionSection.uk.underwearTxt
            }
            btnTxt={
              homepageTranslate.productionSection[translation]?.btnTxt ||
              homepageTranslate.productionSection.uk.btnTxt
            }
            path="/market"
            url="/images/pic28.jpg"
            cardColor="black/80"
            buttonColor="#004F88"
            buttonTextColor="white"
            textColor="white"
          />
        </div>
      </div>
      <div className="my-20">
        <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold text-center mb-3">
          {homepageTranslate.productionSection[translation]?.bottomTxt ||
            homepageTranslate.productionSection.uk.bottomTxt}
        </h1>
        <p className="text-xl text-center">
          {homepageTranslate.productionSection[translation]?.bottomSubTxt ||
            homepageTranslate.productionSection.uk.bottomSubTxt}
        </p>
      </div>
    </>
  );
};

export default Production;
