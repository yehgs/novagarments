'use client';
import { motion } from 'framer-motion';
//import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import FashionBrand from './FashionBrand';
import { useEffect } from 'react';
import useLanguageStore from '@/store/useLanguageStore';
import { marketPageTranslate } from '@/app/utils/translate';

const UnderWear = () => {
  const { translation, detectUserLanguage } = useLanguageStore();

  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);
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
        className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-7 w-full mb-10 xl:container"
      >
        <div className="xl:col-span-2 md:col-span-4 relative flex flex-col gap-6">
          <div className="flex">
            <div className="flex justify-start items-center w-[50%]">
              <h1 className="text-right lg:text-4xl text-2xl font-bold mt-14 leading-3 px-11">
                Underwear <br />
                <span className="text-xl">men</span>
              </h1>
            </div>
            <div
              className="w-[50%] h-[40vh] md:order-1 order-2 3xl:h-[35vh]"
              style={{
                backgroundImage: `url('/images/pic28.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <h2 className="absolute md:text-lg text-xs font-semibold top-[45%] left-[5%]">
            {marketPageTranslate.underwearSection[translation]?.text1 ||
              marketPageTranslate.underwearSection.uk.text1}
            <br />
            {marketPageTranslate.underwearSection[translation]?.text2 ||
              marketPageTranslate.underwearSection.uk.text2}
          </h2>
          <div className="flex">
            <div className="flex justify-start items-center  w-[50%]">
              <h1 className="text-2xl text-right xl:text-h2 lg:text-4xl font-bold mt-14 leading-3 px-11">
                Beachwear
                <br />
                <span className="text-xl">men</span>
              </h1>
            </div>
            <div
              className="w-[50%] h-[40vh] md:order-1 order-2 3xl:h-[35vh]"
              style={{
                backgroundImage: `url('/images/pic29.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
        <div className="xl:col-span-1  md:col-span-3 flex flex-col justify-center w-full">
          <div className="flex flex-col justify-center gap-8 w-full p-10 lg:p-14">
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: 1 }}
              className="lg:text-2xl text-xs text-center md:text-left"
            >
              {marketPageTranslate.underwearSection[translation]?.text ||
                marketPageTranslate.underwearSection.uk.text}
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
        </div>
      </section>
      <FashionBrand />
    </div>
  );
};

export default UnderWear;
