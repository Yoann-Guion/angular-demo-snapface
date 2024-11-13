import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import {

  DatePipe,

  NgClass,
  NgStyle,
  TitleCasePipe,

} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';

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

  constructor(private faceSnapsService : FaceSnapsService) {

  }

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
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.ifSnap = false;
    this.snapButtonText = ' Oh Snap !';
  }

  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.ifSnap = true;
    this.snapButtonText = 'Delete Snap :(';
  }
}
