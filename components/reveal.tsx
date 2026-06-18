"use client";

import { motion, useReducedMotion } from "motion/react";

// cubic-bezier easing as an explicit tuple (Motion's types reject number[])
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Scroll-reveal wrapper: fades + rises children into view once.
 * `delay` lets you stagger siblings. Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
