import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-character3-dialog',
  templateUrl: './character3-dialog.component.html',
  styleUrls: ['./character3-dialog.component.scss']
})
export class Character3DialogComponent implements OnInit {
  slides = [
    {
      intro: '',
      quote: '',
      clue: 'I don’t like to share my ideas before I write them. I’ve learned from experience. But have a beer with me here. Some of these guys knew Kafka.',
      author: '',
      title: ''
    },
    {
      intro: 'Did you know <strong>Chinelo</strong> says:',
      quote: 'Charming, starkly brilliant, and very funny, Robin Hemley’s <em>Oblivion</em> is a meditation on writing and the writer’s life, on family, on grief, on death as a second chance — ultimately, on hope … I savored every page.',
      clue: '',
      author: 'Chinelo Okparanta',
      title: 'Author of <em>Under the Udala Trees</em> and <em>Harry Sylvester Bird</em>'
    },
    {
      intro: '',
      quote: '',
      clue: 'I wouldn’t be in the minors if I hadn’t had my best idea stolen from me by another author. He’s a bad art friend.',
      author: '',
      title: ''
    },
    {
      intro: '<strong>Connie May</strong> minces no words, calling <em>Oblivion:</em>',
      quote: 'A <em>tour de force</em>. Oblivion is a marvel of the imagination and intellect … a relentless page turner; funny and wise, exuberant and sad, insightful and magical, and — most wonderful of all — deeply, deeply human.',
      clue: '',
      author: 'Connie May Fowler',
      title: 'Author of <em>How Clarissa Burden Learned to Fly</em>'
    },
    {
      intro: '',
      quote: '',
      clue: 'Maudy badgered John Kendrick Bangs until he showed her her ranking. She won’t tell anyone where she fell and we definitely would have heard if it was high.',
      author: '',
      title: ''
    },
    {
      intro: '<strong>James</strong> was saying that <em>Oblivion</em> is:',
      quote: 'A compulsively readable meditation on the life, death, and afterlife of writers and their work. Hemley’s narrative brilliantly describes the sine wave between narcissism and despair that fuels the creative act … It’s a glorious achievement.',
      clue: '',
      author: 'James Scudamore',
      title: 'Author of <em>Heliopolis</em> and <em>English Monsters</em>'
    },
    {
      intro: '',
      quote: '',
      clue: 'No one knows how the ranking system works. Some of <em>my</em> favorite poets are here. But that’s cool.',
      author: '',
      title: ''
    },
    {
      intro: '<strong>Judy</strong> thinks:',
      quote: 'This book is a magic trick, and the sleight of hand is Robin Hemley’s curiosity and vulnerability. The book is smart, imaginative, thought-provoking, and witty. And brilliant.',
      clue: '',
      author: 'Judy Goldman',
      title: 'Author of <em>Child: A Memoir</em>'
    },
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  constructor(private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Gary Katsarida');
    this.metaService.updateTag({ name: 'description', content: 'Gary Katsarida — Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:title', content: 'Gary Katsarida — Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.oblivion.cafe/assets/img/gary-katsarida.png' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.oblivion.cafe/cafe/gary_katsarida' });
    this.metaService.updateTag({ property: 'og:image:width', content: '1324' });
    this.metaService.updateTag({ property: 'og:image:width', content: '1536' });
  }

  ngOnInit() {
  }

}
