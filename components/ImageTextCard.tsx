'use client';
import { twMerge } from 'tailwind-merge';
import Paragraph from './Paragragh';

const ImageTextCard = ({
  cardClassName,
  path,
  cardBgColor,
  imgClassName,
  title,
  text,
  text2,
  titleClassName,
  textClassName,
  text2ClassName,
}: {
  cardClassName?: string;
  path: string;
  cardBgColor?: string;
  text?: string;
  text2?: string;
  imgClassName?: string;
  titleClassName?: string;
  textClassName?: string;
  text2ClassName?: string;
  title: string;
}) => {
  return (
    <div
      className={`flex flex-col  gap-4 md:gap-8 ${cardClassName}`}
      style={{ backgroundColor: `${cardBgColor}` }}
    >
      <img src={path} alt="section image" className={imgClassName} />
      <h1 className={titleClassName}>{title}</h1>
      {text && (
        <Paragraph
          className={twMerge(`text-p ${textClassName}`)}
          value={text}
        />
      )}
      <p className={text2ClassName}>{text2}</p>
    </div>
  );
};

export default ImageTextCard;
