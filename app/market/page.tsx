import ContactSection from '@/components/sections/about/ContactSection';
import FashionProduction from '@/components/sections/market/FashionProduction';
import PromotionalWear from '@/components/sections/market/PromotionalWear';
import SportWear from '@/components/sections/market/SportWear';
import UnderWear from '@/components/sections/market/UnderWear';
import WhyChooseUs from '@/components/sections/market/WhyChooseUs';
import WorkerIndustry from '@/components/sections/market/WorkerIndustry';
import React from 'react';

const Market = () => {
  return (
    <div className="relative z-0 w-[100vw] flex flex-col gap-28">
      <WhyChooseUs />
      <FashionProduction />
      <UnderWear />
      <WorkerIndustry />
      <PromotionalWear />
      <SportWear />
      <ContactSection />
    </div>
  );
};

export default Market;
