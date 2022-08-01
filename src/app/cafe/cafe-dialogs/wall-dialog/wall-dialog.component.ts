import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wall-dialog',
  templateUrl: './wall-dialog.component.html',
  styleUrls: ['./wall-dialog.component.scss']
})
export class WallDialogComponent implements OnInit {
  textVisible: boolean = false;

  authors = [
    {
      path: '../../../../assets/img/carl-winterhoven.jpg',
      name: 'Carl',
      name2: 'Winterhoven',
      bio: 'Author of the best-selling (in his mind) ',
      bio2: 'Blackhawk Exchange',
      bio3: ' series.'
    },
    {
      path: '../../../../assets/img/maudy-gammitt.jpg',
      name: 'Maudy',
      name2: 'Gammitt',
      bio: 'Author of',
      bio2: 'The Ladies Auxiliary Wrassling Society of Sweet Jesus',
      bio3: ', a New York Times Best-Seller.'
    },
    {
      path: '../../../../assets/img/yitzhak-lowy.jpg',
      name: 'Yitzhak',
      name2: 'Lowy',
      bio: 'The first person who had the idea for the play,',
      bio2: 'The Dybbuk',
      bio3: ', before it was stolen from him.'
    },
    {
      path: '../../../../assets/img/karl-muller.jpg',
      name: 'Karl',
      name2: 'Muller',
      bio: 'Author of the not-so-classic short story,',
      bio2: 'the Re-Metamorphosis',
      bio3: ', an uplifting reworking of Franz Kafka’s famous short story.'
    },
    {
      path: '../../../../assets/img/gary-katsarida.jpg',
      name: 'Gary',
      name2: 'Katsarida',
      bio: 'A poet whose debut poetry collection,',
      bio2: 'My Grudge',
      bio3: ', won the Downwind Press Poetry Award from Downwind Magazine in Amarillo, Texas in 1995.'
    },
    {
      path: '../../../../assets/img/saffron-segovia.jpg',
      name: 'Saffron',
      name2: 'Segovia',
      bio: 'Author of the debut poetry collection,',
      bio2: 'Anatomy of a Mass Extinction.',
      bio3: ' A book of Petrarchan Love Sonnets spoken in the voices of assorted dinosaurs.'
    },
    {
      path: '../../../../assets/img/jozef-wozek.jpg',
      name: 'Józef',
      name2: 'Wozek',
      bio: 'Chicago poet and author of many conceived-of-but-never-written histories of subjects as wide ranging as the Yiddish Theater in Europe to book binding techniques of 19th century Poland.',
      bio2: '',
      bio3: ''
    },
    {
      path: '../../../../assets/img/leon-dilletanti.jpg',
      name: 'Leon “Smoky”',
      name2: 'Dilletanti',
      bio: 'Author of the world’s longest poem,',
      bio2: 'It’s a Drag',
      bio3: ', rejected by Guinness Book of World Records for being something, but definitely not a poem.'
    },
    {
      path: '../../../../assets/img/else-lasker-schuler.jpg',
      name: 'Else',
      name2: 'Lasker-Schüler',
      bio: 'Proto-Performance and lyric poet, beloved by many in her time, though loathed by Franz Kafka.',
      bio2: '',
      bio3: ''
    },
    {
      path: '../../../../assets/img/johannes-schlaf.jpg',
      name: 'Johannes',
      name2: 'Schlaf',
      bio: 'Once-famous German author of',
      bio2: 'Professor Plassman and the Phenomenon of Sunspots',
      bio3: ', a book claiming Copernicus was wrong, after all.'
    },
  ]
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  constructor(private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Wall of Exceptionally Minor Authors');
    this.metaService.updateTag({ name: 'description', content: 'Wall of Exceptionally Minor Authors — Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:title', content: 'Wall of Exceptionally Minor Authors — Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.oblivion.cafe/assets/img/BookCover.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.oblivion.cafe/cafe/wall_of_exceptionally_minor_authors' });
    this.metaService.updateTag({ property: 'og:image:width', content: '975' });
    this.metaService.updateTag({ property: 'og:image:height', content: '1572' });
  }

  ngOnInit() {
  }

  showInfo() {
    this.textVisible = !this.textVisible
  }

}
