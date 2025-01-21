import MarqueeCard from '@/components/MarqueeCard';

const WorkWearBrand = () => {
  const logos = [
    '/images/brands/workwear/1.png',
    '/images/brands/workwear/2.png',
    '/images/brands/workwear/3.png',
    '/images/brands/workwear/4.png',
    '/images/brands/workwear/5.png',
  ];
  return (
    <div className="flex justify-center items-center gap-7 w-full container">
      <div className="inset-0 overflow-hidden">
        <MarqueeCard images={logos} text="Brands" />
      </div>
    </div>
  );
};

export default WorkWearBrand;
