// app/components/Home/Hero/Hero.tsx
"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link"; 

const Hero = () => {
  return (
    // CHANGED: h-[120vh] -> h-[100svh] to fit mobile screen exactly without scroll
    <div className="relative w-full h-[100svh] sm:h-[100vh] overflow-hidden pt-20 sm:pt-[10vh]">
      {/* Background Video */}
      <video
        src="/video/hero.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col h-full px-4 py-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 text-white">
        
        {/* --- TOP SECTION: HEADLINE --- */}
        <div className="mt-4 sm:mt-0">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-sfpro font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text drop-shadow-[0_4px_5px_rgba(0,0,0,0.3)]"
            >
              Your Perfect Getaway <br /> Awaits in Sigiriya
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "125px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-green-500 mt-4 mb-2 sm:mb-6"
            />
        </div>

        {/* --- BOTTOM SECTION: GRID --- */}
        {/* CHANGED: gap-8 -> gap-4 (Mobile) to save space. mb-12 -> mb-4 to pull it up. */}
        <div className="mt-auto mb-4 sm:mb-12 lg:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 items-end lg:items-start">
            
            {/* LEFT COLUMN (Desktop) / BOTTOM ITEM (Mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="
                order-2 lg:order-1
                w-full 
                max-w-lg 
                backdrop-blur-md 
                bg-black/50 
                border border-white/10 
                rounded-2xl 
                p-5 sm:p-8  /* Reduced padding on mobile */
                shadow-2xl
              "
            >
              <div className="flex flex-col gap-3 sm:gap-5">
                <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">See it for yourself</h3>
                    <p className="text-gray-200 text-xs sm:text-sm sm:text-base leading-relaxed">
                       Discover the lush interiors, scenic views, and cozy atmosphere that await you.
                    </p>
                </div>

                <Link href="/gallery" className="w-full">
                    <button className="
                      group 
                      w-full 
                      py-3 sm:py-3.5 
                      bg-green-600 
                      hover:bg-green-500 
                      text-white 
                      font-bold 
                      text-sm sm:text-lg
                      rounded-xl
                      transition-all 
                      duration-300 
                      shadow-lg 
                      hover:shadow-green-500/30 
                      flex items-center justify-center gap-2
                    ">
                      Explore Cabanas
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT COLUMN (Desktop) / TOP ITEM (Mobile) */}
            <motion.div
              className="order-1 lg:order-2 flex items-start justify-start lg:justify-end"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
               <div className="flex items-start max-w-md">
                  <motion.div
                    className="w-1 bg-green-500 mr-3 sm:mr-4 origin-bottom h-16 sm:h-20 lg:h-32 flex-shrink-0"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                  <div className="space-y-2 sm:space-y-3">
                    <motion.p className="font-sfpro font-bold text-lg sm:text-xl lg:text-3xl leading-snug">
                      Experience the best cabana lodging near Sigiriya, crafted for your perfect escape.
                    </motion.p>
                    <motion.p className="font-sfpro font-medium text-xs sm:text-sm lg:text-lg text-gray-200 leading-relaxed">
                      No need to worry, your satisfaction is our top priority.
                    </motion.p>
                  </div>
               </div>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;