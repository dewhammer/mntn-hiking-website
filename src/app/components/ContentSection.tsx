'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';

interface ContentSectionProps {
  number: string;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  isReversed?: boolean;
}

const ContentSection = ({
  number,
  subtitle,
  title,
  description,
  image,
  isReversed = false
}: ContentSectionProps) => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Mobile layout (stacked) */}
        <div className="md:hidden flex flex-col space-y-8">
          <div className="relative pt-10">
            <div className="absolute top-0 left-0 z-0">
              <span className="text-[100px] font-bold chronicle leading-none opacity-10">
                {number}
              </span>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="relative z-10 pt-4"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary font-gilroy text-sm tracking-widest font-bold mb-3 block uppercase"
              >
                {subtitle}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="chronicle text-3xl font-semibold leading-[1.136] mb-4 max-w-[300px]"
              >
                {title}
              </motion.h2>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/70 text-base font-medium leading-[1.778] mb-5"
            >
              {description}
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-primary font-gilroy font-bold text-base flex items-center gap-2 group"
            >
              read more 
              <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-2" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Desktop layout (side by side) */}
        <div className="hidden md:flex items-center gap-16 lg:gap-32 relative" 
             style={{ flexDirection: isReversed ? 'row-reverse' : 'row' }}>
          <div className="relative w-[calc(50%-32px)] lg:w-[calc(50%-64px)]">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute inset-0 overflow-visible pointer-events-none"
            >
              <span 
                className={`absolute text-[240px] font-bold chronicle leading-none
                  ${isReversed ? '-right-20 -top-24' : '-left-20 -top-24'}`}
              >
                {number}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary font-gilroy text-lg tracking-widest font-bold mb-6 block uppercase"
              >
                {subtitle}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="chronicle text-[64px] font-semibold leading-[1.136] mb-8 max-w-[460px]"
              >
                {title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/70 text-lg font-medium leading-[1.778] mb-8 max-w-[566px]"
              >
                {description}
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-primary font-gilroy font-bold text-lg flex items-center gap-2 group"
              >
                read more 
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </motion.button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-[calc(50%-32px)] lg:w-[calc(50%-64px)]"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection; 