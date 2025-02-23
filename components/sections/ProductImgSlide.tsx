'use client';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

interface ProductImgSlideProps {
  images: string[];
  type1: string;
  type2: string;
  title: string;
}

const ProductImgSlide: React.FC<ProductImgSlideProps> = ({
  images,
  type1,
  type2,
  title,
}) => {
  return (
    <div className="border-b-2 border-gray-500 py-5">
      <div className="relative">
        {' '}
        <div className="flex items-center justify-center mx-20">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            navigation={{
              nextEl: `.${type1}`,
              prevEl: `.${type2}`,
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center text-center justify-evenly"
              >
                <Image
                  src={image}
                  alt={`product-image-${index}`}
                  className="object-cover rounded-md"
                  height={400}
                  width={250}
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h2 className="text-h3 font-bold text-center py-">{title}</h2>
        <div className="absolute top-1/2 transform -translate-y-1/2  flex justify-between w-full">
          <button className={`${type1} cursor-pointer`}>
            <FaArrowLeft className="size-6" />
          </button>
          <button className={`${type2} cursor-pointer`}>
            <FaArrowRight
              className="
            size-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductImgSlide;
