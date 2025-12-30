import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { topic, count } = req.body;

  if (!topic || !count) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const genAI = new GoogleGenAI({
    apiKey: process.env['GEMINI_API_KEY']!,
  });

  const contents = `You are a JSON generator.
                    Return ONLY valid JSON.
                    Do NOT include markdown, comments, explanations or extra text.
                    Do NOT wrap the response in code fences.
                    Escape all quotes inside strings.
                    Use plain ASCII characters only.
                    Generate EXACTLY ${count} quiz questions about "${topic}".
                    Rules:
                    - Output must be a single JSON array
                    - Each item must strictly follow this schema:
                    {
                      "id": number,
                      "question": string,
                      "options": string[],
                      "answer": number
                    }
                    - "id" must start at 1 and increment by 1
                    - "options" must contain exactly 4 short strings
                    - "answer" must be a zero-based index (0–3)
                    - Use concise questions and concise options
                    - Stop immediately after the closing ']'`;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              question: { type: 'string' },
              options: {
                type: 'array',
                items: { type: 'string' },
              },
              answer: { type: 'number' },
            },
            required: ['id', 'question', 'options', 'answer'],
          },
        },
        temperature: 0,
        maxOutputTokens: 2048,
      },
    });

    const json = response.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!json) {
      return res.status(500).json({ error: 'Empty AI response' });
    }

    res.status(200).json(JSON.parse(json));
  } catch (err) {
    res.status(500).json({ error: 'Gemini request failed' });
  }
}
