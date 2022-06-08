import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafe-home',
  templateUrl: './cafe-home.component.html',
  styleUrls: ['./cafe-home.component.scss']
})
export class CafeHomeComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Oblivion Cafe');
    this.metaService.updateTag({ name: 'description', content: 'Oblivion Cafe' });
    this.metaService.updateTag({ property: 'og:title', content: 'Oblivion Cafe' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.oblivion.cafe/assets/img/BookCover.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.oblivion.cafe/cafe' });
    this.metaService.updateTag({ property: 'og:image:width', content: '975' });
    this.metaService.updateTag({ property: 'og:image:width', content: '1572' });
  }

  ngOnInit(): void {
  }

}
