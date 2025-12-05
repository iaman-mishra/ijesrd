"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  className,
  duration = 2,
  margin = "-50px",
  decimals = 0,
}) => {
  const count = useMotionValue(0);

  const formatted = useTransform(count, (latest) => latest.toFixed(decimals));

  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: margin as any });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {formatted}
    </motion.span>
  );
};

export default AnimatedCounter;
