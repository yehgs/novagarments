import MarqueeCard from '@/components/MarqueeCard';

const SportswearBrands = () => {
  const logos = [
    '/images/brands/sports/1.png',
    '/images/brands/sports/2.png',
    '/images/brands/sports/3.png',
    '/images/brands/sports/4.png',
    '/images/brands/sports/5.png',
  ];
  return (
    <div className="flex justify-center items-center gap-7 w-full container">
      <div className="inset-0 overflow-hidden">
        <MarqueeCard images={logos} text="Brands" />
      </div>
    </div>
  );
};

export default SportswearBrands;
