import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character5-dialog',
  templateUrl: './character5-dialog.component.html',
  styleUrls: ['./character5-dialog.component.scss']
})
export class Character5DialogComponent implements OnInit {
  infoVisible: boolean = false;
  
  slides = [
    {
      intro: '',
      quote: '',
      clue: 'I perform ecstatic, mystic poems as ‘Yusof, Prince of Thebes.’ But at heart I’m really just a simple love poet.',
      author: '',
      title: ''
    },
    {
      intro: 'I overheard <strong>Junot</strong> telling someone that <em>Oblivion</em> is:',
      quote: 'A mesmerizing meditation on immortality, both the literary and fleshly kind and its ultimate unattainability … Like language, like summer, like love, <em>Oblivion</em> is irresistible.',
      clue: '',
      author: 'Junot Díaz',
      title: 'Winner of the Pulitzer Prize for Fiction'
    },
    {
      intro: '',
      quote: '',
      clue: 'Józef is a good friend to me, but I suspect he is only interested in my work because Kafka came to see me perform a few times.',
      author: '',
      title: ''
    },
    {
      intro: '<strong>Kim</strong> told me that <em>Oblivion</em> is:',
      quote: 'A delight to read … [E]very reader will appreciate the wonderful writing, the imaginative play between these worlds, and the serious exploration, just beneath the wildly entertaining surface, of the power of art to both shape us and sustain us.',
      clue: '',
      author: 'Kim Edwards',
      title: 'Author of <em>The Memory Keeper’s Daughter</em> and <em>The Lake of Dreams</em>'
    },
    {
      intro: '',
      quote: '',
      clue: 'I understand Maudy has sold many books. Her work doesn’t speak to me personally, but I’ve been dead for many years.',
      author: '',
      title: ''
    },
    {
      intro: 'I overheard <strong>Sue</strong> saying that:',
      quote: 'Hemley’s masterful prose, and his willingness to completely inhabit this dream/world space, makes <em>Oblivion</em> a stunning and truly original book that not only succeeds on its own, but blazes a trail for other writers to follow.',
      clue: '',
      author: 'Sue William Silverman',
      title: 'Author of <em>How to Survive Death and Other Inconveniences</em>'
    },
    {
      intro: '',
      quote: '',
      clue: 'New people are showing up all the time, so the café is always growing — but somehow we always seem to be short one chair.',
      author: '',
      title: ''
    },
    {
      intro: '<strong>Xu Xi</strong> says that <em>Oblivion</em> is:',
      quote: 'Philosophical, engrossing and very, very funny, this book deserves its own shelf in libraries from here through eternity.  In particular for authors, minor or otherwise, this book is you.',
      clue: '',
      author: 'Xu Xi',
      title: 'Author of <em>That Man in Our Lives</em> and <em>Habit of a Foreign Sky</em>'
    },
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  constructor() { }

  ngOnInit() {
  }
  
  showInfo() {
    this.infoVisible = !this.infoVisible;
  }
}
