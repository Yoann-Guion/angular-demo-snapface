import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  // (bang)! "promet" à TypeScript que les propriétés seront bien initialisées
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: string;
  ifSnap!: boolean;

  // Permet d'initialiser les propriétés de la classe
  ngOnInit(): void {
    this.title = 'Face Snap';
    this.description =
      'Face Snap is a simple application that allows you to take a picture of your face and save it to your device.';
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
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
    this.snaps--;
    this.ifSnap = false;
    this.snapButtonText = ' Oh Snap !';
  }

  snap() {
    this.snaps++;
    this.ifSnap = true;
    this.snapButtonText = 'Delete Snap :(';
  }
}
