import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-preorder-dialog',
  templateUrl: './preorder-dialog.component.html',
  styleUrls: ['./preorder-dialog.component.scss'],
})

export class PreorderDialogComponent implements OnInit {

  infoSlide: boolean = true;

  slides = [
    {
      quote: 'A mesmerizing meditation on immortality, both the literary and fleshly kind and its ultimate unattainability … Like language, like summer, like love, <em>Oblivion</em> is irresistible.',
      author: 'Junot Díaz',
      title: 'Winner of the Pulitzer Prize for Fiction',
    },
    {
      quote: 'The best kind of shaggy dog story, delightful in every particular.',
      author: 'Kirkus Reviews',
      title: 'An American book review magazine',
    },
    {
      quote: 'A deeply intelligent and strikingly honest exploration of what ultimately drives a writer to write … and how literary success in one’s lifetime is, at best, a fickle proposition … will tell every writer I know, struggling or successful, to read this book.',
      author: 'Kaylie Jones',
      title: 'Author of <em>Lies My Mother Never Told Me: A Memoir<em/>'
    },
    {
      quote: 'Charming, starkly brilliant, and very funny, Robin Hemley’s <em>Oblivion</em> is a meditation on writing and the writer’s life, on family, on grief, on death as a second chance — ultimately, on hope … I savored every page.',
      author: 'Chinelo Okparanta',
      title: 'Author of <em>Under the Udala Trees</em> and <em>Harry Sylvester Bird</em>',
    },
    {
      quote: 'A delight to read … [E]very reader will appreciate the wonderful writing, the imaginative play between these worlds, and the serious exploration, just beneath the wildly entertaining surface, of the power of art to both shape us and sustain us.',
      author: 'Kim Edwards',
      title: 'Author of <em>The Memory Keeper’s Daughter</em> and <em>The Lake of Dreams</em>',
    },
    {
      quote: '[S]urprisingly funny and always utterly, mortifyingly serious … Hemley’s best book — the book he was born to write and has been dying, as it were, to write his whole life. I truly admire and love the book.',
      author: 'David Shields',
      title: 'Author of <em>The Last Interview</em> and <em>Reality Hunger</em>',
    },
    {
      quote: 'Robin Hemley’s new book is thrilling in every way. Rich in voice and thought and revelation, it also brings a dazzling nobility and stunning aptness to the often too-lightly used descriptor sui generis.',
      author: 'Robert Olen Butler',
      title: 'Winner of the Pulitzer Prize for Fiction',
    },
    {
      quote: 'A <em>tour de force</em>. Oblivion is a marvel of the imagination and intellect … a relentless page turner; funny and wise, exuberant and sad, insightful and magical, and — most wonderful of all — deeply, deeply human.',
      author: 'Connie May Fowler',
      title: 'Author of <em>How Clarissa Burden Learned to Fly</em>',
    },
    {
      quote: 'Hemley’s masterful prose, and his willingness to completely inhabit this dream/world space, makes <em>Oblivion</em> a stunning and truly original book that not only succeeds on its own, but blazes a trail for other writers to follow.',
      author: 'Sue William Silverman',
      title: 'Author of <em>How to Survive Death and Other Inconveniences</em>',
    },
    {
      quote: 'A valiant, masterful act of imagination … In prose that is brisk, spare, and exceedingly funny, Robin Hemley takes us down corridors of literary oblivion, guided by the wry resolve of a narrator who finds his voice (and worth and audience) only after his own death.',
      author: 'Mary Cappello',
      title: 'Author of <em>Awkward: A Detour and Lecture</em>',
    },
    {
      quote: 'Robin Hemley’s brilliant new book is so many things at once: hilarious, moving, phantasmagoric, thought-provoking and endlessly surprising. [It] entered my dreams … and, in the manner of the very best literature, infused my life with mystery and meaning.',
      author: 'Stephen O’Connor',
      title: 'Author of <em>Thomas Jefferson Dreams of Sally Hemings</em>',
    },
    {
      quote: 'A compulsively readable meditation on the life, death, and afterlife of writers and their work. Hemley’s narrative brilliantly describes the sine wave between narcissism and despair that fuels the creative act … It’s a glorious achievement.',
      author: 'James Scudamore',
      title: 'Author of <em>Heliopolis</em> and <em>English Monsters</em>',
    },
    {
      quote: 'Philosophical, engrossing and very, very funny, this book deserves its own shelf in libraries from here through eternity.  In particular for authors, minor or otherwise, this book is you.',
      author: 'Xu Xi',
      title: 'Author of <em>That Man in Our Lives</em> and <em>Habit of a Foreign Sky</em>',
    },
    {
      quote: '[It’s] the kind of book where you just don’t skip any lines, because surprises abound. Simply put, <em>Oblivion</em> is one of the best, most memorable books I’ve read in the last decade.',
      author: 'Lee Kofman',
      title: 'Author of <em>Imperfect</em> and <em>The Dangerous Bride</em>',
    },
    {
      quote: 'Robin Hemley’s Cafe of Minor Authors is a funny, brilliant portrayal of the writer’s terror of insignificance and boredom and the ego’s imperative for the sweet spot of possibility. . . A think-piece with beautiful prose and a throbbing heart! ',
      author: 'Patricia Foster',
      title: 'Author of <em>Girl from Soldier Creek</em> and <em>All the Lost Girls</em>',
    },
    {
      quote: 'This book is a magic trick, and the sleight of hand is Robin Hemley’s curiosity and vulnerability. The book is smart, imaginative, thought-provoking, and witty. And brilliant.',
      author: 'Judy Goldman',
      title: 'Author of <em>Child: A Memoir</em>',
    },
    {
      quote: 'Robin Hemley has written a whole new kind of ghost story … both hilarious and profound … A delightful romp of a read all the way through.',
      author: 'Helen Benedict',
      title: 'Author of <em>Wolf Season</em> and <em>The Good Deed</em>',
    },
    {
      quote: 'I have never read anything else quite like <em>Oblivion</em> … I was startled, delighted, puzzled, riveted. But above all I was entertained. I suspect that if Franz K were around to read Hemley’s small masterpiece he would share in my admiration.',
      author: 'Steve Yarbrough',
      title: 'Author of <em>The Unmade World</em>',
    },
    {
      quote: '[A] <em>tour de force</em> …',
      author: 'Jacke Wilson',
      title: 'Host of <em>The History of Literature podcast</em>',
    },
    {
      quote: 'It’s some high wire virtuosity Hemley pulls off — a book as serious as cancer, as funny as The Three Stooges, often at the same times.',
      author: 'Tim Tomlinson',
      title: 'Author of <em>This is Not Happening to You</em>',
    },
    // {
    //   quote: 'A man travels a lot and as often returns home, though not without feeling a bit of a dybbuk, reinhabiting and repossessing his old body and self.  In his travels, meanwhile, through time as well as space, he also finds himself inhabiting his great-grandmother when she was a winsome, wannabe actress in Prague, at the same time, as it happens, that a young Kafka was just beginning to inhabit himself, but not without a boost from a devoted dybbuk you might mistake for Robin Hemley.  And so rescued from oblivion this fine novel, aglow with warmth, wisdom, and speculation.',
    //   author: 'David Hamilton',
    //   title: 'Author of <em>Deep River</em> and <em>A Certain Arc</em>',
    // },
    // {
    //   quote: '‘Only the living can manipulate facts,’ Robin Hemley’s bibliophilic friend Józef warns us. In his latest literary experiment, Oblivion, An After Autobiography, Hemley does just that, becoming a mythological dybbuk, except Hemley’s intentions here are not malicious, but delightful and sly. Kafka will roll in his grave, perhaps in laughter.',
    //   author: 'Dinty W. Moore',
    //   title: 'Author of <em>To Hell With It</em>',
    // },
    // {
    //   quote: 'Irony and humility in this cafe of broken and unbroken dreams. Get me a table, a schnapps! I want to drink and read.',
    //   author: 'David Lazar',
    //   title: 'Author of <em>Celeste Holm Syndrome</em> and co-editor of <em>21st Century Essays</em>',
    // },
    // {
    //   quote: 'Now that time is starting up again (after more than a dozen months of sequestration’s superseding sleepy gear-slipping déjà vu-ing) Master Horologist, Robin Hemley’s time machine of a book, Oblivion, materializes out of the occluded tick-tocked atmosphere, initiating portals and wormholes of asymmetrical chronologies in non-Euclidian parallel realities in which only he could effortlessly jewel and tinker. Oblivion is a hack of a hack, an analogue Borgesian Zoom webinar made up of glitchy matrices and disturbing disturbances in the field. Hemley animates the palimpsests of all our encrusted sacred texts, and he pentimentoes every moment of every memoranda filed away in our misty mimetic mementoes.',
    //   author: 'Michael Martone',
    //   title: 'Author of <em>The Complete Writings of Art Smith</em>, <em>The Bird Boy of Fort Wayne</em>, Edited by Michael Martone and <em>The Moon Over Wapakoneta</em>',
    // },
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  constructor(private _router: Router, private location: Location, private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Order Oblivion');
    this.metaService.updateTag({ name: 'description', content: 'Order Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:title', content: 'Order Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.oblivion.cafe/assets/img/BookCover.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.oblivion.cafe/cafe/preorder' });
    this.metaService.updateTag({ property: 'og:image:width', content: '975' });
    this.metaService.updateTag({ property: 'og:image:width', content: '1572' });
  }

  ngOnInit() { }

  closeInfo() {
    this.infoSlide = !this.infoSlide;
    setTimeout(() => {
      this.location.back();
    }, 0);
  }
}

