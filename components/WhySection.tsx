
import React from 'react';
import { CheckCircle, Users, BookOpen, Mic } from 'lucide-react';

const WhySection: React.FC = () => {
  const points = [
    {
      icon: <Users className="text-purple-600" size={32} />,
      title: "Transformation First",
      text: "I've transformed my own journey from childhood cultural shame to cultural practitioner. I'm not teaching theory, I'm showing you the actual path home."
    },
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: "Global Community",
      text: "Helped thousands around the world learn about pre-Philippine culture through accessible digital education."
    },
    {
      icon: <BookOpen className="text-indigo-600" size={32} />,
      title: "Authoritative Knowledge",
      text: "Published over 10 books documenting the depth and breadth of our ancestral heritage."
    },
    {
      icon: <Mic className="text-pink-600" size={32} />,
      title: "Proven Impact",
      text: "Spoken at universities and museums around the world, bridging the gap between academia and practice."
    }
  ];

  return (
    <section id="why" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-900/10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
              Why learn from me?
            </h2>
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
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-8 border-white/5 relative group">
              <img 
                src="https://picsum.photos/seed/practitioner/800/1000" 
                alt="The Instructor" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-1">Founder of Balay School</p>
                <p className="text-3xl font-serif">A Voice for Heritage</p>
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
