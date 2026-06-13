import { Users, Clock, Car, MapPin, Quote } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";  

const stats = [
  { icon: Users, value: "500+", label: "Happy Customers" },
  { icon: Clock, value: "5+", label: "Years of Experience" },
  { icon: Car, value: "15+", label: "Premium Vehicles" },
  { icon: MapPin, value: "10+", label: "Locations Served" },
];

export default function AboutCEO() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* ── DESKTOP ── */}
        <div className="md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="relative flex items-end justify-center">
          <AnimatedSection>
            {/* Photo */}
            <AnimatedItem type="slideLeft" index={0}>
            <Image
              src="/others/ceo_img.webp"
              alt="3D Model"
              width={4000}
              height={4000}
              priority={true}
              className="object-contain w-full min-w-50 
                        max-w-70
                        sm:max-w-90
                        md:max-w-170
                        lg:min-w-140  lg:pt-12"
            />
            </AnimatedItem>
            {/* Quote card */}
            <AnimatedItem type="slideUp" index={1}>
            <div className="absolute max-w-75  -bottom-12 sm:-bottom-2 -left-2 sm:left-1/2 sm:-translate-x-1/2 md:-left-2 md:translate-x-0 z-20 bg-white rounded-2xl p-5  shadow-lg">
              <Quote className="text-primary mb-2" />
              <p className="text-[13px] text-gray-800 leading-relaxed m-0">
                We don't just rent cars, we deliver experiences you can trust.
              </p>
              <div className="mt-3">
                <Image
                  src="/others/ceo_sign.webp"
                  alt="3D Model"
                  width={4000}
                  height={4000}
                  priority={true}
                  className="object-cover  max-w-25"
                />
                {/* <SignatureSVG /> */}
                <p className="text-[12px] text-gray-600 mt-1 mb-0 leading-snug">
                  <strong>Shoukat Ali</strong>
                  <br />
                  <span className="text-gray-400">CEO & Founder</span>
                </p>
              </div>
            </div>
            </AnimatedItem>
            </AnimatedSection>
          </div>

          {/* Right column */}
          <AnimatedSection>
          <div className="mt-20">
            <AnimatedItem type="slideDown" index={0}>
            <p className="text-[15px] tracking-widest text-primary font-semibold mb-2 uppercase">
              Meet Our CEO
            </p>
            <h1 className="text-[40px] lg:text-[56px] font-extrabold text-gray-900 leading-none m-0">
              Shoukat Ali
            </h1>
            <p className="text-[13px] tracking-widest text-gray-500 font-semibold mt-2 mb-6 uppercase">
              Founder &amp; CEO, Car Rental
            </p>
            </AnimatedItem>
            <AnimatedItem type="slideRight" index={1}>
            <p className="text-[15px] text-gray-500 leading-7 mb-4">
              Shoukat Ali is the vision behind Car Rental, a premium car rental
              service built on trust, transparency, and customer satisfaction.
            </p>
            <p className="text-[15px] text-gray-500 leading-7 mb-4">
              With years of experience in the travel and automotive industry, he
              recognized the need for a car rental service that combines quality
              vehicles with hassle-free booking and exceptional customer care.
            </p>
            <p className="text-[15px] text-gray-500 leading-7 mb-6">
              Under his leadership, Car Rental has grown into a reliable brand
              for travelers, tourists, and locals who value comfort, safety, and
              convenience. His mission is simple: to make every journey safe,
              smooth, and memorable.
            </p>
            </AnimatedItem>

            <div className="mb-8">
              <Image
                src="/others/ceo_sign.webp"
                alt="3D Model"
                width={4000}
                height={4000}
                loading="lazy"
                className="object-cover  max-w-25"
              />
              <p className="text-[13px] text-gray-500 mt-1">
                Founder &amp; CEO, Car Rental
              </p>
            </div>

            {/* Stats */}
            <div className="border-t border-gray-200 pt-6 grid grid-cols-4 gap-4">
              {stats.map(({ icon: Icon, value, label, }, index) => (
                <AnimatedItem
                  key={label}
                  index={index}
                  type="slideUp"
                  className="flex flex-col items-center text-center"
                >
                  <Icon size={28} className="text-[#E8192C] mb-2" />
                  <span className="text-[22px] font-extrabold text-gray-900 leading-none">
                    {value}
                  </span>
                  <span className="text-[11px] text-gray-500 mt-1 leading-snug">
                    {label}
                  </span>
                </AnimatedItem>
              ))}
            </div>
          </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
