import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall-dialog',
  templateUrl: './wall-dialog.component.html',
  styleUrls: ['./wall-dialog.component.scss']
})
export class WallDialogComponent implements OnInit {
  authors = [
    {
      path: '../../../../assets/img/author3.png',
      name: 'Leon “Smoky” Dilletanti',
    },
    {
      path: '../../../../assets/img/author4.png',
      name: 'Saffron Segovia',
    },
    {
      path: '../../../../assets/img/author5.png',
      name: 'Carl Winterhoven ',
    },
    {
      path: '../../../../assets/img/author1.png',
      name: 'Karl Muller',
    },
    {
      path: '../../../../assets/img/author6.jpg',
      name: 'Johannes Schlaf',
    },
    {
      path: '../../../../assets/img/author7.png',
      name: 'Gary Katsarida',
    },
    {
      path: '../../../../assets/img/character5.png',
      name: 'Maudy Gammitt',
    },
    {
      path: '../../../../assets/img/author2.jpg',
      name: 'Else Lasker-Schuler',
    },
    {
      path: '../../../../assets/img/author8.png',
      name: 'Jozef Wozek',
    },
    {
      path: '../../../../assets/img/character6.png',
      name: 'Yitzhak Lowy',
    }
  ]
  
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  constructor() { }

  ngOnInit() {
  }

}
