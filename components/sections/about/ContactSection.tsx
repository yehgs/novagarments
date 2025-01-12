'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      ref={ref}
      className="w-full bg-[#e8e8e8] xl:h-[60vh] lg:h-[80vh] 2xl:h-[40vh] flex flex-col justify-center items-center"
    >
      <div className="container flex flex-col justify-center items-center lg:gap-14 gap-8 py-12 px-14 text-center h-full">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="lg:text-h2 text-h3 font-bold"
        >
          We are the ideal partner for your international productions
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl"
        >
          Choose to cooperate with us, you will have at your side a unique
          interlocutor, experienced and reliable, who supports you at every
          stage of the production process and helps you overcome the challenges
          of global markets.
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-2xl font-semibold"
        >
          Produce safely and grow your business.
        </motion.p>
        <motion.span
          variants={textVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-2xl mt-9"
        >
          <Link
            href="/contact"
            className="py-3 px-14 lg:text-h3 font-semibold uppercase bg-black hover:bg-red-500 transition-all duration-300 text-white"
          >
            Contact Us
          </Link>
        </motion.span>
      </div>
    </div>
  );
};

export default ContactSection;
