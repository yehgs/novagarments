'use client';
import { motion } from 'framer-motion';

const AboutHero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="w-full flex flex-col md:flex-row container">
      <div
        className="md:w-1/2 w-full h-[90vh] hidden md:block md:order-1 order-2 2xl:h-[30vh] xl:h-[50vh]"
        style={{
          backgroundImage: `url('/images/pic27.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="flex flex-col items-center justify-center gap-3 md:w-1/2 w-full md:order-2 order-1 p-10 h-full md:mt-0">
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
          className="xl:text-2xl text-base "
        >
          <span className="xl:text-2xl text-base  font-semibold">
            Nova Garments Group
          </span>
          , based in Amsterdam, is your trusted partner for international
          production management. Strategically located near the port of
          Rotterdam and Schiphol International Airport, we offer innovative
          solutions for companies that want to expand globally without
          complications.
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1 }}
          className="xl:text-2xl text-base "
        >
          With an established network of strategic partners in{' '}
          <strong>Bangladesh and Pakistan</strong>, we simplify every aspect of
          the production process-from financial management to logistics to
          customs clearance. Thanks to our local agents and our widespread
          presence throughout Europe, we guarantee constant, personalized and
          reliable support.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutHero;
