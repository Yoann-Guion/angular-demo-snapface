import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {SnapType} from '../models/snap-type.type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
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
    ).withLocation('là-bas'),
    new FaceSnap(
      'Mme Plop',
      'La femme de Mr Plop',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/%28Venice%29_Peplophoros_in_the_Museo_archeologico_nazionale.jpg/1200px-%28Venice%29_Peplophoros_in_the_Museo_archeologico_nazionale.jpg',
      new Date(),
      3205
    ),
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap: FaceSnap | undefined = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap : FaceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }

}
