import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 0;

  increase() {
    this.counter = this.counter + 1;
  }

  decrease() {
    this.counter = this.counter - 1;
  }
}
