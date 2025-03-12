'use client';

const Footer = () => {
  return (
    <footer className="bg-dark py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-24">
          {/* Logo and Description */}
          <div className="md:col-span-5">
            <div className="text-2xl md:text-[32px] chronicle tracking-[0.01em] mb-4 md:mb-6">
              <span className="font-bold">M</span>
              <span className="font-bold">N</span>
              <span className="font-normal">T</span>
              <span className="font-bold">N</span>
            </div>
            <p className="text-white/70 text-base md:text-lg font-medium leading-[1.778] max-w-[303px]">
              Get out there & discover your next slope, mountain & destination!
            </p>
          </div>

          {/* More on The Blog */}
          <div className="md:col-span-4 md:pl-0 lg:pl-8">
            <h3 className="text-primary chronicle text-xl md:text-2xl font-bold mb-4 md:mb-6">More on The Blog</h3>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="text-white hover:text-primary transition-colors text-base md:text-lg font-medium">About MNTN</a></li>
              <li><a href="#" className="text-white hover:text-primary transition-colors text-base md:text-lg font-medium">Contributors & Writers</a></li>
              <li><a href="#" className="text-white hover:text-primary transition-colors text-base md:text-lg font-medium">Write For Us</a></li>
              <li><a href="#" className="text-white hover:text-primary transition-colors text-base md:text-lg font-medium">Contact Us</a></li>
              <li><a href="#" className="text-white hover:text-primary transition-colors text-base md:text-lg font-medium">Privacy Policy</a></li>
            </ul>
          </div>

          {/* More on MNTN */}
          <div className="md:col-span-3">
            <h3 className="text-primary chronicle text-xl md:text-2xl font-bold mb-4 md:mb-6">More on MNTN</h3>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="text-white hover:text-primary transition-colors text-base md:text-lg font-medium">The Team</a></li>
              <li><a href="#" className="text-white hover:text-primary transition-colors text-base md:text-lg font-medium">Jobs</a></li>
              <li><a href="#" className="text-white hover:text-primary transition-colors text-base md:text-lg font-medium">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 md:mt-24 text-white/50 text-sm md:text-lg font-medium">
          Copyright 2024 MNTN, Inc. Terms & Privacy
        </div>
      </div>
    </footer>
  );
};

export default Footer; 