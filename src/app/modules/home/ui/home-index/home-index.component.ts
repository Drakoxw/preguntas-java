import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VECTOR_QUESTIONS } from '@constants/questions';

import { QrGeneratorComponent, QuestionsComponent } from '@home-module/ui/components';
import { IQuestion, Level } from '@interfaces/questions';
import { MessageModule } from 'primeng/message';

type Severity = 'success' | 'info' | 'warn' | 'error';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.css'],
  imports: [
    QuestionsComponent,
    MessageModule,
    QrGeneratorComponent
  ],
})
export default class HomeIndexComponent {
  questions: IQuestion[] = [];
  level!: Level;

  titles:{ [key in Level]: { title: string, severity: Severity} } = {
    easy: { title: 'Nivel Fácil', severity: 'success' },
    medium: { title: 'Nivel Medio', severity: 'warn' },
    hard: { title: 'Nivel Difícil', severity: 'error' },
  }


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.level = params['level'];
      console.log('Nivel actual:', this.level);

      if (this.level && this.level in VECTOR_QUESTIONS) {
        this.questions = VECTOR_QUESTIONS[this.level];
      }
    });
  }

}
