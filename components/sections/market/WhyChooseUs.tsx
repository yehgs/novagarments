'use client';
import { motion } from 'framer-motion';
import useLanguageStore from '@/store/useLanguageStore';
import { marketPageTranslate } from '@/app/utils/translate';
import { useEffect } from 'react';

const WhyChooseUs = () => {
  const { translation, detectUserLanguage } = useLanguageStore();

  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);

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
          {marketPageTranslate.whyChooseUsSection[translation]?.header ||
            marketPageTranslate.whyChooseUsSection.uk.header}
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1 }}
          className="lg:text-2xl text-base"
        >
          {marketPageTranslate.whyChooseUsSection[translation]?.text ||
            marketPageTranslate.whyChooseUsSection.uk.text}
          <br /> <br />
          {marketPageTranslate.whyChooseUsSection[translation]?.text2 ||
            marketPageTranslate.whyChooseUsSection.uk.text2}
          <br />
          <strong>
            {marketPageTranslate.whyChooseUsSection[translation]?.boldTxt ||
              marketPageTranslate.whyChooseUsSection.uk.boldTxt}
          </strong>
        </motion.p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
