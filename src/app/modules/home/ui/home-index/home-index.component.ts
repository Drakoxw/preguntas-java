import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuestionsComponent } from '@home-module/ui/components';
import { IQuestion, Level, Topic } from '@interfaces/questions';
import { MessageModule } from 'primeng/message';
import { UserStore } from '../../../../core/store';
import { MATH_TRACKER, VECTOR_QUESTIONS, VECTOR_QUESTIONS_LOGIC_MASTER } from '@constants/index';

type Severity = 'success' | 'info' | 'warn' | 'error';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.css'],
  imports: [
    QuestionsComponent,
    MessageModule
  ],
})
export default class HomeIndexComponent {
  readonly store = inject(UserStore);
  questions: IQuestion[] = [];
  level!: Level;
  topic!: Topic;

  titles: { [key in Level]: { title: string, severity: Severity } } = {
    easy: { title: 'Nivel Fácil', severity: 'success' },
    medium: { title: 'Nivel Medio', severity: 'warn' },
    hard: { title: 'Nivel Difícil', severity: 'error' },
  }

  titlesTopics: { [key in Topic]: { title: string, severity: Severity } } = {
    optimization: { title: 'Optimización', severity: 'success' },
    limits: { title: 'Límites', severity: 'warn' },
    continuity: { title: 'Continuidad', severity: 'error' },
    derivatives: { title: 'Derivadas', severity: 'info' },
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.level = params['level'];
      this.topic = params['topic'];

      if (this.store.mode() === 'java') {
        if (this.level && this.level in VECTOR_QUESTIONS) {
          this.questions = VECTOR_QUESTIONS[this.level];
        }
      }
      if (this.store.mode() === 'logic-master') {
        if (this.level && this.level in VECTOR_QUESTIONS_LOGIC_MASTER) {
          this.questions = VECTOR_QUESTIONS_LOGIC_MASTER[this.level];
        }
      }
      if (this.store.mode() === 'tracker') {
        if (this.topic && this.topic in MATH_TRACKER) {
          this.questions = MATH_TRACKER[this.topic];
        }
      }
    });
  }

}
