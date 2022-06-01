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

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string; // the response message to show to the user

  constructor(private location: Location, private formBuilder: FormBuilder, public httpClient: HttpClient) {
    /* this.typewriterForm = fb.group({
      'message': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'addToMailingList': new FormControl('')
    }) */
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit() {
  }

  closeTypewriter() {
    this.location.back();
  };

  onSubmit() {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("name", this.form.get("name").value);
      formData.append("email", this.form.get("email").value);
      formData.append("message", this.form.get("message").value) + (this.form.value['addToMailingList'] == true ? ' Please also add me to the mailing list!' : '');
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.httpClient.post("https://script.google.com/macros/s/AKfycbz6wN0cm95LoSXdqzSiZEH1Xfdr3_LNWUwx1qgzmw/exec", formData).subscribe(
        (response: any) => {
          console.log(response);
          // choose the response message
          if (response["result"] == "success") {
            this.responseMessage = "Thanks for the message! I'll get back to you soon!";
          } else {
            this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
          }
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
  }

  /* onSubmit() {
    const formData = {
      "name": this.typewriterForm.value['name'],
      "email": this.typewriterForm.value['email'],
      "message": this.typewriterForm.value['message'] + (this.typewriterForm.value['addToMailingList'] == true ? ' Please also add me to the mailing list!' : ''),
      "_url": "https://www.oblivion.cafe",
      "_subject": "Oblivion Contest Submission"
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
  } */
}
