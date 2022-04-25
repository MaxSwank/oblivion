import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter-dialog',
  templateUrl: './typewriter-dialog.component.html',
  styleUrls: ['./typewriter-dialog.component.scss']
})
export class TypewriterDialogComponent implements OnInit {
  prompt = 'A writing prompt...'

  constructor() { }

  ngOnInit(): void {
  }

}
