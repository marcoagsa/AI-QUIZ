import { inject, Injectable } from '@angular/core';
import { GoogleGenAI } from '@google/genai';
import { environment } from 'src/environments/environment';
import { UtilService } from './util-service';

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
  private readonly utilService = inject(UtilService);
  private genAI = new GoogleGenAI({
    apiKey: environment.googleApiKey,
  });

  async generateQuestions(prompt: Prompt): Promise<AIQuizQuestion[]> {
    const response = await this.genAI.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `Generate quiz about ${prompt.topic} with exact ${prompt.count} questions .`,
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
      },
    });
    const rawText = response.text ?? '[]';

    const questions = JSON.parse(rawText);

    return questions || [];
  }
}
