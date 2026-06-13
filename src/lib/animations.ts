// lib/animation/animations.ts
import { TargetAndTransition, Transition, easeOut } from "framer-motion";

export type AnimationType = 
  | "fade" 
  | "slideUp" 
  | "slideDown" 
  | "slideLeft" 
  | "slideRight" 
  | "scale";

type CustomVariant = {
  hidden: TargetAndTransition;
  visible: (custom: number) => TargetAndTransition;
};

const baseTransition = (index: number): Transition => ({
  duration: 0.6,
  delay: index * 0.2,
  ease: easeOut,
});

export const animationVariants: Record<AnimationType, CustomVariant> = {
  fade: {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: baseTransition(index),
    }),
  },
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: baseTransition(index),
    }),
  },
  slideDown: {
    hidden: { opacity: 0, y: -40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: baseTransition(index),
    }),
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: baseTransition(index),
    }),
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: baseTransition(index),
    }),
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: baseTransition(index),
    }),
  },
};