'use client';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="flex flex-col md:flex-row w-full">
      <div
        className="md:order-1 order-2  md:w-[55%] w-full h-[80vh] 3xl:h-[50vh]"
        style={{
          backgroundImage: `url('/images/pic14.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="flex flex-col justify-center md:w-[45%] w-full p-10 gap-8 md:p-14 md:order-2 order-1 ">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
          className="lg:text-h2 text-h3 text-center md:text-left font-bold"
        >
          Who Chooses Us
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1 }}
          className="lg:text-2xl text-base"
        >
          Manufacturers and importers of work and promotional apparel, who seek
          efficient and customized solutions.
          <br /> <br />
          Growing demand for flexibility for seasonal and capsule collections
          <br />
          <strong>
            Increasing need for integrated management to optimize profit
            margins.
          </strong>
        </motion.p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
