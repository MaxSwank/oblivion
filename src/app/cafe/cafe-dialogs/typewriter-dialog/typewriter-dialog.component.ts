import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-typewriter-dialog',
  templateUrl: './typewriter-dialog.component.html',
  styleUrls: ['./typewriter-dialog.component.scss']
})
export class TypewriterDialogComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  closeTypewriter() {
    this.location.back();
  };
}
