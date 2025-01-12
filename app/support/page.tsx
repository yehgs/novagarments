import Logistics from '@/components/sections/support/Logistics';
import SupportHero from '@/components/sections/support/SupportHero';
import React from 'react';

const Support = () => {
  return (
    <div className="relative z-0 w-[100vw]">
      <SupportHero />
      <Logistics />
    </div>
  );
};

export default Support;
