
import React from 'react';

const Footer: React.FC = () => {
  const logoUrl = "https://raw.githubusercontent.com/vinceallenz/vinceallenz.github.io/main/balay-logo.png";

  return (
    <footer className="bg-slate-50 py-16 border-t border-slate-200 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div>
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <img 
              src={logoUrl} 
              alt="Balay School Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-3xl font-black tracking-tighter">
              BALAY<span className="gradient-text">SCHOOL</span>
            </span>
          </div>
          <p className="text-slate-500 max-w-sm">
            Bridging the gap between our ancestors and the current generation through education, practice, and community.
          </p>
        </div>
        
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <span className="font-bold text-slate-900 uppercase text-xs tracking-widest">Platform</span>
            <a href="https://www.skool.com/balay-school-5230/about" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-purple-600">Join Skool</a>
            <a href="#learn" className="text-slate-600 hover:text-purple-600">Courses</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-slate-900 uppercase text-xs tracking-widest">Connect</span>
            <a href="https://www.instagram.com/balayschool" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-purple-600">Instagram</a>
            <a href="#" className="text-slate-600 hover:text-purple-600">Newsletter</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Balay School. All rights reserved. 
        </p>
        <div className="flex gap-6 text-slate-400 text-sm">
          <a href="#" className="hover:text-slate-600">Privacy Policy</a>
          <a href="#" className="hover:text-slate-600">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
