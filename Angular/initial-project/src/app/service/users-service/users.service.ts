import { Injectable } from '@angular/core';
import { UserAPIType, UserType } from '../../user/user.types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }

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

}
