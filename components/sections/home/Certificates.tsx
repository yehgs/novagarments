import MarqueeCard from '@/components/MarqueeCard';

const Certificates = () => {
  const images = [
    '/images/certificates/accord.png',
    '/images/certificates/bci.png',
    '/images/certificates/better.png',
    '/images/certificates/global.png',
    '/images/certificates/oeko.png',
    '/images/certificates/rsg.png',
    '/images/certificates/sedex.png',
    '/images/certificates/textile.png',
    '/images/certificates/bsci.png',
  ];
  return (
    <div className="flex justify-center items-center gap-7 w-full container">
      <div className="inset-0 overflow-hidden">
        <MarqueeCard images={images} text="Certificates" />
      </div>
    </div>
  );
};

export default Certificates;
