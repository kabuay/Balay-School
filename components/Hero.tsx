
import React from 'react';

const Hero: React.FC = () => {
  const logoUrl = "https://raw.githubusercontent.com/kabuay/Balay-School/main/logo.png";

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase mb-8 border border-purple-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Full Launch: March 2026
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 font-serif">
            Rediscover the <br/>
            Philippines <span className="italic gradient-text">Within You.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-800 font-semibold mb-4 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Learn what you were never taught at home or in school.
          </p>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Balay School is a digital sanctuary for those seeking to unlearn misconceptions and embrace the deep cultural wisdom of the islands. Reconnect with your roots through ancestral writing and practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a 
              href="https://www.skool.com/balay-school-5230/about" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-balay-gradient text-white font-bold rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all text-center text-lg shadow-lg shadow-purple-200"
            >
              Get Early Access
            </a>
            <div className="text-slate-500 font-bold text-sm uppercase tracking-widest px-4">
              Coming in March, 2026!
            </div>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          {/* Animated Glow Aura */}
          <div className="absolute w-72 h-72 md:w-[450px] md:h-[450px] bg-balay-gradient rounded-full blur-[100px] opacity-20 animate-pulse"></div>
          
          {/* Logo Container with floating effect */}
          <div className="relative z-10 animate-float">
            <div className="p-6 md:p-10 bg-white/40 backdrop-blur-md rounded-[50px] border border-white/60 shadow-2xl transition-all hover:scale-[1.02]">
              <img 
                src={logoUrl} 
                alt="Balay School Official Logo" 
                className="w-full max-w-[300px] md:max-w-[450px] object-contain drop-shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=B+S&size=512&background=a855f7&color=fff';
                }}
              />
            </div>
          </div>

          {/* Decorative background blobs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl -z-10 animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
