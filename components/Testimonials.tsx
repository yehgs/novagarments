'use client';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import useLanguageStore from '@/store/useLanguageStore';
import { homepageTranslate } from '@/app/utils/translate';
import { useEffect } from 'react';

const testimonials = [
  {
    name: 'From Davide (Purchase Manager of FIS srls )',
    time: '( 12 Dec 2024 )',
    boldText: '"Operational and Dynamic"',
    text: 'Thanks to their support, I was able to import materials from Pakistan with great ease. A truly operational team and excellent support at every stage.',
  },
  //   {
  //     name: 'From John (MD of ……. )',
  //     time: '( 19 Nov 2024 )',
  //     boldText: '"Overcoming Customs Challenges"',
  //     text: 'I finally found a company that guided me from start to finish, taking care of every detail. I would recommend them without hesitation.',
  //   },
  //   {
  //     name: 'From Donna (Admin of ……. )',
  //     time: '( 06 Oct 2024 )',
  //     boldText: '"Overcoming Customs Challenges"',
  //     text: 'Initially, I was concerned about the potential complexities related to European customs procedures. However, thanks to their expert handling, the entire process was completely simplified, and the product was delivered directly to our warehouses without any effort.',
  //   },
  {
    name: 'From Esther (Director of FEMY ltd)',
    time: '( 02 Oct 2024 )',
    boldText: '"A Fresh Look at Bangladesh"',
    text: 'After disappointing experiences, I never thought I would go back to importing from Bangladesh. This team helped me rediscover the added value of this country, demonstrating great professionalism. Well done!',
  },
  {
    name: 'From Franco (CEO of B-Holster)',
    time: '( 29 Sep 2024 )',
    boldText: '"Flawless Inspection in the Netherlands"',
    text: 'I had the opportunity to inspect my product at their warehouse in the Netherlands. The experience was so well-organized that it felt like working in my usual environment, even though the material was still in a foreign state. Congratulation for the attention to detail and professionalism!',
  },
];

export const TestimonialsSection = () => {
  const { translation, detectUserLanguage } = useLanguageStore();

  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);

  return (
    <div className=" text-white bg-black border-b border-gray-400/30">
      <div className="margins py-24 container">
        <div className="grid lg:grid-cols-7 grid-cols-1 gap-4">
          <div className="lg:col-span-2 flex items-center justify-center lg:justify-start">
            <h1 className="lg:text-h2 text-h3 font-bold mb-2 md:mb-0">
              {homepageTranslate.testimonialSection[translation]?.header ||
                homepageTranslate.testimonialSection.uk.header}
            </h1>
          </div>
          <div className="lg:col-span-5 ">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 2, spaceBetween: 30 },
              }}
              navigation={{
                nextEl: '.next1',
                prevEl: '.prev1',
              }}
            >
              {testimonials.map((testimonial, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="flex flex-col items-center text-center bg-primary h-[300px] rounded-md"
                  >
                    <div className="flex flex-col justify-between p-5 rounded-md font-bold h-[150px] gap-1">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <h4 className=" uppercase text-sm text-left">
                            {testimonial.name}
                          </h4>
                        </div>
                        <span className="font-light text-xs w-[25%]">
                          {testimonial.time}
                        </span>
                      </div>
                      <p>{testimonial.boldText}</p>
                      <p className="text-xs text-left font-light">
                        {testimonial.text}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex justify-center items-end md:gap-6 gap-28 mt-8">
              <button className="next1 cursor-pointer">
                <FaArrowLeft className="size-17" />
              </button>
              <button className="prev1 cursor-pointer">
                <FaArrowRight className="size-17" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
