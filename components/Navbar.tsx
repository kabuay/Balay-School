
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const logoUrl = "https://raw.githubusercontent.com/kabuay/Balay-School/main/logo.png";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img 
            src={logoUrl} 
            alt="Balay School Logo" 
            className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Balay+School&background=a855f7&color=fff';
            }}
          />
          <span className="text-xl md:text-2xl font-black tracking-tighter">
            BALAY<span className="gradient-text">SCHOOL</span>
          </span>
        </div>
        
        <div className="flex gap-4 md:gap-8 items-center font-semibold text-slate-700">
          <a 
            href="https://www.skool.com/balay-school-5230/about" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 md:px-7 md:py-3 bg-balay-gradient text-white rounded-full hover:shadow-xl hover:brightness-110 transition-all text-sm md:text-base font-bold"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
