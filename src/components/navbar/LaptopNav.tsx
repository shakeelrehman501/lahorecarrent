import React from "react";

import { Menu, Phone } from "lucide-react";
import MyButton from "@/components/myComponents/MyButton";

interface Props {
  isScrolled: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function LaptopNav({ isScrolled, setIsOpen }: Props) {
  return (
    <div className="hidden sm:flex justify-center items-center gap-5 lg:hidden py-2.5">
      <a href="tel:+923354611570" target="_blank" rel="noopener noreferrer">
        <div className="group flex justify-center items-center gap-1 cursor-pointer">
          <Phone className="w-5" />
          <span
            className={`
                      ${
                        isScrolled
                          ? "group-hover:text-primary"
                          : "group-hover:text-blue-200 dark:group-hover:text-primary "
                      } 
                    `}
          >
            +92 335 4611570
          </span>
        </div>
      </a>
      <div
        className={`w-0.5 h-6 bg-gray-300 ${
          isScrolled ? "bg-secondary-foreground/40" : ""
        }`}
      />
      <MyButton
        onClick={() => setIsOpen(true)}
        leftIcon={<Menu className="w-4 h-4" />}
        variant={isScrolled ? "fill" : "solid"}
      >
        Menu
      </MyButton>
    </div>
  );
}

export default LaptopNav;
