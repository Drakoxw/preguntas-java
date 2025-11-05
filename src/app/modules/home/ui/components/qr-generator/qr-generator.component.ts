import { Level } from './../../../../../core/interfaces/questions';
import { Component, DOCUMENT, Inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { QRCodeComponent } from 'angularx-qrcode';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.css'],
  imports: [QRCodeComponent, FormsModule, ButtonModule, UpperCasePipe],
})
export class QrGeneratorComponent implements OnInit {
  @Input() level!: Level;
  qrSize: number = 256;
  qrData: string = 'hola mundo';

  currentUrl: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.currentUrl = this.document.location.origin;
  }

  ngOnInit() {
    if (this.level) {
      this.qrData = `${this.currentUrl}/ask?level=${this.level}`;
    }
  }
}
