'use client';
import Marquee from 'react-fast-marquee';

const MarqueeCard = ({
  className,
  text,
  images,
}: {
  className?: string;
  text?: string;
  images: string[];
}) => {
  return (
    <div className="flex flex-col gap-4 items-center md:flex-row">
      {text && (
        <h1 className="lg:text-h2 text-h3 font-bold mb-2 md:mb-0">{text}</h1>
      )}
      <Marquee gradient={true} speed={50}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-[100px] w-[200px] bg-cover bg-center ${
              className || ''
            } mr-4`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeCard;
