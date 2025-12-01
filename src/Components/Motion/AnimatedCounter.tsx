"use client";

import { motion, animate, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 3,
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const count = useMotionValue(0);
  const display = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [isInView, value, duration, count]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

export default AnimatedCounter;
