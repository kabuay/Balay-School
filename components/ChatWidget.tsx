
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Info } from 'lucide-react';
import { getCulturalContext } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: "Mabuhay! I am your Balay School Guide. Ask me a quick question about Philippine culture or pre-colonial heritage." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const botResponse = await getCulturalContext(userMsg);
    
    setMessages(prev => [...prev, { role: 'bot', text: botResponse || "I couldn't find the answer in the scrolls." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-80 md:w-96 h-[500px] bg-white rounded-3xl shadow-2xl mb-4 flex flex-col overflow-hidden border border-purple-100">
          {/* Header */}
          <div className="bg-balay-gradient p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Info size={16} />
              </div>
              <h4 className="font-bold">Cultural Guide</h4>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-purple-600 text-white rounded-br-none' 
                  : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2.5 rounded-2xl shadow-sm border border-slate-100 rounded-bl-none">
                  <Loader2 size={16} className="animate-spin text-purple-600" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex gap-2 bg-slate-100 rounded-full p-1 pl-4">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Baybayin..."
                className="flex-1 bg-transparent border-none outline-none text-sm py-2"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-balay-gradient text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-balay-gradient text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;
