'use client';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Stairs from './Stairs';

const StairEffect = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-[100vh] w-[100vw] fixed top-0 right-0 left-0 pointer-events-none z-50 flex">
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairEffect;
