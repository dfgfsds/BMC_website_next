import BestSellers from "@/components/BestSellers";
import Categories from "@/components/CategoriesSlider";
import HeroSection from "@/components/HeroSection";
import ReviewCarousel from "@/components/ReviewCarousel";
import SpecialSection from "@/components/SpecialSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <BestSellers />
      <ReviewCarousel />
      <SpecialSection />
    </div>
  );
}