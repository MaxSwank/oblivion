import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor(private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Arbiter');
    this.metaService.updateTag({ name: 'description', content: 'Arbiter — Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:title', content: 'Arbiter — Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.oblivion.cafe/assets/img/BookCover.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.oblivion.cafe/cafe/arbiter' });
    this.metaService.updateTag({ property: 'og:image:width', content: '975' });
    this.metaService.updateTag({ property: 'og:image:height', content: '1572' });
  }

  ngOnInit(): void {
  }

}
