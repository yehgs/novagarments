import ImageTextCard from '@/components/ImageTextCard';

const ServiceSection = () => {
  const content = [
    {
      path: '/images/slide2.jpg',
      cardBgColor: '#e8e8e8',
      imgClassName: '',
      title: 'COLLECTION AND PRODUCTION',
      text: 'You will be able to create customized collections and request tailor-made productions, staying connected to the processes at every stage. Thanks to our integrated platform, you will have full control and visibility over every detail, from design to production.',
      titleClassName: 'text-[1.5rem] font-bold',
      textClassName: 'text-base',
      cardClassName: 'lg:py-20 md:py-10 md:px-16 lg:px-24',
    },
    {
      path: '/images/pic11.jpg',
      cardBgColor: 'white',
      imgClassName: '',
      title: 'ACHIVE YOUR TARGET PRICE',
      text: 'Access selected suppliers and take advantage of economies of scale to get the best value for money. With us, you save money without sacrificing quality.',
      titleClassName: 'text-[1.5rem] font-bold',
      textClassName: 'text-base',
      cardClassName: 'lg:py-20 md:py-10 md:px-16 lg:px-24',
    },
    {
      path: '/images/pic12.jpg',
      cardBgColor: '#e8e8e8',
      imgClassName: '',
      title: 'QUALITY GUARANTEED WHIT AQL',
      text: 'Our quality control service based on AQL (Acceptance Quality Limit) is designed to ensure that your products meet the highest standards of quality and compliance. We work to guarantee maximum customer satisfaction, minimize defects, and optimize production processes.',
      titleClassName: 'text-[1.5rem] font-bold',
      textClassName: 'text-base',
      cardClassName: 'lg:py-20 md:py-10 md:px-16 lg:px-24',
    },
    {
      path: '/images/pic6.jpg',
      cardBgColor: 'white',
      imgClassName: '',
      title: 'INTERNATIONAL FREITHS',
      text: 'By sea, air or SEA/AIR, choose the best solution for your time and budget. Customs and tax warehousing: Eliminate upfront costs on VAT with our tax-authorized warehouse in the Netherlands.',
      titleClassName: 'text-[1.5rem] font-bold',
      textClassName: 'text-base',
      cardClassName: 'lg:py-20 md:py-10 md:px-16 lg:px-24',
    },
    {
      path: '/images/pic4.jpg',
      cardBgColor: '#e8e8e8',
      imgClassName: '',
      title: 'YOUR DELIVERY DATE',
      text: 'We offer a distribution service across Europe, ensuring delivery within 48 hours. We can handle shipments of all sizes, from single parcels to full loads, ensuring optimal efficiency and punctuality. Trust us for a secure and professional service.',
      titleClassName: 'text-[1.5rem] font-bold',
      textClassName: 'text-base',
      cardClassName: 'lg:py-20 md:py-10 md:px-16 lg:px-24',
    },
    {
      path: '/images/pic13.jpg',
      cardBgColor: 'white',
      imgClassName: '',
      title: 'CUSTOMIZED SERVICE',
      text: "Our service simplifies your company's financial management, ensuring that your orders are initiated quickly and without banking obstacles. We provide support to streamline payment flows, overcome bureaucratic complexities, and ensure operational continuity with flexible financial solutions.",
      titleClassName: 'text-[1.5rem] font-bold',
      textClassName: 'text-base',
      cardClassName: 'lg:py-20 md:py-10 md:px-16 lg:px-24',
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:grid-rows-3 lg:grid-rows-2 w-[100vw] relative">
      {content.map((item, index) => (
        <div key={index} className="">
          <ImageTextCard
            path={item.path}
            cardBgColor={item.cardBgColor}
            imgClassName={item.imgClassName}
            title={item.title}
            text={item.text}
            titleClassName={item.titleClassName}
            textClassName={item.textClassName}
            cardClassName={item.cardClassName}
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
