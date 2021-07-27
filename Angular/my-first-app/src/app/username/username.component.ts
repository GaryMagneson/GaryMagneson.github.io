import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html'
})
export class UsernameComponent implements OnInit {
  allowNewUser = false;
  userCreationStatus = 'No user was created!';
  userName = '';

  constructor() { }

  ngOnInit(): void {
  }
  onCreateUser(){
    this.userCreationStatus = 'User was created! Name is: ' + this.userName;
    this.userName='';
  }
  onUpdateUserName(event: Event){
    //this.userName=(<HTMLInputElement>event.target).value;
    this.allowNewUser = this.userName != '';
  }
}
