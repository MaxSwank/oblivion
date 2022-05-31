import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-window-dialog',
  templateUrl: './window-dialog.component.html',
  styleUrls: ['./window-dialog.component.scss']
})
export class WindowDialogComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  closeTypewriter() {
    this.location.back();
  };

}
