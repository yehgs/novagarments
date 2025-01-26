'use client';
import ImageTextCard from '@/components/ImageTextCard';
import React from 'react';

const AboutImageCards = () => {
  const content = [
    {
      path: '/images/pic21.jpg',
      title: 'Headquarters & Sales',
      text2: ' John M Keynesplein, 1 1066EP Amsterdam, The Netherlands.',
    },
    {
      path: '/images/pic22.jpg',
      title: 'Bangladesh Office',
      text2:
        'House#-16 (Level-4), Avenue#9, Block#C1,Sector-15,Uttara, Dhaka-1230, Bangladesh.',
    },
    {
      path: '/images/pic25.jpg',
      title: 'Pakistan Office',
      text2:
        'Lyallpur Galleria 2, Near4 Season Housing, Samudari Road, Faisalabad Pakistan',
    },
    {
      path: '/images/pic23.jpg',
      title: 'Netherlands Logistic',
      text2: 'Fokkerweg 300 Gebouw 5 , 1438 AN Oude Meer The Netherland',
    },
    {
      path: '/images/pic26.jpg',
      title: 'UK Office',
      text2:
        'Luton Market, Unit A51, LU1 2TA Luton Hertfordshire. United Kingdom',
    },
    {
      path: '/images/pic24.jpg',
      title: 'Middle East Logistic',
      text2:
        'Jebel Ali ( Opposite Jafza-8) Street 402, Dubai United Arab Emirate, ',
    },
  ];
  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-2 w-full py-12 px-10">
      {content.map((item, index) => {
        return (
          <ImageTextCard
            key={index}
            path={item.path}
            title={item.title}
            cardClassName="md:p-6 p-0"
            titleClassName="lg:text-2xl font-bold text-center text-base"
            imgClassName=""
            text2ClassName="lg:text-xl font-light text-center text-base"
            text2={item.text2}
          />
        );
      })}
    </div>
  );
};

export default AboutImageCards;
