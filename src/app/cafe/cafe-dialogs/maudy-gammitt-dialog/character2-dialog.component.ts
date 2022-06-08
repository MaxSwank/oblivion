import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-character2-dialog',
  templateUrl: './character2-dialog.component.html',
  styleUrls: ['./character2-dialog.component.scss']
})
export class Character2DialogComponent implements OnInit {



  slides = [
    {
      intro: '',
      quote: '',
      clue: 'I brought you a copy of my best-selling novel, <em>The Ladies Auxiliary Rassling Society of Sweet Jesus</em>. Here’s my business card, if you know of any opportunities in Oblivion.',
      author: '',
      title: ''
    },
    {
      intro: '<strong>Kaylie</strong> keeps going on about how <em>Oblivion</em> is:',
      quote: 'A deeply intelligent and strikingly honest exploration of what ultimately drives a writer to write … and how literary success in one’s lifetime is, at best, a fickle proposition … will tell every writer I know, struggling or successful, to read this book.',
      clue: '',
      author: 'Kaylie Jones',
      title: 'Author of <em>Lies My Mother Never Told Me: A Memoir<em/>'
    },
    {
      intro: '',
      quote: '',
      clue: 'Józef said he wanted to write a biography of me, and that’s precious, and I was so flattered, but his writing is a tad too academic for me.',
      author: '',
      title: ''
    },
    {
      intro: 'I overheard <strong>Robert</strong> saying:',
      quote: 'Robin Hemley’s new book is thrilling in every way. Rich in voice and thought and revelation, it also brings a dazzling nobility and stunning aptness to the often too-lightly used descriptor <em>sui generis</em>. ',
      clue: '',
      author: 'Robert Olen Butler',
      title: 'Winner of the Pulitzer Prize for Fiction'
    },
    {
      intro: '',
      quote: '',
      clue: 'I haven’t ever read Else’s poetry. I know Franz Werfel thinks very highly of her, says that encountering her poetry for the first time is like Adam naming the animals, but she seems a little too out there for my tastes.',
      author: '',
      title: ''
    },
    {
      intro: '<strong>Stephen</strong> told me that:',
      quote: 'Robin Hemley’s brilliant new book is so many things at once: hilarious, moving, phantasmagoric, thought-provoking and endlessly surprising. [It] entered my dreams … and, in the manner of the very best literature, infused my life with mystery and meaning.',
      clue: '',
      author: 'Stephen O’Connor',
      title: 'Author of <em>Thomas Jefferson Dreams of Sally Hemings</em>'
    },
    {
      intro: '',
      quote: '',
      clue: 'I’ve heard that people get misfiled some times. I hear there’s a major author walking among us right now. I sometimes wonder if it’s me.',
      author: '',
      title: ''
    },
    {
      intro: 'I heard that <strong>Patricia</strong> thinks:',
      quote: 'Robin Hemley’s Cafe of Minor Authors is a funny, brilliant portrayal of the writer’s terror of insignificance and boredom and the ego’s imperative for the sweet spot of possibility. . . A think-piece with beautiful prose and a throbbing heart! ',
      clue: '',
      author: 'Patricia Foster',
      title: 'Author of <em>Girl from Soldier Creek</em> and <em>All the Lost Girls</em>'
    },
  ];

  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  constructor(private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Maudy Gammitt');
    this.metaService.updateTag({ name: 'description', content: 'Maudy Gammitt — Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:title', content: 'Maudy Gammitt — Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.oblivion.cafe/assets/img/maudy-gammitt.png' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.oblivion.cafe/cafe/maudy_gammitt' });
    this.metaService.updateTag({ property: 'og:image:width', content: '1324' });
    this.metaService.updateTag({ property: 'og:image:width', content: '1536' });
  }

  ngOnInit() {
  }
}
