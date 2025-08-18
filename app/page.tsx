import BakerHotline from "@/components/BakerHotline";
import Category from "@/components/Category";
import Certificate from "@/components/Certificate";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Category/>
      <PopularProducts/>
      <BakerHotline/>
      <Certificate/>
    </div>
  );
}
