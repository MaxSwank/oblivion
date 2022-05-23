import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character5-dialog',
  templateUrl: './character5-dialog.component.html',
  styleUrls: ['./character5-dialog.component.scss']
})
export class Character5DialogComponent implements OnInit {
  slides = [
    {
      quote: 'I perform ecstatic, mystic poems as ‘Yusof, Prince of Thebes.’ But at heart I’m really just a simple love poet.',
    },
    {
      intro: 'I overheard Junot telling someone that Oblivion is:',
      quote: 'A mesmerizing meditation on immortality, both the literary and fleshly kind and its ultimate unattainability … Like language, like summer, like love, Oblivion is irresistible.',
      author: 'Junot Díaz',
      title: 'Winner of the Pulitzer Prize for Fiction',
    },
    {
      quote: 'Józef is a good friend to me, but I suspect he is only interested in my work because Kafka came to see me perform a few times.',
    },
    {
      intro: 'Kim told me that Oblivion is:',
      quote: 'A delight to read … [E]very reader will appreciate the wonderful writing, the imaginative play between these worlds, and the serious exploration, just beneath the wildly entertaining surface, of the power of art to both shape us and sustain us.',
      author: 'Kim Edwards',
      title: 'Author of The Memory Keeper’s Daughter and The Lake of Dreams',
    },
    {
      quote: 'I understand Maudy has sold many books. Her work doesn’t speak to me personally, but I’ve been dead for many years.',
    },
    {
      intro: 'I overheard Sue saying that:',
      quote: 'Hemley’s masterful prose, and his willingness to completely inhabit this dream/world space, makes Oblivion a stunning and truly original book that not only succeeds on its own, but blazes a trail for other writers to follow.',
      author: 'Sue William Silverman',
      title: 'Author of How to Survive Death and Other Inconveniences',
    },
    {
      quote: 'New people are showing up all the time, so the café is always growing — but somehow we always seem to be short one chair.',
    },
    {
      intro: 'Xu Xi says that Oblivion is:',
      quote: 'Philosophical, engrossing and very, very funny, this book deserves its own shelf in libraries from here through eternity.  In particular for authors, minor or otherwise, this book is you.',
      author: 'Xu Xi',
      title: 'Author of That Man in Our Lives and Habit of a Foreign Sky',
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
