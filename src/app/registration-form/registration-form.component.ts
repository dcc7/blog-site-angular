import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  signupForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() {
    
  }
}
