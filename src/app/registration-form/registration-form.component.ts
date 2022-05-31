import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  signupForm: FormGroup;
  users: any;
  @ViewChild('cards') card?: ElementRef; 
  get email() { return this.signupForm.get('email'); }

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    })

    this.users = this.userService.getUsers();

    setInterval(() => {
      this.users = this.userService.getUsers();
    }, 500);

  }


  onSubmit() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    
    this.userService.addUser(email, password);
  }

  deleteUser(email: string) {
    this.userService.deleteUser(email);
    this.card?.nativeElement.remove();
  }
}
