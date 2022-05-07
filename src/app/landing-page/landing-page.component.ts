import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  cafeZoom: boolean = true;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  enterCafe() {
    this.cafeZoom = !this.cafeZoom;
    setTimeout(() => {
      this._router.navigate(['/cafe']);
    }, 1500);
  }

}
