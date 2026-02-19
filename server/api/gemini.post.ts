// server/api/gemini.post.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

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

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  try {
    const genAI = new GoogleGenerativeAI(config.geminiApiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash", // Hozirda barqaror versiya
      systemInstruction: SYSTEM_INSTRUCTION 
    });

    const result = await model.generateContent(body.prompt);
    const response = await result.response;
    
    return {
      text: response.text()
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "AI bilan bog'lanishda xatolik yuz berdi",
    });
  }
});