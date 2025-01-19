import ProductionCard from '@/components/ProductionCard';
import React from 'react';

const Production = () => {
  return (
    <>
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
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1">
          <ProductionCard
            text="Beachwear Production"
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
            text="Underwear Production"
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
          IN OUR WORLD
        </h1>
        <p className="text-xl text-center">
          every connection is an opportunity
        </p>
      </div>
    </>
  );
};

export default Production;
