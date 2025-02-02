'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useLanguageStore from '@/store/useLanguageStore';
import { supportPageTranslate } from '@/app/utils/translate';
import { useEffect } from 'react';

const Logistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { translation, detectUserLanguage } = useLanguageStore();
  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="relative w-full  overflow-hidden" ref={ref}>
      <div className="relative">
        <div className="bg-[#e8e8e8] md:w-2/3 w-full md:h-[80vh] 3xl:h-[50vh] flex items-center py-7">
          <div className="flex  flex-col gap-6 3xl:max-w-4xl xl:max-w-2xl md:max-w-md lg:max-w-xl px-[3rem] lg:text-xl text-base 3xl:ml-36">
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="lg:text-h2 text-h3 font-semibold leading-none"
            >
              {supportPageTranslate.logisticsSection[translation]?.title ||
                supportPageTranslate.logisticsSection.uk.title}
            </motion.h1>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col gap-4"
            >
              <p>
                <strong>
                  {supportPageTranslate.logisticsSection[translation]
                    ?.header1 ||
                    supportPageTranslate.logisticsSection.uk.header1}
                </strong>
                {supportPageTranslate.logisticsSection[translation]
                  ?.subheader1 ||
                  supportPageTranslate.logisticsSection.uk.subheader1}
              </p>
              <p>
                <strong>
                  {supportPageTranslate.logisticsSection[translation]
                    ?.header2 ||
                    supportPageTranslate.logisticsSection.uk.header2}
                </strong>
                {supportPageTranslate.logisticsSection[translation]
                  ?.subheader2 ||
                  supportPageTranslate.logisticsSection.uk.subheader2}
              </p>
              <p>
                <strong>
                  {supportPageTranslate.logisticsSection[translation]
                    ?.header3 ||
                    supportPageTranslate.logisticsSection.uk.header3}{' '}
                </strong>
                {supportPageTranslate.logisticsSection[translation]
                  ?.subheader3 ||
                  supportPageTranslate.logisticsSection.uk.subheader3}
              </p>
              <p>
                <strong>
                  {supportPageTranslate.logisticsSection[translation]
                    ?.header4 ||
                    supportPageTranslate.logisticsSection.uk.header4}
                </strong>
                {supportPageTranslate.logisticsSection[translation]
                  ?.subheader4 ||
                  supportPageTranslate.logisticsSection.uk.subheader4}
              </p>
            </motion.div>
          </div>
        </div>
        <div
          className="absolute top-14 right-0 md:-right-16 h-[60vh] w-[50vw] 3xl:h-[40vh] hidden md:block"
          style={{
            backgroundImage: `url('/images/pic20.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Logistics;
