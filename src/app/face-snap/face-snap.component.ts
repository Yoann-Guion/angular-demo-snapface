import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  ifSnap!: boolean;

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
    console.log(this.faceSnap.snaps);
    this.ifSnap = false;
    this.snapButtonText = ' Oh Snap !';
  }

  snap() {
    this.faceSnap.addSnap();
    this.ifSnap = true;
    this.snapButtonText = 'Delete Snap :(';
    console.log(this.faceSnap.snaps);
  }
}
