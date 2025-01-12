'use client';

import { motion } from 'framer-motion';

const HeroCard = ({
  backgroundUrl,
  firstText,
  secondText,
  firstTextClassName,
  secondTextClassName,
}: {
  backgroundUrl: string;
  secondTextClassName?: string;
  firstTextClassName?: string;
  secondText?: string;
  firstText?: string;
}) => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="relative flex items-center justify-center h-[100vh] w-[100vw] z-10 3xl:h-[50vh]"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Transparent Layer */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="flex items-center justify-center h-full w-full container">
        <div className="flex justify-between relative text-white drop-shadow-lg w-full h-full">
          <motion.p
            className={firstTextClassName}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 1 }}
          >
            {firstText}
          </motion.p>
          <motion.p
            className={secondTextClassName}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {secondText}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
