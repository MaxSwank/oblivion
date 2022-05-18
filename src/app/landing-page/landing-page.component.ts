import { Component, OnInit } from '@angular/core';
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

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  enterCafe() {
    this.cafeZoom = !this.cafeZoom;
    setTimeout(() => {
      this._router.navigate(['/cafe']);
    }, 1500);
  }

  bangsLeft() {
    this.hoverLeft = !this.hoverLeft;
  }

  bangsRight() {
    this.hoverRight = !this.hoverRight;
  }

  bangsCenter() {
    this.hoverCenter = !this.hoverCenter;
  }
}
