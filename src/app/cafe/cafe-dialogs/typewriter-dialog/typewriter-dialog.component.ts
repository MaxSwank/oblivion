import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Location } from '@angular/common';

@Component({
  selector: 'app-typewriter-dialog',
  templateUrl: './typewriter-dialog.component.html',
  styleUrls: ['./typewriter-dialog.component.scss']
})
export class TypewriterDialogComponent implements OnInit {

  constructor(private _router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  closeTypewriter() {
    this.location.back();
  };

}
