import AboutHero from '@/components/sections/about/AboutHero';
import AboutImageCards from '@/components/sections/about/AboutImageCards';
import ContactSection from '@/components/sections/about/ContactSection';
import React from 'react';

const About = () => {
  return (
    <div className="w-[100vw]">
      {/* <AboutHero />
      <AboutImageCards /> */}
      <ContactSection />
    </div>
  );
};

export default About;
