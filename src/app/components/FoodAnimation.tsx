'use client';

import { useEffect, useRef } from 'react';

interface FoodAnimationProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
}

// Only food item Unicode symbols (colorful emoji, shown normally)
const FOOD_ICONS = [
    '♡','₊˚'
];

export default function FoodAnimation({
  children,
  size = 24,
  color = '#000000' // black color
}: FoodAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const createFoodParticle = (x: number, y: number) => {
    const particle = document.createElement('div');
    const icon = FOOD_ICONS[Math.floor(Math.random() * FOOD_ICONS.length)];

    particle.textContent = icon;
    particle.style.position = 'fixed';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.fontSize = `${size}px`;
    particle.style.color = color;
    particle.style.opacity = '0.9';
    particle.style.userSelect = 'none';
    particle.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    particle.style.willChange = 'opacity, transform';

    // Remove the filter for black color so emojis appear normally
    // If you want purely black glyphs (no color emoji), use monochrome Unicode glyphs instead

    document.body.appendChild(particle);

    requestAnimationFrame(() => {
      const moveX = (Math.random() - 0.5) * 30;
      const moveY = -20 - Math.random() * 20;
      particle.style.opacity = '0';
      particle.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.2)`;
    });

    setTimeout(() => {
      if (particle.parentNode) particle.parentNode.removeChild(particle);
    }, 1000);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.4) return;

      const offsetX = (Math.random() - 0.5) * 40;
      const offsetY = (Math.random() - 0.5) * 40;

      createFoodParticle(e.clientX + offsetX, e.clientY + offsetY);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [size, color]);

  return <div ref={containerRef} style={{ position: 'relative' }}>{children}</div>;
}
