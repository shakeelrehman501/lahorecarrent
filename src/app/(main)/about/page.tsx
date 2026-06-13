"use client";

import { AnimatedItem } from "@/components/ui/AnimatedItem";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { aboutCardData, AboutCardType } from "@/lib/data/constant";
import AboutCEO from "./components/AboutCEO";
import Image from "next/image";
import { useState } from "react";

function AboutCard({ icon: Icon, title, description }: AboutCardType) {
  return (
    <div className="flex items-start gap-3 md:gap-4">
      <div className="shrink-0">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500 flex items-center justify-center">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1 md:mb-2">
          {title}
        </h4>
        <p className="text-xs md:text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function About() {
   const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-75 md:h-90 lg:h-110 xl:h-120 2xl:h-150 w-full">
        {loading && (
              <div className="absolute inset-0 bg-gray-300  animate-pulse" />
            )}
        <Image
          src="/others/aboutus.webp"
          alt="About_Image"
          width={3000}
          height={2000}
          onLoad={() => setLoading(false)}
          className={`w-full h-full object-cover ${loading ? "opacity-0" : "opacity-100"}`}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
            About Us
          </h1>
        </div>
      </div>

      {/* Company Name Section */}
      <AnimatedSection>
        <AboutCEO />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why Choose Us Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
              Why Choose Us
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {/* Feature 1 */}
              {aboutCardData.map((card, index) => (
                <AnimatedItem key={index} type="slideUp" index={index}>
                  <AboutCard {...card} />
                </AnimatedItem>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default About;
