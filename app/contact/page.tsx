'use client';
import ContactForm from '@/components/sections/contact/contactForm';
import React from 'react';
import useLanguageStore from '@/store/useLanguageStore';
import { homepageTranslate } from '@/app/utils/translate';
import { useEffect } from 'react';

const Contact = () => {
  const { translation, detectUserLanguage } = useLanguageStore();

  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);
  return (
    <div className="w-[100vw] p-20 bg-[#e8e8e8] ">
      <h2 className="md:text-h1 text-h3 font-bold mb-4 text-center text-black">
        {homepageTranslate.headerSection[translation]?.requestQuote ||
          homepageTranslate.headerSection.uk.requestQuote}
      </h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
