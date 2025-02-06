import React from 'react';
import ProductImgSlide from './sections/ProductImgSlide';

const ProductImgSlides = () => {
  const fashionImg = [
    '/images/fashion/1.png',
    '/images/fashion/2.png',
    '/images/fashion/3.png',
    '/images/fashion/4.png',
    '/images/fashion/5.png',
  ];
  const sportImg = [
    '/images/sport/1.png',
    '/images/sport/2.png',
    '/images/sport/3.png',
    '/images/sport/4.png',
    '/images/sport/5.png',
    '/images/sport/6.png',
  ];
  const underwearImg = [
    '/images/underwear/1.png',
    '/images/underwear/2.png',
    '/images/underwear/3.png',
    '/images/underwear/4.png',
    '/images/underwear/5.png',
  ];
  const beachwearImg = [
    '/images/beach/1.png',
    '/images/beach/2.png',
    '/images/beach/3.png',
    '/images/beach/4.png',
    '/images/beach/5.png',
  ];
  const promoImage = [
    '/images/promo/1.png',
    '/images/promo/2.png',
    '/images/promo/3.png',
    '/images/promo/4.png',
    '/images/promo/5.png',
    '/images/promo/6.png',
    '/images/promo/7.png',
  ];
  const workImg = [
    '/images/work/1.png',
    '/images/work/2.png',
    '/images/work/3.png',
    '/images/work/4.png',
    '/images/work/5.png',
  ];

  return (
    <div className="container py-10">
      <div className="relative">
        <ProductImgSlide
          images={fashionImg}
          type1={'prevFashion'}
          type2={'nextFashion'}
          title="Fashion Wear"
        />
      </div>
      <div className="relative">
        <ProductImgSlide
          images={sportImg}
          type1={'prevSport'}
          type2={'nextSport'}
          title="Sport Wear"
        />
      </div>
      <div className="relative">
        <ProductImgSlide
          images={promoImage}
          type1={'prevPromo'}
          type2={'nextPromo'}
          title="Promotional Wear"
        />
      </div>
      <div className="relative">
        <ProductImgSlide
          images={workImg}
          type1={'prevWorks'}
          type2={'nextWorks'}
          title="Work Wear"
        />
      </div>
      <div className="relative">
        <ProductImgSlide
          images={underwearImg}
          type1={'prevUnderwear'}
          type2={'nextUnderwear'}
          title="Underwear"
        />
      </div>
      <div className="relative">
        <ProductImgSlide
          images={beachwearImg}
          type1={'prevBeachwear'}
          type2={'nextBeachwear'}
          title="Beachwear"
        />
      </div>
    </div>
  );
};

export default ProductImgSlides;
