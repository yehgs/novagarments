'use client';
import { motion } from 'framer-motion';

interface MarqueeItemProps {
  images: string[];
  from: string | number;
  to: string | number;
}

const MarqueeItems: React.FC<MarqueeItemProps> = ({ images, from, to }) => {
  return (
    <div className="flex brand-gradient  inset-0">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img
            className="h-[150px] w-[300px] pr-20"
            src={image}
            alt={`Marquee Image ${index}`}
            key={index}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return <img className="h-40 w-56 pr-20" src={image} key={index} />;
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItems;
