"use client";
import React from "react";

import MyButton from "@/components/myComponents/MyButton";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { PhoneIcon, ContactIcon } from "@/icons";

interface Props {
  isScrolled: boolean;
  activeSection: string;
  onClick: (id: string) => void;
}
const DesktopNav = ({ isScrolled, activeSection, onClick }: Props) => {
  return (
    <>
      <NavLinks
        variant="desktop"
        isScrolled={isScrolled}
        activeSection={activeSection}
        onClick={onClick}
      />
      <div className="hidden lg:flex gap-6 items-center">
        <a href="tel:+923354611570" target="_blank" rel="noopener noreferrer">
          <div className="group flex justify-center items-center gap-1 cursor-pointer">
            <PhoneIcon className="w-5" />
            <span
              className={`tracking-widest
              ${
                isScrolled
                  ? "group-hover:text-primary"
                  : "group-hover:text-primary"
              } 
            `}
            >
              +92 335 4611570
            </span>
          </div>
        </a>

        <div
          className={`w-0.5 h-6 bg-gray-300 ${
            isScrolled ? "bg-secondary/40" : ""
          }`}
        />
        <Link href="/contact">
          <MyButton
            leftIcon={<ContactIcon className="w-5 h-5" />}
            variant={isScrolled ? "fill" : "solid"}
          >
            Contact us
          </MyButton>
        </Link>
      </div>
    </>
  );
};

export default DesktopNav;
