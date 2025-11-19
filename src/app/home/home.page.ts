import { Component, inject, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonCardContent,
  IonCheckbox,
  IonIcon,
  IonSegmentButton,
  IonSegment,
  IonSegmentView,
  IonSegmentContent,
} from '@ionic/angular/standalone';
import { QuizQuestion, QuizService } from '../services/quiz-service';
import { addIcons } from 'ionicons';
import { checkmarkOutline, closeOutline } from 'ionicons/icons';
import { QuizCardComponent } from '../components/quiz-card/quiz-card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonSegmentContent,
    IonSegmentView,
    IonSegment,
    IonSegmentButton,
    IonIcon,
    IonCardContent,
    IonButton,
    IonLabel,
    IonItem,
    IonList,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    QuizCardComponent,
  ],
})
export class HomePage {
  protected readonly quizService = inject(QuizService);

  questions = signal<QuizQuestion[]>(
    this.quizService.getQuestions('firstPack')
  );

  currentIndex = signal<number>(0);
  selectedIndex = signal<number | null>(null);
  score = signal<number>(0);
  finished = signal<boolean>(false);
  userAnswers = signal<number[]>([]);

  constructor() {
    addIcons({ checkmarkOutline, closeOutline });
  }

  selectOption(i: number) {
    this.selectedIndex.set(i);
  }

  onSegmentChange(event: any) {
    const segmentValue = event.detail.value?.toString();
    this.questions.set(this.quizService.getQuestions(segmentValue));
  }

  submitAnswer() {
    if (this.selectedIndex() === null) return;
    const q = this.questions()[this.currentIndex()];

    this.userAnswers.update((answers) => {
      const newAnswers = [...answers];
      newAnswers[this.currentIndex()] = this.selectedIndex() ?? 0;
      return newAnswers;
    });

    if (this.selectedIndex() === q.answer) this.score.update((v) => ++v);

    this.selectedIndex.set(null);

    if (this.currentIndex() < this.questions().length - 1) {
      this.currentIndex.update((v) => ++v);
    } else {
      this.finished.set(true);
    }
  }

  restart() {
    this.currentIndex.set(0);
    this.selectedIndex.set(null);
    this.score.set(0);
    this.finished.set(false);
    this.userAnswers.set([]);
    this.questions.set(this.quizService.getQuestions('1'));
  }
}
