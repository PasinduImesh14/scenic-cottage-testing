// app/gallery/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react"; // Make sure you have lucide-react installed

// --- CONFIGURATION ---
const TOTAL_IMAGES = 28; 

// Generate list automatically
const galleryImages = Array.from({ length: TOTAL_IMAGES }).map((_, i) => {
    return {
      id: i,
      src: `/images/gallery/${i + 1}.jpg`, 
      alt: `Scenic Cottage Gallery Image ${i + 1}`,
      className: i % 3 === 0 ? 'aspect-[3/4]' : i % 2 === 0 ? 'aspect-[4/3]' : 'aspect-square',
    };
});

const GalleryPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle Scroll Visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-green-500 selection:text-white">
       
       {/* --- HERO SECTION --- */}
       <div className="relative h-screen flex items-center justify-center">
          <Image 
            src="/images/gallery/gallery-hero.jpg" 
            alt="Gallery Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white font-medium mb-8 leading-tight drop-shadow-lg"
            >
              The Collection
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-100 max-w-xl mx-auto text-lg md:text-xl drop-shadow-md"
            >
              Explore the details. From the lush surroundings to the cozy interiors.
            </motion.p>
          </div>
       </div>

      {/* --- MASONRY GRID --- */}
      <div className="container mx-auto px-4 py-16">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className={`relative group rounded-xl overflow-hidden break-inside-avoid bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- BACK TO TOP BUTTON --- */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-green-600 text-white rounded-full shadow-2xl hover:bg-green-500 transition-colors focus:outline-none focus:ring-4 focus:ring-green-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;