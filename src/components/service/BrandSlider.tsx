"use client"

import Image from "next/image";
import { useState, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, animate } from 'motion/react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { brands, BrandType } from "@/lib/data/constant";
import Heading from "@/components/myComponents/Heading";

function BrandCard({name, image}:BrandType) {
  return (
    <div
      className="flex h-42 w-42 shrink-0 flex-col items-center justify-center border rounded-sm border-gray-200 bg-white shadow-sm transition-all duration-300 cursor-pointer "
    >
      <div className="relative h-16 w-24">
        <Image
          src={image}
          alt={name}
          width={800}
          height={600}
          className="object-contain"
          loading="lazy"
        />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-[#1d2340]">
        {name}
      </h3>
    </div>
  );
}

function BrandSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 200; // Width of each card + gap
  const totalWidth = brands.length * cardWidth;

  useAnimationFrame((time, delta) => {
    if (!isPaused) {
      const currentX = x.get();
      const newX = currentX - (delta * 0.07); // Speed of animation

      if (Math.abs(newX) >= totalWidth) {
        x.set(0);
      } else {
        x.set(newX);
      }
    }
  });
  const handleNavigate = (direction: 'left' | 'right') => {
    const currentX = x.get();
    const shift = direction === 'left' ? cardWidth : -cardWidth;
    const newX = currentX + shift;

    animate(x, newX, {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    });
  };
   
  return (
    <div className=" flex flex-col items-center justify-center bg-white pb-26 pt-25 ">
      <Heading
          heading="Explore"
          gradientHeading="Brands"
        />

      <div className="relative w-full max-w-6xl bg-[#F2F5FB] py-3 ">
        <button
          onClick={() => handleNavigate('left')}
          className="absolute left-1 xl:-left-6.5 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2.5 sm:p-3 shadow-lg border border-gray-100 hover:bg-gray-100 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-gray-700" />
        </button>

        <button
          onClick={() => handleNavigate('right')}
          className="absolute right-1 xl:-right-6.5 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2.5 sm:p-3 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-gray-700" />
        </button>

        <div className="overflow-hidden px-16">
          <motion.div
            ref={containerRef}
            className="flex gap-6"
            style={{ x }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <BrandCard key={`${brand.name}-${index}`} {...brand}/>
               
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}


export default BrandSlider;
