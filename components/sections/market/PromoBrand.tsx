import MarqueeCard from '@/components/MarqueeCard';

const PromoBrand = () => {
  const logos = [
    '/images/brands/promo/1.png',
    '/images/brands/promo/2.png',
    '/images/brands/promo/3.png',
    '/images/brands/promo/4.png',
    '/images/brands/promo/5.png',
    '/images/brands/promo/6.png',
    '/images/brands/promo/7.png',
    '/images/brands/promo/8.png',
  ];
  return (
    <div className="flex justify-center items-center gap-7 w-full container">
      <div className="inset-0 overflow-hidden">
        <MarqueeCard images={logos} text="Brands" />
      </div>
    </div>
  );
};

export default PromoBrand;
