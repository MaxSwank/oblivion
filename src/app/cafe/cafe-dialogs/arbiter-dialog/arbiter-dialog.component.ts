import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arbiter-dialog',
  templateUrl: './arbiter-dialog.component.html',
  styleUrls: ['./arbiter-dialog.component.scss']
})
export class ArbiterDialogComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
