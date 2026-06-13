"use client";

import { useState } from "react";
import DesktopNav from "./DesktopNav";
import LaptopNav from "./LaptopNav";
import MobileNav from "./MobileNav";
import SideBar from "./SideBar";
import { useScroll } from "@/hooks/useScroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isScrolled = useScroll(50); // hook returns boolean

  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatedSection>
        <header className="w-full ">
          <AnimatedItem type="fade" index={0} className="fixed top-0 left-0 w-full px-1 z-50 transition-all duration-400 ease-in-out">
            <div
              className={`max-w-350 w-full mx-auto  flex justify-between items-center  
       ${
         isScrolled
           ? "bg-primary-foreground text-secondary py-2 sm:py-0 pl-3 sm:pl-5 pr-3  rounded-full shadow-xl outline outline-gray-200 outline-none  translate-y-4 scale-98 2xl:scale-100 transition-all duration-400 ease-in-out "
           : "px-6 md:px-3 2xl:px-0 text-primary-foreground  transition-all duration-400 ease-in-out   sm:py-5 pt-4 sm:pt-3 "
       }`}
            >
              {/* Logo */}
              <Link href="/">
                <Image
                  onClick={handleClick}
                  src={`${isScrolled ? "/others/black_logo.webp" : "/others/white_logo.webp"}`}
                  alt="3D Model"
                  width={200}
                  height={200}
                  priority={true}
                  className="w-36 sm:w-40 2xl:w-44 cursor-pointer text-secondary  p-1"
                />
              </Link>
              {/* Desktop Navbar */}
              <DesktopNav
                isScrolled={isScrolled}
                activeSection={activeSection}
                onClick={setActiveSection}
              />

              {/* Laptop / Tablet */}
              <LaptopNav isScrolled={isScrolled} setIsOpen={setIsOpen} />

              {/* Mobile */}
              <MobileNav isScrolled={isScrolled} setIsOpen={setIsOpen} />
            </div>
          </AnimatedItem>
        </header>
      </AnimatedSection>

      {/* Sidebar */}
      <SideBar
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        activeSection={activeSection}
        setActive={setActiveSection}
      />
    </>
  );
};

export default Navbar;
