
import React from 'react';
import { PenTool, Heart, Palette, Globe } from 'lucide-react';

const WhatYouLearn: React.FC = () => {
  const curriculum = [
    {
      icon: <PenTool className="text-white" />,
      title: "Ancestral Scripts",
      desc: "Pre-Philippine writing: history, rules, controversies, and contextualizing it in modern times."
    },
    {
      icon: <Palette className="text-white" />,
      title: "The Batok Movement",
      desc: "Deep dive into the modern movement of traditional tattooing and its spiritual significance."
    },
    {
      icon: <Heart className="text-white" />,
      title: "The V+A=P Formula",
      desc: "My unique framework for sustainable cultural preservation that actually works in the 21st century."
    },
    {
      icon: <Globe className="text-white" />,
      title: "Cultural Storytelling",
      desc: "The art of narrative that creates emotional connection and sparks collective action."
    }
  ];

  return (
    <section id="learn" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">What You Will Learn</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our curriculum is designed to move you from curiosity to informed practitioner. 
            No gatekeeping, just pure cultural transmission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {curriculum.map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-purple-100 group">
              <div className="w-14 h-14 rounded-2xl bg-balay-gradient flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
