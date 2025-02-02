'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useLanguageStore from '@/store/useLanguageStore';
import { homepageTranslate } from '@/app/utils/translate';

const FullScreenSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { translation, detectUserLanguage } = useLanguageStore();

  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      loop={true}
      className="mySwiper w-full h-[90vh] 3xl:h-[45vh]"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="relative flex items-center justify-center h-full w-full -z-10"
          style={{
            backgroundImage: `url('/images/slide1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Transparent Layer */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="flex justify-between relative text-white drop-shadow-lg w-full container">
            <motion.p
              className="md:text-6xl text-5xl font-bold max-w-md"
              variants={textVariants}
              initial="hidden"
              animate={activeIndex === 0 ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {homepageTranslate.sliderSection[translation]?.slider1MainTxt ||
                homepageTranslate.sliderSection.uk.slider1MainTxt}
            </motion.p>
            <motion.p
              className="md:text-4xl text-3xl italic font-semibold max-w-sm"
              variants={textVariants}
              initial="hidden"
              animate={activeIndex === 0 ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {homepageTranslate.sliderSection[translation]
                ?.slider1SubMainTxt ||
                homepageTranslate.sliderSection.uk.slider1SubMainTxt}
            </motion.p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className="relative flex items-center justify-center h-full w-full"
          style={{
            backgroundImage: `url('/images/slide2.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Transparent Layer */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="flex flex-col justify-start relative text-white drop-shadow-lg w-full container gap-5">
            <motion.p
              className="md:text-6xl text-5xl font-bold max-w-lg"
              variants={textVariants}
              initial="hidden"
              animate={activeIndex === 1 ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {homepageTranslate.sliderSection[translation]?.slider2MainTxt ||
                homepageTranslate.sliderSection.uk.slider2MainTxt}
            </motion.p>
            <motion.p
              className="md:text-4xl text-3xl italic font-semibold max-w-sm"
              variants={textVariants}
              initial="hidden"
              animate={activeIndex === 1 ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {homepageTranslate.sliderSection[translation]
                ?.slider1SubMainTxt ||
                homepageTranslate.sliderSection.uk.slider1SubMainTxt}
            </motion.p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div
          className="relative flex items-center justify-center h-full w-full"
          style={{
            backgroundImage: `url('/images/slide3.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Transparent Layer */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="flex flex-col items-end relative text-white drop-shadow-lg w-full container gap-5">
            <motion.p
              className="md:text-6xl text-5xl font-bold max-w-sm md:max-w-lg"
              variants={textVariants}
              initial="hidden"
              animate={activeIndex === 2 ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {homepageTranslate.sliderSection[translation]?.slider3MainTxt ||
                homepageTranslate.sliderSection.uk.slider3MainTxt}
            </motion.p>
            <motion.p
              className="md:text-4xl text-3xl italic font-semibold max-w-sm md:max-w-lg"
              variants={textVariants}
              initial="hidden"
              animate={activeIndex === 2 ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {homepageTranslate.sliderSection[translation]
                ?.slider1SubMainTxt ||
                homepageTranslate.sliderSection.uk.slider1SubMainTxt}
            </motion.p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default FullScreenSlider;
