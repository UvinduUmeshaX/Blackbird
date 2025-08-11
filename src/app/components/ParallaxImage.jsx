// components/ParallaxImage.js
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImage({ src, alt, height = "500px" }) {
  const ref = useRef(null);

  // Track scroll progress relative to this element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // start when enters, end when leaves
  });

  // Map scroll progress to vertical movement (parallax)
  const y = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden w-full"
      style={{ height }} // dynamic height (default 500px)
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover" // fills container like background-size: cover
      />
    </div>
  );
}
