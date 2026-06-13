import React from "react";
import Image from "next/image";
import MyButton from "@/components/myComponents/MyButton";
import Link from "next/link";
import { montserrat } from "@/lib/fonts";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";



function HeroSection() {
  
  
  return (
    <div
      className="flex min-w-50 w-full flex-col px-2
    justify-between
    gap-10
    sm:gap-10
    md:gap-18
    lg:flex-row lg:gap-0 
    "
    >
      {/* Left Side */}
      <AnimatedSection className="space-y-4  flex flex-col items-center
      sm:space-y-8
      md:space-y-10
      lg:items-start lg:space-y-8 lg:px-2 
      2xl:space-y-10 2xl:mt-6
      "
      >
        <div className={montserrat.className}>
        <div
          className="text-white text-center font-semibold
          leading-12 text-[45px]
          sm:leading-16 sm:text-[60px]
          md:leading-20 md:text-[74px]
          lg:leading-18 lg:text-start lg:text-[72px]
          2xl:leading-22  2xl:text-[90px]"
        >
          <AnimatedItem type="slideLeft" index={0}>
            Luxury
          </AnimatedItem>
          
          <AnimatedItem type="slideLeft" index={1} className="font-bold  tracking-wide text-primary text-nowrap">
              Car Rental
          </AnimatedItem>
          <AnimatedItem type="slideLeft" index={2}>
            In Lahore
          </AnimatedItem>
        </div>
        </div>
          <AnimatedItem type="slideLeft" index={3} >
            <p className="text-white font-light   
            text-[14px] leading-5 px-3 text-center
            sm:text-[17px] sm:leading-6 sm:px-20
            md:text-[18px] md:leading-7 md:px-40
            lg:text-[18px] lg:text-start lg:px-0 lg:pr-3 lg:w-108
            xl:w-140


            ">Discover premium car rentals offering exceptional comfort, trusted reliability and the most competitive pricing for your journeys</p>
          </AnimatedItem>

        <AnimatedItem type="slideUp" index={4}>
          <Link href="/contact">
            <MyButton variant="solid"> Book now</MyButton>
          </Link>
        </AnimatedItem>
      </AnimatedSection>

      {/* Right Side */}
      <AnimatedSection className=" flex items-end justify-center lg:justify-end pl-2 xl:mt-8">
        <AnimatedItem type="slideRight" index={0}>
          <Image
            src="/others/hero_car.webp"
            alt="3D Model"
            width={4000}
            height={4000}
            priority={true}
            className="object-contain w-full min-w-70 
            max-w-120
            sm:max-w-140
            md:max-w-170
            lg:min-w-140 lg:max-w-250 lg:pt-12
            xl:min-w-170
            2xl:min-w-210
            3xl:min-w-240
            "
          />
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}

export default HeroSection;
