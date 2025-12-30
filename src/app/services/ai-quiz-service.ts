import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

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
  private readonly http = inject(HttpClient);

  generateQuestions(prompt: Prompt): Promise<AIQuizQuestion[]> {
    return firstValueFrom(this.http.post<AIQuizQuestion[]>('/api/quiz', prompt));
  }
}
