
import { whyChooseUsFeatures, WhyChooseUsType } from "../../lib/data/constant";
import Heading from "@/components/myComponents/Heading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
import Image from "next/image";

function WhyChooseUsCard({ icon: Icon, title, description }: WhyChooseUsType) {
  return (
    <div className="group">
      <div className="flex items-start gap-4 lg:gap-6 hover:bg-gray-100 px-3 py-2 lg:py-4 rounded-sm">
        <div className="shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
          <Icon className="w-5.5 h-5.5 text-red-500 group-hover:text-white transition-colors duration-300" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1 text-[18px]">
            {title}
          </h4>
          <p className="text-[15px] sm:text-[16px] text-gray-600 leading-6 sm:leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className={` sm:px-6 lg:px-8 transition-all duration-1000 `}>
        <Heading
          heading="Why"
          gradientHeading="Choose Us"
          paragraph="Discover the best car rental experience with unbeatable deals, reliable service, and top-quality vehicles designed to make every journey smooth and comfortable."
        />

        <div className="w-full max-w-350 min-w-66 mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Car Image */}
          <AnimatedSection>
            <AnimatedItem type="slideLeft" index={0}>
              <div className="relative">
                <div className="relative z-10 px-3 lg:px-1">
                  <Image
                    src="/others/fortuner_car.webp"
                    alt="Car"
                    width={2000}
                    height={1400}
                    loading="lazy"
                    className="w-full h-90 sm:h-120 object-cover rounded-lg "
                  />
                </div>
              </div>
            </AnimatedItem>
          </AnimatedSection>

          {/* Right - Features */}
          <AnimatedSection>
            <div className="space-y-1 flex flex-col justify-between">
              {whyChooseUsFeatures.map((feature, index) => (
                <AnimatedItem type="slideUp" index={index} key={index}>
                  <WhyChooseUsCard {...feature} />
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
