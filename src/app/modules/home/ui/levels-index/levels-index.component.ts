import { Component, inject, OnInit } from '@angular/core';
import { QrGeneratorComponent } from '../components';
import { UserStore } from '../../../../core/store';
import { Level, Topic } from '@interfaces/questions';

@Component({
  selector: 'app-levels-index',
  templateUrl: './levels-index.component.html',
  styleUrls: ['./levels-index.component.css'],
  imports: [
    QrGeneratorComponent
  ],
})
export default class LevelsIndexComponent implements OnInit {

  readonly store = inject(UserStore);

  levels: Level[] = ['easy', 'medium', 'hard'];
  topics: Topic[] = ['optimization', 'limits', 'continuity', 'derivatives'];

  constructor() { }

  ngOnInit() {
  }

}
