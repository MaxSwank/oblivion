import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character3-dialog',
  templateUrl: './character3-dialog.component.html',
  styleUrls: ['./character3-dialog.component.scss']
})
export class Character3DialogComponent implements OnInit {
  slides = [
    {
      quote: 'I don’t like to share my ideas before I write them. I’ve learned from experience. But have a beer with me here. Some of these guys knew Kafka.',
    },
    {
      intro: 'Did you know Chinelo says:',
      quote: 'Charming, starkly brilliant, and very funny, Robin Hemley’s Oblivion is a meditation on writing and the writer’s life, on family, on grief, on death as a second chance — ultimately, on hope … I savored every page.',
      author: 'Chinelo Okparanta',
      title: 'Author of Under the Udala Trees and Harry Sylvester Bird',
    },
    {
      quote: 'I wouldn’t be in the minors if I hadn’t had my best idea stolen from me by another author. He’s a bad art friend.',
    },
    {
      intro: 'Connie May minces no words, calling Oblivion:',
      quote: 'A tour de force. Oblivion is a marvel of the imagination and intellect … a relentless page turner; funny and wise, exuberant and sad, insightful and magical, and — most wonderful of all — deeply, deeply human.',
      author: 'Connie May Fowler',
      title: 'Author of How Clarissa Burden Learned to Fly',
    },
    {
      quote: 'Maudy badgered John Kendrick Bangs until he showed her her ranking. She won’t tell anyone where she fell and we definitely would have heard if it was high.',
    },
    {
      intro: 'James was saying that Oblivion is:',
      quote: 'A compulsively readable meditation on the life, death, and afterlife of writers and their work. Hemley’s narrative brilliantly describes the sine wave between narcissism and despair that fuels the creative act … It’s a glorious achievement.',
      author: 'James Scudamore',
      title: 'Author of Heliopolis and English Monsters',
    },
    {
      quote: 'No one knows how the ranking system works. Some of my favorite poets are here. But that’s cool.',
    },
    {
      intro: 'Judy thinks:',
      quote: 'This book is a magic trick, and the sleight of hand is Robin Hemley’s curiosity and vulnerability. The book is smart, imaginative, thought-provoking, and witty. And brilliant.',
      author: 'Judy Goldman',
      title: 'Author of Child: A Memoir',
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
