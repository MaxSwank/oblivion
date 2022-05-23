import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reviews-dialog',
  templateUrl: './reviews-dialog.component.html',
  styleUrls: ['./reviews-dialog.component.scss']
})
export class ReviewsDialogComponent implements OnInit {

  constructor(private _router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  closeBlurbs() {
    this.location.back();
  };
}


