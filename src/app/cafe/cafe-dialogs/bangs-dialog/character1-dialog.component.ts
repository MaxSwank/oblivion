import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character1-dialog',
  templateUrl: './character1-dialog.component.html',
  styleUrls: ['./character1-dialog.component.scss']
})
export class Character1DialogComponent implements OnInit {

  bangsForm: FormGroup;

  constructor(private location: Location, private fb: FormBuilder, public httpClient: HttpClient) {
    this.bangsForm = fb.group({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'misplacedAuthor': new FormControl('', Validators.required),
      'addToMailingList': new FormControl('')
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    const formData = {
      "name": this.bangsForm.value['name'],
      "email": this.bangsForm.value['email'],
      "message": 'Selected author: ' + this.bangsForm.value['misplacedAuthor'] + (this.bangsForm.value['addToMailingList'] == true ? ' Please also add me to the mailing list!' : ''),
      "_url": "https://www.oblivion.cafe",
      "_subject": "Misplaced Author Selection"
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.httpClient.post('https://formsubmit.co/457bcf42af5ec0b2de887fc89f30b371', formData, httpOptions)
      .subscribe((response) => {
        console.log("Response:", response);
        this.location.back();
      }, (error) => {
        console.log("Error:", error);
        this.location.back();
      });
  }

}
