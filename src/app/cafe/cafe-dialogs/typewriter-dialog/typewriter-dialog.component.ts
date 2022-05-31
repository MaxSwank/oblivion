import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-typewriter-dialog',
  templateUrl: './typewriter-dialog.component.html',
  styleUrls: ['./typewriter-dialog.component.scss']
})
export class TypewriterDialogComponent implements OnInit {

  typewriterForm: FormGroup;

  constructor(private location: Location, private fb: FormBuilder, public httpClient: HttpClient) {
    this.typewriterForm = fb.group({
      'message': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'addToMailingList': new FormControl('')
    })
  }

  ngOnInit() {
  }

  closeTypewriter() {
    this.location.back();
  };

  onSubmit() {
    const formData = { "name": this.typewriterForm.value['name'], 
                       "email": this.typewriterForm.value['email'], 
                       "message": this.typewriterForm.value['message'] + (this.typewriterForm.value['addToMailingList'].length > 0 ? ' Please add me to the mailing list!' : '') };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.httpClient.post('https://formsubmit.co/457bcf42af5ec0b2de887fc89f30b371', formData, httpOptions)
      .subscribe(
        (response) => console.log("Response:", response), (error) => console.log("Error:", error));
  }
}
