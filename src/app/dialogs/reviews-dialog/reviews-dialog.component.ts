import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reviews-dialog',
  templateUrl: './reviews-dialog.component.html',
  styleUrls: ['./reviews-dialog.component.scss']
})
export class ReviewsDialogComponent implements OnInit {

  reviews = [
    {
      quote: 'A mesmerizing meditation on immortality, both the literary and fleshly kinds and its ultimate unattainability … Robin Hemley has written his best (and strangest) book and ginned up a troubled luminous Kafka for our troubled luminous times … like language, like summer, like love, <em>Oblivion</em> is irresistible.',
      author: 'Junot Díaz',
      title: 'Winner of the Pulitzer Prize for Fiction',
      url: ''
    },
    {
      quote: 'The best kind of shaggy dog story, delightful in every particular.',
      author: 'Kirkus Reviews',
      title: 'An American book review magazine',
      url: 'https://www.kirkusreviews.com/book-reviews/robin-hemley/oblivion-hemley/',
    },
    {
      quote: '<em>Oblivion</em> is a deeply intelligent and strikingly honest exploration of what ultimately drives a writer to write, and the cold loneliness of the journey, and how literary success in one’s lifetime is, at best, a fickle proposition. I will tell every writer I know, struggling or successful, to read this book.',
      author: 'Kaylie Jones',
      title: 'Author of <em>Lies My Mother Never Told Me: A Memoir</em>',
      url: ''
    },
    {
      quote: 'Charming, starkly brilliant, and very funny, Robin Hemley’s <em>Oblivion</em> is a meditation on writing and the writer’s life, on family, on grief, on death as a second chance — ultimately, on hope. <em>Oblivion</em> asks important questions about what it means to be a striving artist individually but also among a community of striving artists. I savored every page.',
      author: 'Chinelo Okparanta',
      title: 'Author of <em>Under the Udala Trees</em> and <em>Harry Sylvester Bird</em>',
      url: ''
    },
    {
      quote: '<em>Oblivion, An After Autobiography</em> is a delight to read.  So many worlds spring vividly to life in this book — Kafka’s Prague, Yiddish theater, the lives, real and imagined, of Hemley’s parents and great-grandmother, the café between worlds where authors drink cappuccinos, gossip, and fret about their legacies. Every author and artist will recognize the yearning to create works of lasting meaning, and every reader will appreciate the wonderful writing, the imaginative play between these worlds, and the serious exploration, just beneath the wildly entertaining surface, of the power of art to both shape us and sustain us.',
      author: 'Kim Edwards',
      title: 'Author of <em>The Memory Keeper’s Daughter</em> and <em>The Lake of Dreams</em>',
      url: ''
    },
    {
      quote: 'Robin Hemley’s <em>Oblivion: An After Autobiography</em> has that quality that every reader yearns for — one lies down on a couch and curls up and nothing else is going to happen until one finishes reading it. I read it one long, delirious day. The work is largely about the saving nature of the imagination. It’s surprisingly funny and always utterly, mortifyingly serious. The book is also very much about being a writer, an artificer, and being willing to do anything to get the words out —anything? Apparently so. What makes <em>Oblivion</em> profound is that it’s about a writer’s hope to escape oblivion, and how universal a human yearning that is, because every human being is utterly terrified of death and oblivion, and we all contrive ways to tell ourselves that we won’t be forgotten. It’s Hemley’s best book — the book he was born to write and has been dying, as it were, to write his whole life.  I truly admire and love the book.',
      author: 'David Shields',
      title: 'Author of <em>The Last Interview</em> and <em>Reality Hunger</em>',
      url: ''
    },
    {
      quote: 'Robin Hemley’s new book is thrilling in every way. Rich in voice and thought and revelation, it also brings a dazzling nobility and stunning aptness to the often too-lightly used descriptor <em>sui generis</em>. And it profoundly engages the deepest theme of all great literature: the yearning for a self, an identity, a place in the universe. I have long been an ardent admirer of Robin Hemley’s books. Every one of them. <em>Oblivion, An After Autobiography</em> is among his very best.',
      author: 'Robert Olen Butler',
      title: 'Winner of the Pulitzer Prize for Fiction',
      url: ''
    },
    {
      quote: 'A <em><em>tour de force</em></em>. <em>Oblivion</em> is a marvel of the imagination and intellect. Hemley has redefined the novel as we know it, and in the process, created a book that is a relentless page turner; funny and wise, exuberant and sad, insightful and magical, and — most wonderful of all — deeply, deeply human.',
      author: 'Connie May Fowler',
      title: 'Author of <em>How Clarissa Burden Learned to Fly</em>',
      url: ''
    },
    {
      quote: 'As a writer of both fiction and travel, Robin Hemley has crossed many borders, but none greater than that between the here and the hereafter. With <em>Oblivion</em>, he undertakes this final passage. Hemley creates a liminal space in which Franz Kafka, the author’s great-grandmother, and many others cavort in this life and the life beyond. Hemley’s masterful prose, and his willingness to completely inhabit this dream/world space, makes <em>Oblivion</em> a stunning and truly original book that not only succeeds on its own, but blazes a trail for other writers to follow. If they dare.',
      author: 'Sue William Silverman',
      title: 'Author of <em>How to Survive Death and Other Inconveniences</em>',
      url: ''
    },
    {
      quote: '<em>Oblivion: An After Autobiography</em> is a valiant, masterful act of imagination, a re-creation and visitation of Franz Kafka’s life, and that of Hemley’s literary forebears, in early 20th century Prague. In prose that is brisk, spare, and exceedingly funny, Robin Hemley takes us down corridors of literary oblivion, guided by the wry resolve of a narrator who finds his voice (and worth and audience) only after his own death. It stirs the maelstrom of dissatisfaction that plagues all writers great and small, and it gets even with the inevitable unevenness of a life’s work. A paean to all the rotten tomatoes hurled at great artists, past, present and still to come, it is moving and, in the best sense, true. In the end the oblivion is not personal; it’s historical; it’s his beloved Kafka’s shoelaces; it’s the Holocaust’s unfathomable emptiness. What is it? Fiction? Nonfiction? It’s speculative after-art of the highest order, and I couldn’t put it down.',
      author: 'Mary Cappello',
      title: 'Author of <em>Awkward: A Detour and Lecture</em>',
      url: ''
    },
    {
      quote: 'Robin Hemley’s brilliant new book is so many things at once: hilarious, moving, phantasmagoric, thought-provoking and endlessly surprising; a novel, a memoir, a portrait of Kafka’s Prague, and a delightful meditation on literary ambition and envy, drives so powerful they can persist beyond the grave. The whole time I was reading <em>Oblivion</em>, I lived in the fantastic world Hemley created; it entered my dreams, inspired my mental debates, and, in the manner of the very best literature, infused my life with mystery and meaning.',
      author: 'Stephen O’Connor',
      title: 'Author of <em>Thomas Jefferson Dreams of Sally Hemings</em>',
      url: ''
    },
    {
      quote: '<em>Oblivion</em> is a compulsively readable meditation on the life, death and afterlife of writers and their work. Hemley’s narrative brilliantly describes the sine wave between narcissism and despair that fuels the creative act, capturing all its absurdity and irresistibility, and managing in the process to hit notes both of high comedy and plangent melancholy. The book subjects the notion of posterity to a thorough examination, then skewers it mercilessly. It’s a glorious achievement.',
      author: 'James Scudamore',
      title: 'Author of <em>Heliopolis</em> and <em>English Monsters</em>',
      url: ''
    },
    {
      quote: 'Robin Hemley’s novel, <em>Oblivion: An After Autobiography</em>, is positively the best travel guide for anyone contemplating death.  Whether you want to spend eternity in <em>Oblivion</em>, sipping a bottomless cup of cappuccino at the Café of Minor Authors, or brave the tours through Time to meet Kafka and your great grandmother (guided by your very own Max Brod), Hemley recommends where to go, what to do, who to meet (and avoid) and how to become a dybbuk gracefully instead of merely getting stuck in a table Kafka occupied. This brilliant existential speculation on artistic ambition and obsession examines why anyone writes when few are called to the greatness of a Kafka (besides, even he got there by way of oblivion). Philosophical, engrossing and very, very funny, this book deserves its own shelf in libraries from here through eternity.  In particular for authors, minor or otherwise, this book is you.',
      author: 'Xu Xi',
      title: 'Author of <em>That Man in Our Lives</em> and <em>Habit of a Foreign Sky</em>',
      url: ''
    },
    {
      quote: 'The premise of <em>Oblivion</em> is literally one to die for — it is a speculative memoir that imagines what might happen after its author’s death … And the execution is just as extraordinary. Inventive and electrifying, <em>Oblivion</em> is a tragicomic ode to the power of art and ambition to shape a life; an intoxicating cocktail of melancholy, playfulness and mystery (plus a satisfying number of known literary ghosts!). It is the kind of a book where you just don’t skip any lines, because surprises abound. Simply put, <em>Oblivion</em> is one of the best, most memorable books I’ve read in the last decade.',
      author: 'Lee Kofman',
      title: 'Author of <em>Imperfect</em> and <em>The Dangerous Bride</em>',
      url: ''
    },
    {
      quote: 'What a relief to know that the afterlife is a hotbed of ambition, envy, and obsession, a referendum on one’s earthly literary status as well as a goad to further writerly pursuits. <em>Count me in!</em> Robin Hemley’s Café of Minor Authors is a funny, brilliant portrayal of the writer’s terror of insignificance and boredom and the ego’s imperative for the sweet spot of possibility. In <em>Oblivion</em>, the dead not only haunt the dead, but lead the narrator on a psychological and picaresque adventure into his autobiographical and literary past in pursuit of Kafka and the conflicted story of consciousness. <em>Oblivion</em> is a think-piece with beautiful prose and a throbbing heart!',
      author: 'Patricia Foster',
      title: 'Author of <em>Girl from Soldier Creek</em> and <em>All the Lost Girls</em>',
      url: ''
    },
    {
      quote: 'Who among us has not wished to be destined for great things? That’s the question at the heart of <em>Oblivion, An After Autobiography</em>. Writers long for ecstatic reviews, prizes, record-breaking sales. But it’s not just writers who want to make their mark in the world. We all hope to be admired — or, at least, remembered. <em>Oblivion</em> is a book about expectations and disappointment, ambition and envy, self-obsession and self-doubt. It’s about family legends and real lives. It’s about a contemporary American writer’s encounters in the afterlife with Franz Kafka. This book is a magic trick, and the sleight of hand is Robin Hemley’s curiosity and vulnerability. The book is smart, imaginative, thought-provoking, and witty. And brilliant.',
      author: 'Judy Goldman',
      title: 'Author of <em>Child: A Memoir</em>',
      url: ''
    },
    {
      quote: 'Robin Hemley has written a whole new kind of ghost story with <em>Oblivion</em>, both hilarious and profound: an ode to humility and pride, to ambition and failure, to Kafka and to the Yiddish theater, and above all to artistic vanity, to which he gives a good thrashing. A delightful romp of a read all the way through.',
      author: 'Helen Benedict',
      title: 'Author of <em>Wolf Season</em> and <em>The Good Deed</em>',
      url: ''
    },
    {
      quote: 'I have never read anything else quite like <em>Oblivion, An After Autobiography</em>. I can more easily describe my reaction to the book than I can the book itself. I was startled, delighted, puzzled, riveted. But above all I was entertained. I suspect that if Franz K were around to read Hemley’s small masterpiece, he would share in my admiration. I would not have wanted to miss this one. Nor should you.',
      author: 'Steve Yarbrough',
      title: 'Author of <em>The Unmade World</em>',
      url: ''
    },
    {
      quote: '[A] <em>tour de force</em> …',
      author: 'Jacke Wilson',
      title: 'Host of <em>The History of Literature podcast</em>',
      url: ''
    },
    {
      quote: 'There are many memorable books about the lives of writers, but how many can you remember about a writer’s death? … Well, enter onto that very narrow shelf Robin Hemley’s <em>Oblivion: An After Autobiography</em>. It’s some high wire virtuosity Hemley pulls off—a book as serious as cancer, as funny as The Three Stooges, often at the same times.',
      author: 'Tim Tomlinson',
      title: 'Author of <em>This is Not Happening to You</em>',
      url: ''
    },
    {
      quote: 'A man travels a lot and as often returns home, though not without feeling a bit of a dybbuk, reinhabiting and repossessing his old body and self.  In his travels, meanwhile, through time as well as space, he also finds himself inhabiting his great-grandmother when she was a winsome, wannabe actress in Prague, at the same time, as it happens, that a young Kafka was just beginning to inhabit himself, but not without a boost from a devoted dybbuk you might mistake for Robin Hemley.  And so rescued from oblivion this fine novel, aglow with warmth, wisdom, and speculation.',
      author: 'David Hamilton',
      title: 'Author of <em>Deep River</em> and <em>A Certain Arc</em>',
      url: ''
    },
    {
      quote: '‘Only the living can manipulate facts,’ Robin Hemley’s bibliophilic friend Józef warns us. In his latest literary experiment, <em>Oblivion, An After Autobiography</em>, Hemley does just that, becoming a mythological dybbuk, except Hemley’s intentions here are not malicious, but delightful and sly. Kafka will roll in his grave, perhaps in laughter.',
      author: 'Dinty W. Moore',
      title: 'Author of <em>To Hell With It</em>',
      url: ''
    },
    {
      quote: 'Irony and humility in this cafe of broken and unbroken dreams. Get me a table, a schnapps! I want to drink and read.',
      author: 'David Lazar',
      title: 'Author of <em>Celeste Holm Syndrome</em> and co-editor of <em>21st Century Essays</em>',
      url: ''
    },
    {
      quote: 'Now that time is starting up again (after more than a dozen months of sequestration’s superseding sleepy gear-slipping déjà vu-ing) Master Horologist, Robin Hemley’s time machine of a book, <em>Oblivion</em>, materializes out of the occluded tick-tocked atmosphere, initiating portals and wormholes of asymmetrical chronologies in non-Euclidian parallel realities in which only he could effortlessly jewel and tinker. <em>Oblivion</em> is a hack of a hack, an analogue Borgesian Zoom webinar made up of glitchy matrices and disturbing disturbances in the field. Hemley animates the palimpsests of all our encrusted sacred texts, and he pentimentoes every moment of every memoranda filed away in our misty mimetic mementoes.',
      author: 'Michael Martone',
      title: 'Author of <em>The Complete Writings of Art Smith</em>, <em>The Bird Boy of Fort Wayne</em>, Edited by Michael Martone and <em>The Moon Over Wapakoneta</em>',
      url: ''
    },
  ];


  constructor(private _router: Router, private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Oblivion Reviews');
    this.metaService.updateTag({ name: 'description', content: 'Oblivion Reviews' });
    this.metaService.updateTag({ property: 'og:title', content: 'Oblivion Reviews' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.oblivion.cafe/assets/img/BookCover.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.oblivion.cafe/cafe/reviews' });
    this.metaService.updateTag({ property: 'og:image:width', content: '975' });
    this.metaService.updateTag({ property: 'og:image:height', content: '1572' });
  }

  ngOnInit(): void {
  }

  closeBlurbs() {
    if (this._router.url.includes('/cafe')) {
      this._router.navigate(['/cafe'])
    } else {
      this._router.navigate(['/'])
    }
  }
}


