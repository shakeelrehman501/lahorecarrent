"use client";
import React from "react";

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import FeedbackCard from "./FeedbackCard";

function FeedbackCarousel() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    if (!api) return;

    setActive(api.selectedScrollSnap());
    api.on("select", () => {
      setActive(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <>
      <div className="relative sm:px-10  ">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-500 sm:mx-auto"
        >
        <FeedbackCard
        CarouselContent={CarouselContent}
        CarouselItem={CarouselItem}
        active={active}
        
        />
          
          <CarouselPrevious
            className="
        p-5 left-2 sm:-left-6
        bg-secondary-foreground  text-secondary 
        hover:bg-gray-200
        hover:scale-110 
        "
          />

          <CarouselNext
            className="
        p-5 right-2 sm:-right-6
        bg-secondary-foreground  text-secondary 
        hover:bg-gray-200
        hover:scale-110 
        "
          />
        </Carousel>
      </div>
    </>
  );
}

export default FeedbackCarousel;
