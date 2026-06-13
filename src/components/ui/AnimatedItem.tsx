// components/AnimatedItem.tsx
"use client";

import { motion } from "framer-motion";
import { animationVariants, AnimationType } from "@/lib/animations";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface AnimatedItemProps {
  children: React.ReactNode;
  type?: AnimationType;
  className?: string;
  index?: number;
  itemName?: string; // Unique name for each item
  parentSection?: string; // Parent section name for grouping
}

export const AnimatedItem = ({
  children,
  type = "fade",
  className,
  index = 0,
  itemName = "default-item",
  parentSection = "default-section"
}: AnimatedItemProps) => {
  const pathname = usePathname();
  const [shouldAnimate, setShouldAnimate] = useState(true);
  
  // Create a unique key for this item
  const storageKey = `animated_${pathname}_${parentSection}_${itemName}`;

  useEffect(() => {
    // Check if this item has already animated
    const hasAnimatedBefore = sessionStorage.getItem(storageKey);
    
    if (hasAnimatedBefore === "true") {
      setShouldAnimate(false);
    } else {
      setShouldAnimate(true);
    }
  }, [storageKey]);

  const handleAnimationComplete = () => {
    // Mark this item as animated
    sessionStorage.setItem(storageKey, "true");
  };

  // If shouldn't animate, just render children without motion
  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={animationVariants[type]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      custom={index}
      onAnimationComplete={handleAnimationComplete}
      className={className}
    >
      {children}
    </motion.div>
  );
};