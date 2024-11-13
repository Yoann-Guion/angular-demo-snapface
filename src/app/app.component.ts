import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FaceSnapListComponent} from './face-snap-list/face-snap-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FaceSnapListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {  }
