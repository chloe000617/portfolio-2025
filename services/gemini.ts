import { GoogleGenAI } from "@google/genai";
import { PAGE_DATA } from "../data";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Chloe Li (李品逸), an AI Product Strategist and Product Manager.
Your goal is to answer visitor questions about Chloe's skills, experience, and projects based on her portfolio data.

Tone: Professional, insightful, confident, and helpful.
Key Strengths: Enterprise AI Solutions, Product Growth Strategy, Customer Research, Business Consulting.
Locations: Open to opportunities in Taiwan or Remote.

Context:
Chloe specializes in bridging the gap between business goals and technical execution.
She has experience with Smart Transportation (AI Agents), YouthBuild (Copilot Adoption), Taishin Bank (Fintech), and Johnson & Johnson (FMCG).

Rules:
1. Use the provided portfolio data to answer questions accurately.
2. If asked about specific projects, mention her role and the impact (e.g., revenue growth, efficiency).
3. If asked about contact info, direct them to the contact section or email chloe.li@example.com.
4. Keep answers concise (under 3 sentences unless asked for detail).
5. Do not make up projects not listed in the portfolio.

Portfolio Data Summary for reference:
${PAGE_DATA.projects.map(p => `- ${p.title} (${p.category}): ${p.summary}`).join('\n')}
`;

export async function getChatResponse(history: { role: string; text: string }[]) {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({
      message: history[history.length - 1].text,
    });
    
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}