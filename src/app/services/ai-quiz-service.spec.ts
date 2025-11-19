import { TestBed } from '@angular/core/testing';

import { AiQuizService } from './ai-quiz-service';

describe('AiQuizService', () => {
  let service: AiQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
