import ImageTextCard from '@/components/ImageTextCard';
import React from 'react';

const HomeImageCard = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/2">
          <ImageTextCard
            path="/images/slide1.jpg"
            cardBgColor="#e8e8e8"
            imgClassName=""
            title="Established experience"
            text="Nova Garments Group, based in Amsterdam, is your trusted partner for international production garment management  with more than 20 years of expertise in Asia Market."
            titleClassName="lg:text-h3 md:text-xl font-bold"
            textClassName="lg:text-base md:text-sm"
            cardClassName="lg:py-28 md:py-16 md:px-20 lg:px-36"
          />
        </div>
        <div className="md:w-1/2">
          <ImageTextCard
            path="/images/pic10.jpg"
            cardBgColor=""
            imgClassName=""
            title="Integrated management"
            text="From sampling to delivery, we monitor every step to ensure quality and on-time delivery."
            titleClassName="lg:text-h3 md:text-xl font-bold"
            textClassName="lg:text-base md:text-sm"
            cardClassName="lg:py-28 md:py-16 md:px-20 lg:px-36"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/2">
          <ImageTextCard
            path="/images/image1.jpg"
            cardBgColor=""
            imgClassName=""
            title="Exclusive supplier Network"
            text="We work only with certified manufacturers, ensuring high standards"
            titleClassName="lg:text-h3 md:text-xl font-bold"
            textClassName="lg:text-base md:text-sm"
            cardClassName="lg:py-28 md:py-16 md:px-20 lg:px-36"
          />
        </div>
        <div className="md:w-1/2">
          <ImageTextCard
            path="/images/pic3.jpg"
            cardBgColor="#e8e8e8"
            imgClassName=""
            title="Direct responsibility"
            text="We are not intermediaries. We are your single point of contact, ready to solve any problem with quick and reliable solutions."
            titleClassName="lg:text-h3 md:text-xl font-bold"
            textClassName="lg:text-base md:text-sm"
            cardClassName="lg:py-28 md:py-16 md:px-20 lg:px-36"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeImageCard;
