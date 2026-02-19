import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Siz Farg'ona Xalqaro Turistik-Rekreatsion Zonasi bo'yicha mutaxassis maslahatchisiz. 
2026-yil 12-yanvardagi PQ-5-sonli Prezident qarori haqida barcha ma'lumotga egasiz.
Foydalanuvchilarga (potensial investorlarga) quyidagi masalalarda yordam berasiz:
1. Qaror mohiyati: 3 ta asosiy kafolat (Direksiya boshqaruvi, 30 yillik rejim, davlat hisobidan infratuzilma).
2. 5 ta hudud: Shohimardon, Yordon, Chimyon, Vodil va Avval.
3. Soliq imtiyozlari: 0% bojxona, pasaytirilgan foyda solig'i, 10 yillik bo'lib to'lash.
4. E-auksion orqali yer olish tartibi.

Javoblarni professional, aniq va do'stona tarzda, asosan o'zbek tilida bering. 
Qarorning huquqiy va iqtisodiy asoslarini tushuntirishga e'tibor qarating.
`;

export const getGeminiResponse = async (prompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Uzr, hozirda texnik nosozlik yuz berdi. Iltimos, keyinroq urinib ko'ring.";
  }
};
