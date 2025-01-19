'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import UnderWearBrands from './UnderWearBrands';

const UnderWear = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      <section
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 w-full mb-10"
      >
        <div className="md:col-span-2 relative flex flex-col gap-6">
          <div className="flex">
            <div className="flex justify-start items-center w-[50%]">
              <h1 className="text-right lg:text-h2 text-2xl font-bold mt-14 leading-3 px-11">
                Underwear <br />
                <span className="text-xl">men</span>
              </h1>
            </div>
            <div
              className="w-[50%] h-[40vh] md:order-1 order-2 3xl:h-[35vh]"
              style={{
                backgroundImage: `url('/images/pic28.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <h2 className="absolute md:text-xl text-xs font-semibold top-[45%] left-[5%]">
            High-quality, tailored to <br /> your needs.
          </h2>
          <div className="flex">
            <div className="flex justify-start items-center  w-[50%]">
              <h1 className="text-2xl text-right lg:text-h2 font-bold mt-14 leading-3 px-11">
                Beachwear
                <br />
                <span className="text-xl">men</span>
              </h1>
            </div>
            <div
              className="w-[50%] h-[40vh] md:order-1 order-2 3xl:h-[35vh]"
              style={{
                backgroundImage: `url('/images/pic29.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center w-full">
          <div className="flex flex-col justify-center gap-8 w-full p-10 lg:p-14">
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: 1 }}
              className="lg:text-2xl text-xs text-center md:text-left"
            >
              We are a company specializing in the production of high-quality
              underwear and Beachwear, designed to meet the specific needs of
              our clients. Each piece is the result of a meticulous and
              collaborative process, where the customer takes center stage: we
              listen to your requests and transform them into unique products
              that combine comfort, style, and excellence.
            </motion.p>
            <motion.span
              variants={textVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-2xl mt-6 flex justify-center items-center md:justify-start"
            >
              <Link
                href="/contact"
                className="py-3 px-14 lg:text-h3 font-semibold uppercase bg-black hover:bg-red-500 transition-all duration-300 text-white"
              >
                Contact Us
              </Link>
            </motion.span>
          </div>
        </div>
      </section>
      <UnderWearBrands />
    </div>
  );
};

export default UnderWear;
