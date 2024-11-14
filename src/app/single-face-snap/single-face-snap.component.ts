import { Component, Input, OnInit } from '@angular/core';
import {
  DatePipe,
  NgClass,
  NgStyle,
  TitleCasePipe,
} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {FaceSnap} from '../models/face-snap';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  snapButtonText!: string;
  ifSnap!: boolean

  constructor(private faceSnapsService : FaceSnapsService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap()
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

  private prepareInterface() {
    this.snapButtonText = ' Oh Snap !';
    this.ifSnap = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
}
