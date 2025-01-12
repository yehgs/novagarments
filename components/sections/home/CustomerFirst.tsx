import React from 'react';
import HeroCard from '../HeroCard';

const CustomerFirst = () => {
  return (
    <div className="h-[100vh] w-full 3xl:h-[50vh]">
      <HeroCard
        backgroundUrl="images/pic5.jpg"
        firstTextClassName="md:text-7xl text-5xl font-bold max-w-1/2 absolute top-32 left-0"
        secondTextClassName="md:text-5xl text-3xl italic font-semibold max-w-md absolute bottom-32 right-0"
        firstText="Customer-first"
        secondText="Your satisfaction is our primary goal."
      />
    </div>
  );
};

export default CustomerFirst;
