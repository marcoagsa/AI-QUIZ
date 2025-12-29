import { Injectable } from '@angular/core';
import { GoogleGenAI } from '@google/genai';
import { environment } from 'src/environments/environment';

export interface AIQuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number;
}

export interface Prompt {
  topic: string;
  count: number | string | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class AiQuizService {
  private genAI = new GoogleGenAI({
    apiKey: environment.aiApiKey,
  });


  parseAIJson(text: string): AIQuizQuestion[] {
    const start = text.indexOf('[');
    const end = text.lastIndexOf(']');

    if (start === -1 || end === -1) {
      throw new Error('AI returned incomplete JSON');
    }

    return JSON.parse(text.slice(start, end + 1));
  }

  async generateQuestions(prompt: Prompt): Promise<AIQuizQuestion[]> {

    const contents = `You are a JSON generator.
    Return ONLY valid JSON.
    Do NOT include markdown, comments, explanations or extra text.
    Do NOT wrap the response in code fences.
    Escape all quotes inside strings.
    Use plain ASCII characters only.
    Generate EXACTLY ${prompt.count} quiz questions about "${prompt.topic}".
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

    const response = await this.genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
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

    const rawText = response.text ?? '';
    const questions = this.parseAIJson(rawText);

    return questions;
  }
}
