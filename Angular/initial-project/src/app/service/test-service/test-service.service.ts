import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  counter: number = 0;

  increase() {
    this.counter = this.counter + 1;
  }

  decrease() {
    this.counter = this.counter - 1;
  }
}
