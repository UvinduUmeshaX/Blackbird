"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroTextAnimation() {
  const sectionRef = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // H1: grow in size & move up
  const scaleH1 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const yH1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // P: fade out
  const opacityP = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section className="hero" ref={sectionRef} style={{ textAlign: "center", padding: "4rem 0" }}>
      <motion.h1
        className="hero-h1"
        style={{
          scale: scaleH1,
          y: yH1,
        }}
      >
        BLACKBIRD
      </motion.h1>

      <motion.p
        className="hero-p"
        style={{
          opacity: opacityP,
        }}
      >
        Live Music Bar & Restaurant
      </motion.p>

      <img
        className="hero-img"
        src="/images/hero.png"
        alt="Blackbird Hero Image"
        style={{ width: "100%", height: "auto" }}
      />
    </section>
  );
}
