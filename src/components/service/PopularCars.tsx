"use client";
import { popularCarCard, popularCarCardType } from "@/lib/data/constant";
import Heading from "../myComponents/Heading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
import { useState } from "react";
import Image from "next/image";

function ProjectCard({ image, name, description, price }: popularCarCardType) {
  const [loading, setLoading] = useState(true);
  const handleWhatsApp = (name:string, price:string|number) => {
    const phoneNumber = "923004611570"; 

    const message = `Hello,
I would like to rent the car "${name}" at ${price}/day.
Please let me know if it is available.  
Thank you.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
    // window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-w-80 bg-white rounded-lg overflow-hidden  shadow-md hover:shadow-2xl transition-all duration-300  hover:-translate-y-2 group ease-in-out">
      {/* Car Image */}
      <div className="relative overflow-hidden h-80 bg-linear-to-br from-gray-100 to-gray-200">
        {loading && (
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />
            )}
        <Image
          src={image}
          alt={name}
          width={2000}
          height={1600}
          onLoad={() => setLoading(false)}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                loading ? "opacity-0" : "opacity-100"
              }
          `}
          loading="lazy"
        />
      </div>

      {/* Car Details */}
      <div className="p-6">
        <h3 className="mb-3 text-gray-800 font-poppins font-bold text-[25px] group-hover:text-primary transition-all duration-300 ease-in-out">
          {name}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500">{description}</p>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="text-[22px] text-gray-700  font-poppins font-semibold group-hover:text-primary transition-all duration-300 ease-in-out">
            PKR {price}/day
          </h1>
            <button
            onClick={() => handleWhatsApp(name, price)}
            className="px-3 py-2 font-semibold bg-[#FF2E2E] hover:bg-[#e02626] text-white  rounded-md transition-all duration-300 hover:shadow-lg cursor-pointer">
              Rent Now
            </button>
        </div>
      </div>
    </div>
  );
}

function PopularCars() {
  
  return (
    <section
      id="projects"
      className="bg-gray-100  py-16 lg:py-20 transition-colors w-full"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Heading
          heading="Most Popular"
          gradientHeading="Cars"
          paragraph="Explore our top-rated vehicles chosen for comfort, luxury and unforgettable journeys"
        />

        {/* Projects Grid */}
        <AnimatedSection className="w-full max-w-350 min-w-66 mx-auto grid md:grid-cols-2 xl:grid-cols-3  gap-5 lg:gap-4 ">
          {popularCarCard.map((project, index) => (
            <AnimatedItem key={index} type="slideUp" index={index}>
              <ProjectCard {...project} />
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

export default PopularCars;
