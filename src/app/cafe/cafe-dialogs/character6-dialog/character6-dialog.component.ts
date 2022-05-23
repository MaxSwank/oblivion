import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character6-dialog',
  templateUrl: './character6-dialog.component.html',
  styleUrls: ['./character6-dialog.component.scss']
})
export class Character6DialogComponent implements OnInit {
  slides = [
    {
      quote: '',
    },
    {
      intro: '',
      quote: '',
      author: '',
      title: '',
    },
    {
      quote: '',
    },
    {
      intro: '',
      quote: '',
    },
    {
      quote: '',
    },
    {
      intro: '',
      quote: '',
    },
    {
      quote: '',
    },
    {
      intro: '',
      quote: '',
    },
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }


  constructor() { }

  ngOnInit(): void {
  }

}
