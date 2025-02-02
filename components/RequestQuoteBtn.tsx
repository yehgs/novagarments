'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Children, ReactNode } from 'react';

const RequestQuoteBtn = ({ children }: { children: ReactNode }) => {
  return (
    <motion.button
      className=" px-6 py-4  relative radial-gradient border border-spacing-1"
      initial={{ '--x': '100%', scale: 1 }}
      animate={{ '--x': '-100%' }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1,
        type: 'spring',
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: 'spring',
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
    >
      <Link href="/contact">
        <span className="uppercase text-neutral-100 tracking-wide h-full w-full block relative linear-mask font-semibold">
          {children}
        </span>
        <span className="block absolute inset-0 p-px linear-overlay" />
      </Link>
    </motion.button>
  );
};

export default RequestQuoteBtn;
