import ProductionCard from '@/components/ProductionCard';
import React from 'react';

const Production = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex-1">
        <ProductionCard
          text="Sportwear Production"
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
          text="Promotional Wear Production"
          path="/market"
          url="/images/pics2.jpg"
          cardColor="white"
          buttonColor="#004F88"
          buttonTextColor="white"
          textColor="black"
        />
      </div>
    </div>
  );
};

export default Production;
