"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ProductCard } from "@/components/ui/ProductCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

import goldCan from "@/assets/gold.png";
import silverCan from "@/assets/arctic breeze.png";
import redCan from "@/assets/red.png";
import threeBottles from "@/assets/3bottles.png";
import { useRef } from "react";

// Use the local splash image directly if available, otherwise fallback.
const heroSplash = "/hero-splash.png";

const FLAVORS = [
  {
    id: "gold",
    title: "Signature Gold",
    subtitle: "Classic Lemon & Honey",
    colorName: "Gold Edition",
    themeColor: "#FFD700",
    imageSrc: goldCan
  },
  {
    id: "silver",
    title: "Arctic Breeze",
    subtitle: "Mint & White Tea",
    colorName: "Silver Edition",
    themeColor: "#A6CFD5",
    imageSrc: silverCan
  },
  {
    id: "red",
    title: "Crimson Berry",
    subtitle: "Pomegranate & Hibiscus",
    colorName: "Red Edition",
    themeColor: "#D32F2F",
    imageSrc: redCan
  }
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="w-full relative selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-white" ref={containerRef}>
      
      {/* ---------- IMMERSIVE HERO SECTION ---------- */}
      <section id="home" className="relative w-full min-h-[100dvh] pt-32 pb-16 px-6 md:px-12 flex flex-col items-center max-w-[1600px] mx-auto">
        
        {/* Massive Typography */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="text-center z-20 mb-8 md:mb-12 mt-12 md:mt-0"
        >
          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] font-bold tracking-tighter leading-[0.85] text-zinc-900 dark:text-white"
          >
            LIQUID
            <br />
            <span className="text-zinc-400 dark:text-zinc-500">PERFECTION.</span>
          </motion.h1>
        </motion.div>

        {/* Action Buttons floating overlapping the image slightly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 z-30 mb-8"
        >
          <a href="#collection">
            <MagneticButton intensity={0.4} className="bg-zinc-900 text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-medium text-sm tracking-wide shadow-2xl">
              Explore Collection
            </MagneticButton>
          </a>
          <a href="#about">
            <MagneticButton intensity={0.2} className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white px-8 py-4 rounded-full font-medium text-sm tracking-wide shadow-xl hover:bg-zinc-100 dark:hover:bg-zinc-800">
              Read Our Story
            </MagneticButton>
          </a>
        </motion.div>

        {/* Cinematic Framed Image Container */}
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex-1 min-h-[50vh] md:min-h-[70vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-2xl border border-zinc-200 dark:border-white/5 z-10 bg-zinc-100 dark:bg-zinc-900"
        >
          <motion.div style={{ scale: imageScale }} className="absolute inset-0">
            <Image 
              src="/hero-splash.png" 
              alt="Pure Drift Splash" 
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
              className="absolute inset-0"
            />
          </motion.div>
          {/* Subtle gradient overlay to blend corners if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent pointer-events-none" />
        </motion.div>

      </section>

      {/* ---------- COLLECTION SECTION ---------- */}
      <section id="collection" className="w-full pt-32 pb-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto scroll-m-24 z-20 relative bg-zinc-50 dark:bg-zinc-950">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-zinc-900 dark:text-white">The Collection</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-sm text-sm">Three signature variants, mathematically balanced for the perfect sip.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLAVORS.map((flavor, i) => (
            <ProductCard 
              key={flavor.id}
              title={flavor.title}
              subtitle={flavor.subtitle}
              colorName={flavor.colorName}
              themeColor={flavor.themeColor}
              imageSrc={flavor.imageSrc}
              delay={0.1 * i}
            />
          ))}
        </div>
      </section>

      {/* ---------- ABOUT SECTION ---------- */}
      <section id="about" className="w-full py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto scroll-m-24 border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <p className="text-sm font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-zinc-300 dark:bg-zinc-600 block" /> Origins
            </p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-zinc-900 dark:text-white leading-tight">
              Redefining <br/> Refreshment.
            </h2>
            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 max-w-[50ch] text-base md:text-lg leading-relaxed">
              <p>
                Pure Drift began with a singular obsession: to elevate the standard iced tea experience from a casual drink to a meticulously balanced sensory event.
              </p>
              <p>
                We source only the highest grade leaves, extracting flavor at precisely controlled temperatures. No artificial syrups, no overwhelming sugars. Just the pure, unadulterated essence of the blend, chilled to perfection.
              </p>
              <p className="text-zinc-900 dark:text-white pt-4 font-medium italic">
                "It's not just tea. It's liquid precision."
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 w-full aspect-[4/5] bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-white/5 relative overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-white to-zinc-100 dark:from-zinc-950 dark:to-zinc-800 opacity-80" />
            <div className="z-10 relative w-full h-full flex items-center justify-center">
               <Image src={threeBottles} alt="Pure Mix Cans" className="object-contain w-full h-full drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT SECTION ---------- */}
      <section id="contact" className="w-full py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto scroll-m-24 border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-mono tracking-widest uppercase text-zinc-600 dark:text-zinc-500 mb-4">Inquiries</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-zinc-900 dark:text-white">Let's Connect.</h2>
          </div>

          <form className="space-y-8 bg-white dark:bg-zinc-900/50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-200 dark:border-white/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-zinc-500 dark:text-zinc-400 font-medium ml-1">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Evelyn Carter"
                  className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition-colors w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-zinc-500 dark:text-zinc-400 font-medium ml-1">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="evelyn@example.com"
                  className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition-colors w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm text-zinc-500 dark:text-zinc-400 font-medium ml-1">Subject</label>
              <select 
                id="subject"
                className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition-colors appearance-none w-full"
              >
                <option value="wholesale">Wholesale Inquiry</option>
                <option value="press">Press & Media</option>
                <option value="general">General Support</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-zinc-500 dark:text-zinc-400 font-medium ml-1">Message</label>
              <textarea 
                id="message"
                rows={5}
                placeholder="How can we assist you?"
                className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition-colors resize-none w-full"
              />
            </div>

            <div className="pt-4 flex justify-end">
              <MagneticButton intensity={0.2} className="bg-zinc-900 text-white dark:bg-white dark:text-black px-8 py-3 rounded-xl font-medium tracking-wide">
                Send Message
              </MagneticButton>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
