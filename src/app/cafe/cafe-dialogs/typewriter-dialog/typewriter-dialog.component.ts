import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-typewriter-dialog',
  templateUrl: './typewriter-dialog.component.html',
  styleUrls: ['./typewriter-dialog.component.scss']
})
export class TypewriterDialogComponent implements OnInit {

  typewriterForm: FormGroup;

  constructor(private location: Location, private fb: FormBuilder) {
    this.typewriterForm = fb.group({
      'submission': new FormControl('', Validators.required),
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
}
