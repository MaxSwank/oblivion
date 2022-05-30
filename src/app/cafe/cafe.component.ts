import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss'],
})
export class CafeComponent implements OnInit {
  @ViewChild('cafecontainer') cafeContainer: ElementRef;

  constructor(public dialog: MatDialog) { }

  ngOnInit() { 
    setTimeout(() =>  this.cafeContainer.nativeElement.scrollLeft += 500, 400);
  }
}
