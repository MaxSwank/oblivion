import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-character4-dialog',
  templateUrl: './character4-dialog.component.html',
  styleUrls: ['./character4-dialog.component.scss']
})
export class Character4DialogComponent implements OnInit {
  slides = [
    {
      intro: '',
      quote: '',
      clue: 'I’ve seen Else perform many times — she was an innovator, quite ahead of her time.',
      author: '',
      title: ''
    },
    {
      intro: '<strong>Kirkus Reviews</strong> wrote that <em>Oblivion</em> is:',
      quote: 'The best kind of shaggy dog story, delightful in every particular.',
      clue: '',
      author: 'Kirkus Reviews',
      title: 'An American book review magazine'
    },
    {
      intro: '',
      quote: '',
      clue: 'I’ve read more in the library of Oblivion than just about anyone here. I love the manuscripts intended to be books that never become books. I have some in there. As well as my published books, of course. But still, not many people read me.',
      author: '',
      title: ''
    },
    {
      intro: 'I overheard <strong>David</strong> calling <em>Oblivion:</em>',
      quote: '[S]urprisingly funny and always utterly, mortifyingly serious … Hemley’s best book — the book he was born to write and has been dying, as it were, to write his whole life. I truly admire and love the book.',
      clue: '',
      author: 'David Shields',
      title: 'Author of <em>The Last Interview</em> and <em>Reality Hunger</em>'
    },
    {
      intro: '',
      quote: '',
      clue: 'Gary didn’t even land here right after death — he only got pulled up into the cafe when a lit professor at Northwestern made him mandatory reading.',
      author: '',
      title: ''
    },
    {
      intro: '<strong>Mary</strong> says <em>Oblivion</em> is:',
      quote: 'A valiant, masterful act of imagination … In prose that is brisk, spare, and exceedingly funny, Robin Hemley takes us down corridors of literary oblivion, guided by the wry resolve of a narrator who finds his voice (and worth and audience) only after his own death.',
      clue: '',
      author: 'Mary Cappello',
      title: 'Author of <em>Awkward: A Detour and Lecture</em>'
    },
    {
      intro: '',
      quote: '',
      clue: 'I offered to write Maudy’s biography because she’s nice and has such manners, but I rejected a story of hers at <em>Hoot & Holler</em>, so she might still be upset about that and say no. ',
      author: '',
      title: ''
    },
    {
      intro: '<strong>Lee</strong> is telling everyone:',
      quote: '[It’s] the kind of book where you just don’t skip any lines, because surprises abound. Simply put, <em>Oblivion</em> is one of the best, most memorable books I’ve read in the last decade.',
      clue: '',
      author: 'Lee Kofman',
      title: 'Author of <em>Imperfect</em> and <em>The Dangerous Bride</em>'
    },
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  constructor(private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('John Kendrick Bangs');
    this.metaService.updateTag({ name: 'description', content: 'John Kendrick Bangs' });
    this.metaService.updateTag({ property: 'og:title', content: 'John Kendrick Bangs' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.oblivion.cafe/assets/img/jozef-wozek.png' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.oblivion.cafe/cafe/jozef_wozek' });
    this.metaService.updateTag({ property: 'og:image:width', content: '1324' });
    this.metaService.updateTag({ property: 'og:image:height', content: '1536' });
  }

  ngOnInit(): void {
  }

}
