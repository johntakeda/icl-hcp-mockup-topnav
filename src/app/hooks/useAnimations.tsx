import React, { useEffect, useState, useRef, Children } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useMotionValueEvent,
  type Variants,
} from "motion/react";

/* ── Constants ── */
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const STAGGER_DELAY = 0.12;

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};

/* ── useAnimatedNumber ── */
export function useAnimatedNumber({
  target,
  prefix = "",
  suffix = "",
  duration = 1.2,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReduced = useReducedMotion();

  const mv = useMotionValue(0);
  const spring = useSpring(mv, {
    stiffness: 50,
    damping: 20,
  });

  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  // Trigger the animation when in view
  useEffect(() => {
    if (isInView) {
      if (prefersReduced) {
        setDisplay(`${prefix}${target}${suffix}`);
      } else {
        mv.set(target);
      }
    }
  }, [isInView, prefersReduced, target, prefix, suffix, mv]);

  // Update display as spring animates
  useMotionValueEvent(spring, "change", (latest) => {
    setDisplay(`${prefix}${Math.round(latest)}${suffix}`);
  });

  return { ref, display, isInView };
}

/* ── ScrollReveal ── */
export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "none";
  duration?: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...(direction === "up" ? { y: 24 } : {}),
      }}
      whileInView={{
        opacity: 1,
        ...(direction === "up" ? { y: 0 } : {}),
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ── StaggerGroup ── */
export function StaggerGroup({
  children,
  staggerDelay = STAGGER_DELAY,
  className,
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  const parentVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay },
    },
  };

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={parentVariants}
    >
      {Children.map(children, (child) => (
        <motion.div variants={childVariants} className="flex flex-col h-full">{child}</motion.div>
      ))}
    </motion.div>
  );
}
