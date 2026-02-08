"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export const SpringUp: React.FC<AnimatedWrapperProps> = ({
  children,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 30 }}
    whileInView={{
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay,
      },
    }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

export const FadeUp: React.FC<AnimatedWrapperProps> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export const BlurIn: React.FC<AnimatedWrapperProps> = ({
  children,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
    whileInView={{
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay,
      },
    }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

export const ScaleX: React.FC<AnimatedWrapperProps> = ({
  children,
  delay = 0,
}) => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{
      scaleX: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
      },
    }}
    viewport={{ once: true, amount: 0.2 }}
    style={{ transformOrigin: "center" }}
  >
    {children}
  </motion.div>
);

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
