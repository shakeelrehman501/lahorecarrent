"use client";
import { useState, useEffect } from "react";

export function useScroll(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => setIsScrolled(window.scrollY > threshold);
    const handleResize = () => {
      if (window.innerWidth < 640) setIsScrolled(false);
    };
    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold]);

  return isScrolled;
}
