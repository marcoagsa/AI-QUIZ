import { Component, inject, model, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  IonIcon,
  IonSegmentButton,
  IonSegment,
  IonSegmentView,
  IonSegmentContent,
  LoadingController,
  IonInput,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkOutline, closeOutline } from 'ionicons/icons';
import { QuizCardComponent } from '../components/quiz-card/quiz-card.component';
import {
  AIQuizQuestion,
  AiQuizService,
  Prompt,
} from '../services/ai-quiz-service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonInput,
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
    FormsModule,
  ],
})
export class HomePage {
  protected readonly aiQuizService = inject(AiQuizService);
  private readonly loadingCtrl = inject(LoadingController);
  private readonly platform = inject(Platform);

  segment = viewChild(IonSegment);
  checkWith = signal<boolean>(this.platform.width() > 480);
  questions = signal<AIQuizQuestion[]>([]);
  currentIndex = signal<number>(0);
  selectedIndex = signal<number | null>(null);
  score = signal<number>(0);
  finished = signal<boolean>(false);
  userAnswers = signal<number[]>([]);
  aiPrompt = model<Prompt>({
    topic: '',
    count: 1,
  });

  constructor() {
    addIcons({ checkmarkOutline, closeOutline });

    this.platform.width();

    console.log();
  }

  async loadQuiz() {
    const loading = await this.showLoading();
    try {
      this.questions.set(
        await this.aiQuizService.generateQuestions(this.aiPrompt())
      );

      loading.dismiss();

      this.changeSegment('quiz');
    } catch (error) {
      loading.dismiss();
    }
  }

  selectOption(i: number) {
    this.selectedIndex.set(i);
  }

  onSegmentChange(event: any) {
    const segmentValue = event.detail.value?.toString();
    this.changeSegment(segmentValue);
  }

  changeSegment(segment: string) {
    if (!this.segment()) return;

    this.segment()!.value = segment;
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
    this.questions.set([]);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
    });

    await loading.present();

    return loading;
  }
}
