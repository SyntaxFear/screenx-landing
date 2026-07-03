"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MotionBlockProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  "aria-hidden"?: boolean | "true" | "false";
  "aria-label"?: string;
};

const viewport = { once: true, amount: 0.08 };

export function HeroReveal({ children, delay = 0, className, ...props }: MotionBlockProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key="hero-reveal-motion"
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={
        shouldReduceMotion
          ? { duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }
          : { type: "spring", stiffness: 92, damping: 22, mass: 0.9, delay }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0, className, ...props }: MotionBlockProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key="reveal-motion"
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 46, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={viewport}
      transition={
        shouldReduceMotion
          ? { duration: 0.3, delay, ease: [0.22, 1, 0.36, 1] }
          : { type: "spring", stiffness: 88, damping: 24, mass: 0.85, delay }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, delay = 0, className, ...props }: MotionBlockProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key="stagger-motion"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: shouldReduceMotion ? 0.04 : 0.08,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, ...props }: Omit<MotionBlockProps, "delay">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key="stagger-item-motion"
      className={className}
      variants={{
        hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 34, scale: 0.98, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: shouldReduceMotion
            ? { duration: 0.26, ease: [0.22, 1, 0.36, 1] }
            : { type: "spring", stiffness: 110, damping: 23, mass: 0.8 },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
