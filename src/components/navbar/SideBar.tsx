"use client";
import { X, Phone } from "lucide-react";
import Link from "next/link";
import MyButton from "@/components/myComponents/MyButton";
import NavLinks from "./NavLinks";

interface SideBarProps {
  isOpen: boolean;
  close: () => void;
  activeSection: string;
  setActive: (id: string) => void;
  
}
const SideBar = ({ 
  isOpen, 
  close, 
  activeSection,  
  setActive }: SideBarProps) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-[#172023] 
        shadow-lg max-w-2xl z-50 px-20 overflow-auto no-scrollbar
      transform transition-transform duration-400 ease-in-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="mt-8 flex flex-col gap-12">
        {/* Close Button */}
        <MyButton className="w-7 h-7"
              onClick={close}
              variant={"solidIcon"}
            >
              <X className="w-5 h-5" />
        </MyButton>

        {/* NavLinks (Sidebar variant) */}
        <NavLinks
          variant="sidebar"
          activeSection={activeSection}
          onClick={(id) => {
            setActive(id);
            close(); // close sidebar on click
          }}
        />
        
        
        {/* Footer / Extra buttons */}
        <div className="flex flex-col gap-6 justify-start items-start">
          <Link href="/contact">
          <MyButton
          onClick={close}
          variant="solid">Contact Us</MyButton></Link>
            <a className="w-fit" href="tel:+923354611570" target="_blank" rel="noopener noreferrer">
          <div className={`group flex justify-center items-center gap-1 cursor-pointer text-primary-foreground/80`}>
            <Phone className="w-5" />
            <span className="group-hover:text-primary">+92 335 4611570</span>
          </div>
            </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
