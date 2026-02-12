
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCulturalContext = async (query: string) => {
  if (!process.env.API_KEY) return "The cultural guide is currently offline. Please check back later!";
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are the Balay School Cultural Guide. You provide concise, respectful, and educational information about Philippine culture, heritage, and pre-colonial history. 
        
        Themes: 
        1. Baybayin (pre-colonial writing)
        2. Batok (traditional tattooing)
        3. Ancestral wisdom
        4. V+A=P formula (Values + Action = Preservation)

        Keep responses under 100 words. Encourage the user to join Balay School for deeper learning. 
        Tone: Welcoming, grounded, and proud.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a ripple in the timeline. Let's try again shortly.";
  }
};
