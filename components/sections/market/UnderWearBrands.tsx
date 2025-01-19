import MarqueeCard from '@/components/MarqueeCard';

const UnderwearBrands = () => {
  const logos = [
    '/images/brands/aprium.png',
    '/images/brands/cavalli.png',
    '/images/brands/avx.png',
    '/images/brands/grand.png',
    '/images/brands/replay.png',
    '/images/brands/karl.png',
    '/images/brands/iceberg.png',
    '/images/brands/cerruti.png',
    '/images/brands/guadi.png',
    '/images/brands/bikkemergs.png',
  ];
  return (
    <div className="flex justify-center items-center gap-7 w-full container">
      <div className="inset-0 overflow-hidden">
        <MarqueeCard images={logos} text="Brands" />
      </div>
    </div>
  );
};

export default UnderwearBrands;
