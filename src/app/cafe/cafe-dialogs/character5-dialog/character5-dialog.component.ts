import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character5-dialog',
  templateUrl: './character5-dialog.component.html',
  styleUrls: ['./character5-dialog.component.scss']
})
export class Character5DialogComponent implements OnInit {
  slides = [
    {
      quote: 'It always seems impossible until it\'s done.',
      author: 'Nelson Mandela',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, asd asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf consectetur adipisicing elit. Illo eaque nihil ab qui voluptates',
      author: 'Author',
    },
    {
      quote: 'test 3.',
      author: 'Author',
    },
    {
      quote: 'test 4.',
      author: 'Author',
    },
    {
      quote: 'test 5.',
      author: 'Author',
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
