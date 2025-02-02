'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProductionCard = ({
  text,
  path,
  url,
  cardColor,
  buttonColor,
  btnTxt,
  buttonTextColor,
  textColor,
}: {
  text: string;
  path: string;
  url: string;
  cardColor: string;
  buttonColor: string;
  buttonTextColor: string;
  textColor: string;
  btnTxt: string;
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'none',
      }}
      className="p-10 h-[60vh] 3xl:h-[25vh]"
    >
      <div
        className="p-8 flex flex-col justify-between lg:w-1/2 md:w-2/3 w-1/2 h-full"
        style={{
          backgroundColor: `${cardColor}`,
        }}
      >
        <h1
          className="lg:text-h3 text-xl leading-none font-semibold"
          style={{ color: `${textColor}` }}
        >
          {text}
        </h1>
        <div className="flex items-center justify-center">
          <motion.span whileHover={{ scale: 0.9 }}>
            <Link
              href={path}
              style={{
                backgroundColor: `${buttonColor}`,
                color: `${buttonTextColor}`,
                transition: 'background-color 0.3s ease',
              }}
              className="py-3 px-14 lg:text-h3 font-semibold uppercase hover:bg-red-500"
            >
              {btnTxt}
            </Link>
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default ProductionCard;
