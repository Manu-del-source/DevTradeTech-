import { GoogleGenAI } from "@google/genai";
import { products } from '../data/products';

// Note: In Vite, we use import.meta.env or the define plugin in vite.config.ts
// The vite.config.ts in this project defines 'process.env.GEMINI_API_KEY'
const apiKey = (process.env as any).GEMINI_API_KEY || "";
const client = new GoogleGenAI({ apiKey });

export async function getRecommendation(userInput: string) {
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return "Please configure your GEMINI_API_KEY in the .env file to use the AI Recommender.";
  }

  const productContext = JSON.stringify(products.map(p => ({
    name: p.name,
    category: p.category,
    price: p.price,
    description: p.description,
    specs: p.specs
  })));

  const prompt = `
    You are an expert hardware consultant for developers and traders.
    The user is asking for gear recommendations: "${userInput}"
    
    Here is our available catalog: ${productContext}
    
    Rules:
    1. If a product from our catalog matches their needs, recommend it specifically.
    2. Explain WHY it's good for their specific case.
    3. If none of our products fit well, describe what specs they should look for in the general market.
    4. Keep the tone professional, helpful, and concise.
    5. Format the output with bold headers and bullet points.
  `;

  try {
    const result = await client.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [prompt]
    });
    
    // The response structure might be different in this SDK
    return result.candidates?.[0]?.content?.parts?.[0]?.text || "No recommendation generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while generating your recommendation. Please try again later.";
  }
}
