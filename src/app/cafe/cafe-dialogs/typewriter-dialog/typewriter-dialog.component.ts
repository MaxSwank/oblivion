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
  addToMailingList: FormControl = new FormControl("");
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl("");
  submitted: boolean = false;
  isLoading: boolean = false;
  responseMessage: string;

  constructor(private location: Location, private formBuilder: FormBuilder, public httpClient: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      addToMailingList: this.addToMailingList,
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
      formData.append("Name", this.form.get("name").value);
      formData.append("Email", this.form.get("email").value);
      formData.append("Message", this.form.get("message").value) + (this.form.value['addToMailingList'] == true ? ' Please also add me to the mailing list!' : '');
      formData.append("Contest", 'True');
      formData.append("Misplaced Author", '');
      formData.append("Add To Mailing List", this.form.value['addToMailingList'] == true ? 'True' : '');
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.httpClient.post("https://script.google.com/macros/s/AKfycbz6wN0cm95LoSXdqzSiZEH1Xfdr3_LNWUwx1qgzmw/exec", formData).subscribe(
        (response: any) => {
          // choose the response message
          if (response["result"] == "success") {
            this.responseMessage = "Thank you for your submission!";
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
}
