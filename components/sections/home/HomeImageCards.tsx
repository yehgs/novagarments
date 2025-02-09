'use client';
import React, { useEffect } from 'react';
import ImageTextCard from '@/components/ImageTextCard';
import useLanguageStore from '@/store/useLanguageStore';
import { homepageTranslate } from '@/app/utils/translate';

const HomeImageCard = () => {
  const { translation, detectUserLanguage } = useLanguageStore();

  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/2">
          <ImageTextCard
            path="/images/slide1.jpg"
            cardBgColor="#e8e8e8"
            imgClassName=""
            title={
              homepageTranslate.imageCardsSection[translation]?.header1Txt ||
              homepageTranslate.imageCardsSection.uk.header1Txt
            }
            text={
              homepageTranslate.imageCardsSection[translation]?.subTxt1 ||
              homepageTranslate.imageCardsSection.uk.subTxt1
            }
            titleClassName="lg:text-h3 md:text-xl font-bold"
            textClassName="lg:text-base md:text-sm"
            cardClassName="xl:py-28 md:py-16 md:px-16 xl:px-36 p-6"
          />
        </div>
        <div className="md:w-1/2">
          <ImageTextCard
            path="/images/pic10.jpg"
            cardBgColor=""
            imgClassName=""
            title={
              homepageTranslate.imageCardsSection[translation]?.header2Txt ||
              homepageTranslate.imageCardsSection.uk.header2Txt
            }
            text={
              homepageTranslate.imageCardsSection[translation]?.subTxt2 ||
              homepageTranslate.imageCardsSection.uk.subTxt2
            }
            titleClassName="lg:text-h3 md:text-xl font-bold"
            textClassName="lg:text-base md:text-sm"
            cardClassName="xl:py-28 md:py-16 md:px-16 xl:px-36 p-6"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/2">
          <ImageTextCard
            path="/images/image1.jpg"
            cardBgColor=""
            imgClassName=""
            title={
              homepageTranslate.imageCardsSection[translation]?.header3Txt ||
              homepageTranslate.imageCardsSection.uk.header3Txt
            }
            text={
              homepageTranslate.imageCardsSection[translation]?.subTxt3 ||
              homepageTranslate.imageCardsSection.uk.subTxt3
            }
            titleClassName="lg:text-h3 md:text-xl font-bold"
            textClassName="lg:text-base md:text-sm"
            cardClassName="xl:py-28 md:py-16 md:px-16 xl:px-36 p-6"
          />
        </div>
        <div className="md:w-1/2">
          <ImageTextCard
            path="/images/pic3.jpg"
            cardBgColor="#e8e8e8"
            imgClassName=""
            title={
              homepageTranslate.imageCardsSection[translation]?.header4Txt ||
              homepageTranslate.imageCardsSection.uk.header4Txt
            }
            text={
              homepageTranslate.imageCardsSection[translation]?.subTxt4 ||
              homepageTranslate.imageCardsSection.uk.subTxt4
            }
            titleClassName="lg:text-h3 md:text-xl font-bold"
            textClassName="lg:text-base md:text-sm"
            cardClassName="xl:py-28 md:py-16 md:px-16 xl:px-36 p-6"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeImageCard;
