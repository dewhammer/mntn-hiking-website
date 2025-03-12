'use client';

import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-4 bg-dark/95 backdrop-blur-sm' : 'py-6 md:py-8'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-bold chronicle tracking-[0.01em]">
          <span className="font-bold">M</span>
          <span className="font-bold">N</span>
          <span className="font-normal">T</span>
          <span className="font-bold">N</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="#equipment" className="nav-link text-white hover:text-primary transition-colors font-medium">Equipment</Link>
          <Link href="#about" className="nav-link text-white hover:text-primary transition-colors font-medium">About us</Link>
          <Link href="#blog" className="nav-link text-white hover:text-primary transition-colors font-medium">Blog</Link>
        </div>
        
        {/* Account Link (Desktop) */}
        <Link 
          href="/account" 
          className="hidden md:flex items-center space-x-2 text-white hover:text-primary transition-colors"
        >
          <span className="font-bold text-[17px]">Account</span>
          <FaChevronRight className="w-3 h-3" />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-dark/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-24`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-8">
          <Link 
            href="#equipment" 
            className="text-white text-2xl font-medium hover:text-primary transition-colors py-2"
            onClick={handleLinkClick}
          >
            Equipment
          </Link>
          <Link 
            href="#about" 
            className="text-white text-2xl font-medium hover:text-primary transition-colors py-2"
            onClick={handleLinkClick}
          >
            About us
          </Link>
          <Link 
            href="#blog" 
            className="text-white text-2xl font-medium hover:text-primary transition-colors py-2"
            onClick={handleLinkClick}
          >
            Blog
          </Link>
          <Link 
            href="/account" 
            className="text-white text-2xl font-medium hover:text-primary transition-colors py-2 flex items-center space-x-2"
            onClick={handleLinkClick}
          >
            <span>Account</span>
            <FaChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 