import { Component } from '@angular/core';
import { UserAPIType, UserType } from '../user.types';
import { UserCardComponent } from "../user-card/user-card.component";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  constructor() {
    this.getAPIUsers()
  }

  isUsersListOpened: boolean = true;

  users: UserType[] = [
    { name: 'Igor', age: 25 },
    { name: 'Alex', age: 24 },
    { name: 'Max', age: 18 },
  ];

  apiUsers: UserAPIType[] = [];

  usersVariations = ["local", "api"];
  currentUsersVariation = this.usersVariations.at(0);

  changeCurrentUsersVariation(variation: string) {
    this.currentUsersVariation = variation;
  }

  async getAPIUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const apiUsers = await response.json();

    console.log(apiUsers, "apiUsers");

    this.apiUsers = apiUsers;
  }

  toggleUsersListOpened() {
    this.isUsersListOpened = !this.isUsersListOpened;
  }
}
