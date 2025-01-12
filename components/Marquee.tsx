'use client';
import MarqueeItems from './MarqueeItems';

const Marquee: React.FC = () => {
  const upperMarquee: string[] = [
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
    <div className="mx-auto">
      <MarqueeItems images={upperMarquee} from={0} to={'-100%'} />
    </div>
  );
};

export default Marquee;
