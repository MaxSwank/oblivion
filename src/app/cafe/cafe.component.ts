import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss'],
})
export class CafeComponent implements OnInit {
  @ViewChild('cafecontainer') cafeContainer: ElementRef;

  ngOnInit() { 
    setTimeout(() =>  this.cafeContainer.nativeElement.scrollLeft += 500, 300);
  }
}
