"use client";

import { useEffect, useState, type ReactNode } from "react";
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

function useCanAnimate() {
  const shouldReduceMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setHasMounted(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return hasMounted && !shouldReduceMotion;
}

export function HeroReveal({ children, delay = 0, className, ...props }: MotionBlockProps) {
  const canAnimate = useCanAnimate();

  if (!canAnimate) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      key="hero-reveal-motion"
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0, className, ...props }: MotionBlockProps) {
  const canAnimate = useCanAnimate();

  if (!canAnimate) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      key="reveal-motion"
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, delay = 0, className, ...props }: MotionBlockProps) {
  const canAnimate = useCanAnimate();

  if (!canAnimate) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

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
            staggerChildren: 0.08,
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
  const canAnimate = useCanAnimate();

  if (!canAnimate) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      key="stagger-item-motion"
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.56, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
