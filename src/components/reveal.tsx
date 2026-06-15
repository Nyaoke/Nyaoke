"use client";

import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerRevealProps {
  children: React.ReactNode[];
  className?: string;
  childClassName?: string;
  max?: number;
}

export function StaggerReveal({
  children,
  className,
  childClassName,
  max = 5,
}: StaggerRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const items = children.slice(0, max);

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {items.map((child, i) => (
          <div key={i} className={childClassName}>
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {items.map((child, i) => (
        <motion.div
          key={i}
          className={childClassName}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.4,
            delay: i * 0.04,
            ease: [0.32, 0.72, 0, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
