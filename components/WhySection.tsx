
import React from 'react';
import { PenTool, ShieldCheck, Globe, Star } from 'lucide-react';

const WhySection: React.FC = () => {
  const points = [
    {
      icon: <Star className="text-purple-600" size={32} />,
      title: "Pioneer Practitioner",
      text: "Kristian is a world-renowned artist and scholar specializing in pre-colonial scripts like Baybayin, bridging the gap between history and modern art."
    },
    {
      icon: <Globe className="text-blue-600" size={32} />,
      title: "Global Authority",
      text: "With over two decades of research, he has spoken at top universities and museums worldwide, advocating for the preservation of Philippine heritage."
    },
    {
      icon: <PenTool className="text-indigo-600" size={32} />,
      title: "Published Author",
      text: "Author of over 10 books dedicated to cultural identity, providing the definitive curriculum for modern students of Philippine culture."
    }
  ];

  // Using the raw version of the user-provided GitHub URL
  const founderPhotoUrl = "https://raw.githubusercontent.com/kabuay/Balay-School/main/kabuay.jpeg";

  return (
    <section id="why" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-900/10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Meet the Founder
            </h2>
            <h3 className="text-2xl font-bold text-purple-400 mb-8">Kristian Kabuay</h3>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed italic">
              "My mission is to transform cultural shame into cultural pride. Balay School is the culmination of my life's work—showing you the actual path home to our ancestral identity."
            </p>
            <div className="space-y-12">
              {points.map((point, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/10">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-8 border-white/5 relative group shadow-2xl">
              <img 
                src={founderPhotoUrl} 
                alt="Kristian Kabuay" 
                className="w-full h-full object-cover object-top bg-slate-800 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Kristian+Kabuay&size=512&background=a855f7&color=fff';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-1">Founder & Lead Instructor</p>
                <p className="text-3xl font-serif">Kristian Kabuay</p>
                <div className="mt-4 flex gap-4">
                   <span className="text-xs bg-white/10 px-2 py-1 rounded">Artist</span>
                   <span className="text-xs bg-white/10 px-2 py-1 rounded">Author</span>
                   <span className="text-xs bg-white/10 px-2 py-1 rounded">Practitioner</span>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-balay-gradient rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
