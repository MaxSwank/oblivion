import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-window-dialog',
  templateUrl: './window-dialog.component.html',
  styleUrls: ['./window-dialog.component.scss']
})
export class WindowDialogComponent implements OnInit {

  constructor(private location: Location, private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Window to Prague');
    this.metaService.updateTag({ name: 'description', content: 'A view on Kafka’s Prague — Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:title', content: 'A view on Kafka’s Prague — Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.oblivion.cafe/assets/img/typewriter.png' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.oblivion.cafe/cafe/window' });
    this.metaService.updateTag({ property: 'og:image:width', content: '220' });
    this.metaService.updateTag({ property: 'og:image:height', content: '230' });
  }

  ngOnInit() {
  }

  closeTypewriter() {
    this.location.back();
  };

}
