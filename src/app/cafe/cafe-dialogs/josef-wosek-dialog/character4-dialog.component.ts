import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character4-dialog',
  templateUrl: './character4-dialog.component.html',
  styleUrls: ['./character4-dialog.component.scss']
})
export class Character4DialogComponent implements OnInit {
  slides = [
    {
      quote: 'I’ve seen Else perform many times — she was an innovator, quite ahead of her time.',
    },
    {
      intro: 'Kirkus Reviews wrote that Oblivion is:',
      quote: 'The best kind of shaggy dog story, delightful in every particular.',
      author: 'Kirkus Reviews',
      title: 'An American book review magazine',
    },
    {
      quote: 'I’ve read more in the library of Oblivion than just about anyone here. I love the manuscripts intended to be books that never become books. I have some in there. As well as my published books, of course. But still, not many people read me.',
    },
    {
      intro: 'I overheard David calling Oblivion:',
      quote: '[S]urprisingly funny and always utterly, mortifyingly serious … Hemley’s best book — the book he was born to write and has been dying, as it were, to write his whole life. I truly admire and love the book.',
      author: 'David Shields',
      title: 'Author of The Last Interview and Reality Hunger',
    },
    {
      quote: 'Gary didn’t even land here right after death — he only got pulled up into the cafe when a lit professor at Northwestern made him mandatory reading.',
    },
    {
      intro: 'Mary says Oblivion is:',
      quote: 'A valiant, masterful act of imagination … In prose that is brisk, spare, and exceedingly funny, Robin Hemley takes us down corridors of literary oblivion, guided by the wry resolve of a narrator who finds his voice (and worth and audience) only after his own death.',
      author: 'Mary Cappello',
      title: 'Author of Awkward: A Detour and Lecture',
    },
    {
      quote: 'I offered to write Maudy’s biography because she’s nice and has such manners, but I rejected a story of hers at Hoot & Holler, so she might still be upset about that and say no. ',
    },
    {
      intro: 'Lee is telling everyone:',
      quote: '[It’s] the kind of book where you just don’t skip any lines, because surprises abound. Simply put, Oblivion is one of the best, most memorable books I’ve read in the last decade.',
      author: 'Lee Kofman',
      title: 'Author of Imperfect and The Dangerous Bride',
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
