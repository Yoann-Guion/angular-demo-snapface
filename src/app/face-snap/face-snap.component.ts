import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import {
  CurrencyPipe,
  DatePipe, DecimalPipe,
  LowerCasePipe,
  NgClass,
  NgStyle, PercentPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  ifSnap!: boolean
  myLargeNumber : number = 47;

  // Permet d'initialiser les propriétés de la classe
  ngOnInit(): void {
    this.snapButtonText = ' Oh Snap !';
    this.ifSnap = false;
  }

  onSnap(): void {
    if (!this.ifSnap) {
      this.snap();
    } else {
      this.unSnap();
    }
  }

  unSnap() {
    this.faceSnap.removeSnap();
    this.ifSnap = false;
    this.snapButtonText = ' Oh Snap !';
  }

  snap() {
    this.faceSnap.addSnap();
    this.ifSnap = true;
    this.snapButtonText = 'Delete Snap :(';
  }
}
