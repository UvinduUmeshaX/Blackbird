'use client';

import { useEffect, useRef } from 'react';

interface FlyingBirdsProps {
  children: React.ReactNode;
}

export default function FlyingBirds({ children }: FlyingBirdsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Function to create flying bird animation
  const createFlyingBird = (e: MouseEvent) => {
    const bird = document.createElement('div');
    bird.innerHTML = '𓅪';
    bird.style.position = 'fixed';
    bird.style.left = e.clientX + 'px';
    bird.style.top = e.clientY + 'px';
    bird.style.fontSize = '1.5rem';
    bird.style.pointerEvents = 'none';
    bird.style.zIndex = '1000';
    bird.style.transition = 'all 2s ease-out';
    bird.style.opacity = '0.8';
    
    document.body.appendChild(bird);
    
    // Random movement animation
    const randomX = e.clientX + (Math.random() - 0.5) * 200;
    const randomY = e.clientY + (Math.random() - 0.5) * 200;
    
    setTimeout(() => {
      bird.style.left = randomX + 'px';
      bird.style.top = randomY + 'px';
      bird.style.opacity = '0';
    }, 100);
    
    // Remove bird after animation
    setTimeout(() => {
      if (bird.parentNode) {
        bird.parentNode.removeChild(bird);
      }
    }, 2000);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      createFlyingBird(e);
    };

    section.addEventListener('mousemove', handleMouseMove);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef}>
      {children}
    </section>
  );
} 