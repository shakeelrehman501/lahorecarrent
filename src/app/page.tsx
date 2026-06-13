import BrandSlider from "@/components/service/BrandSlider";
import Feedback from "@/components/service/Feedback";
import HeroSection from "@/components/service/Hero";
import Projects from "@/components/service/PopularCars";
import WhyChooseUs from "@/components/service/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
      <main className="  bg-white">
      <div className="relative">
      <Image
            src="/others/hero_bg_desktop.webp"
            alt="3D Model"
            width={5000}
            height={5000}
            priority={true}
            className="object-cover z-0  w-full  hidden lg:block bg-gray-400
            lg:h-190
            xl:h-225
            2xl:h-242
            "
          />
      <Image
            src="/others/hero_bg_labtop.webp"
            alt="3D Model"
            width={4000}
            height={4000}
            priority={true}
            className=" object-cover z-0 w-full h-265 hidden  md:block lg:hidden bg-gray-400"
          />
      <Image
            src="/others/hero_bg_mob.webp"
            alt="3D_Model"
            width={5000}
            height={4000}
            priority={true}
            className="object-cover z-0 min-w-80 w-full   min-h-180 max-h-220 h-full   block md:hidden bg-gray-400"
          />
        <div className="object-contain max-w-350 absolute  left-1/2 -translate-x-1/2  w-full px-1 2xl:px-0  z-10
        top-25
        sm:top-35
        md:top-40
        lg:top-50
        xl:top-60
        ">
          <HeroSection />
        </div>
      </div>
          <div className="bg-secondary  ">
          <BrandSlider/>
          </div>
          <div className="">
            <Projects/>
            <WhyChooseUs/>
            <Feedback/>
          </div>
      </main>
  );
}
