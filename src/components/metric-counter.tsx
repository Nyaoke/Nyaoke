"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface MetricCounterProps {
  value: string;
  className?: string;
}

function parseMetricValue(value: string): {
  type: "range" | "number" | "text";
  start?: number;
  end?: number;
  suffix?: string;
  prefix?: string;
  text?: string;
} {
  const rangeMatch = value.match(/^(\d+)\s*→\s*(\d+)(%?)$/);
  if (rangeMatch) {
    return {
      type: "range",
      start: parseInt(rangeMatch[1], 10),
      end: parseInt(rangeMatch[2], 10),
      suffix: rangeMatch[3] || "",
    };
  }

  const numberMatch = value.match(/^(\$?)(\d+)(\+?)(%?)$/);
  if (numberMatch) {
    return {
      type: "number",
      prefix: numberMatch[1],
      end: parseInt(numberMatch[2], 10),
      suffix: (numberMatch[3] || "") + (numberMatch[4] || ""),
    };
  }

  return { type: "text", text: value };
}

function useCountUp(
  target: number,
  start: number,
  enabled: boolean,
  duration = 1200
) {
  const [current, setCurrent] = useState(start);

  useEffect(() => {
    if (!enabled) {
      setCurrent(target);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(start + (target - start) * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, start, enabled, duration]);

  return current;
}

export function MetricCounter({ value, className }: MetricCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const parsed = parseMetricValue(value);

  const rangeStart = parsed.type === "range" ? parsed.start! : 0;
  const endNum =
    parsed.type === "range"
      ? parsed.end!
      : parsed.type === "number"
        ? parsed.end!
        : 0;
  const enabled = isInView && !shouldReduceMotion;

  const countStart = useCountUp(rangeStart, 0, enabled && parsed.type === "range", 800);
  const countEnd = useCountUp(endNum, 0, enabled && parsed.type !== "text", 1200);

  if (parsed.type === "text") {
    return (
      <span ref={ref} className={cn("font-display text-display-lg", className)}>
        {parsed.text}
      </span>
    );
  }

  if (parsed.type === "range") {
    return (
      <span ref={ref} className={cn("font-display text-display-lg", className)}>
        {shouldReduceMotion || !isInView ? (
          value
        ) : (
          <>
            {countStart} → {countEnd}
            {parsed.suffix}
          </>
        )}
      </span>
    );
  }

  return (
    <span ref={ref} className={cn("font-display text-display-lg", className)}>
      {shouldReduceMotion || !isInView ? (
        value
      ) : (
        <>
          {parsed.prefix}
          {countEnd}
          {parsed.suffix}
        </>
      )}
    </span>
  );
}
