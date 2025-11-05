import { Component, OnInit } from '@angular/core';
import { QrGeneratorComponent } from '../components';

@Component({
  selector: 'app-levels-index',
  templateUrl: './levels-index.component.html',
  styleUrls: ['./levels-index.component.css'],
  imports: [
    QrGeneratorComponent
  ],
})
export default class LevelsIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
