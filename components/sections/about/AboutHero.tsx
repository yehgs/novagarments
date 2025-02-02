'use client';
import { motion } from 'framer-motion';
import useLanguageStore from '@/store/useLanguageStore';
import { aboutPageTranslate } from '@/app/utils/translate';
import { useEffect } from 'react';

const AboutHero = () => {
  const { translation, detectUserLanguage } = useLanguageStore();
  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="w-full flex flex-col md:flex-row container">
      <div
        className="md:w-1/2 w-full h-[90vh] hidden md:block md:order-1 order-2 lg:h-[50vh] xl:h-[55vh] 3xl:h-[30vh]"
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
            {aboutPageTranslate.aboutHeroSection[translation]?.boldtxt1 ||
              aboutPageTranslate.aboutHeroSection.uk.boldtxt1}
          </span>
          {aboutPageTranslate.aboutHeroSection[translation]?.text1 ||
            aboutPageTranslate.aboutHeroSection.uk.text1}
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1 }}
          className="xl:text-2xl text-base "
        >
          {aboutPageTranslate.aboutHeroSection[translation]?.text2 ||
            aboutPageTranslate.aboutHeroSection.uk.text2}{' '}
          <strong>
            {' '}
            {aboutPageTranslate.aboutHeroSection[translation]?.boldtxt2 ||
              aboutPageTranslate.aboutHeroSection.uk.boldtxt2}
          </strong>
          {aboutPageTranslate.aboutHeroSection[translation]?.text3 ||
            aboutPageTranslate.aboutHeroSection.uk.text3}
        </motion.p>
      </div>
    </div>
  );
};

export default AboutHero;
