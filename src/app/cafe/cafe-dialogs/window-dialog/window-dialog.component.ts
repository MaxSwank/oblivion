import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-window-dialog',
  templateUrl: './window-dialog.component.html',
  styleUrls: ['./window-dialog.component.scss']
})
export class WindowDialogComponent implements OnInit {
  images = [
    {
      path: '../../../../assets/img/window.jpg',
      caption: 'Caption: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque nihil ab qui voluptates',
    },
    {
      path: '../../../../assets/img/wall-bg.jpg',
      caption: 'Caption: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque nihil ab qui voluptates',
    },
    {
      path: '../../../../assets/img/temp-cafe.jpg',
      caption: 'Caption: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque nihil ab qui voluptates',
    },
    {
      path: '../../../../assets/img/temp-book-cover.jpg',
      caption: 'Caption: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque nihil ab qui voluptates',
    },
    {
      path: '../../../../assets/img/temp-building.png',
      caption: 'Caption: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque nihil ab qui voluptates',
    },
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  constructor() { }

  ngOnInit() {
  }

}
