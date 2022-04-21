import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreorderDialogComponent } from 'src/app/dialogs/preorder-dialog/preorder-dialog.component';

@Component({
  selector: 'app-author-quotes',
  templateUrl: './author-quotes.component.html',
  styleUrls: ['./author-quotes.component.scss']
})
export class AuthorQuotesComponent implements OnInit {
  words = [
    {
      quote: 'It always seems impossible until it\'s done.',
      author: 'Nelson Mandela',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo eaque nihil ab qui voluptates',
      author: 'Author',
    },
    {
      quote: 'test 3.',
      author: 'Author',
    },
    {
      quote: 'test 4.',
      author: 'Author',
    },
    {
      quote: 'test 5.',
      author: 'Author',
    },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPreorderDialog() {
    const dialogRef = this.dialog.open(PreorderDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
