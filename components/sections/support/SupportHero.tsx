'use client';
import HeroCard from '../HeroCard';

const SupportHero = () => {
  return (
    <div className="w-full relative">
      <HeroCard
        backgroundUrl="images/pic9.jpg"
        firstTextClassName="md:text-5xl lg:text-6xl text-4xl italic font-bold max-w-md py-20 text-center md:text-left"
        secondTextClassName=""
        firstText="Integrated Logistics and dedicated Deliveries"
        secondText=""
      />
    </div>
  );
};

export default SupportHero;
