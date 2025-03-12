'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

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
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className={`relative flex items-center gap-32 ${isReversed ? 'flex-row-reverse' : ''}`}>
          <div className="relative w-[calc(50%-64px)]">
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
            className="w-[calc(50%-64px)]"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection; 