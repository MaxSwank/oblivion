import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character2-dialog',
  templateUrl: './character2-dialog.component.html',
  styleUrls: ['./character2-dialog.component.scss']
})
export class Character2DialogComponent implements OnInit {



  slides = [
    {
      intro: '',
      quote: 'I brought you a copy of my best-selling novel, The Ladies Auxiliary Rassling Society of Sweet Jesus. Here’s my business card, if you know of any opportunities in Oblivion.',
      author: '',
      title: ''
    },
    {
      intro: 'Kaylie keeps going about how Oblivion is:',
      quote: 'A deeply intelligent and strikingly honest exploration of what ultimately drives a writer to write … and how literary success in one’s lifetime is, at best, a fickle proposition … will tell every writer I know, struggling or successful, to read this book.',
      author: 'Kaylie Jones',
      title: 'Author of Lies My Mother Never Told Me: A Memoir'
    },
    {
      intro: '',
      quote: 'Józef said he wanted to write a biography of me, and that’s precious, and I was so flattered, but his writing is a tad too academic for me.',
      author: '',
      title: ''
    },
    {
      intro: 'I overheard Robert saying:',
      quote: 'Robin Hemley’s new book is thrilling in every way. Rich in voice and thought and revelation, it also brings a dazzling nobility and stunning aptness to the often too-lightly used descriptor sui generis. ',
      author: 'Robert Olen Butler',
      title: 'Winner of the Pulitzer Prize for Fiction'
    },
    {
      intro: '',
      quote: 'I haven’t ever read Else’s poetry. I know Franz Werfel thinks very highly of her, says that encountering her poetry for the first time is like Adam naming the animals, but she seems a little too out there for my tastes.',
      author: '',
      title: ''
    },
    {
      intro: 'Stephen told me that:',
      quote: 'Robin Hemley’s brilliant new book is so many things at once: hilarious, moving, phantasmagoric, thought-provoking and endlessly surprising. [It] entered my dreams … and, in the manner of the very best literature, infused my life with mystery and meaning.',
      author: 'Stephen O’Connor',
      title: 'Author of Thomas Jefferson Dreams of Sally Hemings'
    },
    {
      intro: '',
      quote: 'I’ve heard that people get misfiled some times. I hear there’s a major author walking among us right now. I sometimes wonder if it’s me.',
      author: '',
      title: ''
    },
    {
      intro: 'I heard that Patricia thinks:',
      quote: 'Robin Hemley’s Cafe of Minor Authors is a funny, brilliant portrayal of the writer’s terror of insignificance and boredom and the ego’s imperative for the sweet spot of possibility. . . A think-piece with beautiful prose and a throbbing heart! ',
      author: 'Patricia Foster',
      title: 'Author of Girl from Soldier Creek and All the Lost Girls'
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
