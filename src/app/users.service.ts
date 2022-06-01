import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users: {id: number, email: string, password: string}[] = [
    {id: 1, email: 'test1@test.com.au', password: "testing1"},
    {id: 2, email: 'test2@test.com.au', password: "testing2"},
    {id: 3, email: 'test3@test.com.au', password: "testing3"},
    {id: 4, email: 'test4@test.com.au', password: "testing4"},
    {id: 5, email: 'test5@test.com.au', password: "testing5"},
  ];


  addUser(email: string, password: string){
    const id = this.users[this.users.length - 1].id + 1;
    const userObj = {id: id, email: email, password: password};
    this.users.push(userObj);
  }

  getUsers() {
    return this.users;
  }

  deleteUser(id: number){
    this.users = this.users.filter((user) => {
      return user.id !== id;
    })
  }
}
