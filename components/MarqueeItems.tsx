'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MarqueeItemProps {
  images: string[];
  from: string | number;
  to: string | number;
}

const MarqueeItems: React.FC<MarqueeItemProps> = ({ images, from, to }) => {
  return (
    <div className="flex brand-gradient inset-0">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <Image
            src={image}
            alt={`Marquee Image ${index}`}
            width={300}
            height={150}
            className="pr-20"
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
        {images.map((image, index) => (
          <Image
            src={image}
            alt={`Marquee Image ${index}`}
            width={224}
            height={160}
            className="pr-20"
            key={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItems;
