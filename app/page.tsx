import ProductImgSlides from '@/components/ProductImgSlides';
import Certificates from '@/components/sections/home/Certificates';
import CustomerFirst from '@/components/sections/home/CustomerFirst';
import HeroSlider from '@/components/sections/home/HeroSlider';
import HomeImageCards from '@/components/sections/home/HomeImageCards';
import Production from '@/components/sections/home/Production';
import VideoSection from '@/components/sections/home/VideoSection';
import { TestimonialsSection } from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="relative z-0 w-[100vw]">
      <HeroSlider />
      <Production />
      <HomeImageCards />
      <ProductImgSlides />
      <Certificates />
      <CustomerFirst />
      <TestimonialsSection />
      <VideoSection />
    </div>
  );
}
