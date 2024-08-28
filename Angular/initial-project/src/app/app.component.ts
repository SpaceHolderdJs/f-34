import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { UserCardComponent } from './user/user-card/user-card.component';
import { UserType } from './user/user.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CounterComponent, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Dashboard';

  changeTitle() {
    this.title = 'Updated title';
  }
}
