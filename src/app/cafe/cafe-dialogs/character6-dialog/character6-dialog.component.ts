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
            clue: '',
      author: '',
      title: '',
    },
    {
      quote: '',
    },
    {
      intro: '',
      quote: '',
            clue: '',
    },
    {
      quote: '',
    },
    {
      intro: '',
      quote: '',
            clue: '',
    },
    {
      quote: '',
    },
    {
      intro: '',
      quote: '',
            clue: '',
    },
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  constructor() { }

  ngOnInit() {
  }

}
