import { Component, input, output } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonButton,
} from '@ionic/angular/standalone';
import { QuizQuestion } from 'src/app/services/quiz-service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonList,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonButton,
  ],
  standalone: true,
})
export class QuizCardComponent {
  currentIndex = input.required<number>();
  questions = input.required<QuizQuestion[]>();
  selectedIndex = input.required<number | null>();
  submitAnswerEvent = output();
  selectOptionEvent = output<number>();

  selectOption(index: number, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.selectOptionEvent.emit(index);
  }
}
