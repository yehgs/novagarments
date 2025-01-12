'use client';
import React, { useRef } from 'react';
import { useScroll, MotionValue, useTransform, motion } from 'framer-motion';

interface ParagraphProps {
  className?: string;
  value: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ className, value }) => {
  const element = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = value.split(' ');
  return (
    <div className={className} ref={element}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={index} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </div>
  );
};

interface WordProps {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.span className="word" style={{ opacity }}>
      {children}
    </motion.span>
  );
};

export default Paragraph;
