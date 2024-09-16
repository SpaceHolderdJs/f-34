import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit {
  constructor(public userService: UserService) { }

  name = "Igor";

  ngOnInit(): void {
    this.userService.helloUser(this.name);
  }
}
