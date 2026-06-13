"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";

type Props = {
  heading?: string;
  gradientHeading?: string;
  paragraph?: string;
  className?: string;
};

function Heading({ heading, gradientHeading, paragraph, className }: Props) {
  return (
    <AnimatedSection className="text-center mb-12">
      <AnimatedItem type='slideUp' index={0}>
        <div className="flex  w-fit mx-auto gap-2.5 font-bold flex-wrap justify-center items-center ">
          <h1 className="text-3xl  leading-6 lg:text-[48px] text-secondary text-nowrap   ">
            {heading}
          </h1>

          <h1
            className={`text-3xl  lg:text-[48px] leading-12 text-nowrap
            text-primary ${className}`}
          >
            {gradientHeading}
          </h1>
        </div>
      </AnimatedItem>
      <AnimatedItem type='slideUp' index={1}>
        <p className="text-base px-4 font-normal  text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          {paragraph}
        </p>
      </AnimatedItem>

      <AnimatedItem type='scale' index={2}>
        <div className="mt-6 mx-auto w-24 h-1 rounded-full bg-linear-to-r from-primary to-secondary" />
      </AnimatedItem>
    </AnimatedSection>
  );
}

export default Heading;
