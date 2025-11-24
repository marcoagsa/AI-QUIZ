import { Component, input, output } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonList,
  IonCardContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkOutline, closeOutline } from 'ionicons/icons';
import { QuizQuestion } from 'src/app/services/quiz-service';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonIcon,
    IonLabel,
    IonItem,
    IonCardContent,
    IonList,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
  ],
})
export class ScoreListComponent {
  questions = input.required<QuizQuestion[]>();
  userAnswers = input.required<number[]>();
  score = input.required<number>();
  restart = output<void>();

  constructor() {
    addIcons({ checkmarkOutline, closeOutline });
  }
}
