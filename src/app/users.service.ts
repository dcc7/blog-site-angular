import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users: {email: string, password: string}[] = [
    {email: 'test@test.com.au', password: "testing"},
    {email: 'dan@test.com.au', password: 'danning'},
  ];


  addUser(email: string, password: string){
    const userObj = {email: email, password: password};
    this.users.push(userObj);
  }

  getUsers() {
    return this.users;
  }

  deleteUser(email: string){
    this.users = this.users.filter((user) => {
      return user.email !== email;
    })
  }
}
