import { CommonModule } from '@angular/common';
import { Component, DOCUMENT, Inject, Input, signal } from '@angular/core';
import { IQuestion } from '@interfaces/questions';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { QRCodeComponent } from 'angularx-qrcode';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Base64Util } from '@shared/utils';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  imports: [CommonModule, ConfirmDialogModule, ButtonModule, DialogModule, FormsModule, QRCodeComponent, InputTextModule, FloatLabel]
})
export class QuestionsComponent {
  @Input() lengthToShow: number = 5;
  @Input() set questions(data: IQuestion[]) {
    this._questions.set(this.filterRandomQuestions(data))
  }
  _questions = signal<IQuestion[]>([]);
  public visible = false;

  currentIndex = 0;
  selectedOptionId: string | null = null;
  score = 0;
  answered = false;
  result: boolean;
  qrResultData = signal('');
  name: string | null = null;

  currentUrl: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.currentUrl = this.document.location.origin;
  }

  get currentQuestion(): IQuestion {
    return this._questions()[this.currentIndex];
  }

  onSelectOption(optionId: string) {
    if (this.answered) return;

    this.selectedOptionId = optionId;
    this.answered = true;

    if (optionId === this.currentQuestion.correctAnswerId) {
      this.score++;
    }
  }

  showDialog() {
    this.visible = true;
  }

  showResultDialog() {
    this.result = true;
  }

  nextQuestion() {
    if (this.currentIndex < this._questions().length - 1) {
      this.currentIndex++;
      this.selectedOptionId = null;
      this.answered = false;
    }
  }

  get isLastQuestion(): boolean {
    return this.currentIndex === this._questions().length - 1;
  }

  updateQrData() {
    this.qrResultData.set('');
    const name = `${this.name ? Base64Util.encode(this.name) : ''}`;
    const score = `${Base64Util.encode(this.score.toString())}`;
    const length = `${Base64Util.encode(this._questions().length.toString())}`;
    setTimeout(() => {
      this.qrResultData.set(`${this.currentUrl}/score?n=${name}&p=${score}&l=${length}`);
    }, 250);
  }

  /** Mezcla las preguntas y genera una lista aleatoria */
  filterRandomQuestions(data: IQuestion[]): IQuestion[] {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, this.lengthToShow);
  }

}
