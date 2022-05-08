import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preorder-dialog',
  templateUrl: './preorder-dialog.component.html',
  styleUrls: ['./preorder-dialog.component.scss'],
})
export class PreorderDialogComponent implements OnInit {
  slides = [
    {
      quote: 'It always seems impossible until it\'s done.',
      author: 'Nelson Mandela',
      title: 'Title',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, asd asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf consectetur adipisicing elit. Illo eaque nihil ab qui voluptates',
      author: 'Author',
      title: 'Title',
    },
    {
      quote: 'test 3.',
      author: 'Author',
      title: 'Title',
    },
    {
      quote: 'test 4.',
      author: 'Author',
      title: 'Title',
    },
    {
      quote: 'test 5.',
      author: 'Author',
      title: 'Title',
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

  constructor() {}

  ngOnInit(): void {}
}
