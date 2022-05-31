import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  routeToPreorder() {
    if (this.router.url.includes('/cafe')) {
      this.router.navigate(['/cafe/preorder']);
    } else if (this.router.url.includes('reviews')) {
      this.router.navigate([this.router.url.replace('/reviews', '') + '/preorder']);
    } else {
      this.router.navigate([this.router.url + '/preorder']);
    }

  }

  routeToReviews() {
    if (this.router.url.includes('/cafe')) {
      this.router.navigate(['/cafe/reviews']);
    } else if (this.router.url.includes('/preorder')) {
      this.router.navigate([this.router.url.replace('/preorder', '').replace('/reviews', '') + '/reviews']);
    } else {
      this.router.navigate([this.router.url.replace('/preorder/', '').replace('/reviews', '') + '/reviews']);
    }
  }
}
