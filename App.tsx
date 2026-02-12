
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import WhatYouLearn from './components/WhatYouLearn';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Decorative Blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/50 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-pink-200/50 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-indigo-200/50 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <WhySection />
        <WhatYouLearn />
        
        {/* Final CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-12 shadow-xl border border-purple-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-balay-gradient opacity-10 rounded-bl-full"></div>
             <h2 className="text-4xl font-bold mb-6 font-serif">Ready to start your path home?</h2>
             <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
               Join thousands of learners worldwide and rediscover the Philippine culture you were never taught.
             </p>
             <a 
               href="https://www.skool.com/balay-school-5230/about" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block px-10 py-5 bg-balay-gradient text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
             >
               Enroll in Balay School Now
             </a>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* AI Cultural Guide Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;
