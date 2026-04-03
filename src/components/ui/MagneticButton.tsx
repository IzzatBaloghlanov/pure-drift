"use client";

import React, { useRef, useState } from "react";
import { HTMLMotionProps, motion, useMotionValue, useTransform } from "framer-motion";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function MagneticButton({
  children,
  className = "",
  intensity = 0.5,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useTransform(x, (latest) => latest * intensity);
  const ySpring = useTransform(y, (latest) => latest * intensity);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    
    const centerPointX = left + width / 2;
    const centerPointY = top + height / 2;
    
    x.set(clientX - centerPointX);
    y.set(clientY - centerPointY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        x: xSpring,
        y: ySpring,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center transition-all ${className}`}
      {...props}
    >
      {/* Subdued internal active state for tactile feedback */}
      <motion.div
        animate={{
          scale: isHovered ? 0.98 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="w-full h-full absolute inset-0 -z-10 bg-white/5 rounded-[inherit] pointer-events-none"
      />
      {children}
    </motion.button>
  );
}
