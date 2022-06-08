import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  cafeZoom: boolean = true;
  hoverLeft: boolean = true;
  hoverRight: boolean = true;
  hoverCenter: boolean = true;

  constructor(private _router: Router, private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Oblivion Cafe');
    this.metaService.updateTag({ name: 'description', content: 'Oblivion Cafe' });
    this.metaService.updateTag({ property: 'og:title', content: 'Oblivion Cafe' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.oblivion.cafe/assets/img/BookCover.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.oblivion.cafe' });
    this.metaService.updateTag({ property: 'og:image:width', content: '975' });
    this.metaService.updateTag({ property: 'og:image:width', content: '1572' });
  }

  ngOnInit(): void {
  }

  enterCafe() {
    // this.cafeZoom = !this.cafeZoom;
    setTimeout(() => {
      this._router.navigate(['/cafe']);
    }, 0);
  }

  bangsLeft() {
    this.hoverLeft = !this.hoverLeft;
    this.hoverRight = false;
    this.hoverCenter = false;
  }

  bangsRight() {
    this.hoverRight = !this.hoverRight;
    this.hoverLeft = false;
    this.hoverCenter = false;
  }

  bangsCenter() {
    this.hoverCenter = !this.hoverCenter;
    this.hoverLeft = false;
    this.hoverRight = false;    
  }
}
