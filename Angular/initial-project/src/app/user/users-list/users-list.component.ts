import { Component } from '@angular/core';
import { UserAPIType, UserType } from '../user.types';
import { UserCardComponent } from "../user-card/user-card.component";
import { UsersService } from '../../service/users-service/users.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  constructor(public usersService: UsersService) {
    this.usersService.getAPIUsers();
  }

  isUsersListOpened: boolean = true;

  toggleUsersListOpened() {
    this.isUsersListOpened = !this.isUsersListOpened;
  }
}
