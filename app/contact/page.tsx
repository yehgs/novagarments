'use client';
import ContactForm from '@/components/sections/contact/contactForm';
import React from 'react';

const Contact = () => {
  return (
    <div className="w-[100vw] p-20 bg-primary ">
      <h2 className="md:text-h1 text-h3 font-bold mb-4 text-center text-white">
        Request Quote
      </h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
