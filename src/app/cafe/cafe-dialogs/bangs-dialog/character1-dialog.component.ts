import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-character1-dialog',
  templateUrl: './character1-dialog.component.html',
  styleUrls: ['./character1-dialog.component.scss']
})
export class Character1DialogComponent implements OnInit {
  infoVisible: boolean = false;

  slides = [
    {
      quote: 'It always seems impossible until it\'s done.',
      author: 'Nelson Mandela',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, asd asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf consectetur adipisicing elit. Illo eaque nihil ab qui voluptates',
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
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  addToMailingList: FormControl = new FormControl("");
  misplacedAuthor: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  honeypot: FormControl = new FormControl("");
  submitted: boolean = false;
  isLoading: boolean = false;
  responseMessage: string;

  constructor(private location: Location, private formBuilder: FormBuilder, public httpClient: HttpClient, private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('John Kendrick Bangs');
    this.metaService.updateTag({ name: 'description', content: 'Tell the maître d’ about an imposter — Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:title', content: 'Tell the maître d’ about an imposter — Oblivion by Robin Hemley' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.oblivion.cafe/assets/img/bangs-pod-color.png' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.oblivion.cafe/cafe/john_kendrick_bangs' });
    this.metaService.updateTag({ property: 'og:image:width', content: '569' });
    this.metaService.updateTag({ property: 'og:image:height', content: '1292' });
    
    this.form = this.formBuilder.group({
      name: this.name,
      addToMailingList: this.addToMailingList,
      misplacedAuthor: this.misplacedAuthor,
      email: this.email,
      honeypot: this.honeypot
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("Name", this.form.get("name").value);
      formData.append("Email", this.form.get("email").value);
      formData.append("Message", '');
      formData.append("Contest", '');
      formData.append("Misplaced Author", this.form.get("misplacedAuthor").value);
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

  showInfo() {
    this.infoVisible = !this.infoVisible;
  }
}
