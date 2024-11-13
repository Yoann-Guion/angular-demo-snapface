import {Component, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {FaceSnapComponent} from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis tout petit !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        8
      ),
      new FaceSnap(
        'Mr Plop',
        'Mon pote de la fac',
        'https://img.freepik.com/vecteurs-libre/plop-pop-art-comic-speech-bubbles-livre-effets-sonores_1142-9509.jpg',
        new Date(),
        25
      ),
      new FaceSnap(
        'Mme Plop',
        'La femme de Mr Plop',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/%28Venice%29_Peplophoros_in_the_Museo_archeologico_nazionale.jpg/1200px-%28Venice%29_Peplophoros_in_the_Museo_archeologico_nazionale.jpg',
        new Date(),
        3205
      ),
    ];
  }
}