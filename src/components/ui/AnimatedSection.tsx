// components/AnimatedSection.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  sectionName?: string; // Unique name for each section
}

export const AnimatedSection = ({ 
  children, 
  className, 
  id,
  sectionName = "default-section"
}: AnimatedSectionProps) => {
  const pathname = usePathname();
  const [shouldAnimate, setShouldAnimate] = useState(true);
  
  // Create a unique key for this section based on path and section name
  const storageKey = `animated_${pathname}_${sectionName}`;

  useEffect(() => {
    // Check if this section has already animated in current session
    const hasAnimatedBefore = sessionStorage.getItem(storageKey);
    
    if (hasAnimatedBefore === "true") {
      setShouldAnimate(false);
    } else {
      setShouldAnimate(true);
    }
  }, [storageKey]); // Re-run when path or section changes

  const handleAnimationComplete = () => {
    // Mark this section as animated
    sessionStorage.setItem(storageKey, "true");
  };

  return (
    <motion.section
      initial={shouldAnimate ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      onAnimationComplete={handleAnimationComplete}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
};