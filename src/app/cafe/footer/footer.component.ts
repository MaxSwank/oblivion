import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  infoVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showInfo() {
    this.infoVisible = !this.infoVisible;
  }

}
