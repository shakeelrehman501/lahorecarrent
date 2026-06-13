"use client";

import { navItems } from "@/lib/data/constant";
import Link from "next/link";

type Variant = "desktop" | "sidebar" 

interface NavLinksProps {
  variant: Variant;
  isScrolled?: boolean;
  activeSection: string;
  onClick: (id: string) => void;
}
const NavLinks = ({
  variant,
  isScrolled,
  activeSection,
  onClick,
}: NavLinksProps) => {

  // ============ DESKTOP (NavItems) ============
  if (variant === "desktop") {
    return (
      <ul className={`hidden lg:flex gap-10 text-sm  md:text-lg 
        ${
        isScrolled ? "text-secondary" : "text-primary-foreground"}`}>
        {navItems.map((item) => {
          return (
            <li key={item.id} className="relative group ">
              <Link href={item.id}>
                
                  <button
                  onClick={() => onClick(item.id)}
                  className={`cursor-pointer lg:py-5.5  border-b-transparent border-b-2
                      
                     ${isScrolled ? "hover:border-b-primary hover:text-primary " : "hover:border-b-primary-foreground "}
                     `}
                    >
                  {item.label}
                </button>
                
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
  // ============ SIDEBAR / MOBILE (NavLinks) ============
  return (
    <ul className="space-y-5 sm:space-y-7  flex flex-col text-primary-foreground">
      {navItems.map((item) => (
        <li key={item.id}>
          <Link href={item.id}>
          <div
            onClick={() => onClick(item.id)}
            className="group inline-flex items-center gap-2 cursor-pointer text-2xl sm:text-4xl"
          >
            <span
              className={`block h-0.5 bg-primary transition-all ease-in-out duration-150
              ${activeSection === item.id ? "w-6" : "w-0 group-hover:w-6"}`}
            />
            <span
              className={`hover:text-primary  ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-primary-foreground/80"
              }`}
            >
              {item.label}
            </span>
          </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
