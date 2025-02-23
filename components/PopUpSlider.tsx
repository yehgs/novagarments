'use client';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import useLanguageStore from '@/store/useLanguageStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { homepageTranslate } from '@/app/utils/translate';
import Image from 'next/image';

const PopUpSlider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { translation, detectUserLanguage } = useLanguageStore();

  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000);
  }, []);

  if (!isVisible) return null;

  const slide1 =
    homepageTranslate.popUpSection2[translation].path1 ||
    homepageTranslate.popUpSection2.uk.path1;
  const slide2 =
    homepageTranslate.popUpSection2[translation].path2 ||
    homepageTranslate.popUpSection2.uk.path2;
  const slide3 =
    homepageTranslate.popUpSection2[translation].path3 ||
    homepageTranslate.popUpSection2.uk.path3;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="relative w-full max-w-4xl">
        <motion.button
          whileHover={{ scale: 1.2 }}
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 z-10 text-red-600 hover:text-red-500 transition"
        >
          <X size={30} />
        </motion.button>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-[90vh] 3xl:h-[60vh]"
        >
          <SwiperSlide className="flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={slide1}
                fill
                className="object-contain"
                alt="Slide 1"
                priority
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={slide2}
                fill
                className="object-contain"
                alt="Slide 2"
                priority
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={slide3}
                fill
                className="object-contain"
                alt="Slide 3"
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PopUpSlider;
