'use client';
import { motion } from 'framer-motion';
//import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import PromoBrand from './PromoBrand';
import useLanguageStore from '@/store/useLanguageStore';
import { marketPageTranslate } from '@/app/utils/translate';
import { useEffect } from 'react';

const PromotionalWear = () => {
  const { translation, detectUserLanguage } = useLanguageStore();
  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);
  const logos = [
    '/images/brands/promo/1.png',
    '/images/brands/promo/2.png',
    '/images/brands/promo/3.png',
    '/images/brands/promo/4.png',
    '/images/brands/promo/5.png',
  ];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      <section
        ref={ref}
        className="flex flex-col md:flex-row w-full md:order-1 order-2 mb-10"
      >
        <div
          className="md:w-[55%] w-full h-[80vh] md:order-1 order-2 3xl:h-[35vh]"
          style={{
            backgroundImage: `url('/images/pic19.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="flex flex-col justify-center gap-8 lg:w-[45%] md:w-[55%] w-full p-10 md:p-14 md:order-2 order-1 ">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:text-h2 text-h3 md:text-xl text-center md:text-left font-bold"
          >
            {marketPageTranslate.promowearSection[translation]?.header ||
              marketPageTranslate.promowearSection.uk.header}
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:text-2xl text-base text-center md:text-left"
          >
            {marketPageTranslate.promowearSection[translation]?.text ||
              marketPageTranslate.promowearSection.uk.text}
          </motion.p>
          {/* <motion.span
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-2xl mt-6 flex justify-center items-center md:justify-start"
          >
            <Link
              href="/contact"
              className="py-3 px-14 lg:text-h3 font-semibold uppercase bg-black hover:bg-red-500 transition-all duration-300 text-white"
            >
              Contact Us
            </Link>
          </motion.span> */}
        </div>
      </section>
      <PromoBrand />
    </div>
  );
};

export default PromotionalWear;
