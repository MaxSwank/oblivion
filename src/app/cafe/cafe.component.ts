import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArbiterDialogComponent } from './cafe-dialogs/arbiter-dialog/arbiter-dialog.component';
import { Character1DialogComponent } from './cafe-dialogs/character1-dialog/character1-dialog.component';
import { Character2DialogComponent } from './cafe-dialogs/character2-dialog/character2-dialog.component';
import { Character3DialogComponent } from './cafe-dialogs/character3-dialog/character3-dialog.component';
import { Character4DialogComponent } from './cafe-dialogs/character4-dialog/character4-dialog.component';
import { Character5DialogComponent } from './cafe-dialogs/character5-dialog/character5-dialog.component';
import { Character6DialogComponent } from './cafe-dialogs/character6-dialog/character6-dialog.component';
import { TypewriterDialogComponent } from './cafe-dialogs/typewriter-dialog/typewriter-dialog.component';
import { WallDialogComponent } from './cafe-dialogs/wall-dialog/wall-dialog.component';
import { WindowDialogComponent } from './cafe-dialogs/window-dialog/window-dialog.component';


@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss'],
})
export class CafeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openTypewriterDialog() {
    const dialogRef = this.dialog.open(TypewriterDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openWindowDialog() {
    const dialogRef = this.dialog.open(WindowDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openWallDialog() {
    const dialogRef = this.dialog.open(WallDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCharacter1Dialog() {
    const dialogRef = this.dialog.open(Character1DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCharacter2Dialog() {
    const dialogRef = this.dialog.open(Character2DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCharacter3Dialog() {
    const dialogRef = this.dialog.open(Character3DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCharacter4Dialog() {
    const dialogRef = this.dialog.open(Character4DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCharacter5Dialog() {
    const dialogRef = this.dialog.open(Character5DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCharacter6Dialog() {
    const dialogRef = this.dialog.open(Character6DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openArbiterDialog() {
    const dialogRef = this.dialog.open(ArbiterDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
