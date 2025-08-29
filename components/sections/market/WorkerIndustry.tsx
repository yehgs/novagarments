'use client';
import { motion } from 'framer-motion';
//import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import FashionBrand from './FashionBrand';
import WorkWearBrand from './WorkWearBrand';
import useLanguageStore from '@/store/useLanguageStore';
import { marketPageTranslate } from '@/app/utils/translate';
import { useEffect } from 'react';

const WorkerIndustry = () => {
  const { translation, detectUserLanguage } = useLanguageStore();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);
  return (
    <div>
      <section ref={ref} className="flex flex-col md:flex-row w-full mb-10">
        <div className="flex flex-col justify-center gap-8 lg:w-[45%] md:w-[55%]  w-full p-10 md:p-14">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:text-h2 text-h3 md:text-xl text-center md:text-left font-bold"
          >
            {marketPageTranslate.workerSection[translation]?.header ||
              marketPageTranslate.workerSection.uk.header}
          </motion.h1>
          <motion.ul
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:text-2xl text-base text-center md:text-left"
          >
            <li>
              {marketPageTranslate.workerSection[translation]?.list1 ||
                marketPageTranslate.workerSection.uk.list1}
            </li>
            <li>
              <span className="bg-black size-1 rounded-full"></span>{' '}
              {marketPageTranslate.workerSection[translation]?.list2 ||
                marketPageTranslate.workerSection.uk.list2}
            </li>
            <li>
              {marketPageTranslate.workerSection[translation]?.list3 ||
                marketPageTranslate.workerSection.uk.list3}
            </li>
            <li>
              {marketPageTranslate.workerSection[translation]?.list4 ||
                marketPageTranslate.workerSection.uk.list4}
            </li>
          </motion.ul>
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
        <div className="grid grid-cols-2 grid-rows-2 bg-primary p-6 w-full md:w-[55%] gap-3">
          <div
            className="col-span-1 h-[200px] md:h-full "
            style={{
              backgroundImage: `url('/images/pic15.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div
            className="col-span-1 h-[200px] md:h-full"
            style={{
              backgroundImage: `url('/images/pic16.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div
            className="col-span-1 h-[200px] md:h-full"
            style={{
              backgroundImage: `url('/images/pic17.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div
            className="col-span-1 h-[200px] md:h-full"
            style={{
              backgroundImage: `url('/images/pic18.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </section>
      {/* <WorkWearBrand /> */}
    </div>
  );
};

export default WorkerIndustry;
