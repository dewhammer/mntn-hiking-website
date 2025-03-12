'use client';

import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrolled = () => {
      setScrolled(window.scrollY > 50);
      ticking = false;
    };

    const onScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrolled();
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-4 bg-dark/95 backdrop-blur-sm' : 'py-8'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold chronicle tracking-[0.01em]">
          <span className="font-bold">M</span>
          <span className="font-bold">N</span>
          <span className="font-normal">T</span>
          <span className="font-bold">N</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="#equipment" className="nav-link">Equipment</Link>
          <Link href="#about" className="nav-link">About us</Link>
          <Link href="#blog" className="nav-link">Blog</Link>
        </div>
        
        <Link 
          href="/account" 
          className="flex items-center space-x-2 text-white hover:text-primary transition-colors"
        >
          <span className="font-bold text-[17px]">Account</span>
          <FaChevronRight className="w-3 h-3" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 