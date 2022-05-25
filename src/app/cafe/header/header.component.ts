import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PreorderDialogComponent } from 'src/app/dialogs/preorder-dialog/preorder-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  openPreorderDialog() {
    const dialogRef = this.dialog.open(PreorderDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  routeToPreorder() {
    console.log(this.router.url);
    this.router.navigate([this.router.url + "/preorder"]);
  }

}
