'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import useLanguageStore from '@/store/useLanguageStore';
import { marketPageTranslate } from '@/app/utils/translate';
import { useEffect } from 'react';

const ContactSection = () => {
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
    <div
      ref={ref}
      className="relative w-full bg-[#e8e8e8] flex flex-col justify-center items-center"
    >
      <div className="container flex flex-col justify-center items-center lg:gap-14 gap-4 py-16 px-14 text-center">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="lg:text-h2 text-h3 font-bold"
        >
          {marketPageTranslate.contactUsSection[translation]?.title ||
            marketPageTranslate.contactUsSection.uk.title}
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl"
        >
          {marketPageTranslate.contactUsSection[translation]?.text ||
            marketPageTranslate.contactUsSection.uk.text}
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-2xl font-semibold"
        >
          {marketPageTranslate.contactUsSection[translation]?.boldText ||
            marketPageTranslate.contactUsSection.uk.boldText}
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
            {marketPageTranslate.contactUsSection[translation]?.buttonText ||
              marketPageTranslate.contactUsSection.uk.buttonText}
          </Link>
        </motion.span>
      </div>
    </div>
  );
};

export default ContactSection;
