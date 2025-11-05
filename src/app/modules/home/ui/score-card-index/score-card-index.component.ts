import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Base64Util } from '@shared/utils';

@Component({
  selector: 'app-score-card-index',
  templateUrl: './score-card-index.component.html',
  styleUrls: ['./score-card-index.component.css'],
  imports: [CommonModule],
})
export default class ScoreCardIndexComponent implements OnInit {
  @Input() score: number = 0;        // Puntaje actual
  @Input() maxScore: number = 100;   // Puntaje máximo
  title: string = 'Tu resultado ⚗️🧬🔬';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const name = params['n'] || '';
      const score = Number(Base64Util.decode(params['p']));
      const total = Number(Base64Util.decode(params['l']));

      this.score = score;
      this.maxScore = total;
      if (name) {
        this.title = `Tu resultado ${Base64Util.decode(name).trim().toUpperCase()}: 🧬`;
      }
    });
  }

  get percentage(): number {
    return (this.score / this.maxScore) * 100;
  }

  get feedback(): string {
    if (this.percentage >= 90) return '¡Excelente trabajo! 🌟';
    if (this.percentage >= 75) return '¡Muy bien hecho! 💪';
    if (this.percentage >= 50) return 'Vas por buen camino 👍';
    return 'Puedes mejorar, sigue intentando 💡';
  }

  get progressColor(): string {
    if (this.percentage >= 90) return 'bg-green-500';
    if (this.percentage >= 75) return 'bg-blue-500';
    if (this.percentage >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  }
}
