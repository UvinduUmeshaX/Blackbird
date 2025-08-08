'use client';

import { useEffect, useRef } from 'react';

interface PaintingEffectProps {
  children: React.ReactNode;
  color?: string; // single color, default white
  size?: number;
}

export default function PaintingEffect({
  children,
  color = '#FFFFFF', // default pure white
  size = 14
}: PaintingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const createSplash = (x: number, y: number) => {
    const splash = document.createElement('canvas');
    const ctx = splash.getContext('2d');
    if (!ctx) return;

    const shapeType = Math.random() > 0.5 ? 'ellipse' : 'circle';
    const splashSize = size * (0.6 + Math.random() * 1.4);
    const splashLength = 40 + Math.random() * 40;
    const angle = Math.random() * 2 * Math.PI;

    splash.width = splashSize * 4;
    splash.height = splashSize * 4;
    splash.style.position = 'fixed';
    splash.style.left = `${x - splash.width / 2}px`;
    splash.style.top = `${y - splash.height / 2}px`;
    splash.style.pointerEvents = 'none';
    splash.style.zIndex = '9999';
    splash.style.opacity = '0.9';
    splash.style.filter = `drop-shadow(0 0 8px ${color}) blur(0.8px)`;
    splash.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

    ctx.translate(splash.width / 2, splash.height / 2);
    ctx.rotate(angle);

    // Gradient: white center fading out to transparent
    const gradient = ctx.createRadialGradient(0, 0, splashSize * 0.2, 0, 0, splashLength / 2);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, `${color}00`); // transparent white

    ctx.fillStyle = gradient;

    if (shapeType === 'ellipse') {
      ctx.beginPath();
      ctx.ellipse(0, 0, splashLength / 2, splashSize / 2, 0, 0, 2 * Math.PI);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, splashSize / 1.5, 0, 2 * Math.PI);
      ctx.fill();
    }

    document.body.appendChild(splash);

    // Animate scale + fade out
    requestAnimationFrame(() => {
      splash.style.opacity = '0';
      splash.style.transform = `scale(${1 + Math.random()}) rotate(${angle}rad) translateY(-10px)`;
    });

    setTimeout(() => {
      if (splash.parentNode) splash.parentNode.removeChild(splash);
    }, 900);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.5) return;

      const offsetX = (Math.random() - 0.5) * 40;
      const offsetY = (Math.random() - 0.5) * 40;
      createSplash(e.clientX + offsetX, e.clientY + offsetY);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [color, size]);

  return <div ref={containerRef} style={{ position: 'relative' }}>{children}</div>;
}
