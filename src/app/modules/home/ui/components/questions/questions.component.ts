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
  @Input() questions: IQuestion[] = [];
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
    return this.questions[this.currentIndex];
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
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.selectedOptionId = null;
      this.answered = false;
    }
  }

  get isLastQuestion(): boolean {
    return this.currentIndex === this.questions.length - 1;
  }

  updateQrData() {
    this.qrResultData.set('');
    setTimeout(() => {
      this.qrResultData.set(`${this.currentUrl}/score?n=${this.name ? Base64Util.encode(this.name) : ''}&p=${Base64Util.encode(this.score.toString())}&l=${Base64Util.encode(this.questions.length.toString())}`);
    }, 250);
  }

}
