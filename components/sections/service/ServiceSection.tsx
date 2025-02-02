'use client';
import ImageTextCard from '@/components/ImageTextCard';
import useLanguageStore from '@/store/useLanguageStore';
import { servicePageTranslate } from '@/app/utils/translate';
import { useEffect } from 'react';

const ServiceSection = () => {
  const { translation, detectUserLanguage } = useLanguageStore();

  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);
  const content = [
    {
      path: '/images/slide2.jpg',
      cardBgColor: '#e8e8e8',
      imgClassName: '',
      title:
        servicePageTranslate.serviceSection[translation]?.title ||
        servicePageTranslate.serviceSection.uk.title,
      text2:
        servicePageTranslate.serviceSection[translation]?.subTitle ||
        servicePageTranslate.serviceSection.uk.subTitle,
      titleClassName: 'text-[1.5rem] font-bold',
      textClassName: 'text-base',
      cardClassName: 'lg:py-24 md:py-10 px-8 py-8',
    },
    {
      path: '/images/pic11.jpg',
      cardBgColor: 'white',
      imgClassName: '',
      title:
        servicePageTranslate.serviceSection[translation]?.title2 ||
        servicePageTranslate.serviceSection.uk.title2,
      text2:
        servicePageTranslate.serviceSection[translation]?.subTitle2 ||
        servicePageTranslate.serviceSection.uk.subTitle2,
      titleClassName: 'text-[1.5rem] font-bold',
      textClassName: 'text-base',
      cardClassName: 'lg:py-24 md:py-10 px-8 py-8',
    },
    {
      path: '/images/pic12.jpg',
      cardBgColor: '#e8e8e8',
      imgClassName: '',
      title:
        servicePageTranslate.serviceSection[translation]?.title3 ||
        servicePageTranslate.serviceSection.uk.title3,
      text2:
        servicePageTranslate.serviceSection[translation]?.subTitle3 ||
        servicePageTranslate.serviceSection.uk.subTitle3,
      titleClassName: 'text-[1.5rem] font-bold',
      textClassName: 'text-base',
      cardClassName: 'lg:py-24 md:py-10 px-8 py-8',
    },
    {
      path: '/images/pic6.jpg',
      cardBgColor: 'white',
      imgClassName: '',
      title:
        servicePageTranslate.serviceSection[translation]?.title4 ||
        servicePageTranslate.serviceSection.uk.title4,
      text2:
        servicePageTranslate.serviceSection[translation]?.subTitle4 ||
        servicePageTranslate.serviceSection.uk.subTitle4,
      titleClassName: 'text-[1.5rem] font-bold',
      textClassName: 'text-base',
      cardClassName: 'lg:py-24 md:py-10 px-8 py-8',
    },
    {
      path: '/images/pic4.jpg',
      cardBgColor: '#e8e8e8',
      imgClassName: '',
      title:
        servicePageTranslate.serviceSection[translation]?.title5 ||
        servicePageTranslate.serviceSection.uk.title5,
      text2:
        servicePageTranslate.serviceSection[translation]?.subTitle5 ||
        servicePageTranslate.serviceSection.uk.subTitle5,
      titleClassName: 'text-[1.5rem] font-bold',
      textClassName: 'text-base',
      cardClassName: 'lg:py-24 md:py-10 px-8 py-8',
    },
    {
      path: '/images/pic13.jpg',
      cardBgColor: 'white',
      imgClassName: '',
      title:
        servicePageTranslate.serviceSection[translation]?.title6 ||
        servicePageTranslate.serviceSection.uk.title6,
      text2:
        servicePageTranslate.serviceSection[translation]?.subTitle6 ||
        servicePageTranslate.serviceSection.uk.subTitle6,
      titleClassName: 'text-[1.5rem] font-bold',
      textClassName: 'text-base',
      cardClassName: 'lg:py-24 md:py-10 px-8 py-8',
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:grid-rows-3 lg:grid-rows-2 w-[100vw] relative">
      {content.map((item, index) => (
        <div key={index} className="">
          <ImageTextCard
            path={item.path}
            cardBgColor={item.cardBgColor}
            imgClassName={item.imgClassName}
            title={item.title}
            text2={item.text2}
            titleClassName={item.titleClassName}
            text2ClassName={item.textClassName}
            cardClassName={item.cardClassName}
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
