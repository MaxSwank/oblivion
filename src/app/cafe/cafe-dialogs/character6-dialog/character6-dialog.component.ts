import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor(private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Oblivion Cafe');
    this.metaService.updateTag({ name: 'description', content: 'Oblivion Cafe — Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:title', content: 'Oblivion Cafe — Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.oblivion.cafe/assets/img/BookCover.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.oblivion.cafe/cafe' });
    this.metaService.updateTag({ property: 'og:image:width', content: '975' });
    this.metaService.updateTag({ property: 'og:image:height', content: '1572' });
  }

  ngOnInit() {
  }

}
