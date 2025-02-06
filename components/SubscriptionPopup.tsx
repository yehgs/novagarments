'use client';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import useLanguageStore from '@/store/useLanguageStore';
import { marketPageTranslate } from '@/app/utils/translate';
import { homepageTranslate } from '@/app/utils/translate';
import Link from 'next/link';
import Image from 'next/image';
const SubscriptionPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { translation, detectUserLanguage } = useLanguageStore();

  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="relative w-[700px] lg:w-[800px] h-[450px] lg:h-[450px] shadow-lg">
        <Image
          src="/images/picture2.png"
          alt="Popup Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full z-0"
          priority
        />
        <motion.button
          whileHover={{ scale: 1.2 }}
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-red-600 hover:text-red-500 transition z-20 text-center"
        >
          <X size={30} />
        </motion.button>
        <div className="bg-white w-2/3 md:w-1/2 h-full p-6 flex justify-between flex-col text-sm z-20 absolute ">
          <h2 className="text-left font-bold">
            {homepageTranslate.popUpSection[translation]?.header ||
              homepageTranslate.popUpSection.uk.header}
          </h2>
          <p className="text-left">
            {homepageTranslate.popUpSection[translation]?.text1 ||
              homepageTranslate.popUpSection.uk.text1}
          </p>
          <ul className="text-left">
            <li className="flex justify-start items-start gap-2">
              <span>✓</span>{' '}
              {homepageTranslate.popUpSection[translation]?.list1 ||
                homepageTranslate.popUpSection.uk.list1}
            </li>
            <li className="flex justify-start items-start gap-2">
              <span>✓</span>{' '}
              {homepageTranslate.popUpSection[translation]?.list2 ||
                homepageTranslate.popUpSection.uk.list2}
            </li>
            <li className="flex justify-start items-start gap-2">
              <span>✓</span>{' '}
              {homepageTranslate.popUpSection[translation]?.list3 ||
                homepageTranslate.popUpSection.uk.list3}
            </li>
          </ul>
          <div>
            <p className="text-left">
              {homepageTranslate.popUpSection[translation]?.text2 ||
                homepageTranslate.popUpSection.uk.text2}
            </p>
            <p className="text-left text-blue mt-1">
              {homepageTranslate.popUpSection[translation]?.list3 ||
                homepageTranslate.popUpSection.uk.list3}
            </p>
          </div>
          <div>
            <Link
              href="/contact"
              className="py-3 px-6 font-semibold uppercase bg-black hover:bg-red-500 transition-all duration-300 text-white"
            >
              {marketPageTranslate.contactUsSection[translation]?.buttonText ||
                marketPageTranslate.contactUsSection.uk.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPopup;
