"use client"

import { motion } from "framer-motion";

export function RageForHeroSection() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute top-0 right-0 w-full h-full bg-gradient-custom -z-[1]"
    />
  );
}
