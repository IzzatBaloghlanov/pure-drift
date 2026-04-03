"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  title: string;
  subtitle: string;
  colorName: string;
  themeColor: string;
  imageSrc: StaticImageData;
  delay?: number;
}

export function ProductCard({ title, subtitle, colorName, themeColor, imageSrc, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay }}
      className={`group relative flex flex-col justify-between p-8 min-h-[450px] w-full rounded-[2.5rem] bg-white dark:bg-zinc-950 overflow-hidden border border-zinc-200 dark:border-white/5`}
    >
      {/* Dynamic Background Glow */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-700 ease-in-out pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${themeColor}40 0%, transparent 70%)`
        }}
      />
      
      {/* Content Area */}
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-1">
              {title}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {subtitle}
            </p>
          </div>
          <p className="text-xs font-mono px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
            {colorName}
          </p>
        </div>
      </div>

      {/* Actual Can Image */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 aspect-[1/2] flex items-center justify-center pointer-events-none drop-shadow-2xl"
      >
        <Image src={imageSrc} alt={`${colorName} Product`} className="object-contain w-full h-full" />
      </motion.div>

      {/* Action Area Removed for Landing Page */}
      <div className="mt-auto pt-6" />
    </motion.div>
  );
}
