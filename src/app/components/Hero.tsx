'use client';

import { FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-hero-pattern bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      {/* Social Links - DESKTOP ONLY - HIDDEN ON MOBILE WITH DISPLAY NONE */}
      <div className="hidden md:block">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute left-4 md:left-8 bottom-16 md:bottom-32 flex flex-col items-center"
        >
          <div className="w-[1px] h-16 md:h-24 bg-white/30"></div>
          <div className="relative w-16 md:w-24 h-16 md:h-24 flex items-center">
            <span className="absolute rotate-90 transform -translate-y-1/2 -left-8 text-white/70 font-bold text-sm md:text-lg whitespace-nowrap">Follow us</span>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex flex-col space-y-4"
          >
            <a href="#" className="text-white hover:text-primary transition-colors duration-300">
              <FaInstagram className="w-5 h-5 md:w-[24px] md:h-[24px]" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors duration-300">
              <FaTwitter className="w-5 h-5 md:w-[24px] md:h-[24px]" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-16 md:mt-0">
        <div className="max-w-[950px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title text-sm md:text-lg tracking-[0.33em] font-extrabold mb-4 md:mb-8"
          >
            A Hiking guide
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="chronicle text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-semibold leading-[1.136] mb-6 md:mb-8"
          >
            Be prepared for the Mountains and beyond!
          </motion.h1>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="#scroll"
            className="flex items-center space-x-2 text-white group"
          >
            <span className="font-bold text-base md:text-lg">scroll down</span>
            <FaChevronRight className="w-3 h-3 md:w-[16px] md:h-[16px] group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>
      </div>

      {/* Slider Navigation - DESKTOP ONLY - HIDDEN ON MOBILE WITH DISPLAY NONE */}
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute right-4 md:right-8 bottom-16 md:bottom-32 flex flex-col items-center"
        >
          <div className="text-white/70 mb-2 md:mb-4 font-bold text-sm md:text-lg">Start</div>
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "12rem" }}
            transition={{ duration: 1, delay: 1.4 }}
            className="w-[2px] bg-white/30 relative"
          >
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "33.333%" }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="absolute top-0 w-full bg-white"
            ></motion.div>
          </motion.div>
          <div className="text-white mt-2 md:mt-4 font-bold text-sm md:text-lg">01</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 